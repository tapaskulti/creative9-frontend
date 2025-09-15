import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart, CreditCard, Trash2, Package } from "lucide-react";

const CartPage = () => {
  // const dispatch = useDispatch();
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );

  const [selectedItems, setSelectedItems] = useState(new Set());
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  const YOUR_PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  // Load PayPal SDK
  useEffect(() => {
    const loadPayPalScript = () => {
      if (window.paypal) {
        setPaypalLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${YOUR_PAYPAL_CLIENT_ID}&currency=USD`;
      script.async = true;
      script.onload = () => setPaypalLoaded(true);
      script.onerror = () => console.error("PayPal SDK failed to load");
      document.body.appendChild(script);
    };

    loadPayPalScript();

    return () => {
      // Cleanup script if component unmounts
      const scripts = document.querySelectorAll('script[src*="paypal.com"]');
      scripts.forEach((script) => script.remove());
    };
  }, []);

  const removeItem = (itemId) => {
    // dispatch(removeFromCart(itemId));

    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
  };

  const toggleItemSelection = (itemId) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const getSelectedTotal = () => {
    return cartItems
      .filter((item) => selectedItems.has(item.id))
      .reduce((sum, item) => sum + item.price, 0);
  };

  const createPayPalButtons = (amount, type, itemId = null) => {
    if (!window.paypal || !paypalLoaded) {
      return null;
    }

    const paypalButtonId = `paypal-button-${type}${itemId ? `-${itemId}` : ""}`;

    // Clear existing PayPal button
    setTimeout(() => {
      const existingButton = document.getElementById(paypalButtonId);
      if (existingButton) {
        existingButton.innerHTML = "";

        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toString()
                    },
                    description:
                      type === "individual"
                        ? `Artwork: ${
                            cartItems.find((i) => i.id === itemId)?.title
                          }`
                        : type === "selected"
                        ? "Selected Artworks"
                        : "All Cart Items"
                  }
                ]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                console.log("Payment successful:", details);
                alert(`Payment successful! Transaction ID: ${details.id}`);

                // Handle post-payment logic here
                if (type === "individual") {
                  // Remove individual item from cart
                  removeItem(itemId);
                } else if (type === "selected") {
                  // Remove selected items from cart
                  selectedItems.forEach((id) => removeItem(id));
                  setSelectedItems(new Set());
                } else if (type === "all") {
                  // Clear entire cart
                  // dispatch(clearCart());
                }
              });
            },
            onError: (error) => {
              console.error("PayPal payment error:", error);
              alert("Payment failed. Please try again.");
            },
            onCancel: (data) => {
              console.log("Payment cancelled:", data);
              alert("Payment was cancelled.");
            }
          })
          .render(`#${paypalButtonId}`);
      }
    }, 100);

    return paypalButtonId;
  };

  // eslint-disable-next-line react/prop-types
  const PayPalButton = ({ amount, type, itemId = null, className = "" }) => {
    const buttonId = `paypal-button-${type}${itemId ? `-${itemId}` : ""}`;

    useEffect(() => {
      if (paypalLoaded) {
        createPayPalButtons(amount, type, itemId);
      }
    }, [paypalLoaded, amount, type, itemId]);

    if (!paypalLoaded) {
      return (
        <button
          className={`${className} opacity-50 cursor-not-allowed`}
          disabled
        >
          <CreditCard className="h-4 w-4" />
          Loading PayPal...
        </button>
      );
    }

    return <div id={buttonId} className={className}></div>;
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <Package className="mx-auto h-16 w-16 text-blue-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500">
              Add some beautiful artworks to get started!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          </div>
          <p className="text-gray-600">
            {cartTotalQuantity} {cartTotalQuantity === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex gap-6">
                    {/* Checkbox */}
                    <div className="flex items-start pt-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.id)}
                        onChange={() => toggleItemSelection(item.id)}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-xl border-2 border-blue-100"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-600 font-medium mb-2">
                            by {item.artistName}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="bg-blue-50 px-3 py-1 rounded-full">
                              {item.medium}
                            </span>
                            <span>
                              {item.width} × {item.height}
                            </span>
                            <span>{item.year}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="text-right ml-auto">
                          <div className="text-2xl font-bold text-blue-600">
                            ${item.price}
                          </div>
                        </div>
                      </div>

                      {/* Individual PayPal Button */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="w-full">
                          <p className="text-sm text-gray-600 mb-2">
                            Pay ${item.price} with PayPal:
                          </p>
                          <PayPalButton
                            amount={item.price}
                            type="individual"
                            itemId={item.id}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({cartTotalQuantity})</span>
                  <span>${cartTotalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-blue-600">${cartTotalAmount}</span>
                  </div>
                </div>
              </div>

              {/* PayPal Payment Options */}
              <div className="space-y-4">
                {selectedItems.size > 0 && (
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Pay for Selected Items (${getSelectedTotal()}):
                    </p>
                    <PayPalButton
                      amount={getSelectedTotal()}
                      type="selected"
                      className="w-full"
                    />
                  </div>
                )}

                <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-100">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Pay for All Items (${cartTotalAmount}):
                  </p>
                  <PayPalButton
                    amount={cartTotalAmount}
                    type="all"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Secure PayPal Payment
                  </span>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  Your payment information is encrypted and secure through
                  PayPal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
