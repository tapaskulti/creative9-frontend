import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setAdminView } from "../redux/user/user";
import { Chat } from "@mui/icons-material";
import logo from "../assets/logo.png";
import axios from "axios";
import { useState } from "react";
import { getPayingPrice } from "../redux/art/artSlice";
import ModalComponent from "./Modal";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminView, token, user } = useSelector((state) => state.user);
  const { cartTotalQuantity, cartTotalAmount, cartItems } = useSelector(
    (state) => state.cart
  );

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);

  const handlePay = async () => {
    try {
      dispatch(getPayingPrice({ payingPrice: cartTotalAmount }));
      handleOpen();
      let items = cartItems.map((item) => {
        return {
          price_data: {
            currency: "USD",
            unit_amount: item.price * 100,
            product_data: {
              name: "Art",
              images: [item.image],
            },
          },
          quantity: item.quantity,
        };
      });

      // cartItems.forEach((item) => {
      //   dispatch({
      //     type: "CREATE_ORDER",
      //     payload: {
      //       orderType: "Art",
      //       user: user._id,
      //       art: item,
      //       singlePaymentPrice: item.price,
      //       qty: item.quantity,

      //     }
      //   })
      // })

      localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
      localStorage.setItem("userid", user._id);

      console.log(items, "items");

      // // const response = await axios.post('http://localhost:5001/create-payment-intent-cart', {
      //   const response = await axios.post('https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent-cart', {
      //   line_items: items,
      // })
      // // Redirect to Stripe checkout URL
      // window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      {modalOpen && (
        <ModalComponent
          open={modalOpen}
          handleClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      {/* FOR DESKTOP HEADER */}
      <div className="sticky top-0 z-30 font-sans items-center justify-between hidden px-40 py-3 bg-slate-50 md:flex lg:px-10 left-10 right-10">
        <div className="text-2xl logotext">
          <Link to="/">
            <img src={logo} alt="logo" className="md:w-28 lg:w-32" />
          </Link>
        </div>
        {/* navbar */}
        {/* <div className="flex font-sans tracking-wider space-x-10 bg-gradient-to-t from-[#FF000070] to-[#FF6B002B] px-10 py-2 rounded-full "> */}
        <div className="flex font-sans tracking-wider space-x-5 pl-10 ">
        <NavLink
            className={({ isActive }) => (isActive ? "text-[#ff6a00]" : "")}
            to="/"
          >
            <div className="py-1 cursor-pointer">Home</div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#ff6a00]" : "")}
            to="/About-us"
          >
            <div className="py-1 cursor-pointer">About Us</div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#ff6a00]" : "")}
            to="/Contact-us"
          >
            <div className="py-1 cursor-pointer">Contact Us</div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#ff6a00]" : "")}
            to="/Painting"
          >
            <div className="py-1 cursor-pointer">Painting</div>
          </NavLink>
          <NavLink
            to="/Illustration"
            className={({ isActive }) => (isActive ? "text-[#ff6a00]" : "")}
          >
            <div className="py-1 cursor-pointer">Illustration</div>
          </NavLink>
          {adminView && (
            <NavLink
              to="/Myorder"
              className={({ isActive }) => (isActive ? "text-[#ff6a00]" : "")}
            >
              <div className="py-1 cursor-pointer">My orders</div>
            </NavLink>
          )}

          {token && user?.role === "ADMIN" && (
            <div>
              {!adminView ? (
                <div
                  className="py-1 cursor-pointer"
                  onClick={() => {
                    dispatch(
                      setAdminView({
                        adminView: true,
                      })
                    );
                  }}
                >
                  Switch to Admin
                </div>
              ) : (
                <div
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => {
                    dispatch(
                      setAdminView({
                        adminView: false,
                      })
                    );
                  }}
                >
                  Switch to User
                </div>
              )}
            </div>
          )}
        </div>
        {/* {token && user?.role === "ADMIN" && (
          <div>
            {!adminView ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(
                    setAdminView({
                      adminView: true,
                    })
                  );
                }}
              >
                Switch to Admin
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(
                    setAdminView({
                      adminView: false,
                    })
                  );
                }}
              >
                Switch to User
              </div>
            )}
          </div>
        )} */}

        {/* Auth buttons */}
        {!token ? (
          <div className="z-10 flex space-x-6 font-sans tracking-wider">
            <Link to="/signup">
              <div className="border-2 text-[#FF6B00] border-[#FF6B00] font-semibold rounded-full px-6 py-1 cursor-pointer hover:bg-[#FF6B00] hover:text-white">
                Signup
              </div>
            </Link>
            <Link to="/login">
              <div className="bg-gradient-to-t from-[#FF6B00] to-[#D70000] text-white font-semibold rounded-full px-6 py-1.5 cursor-pointer">
                Login
              </div>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-none space-x-3">
              <button className="btn btn-ghost btn-circle">
                <Link to="/chat">
                  <Chat />
                </Link>
              </button>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {cartTotalQuantity}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {cartTotalQuantity} Items
                    </span>
                    <span className="text-info">
                      Subtotal: USD {cartTotalAmount}
                    </span>
                    <div className="card-actions">
                      <button
                        onClick={handlePay}
                        className="btn btn-primary btn-block"
                      >
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle ">
                  <div className="avatar placeholder">
                    <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                      <span>
                        {user?.name?.split(" ")[0].split("")[0] +
                          "" +
                          user?.name?.split(" ")[1].split("")[0]}
                      </span>
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-2 bg-gray-100 shadow-lg rounded-box w-52"
                >
                  <li className="border-b border-slate-300 py-2">
                    <a className="justify-between">Profile</a>
                  </li>
                  {/* <li>
                    <a>Settings</a>
                  </li> */}
                  <li
                    onClick={() => {
                      dispatch({
                        type: "LOGOUT",
                        payload: {
                          email: localStorage.getItem("email"),
                          navigate,
                        },
                      });
                    }}
                    className="py-2"
                  >
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* create a drawer */}
          </>
        )}
      </div>

      {/* FOR MOBILE HEADER */}
      <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-2 bg-slate-50 md:hidden lg:px-10 left-10 right-10">
        <div className="drawer w-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
              </div>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>

            {/***************************** HAMBURGER MENU HERE ************************************/}
            <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* navbar */}
              <div className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-600 font-semibold" : ""
                  }
                  to="/Painting"
                >
                  <div className="px-3 py-1">Painting</div>
                </NavLink>
                <NavLink
                  to="/Illustration"
                  className={({ isActive }) =>
                    isActive ? "text-orange-600 font-semibold" : ""
                  }
                >
                  <div className="px-3 py-1">Illustration</div>
                </NavLink>
                {adminView && (
                  <NavLink
                    to="/Myorder"
                    className={({ isActive }) =>
                      isActive ? "px-3 py-1 text-orange-600 font-semibold" : ""
                    }
                  >
                    <div className="px-3 py-1">My orders</div>
                  </NavLink>
                )}
              </div>

              {/* Auth buttons */}
              {!token ? (
                <div className="">
                  <Link
                    to="/signup"
                    className={({ isActive }) =>
                      isActive ? "text-orange-600 font-semibold" : ""
                    }
                  >
                    <div className="px-3 py-1">Signup</div>
                  </Link>
                  <Link
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-orange-600 font-semibold" : ""
                    }
                  >
                    <div className="px-3 py-1">Login</div>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex space-x-3">
                    {/* <button className="btn btn-ghost btn-circle">
                        <Link to="/chat">
                          <Chat />
                        </Link>
                      </button> */}
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="badge badge-sm indicator-item">
                            {cartTotalQuantity}
                          </span>
                        </div>
                      </label>
                      <div
                        tabIndex={0}
                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                      >
                        <div className="card-body">
                          <span className="text-lg font-bold">
                            {cartTotalQuantity} Items
                          </span>
                          <span className="text-info">
                            Subtotal: USD {cartTotalAmount}
                          </span>
                          <div className="card-actions">
                            <button className="btn btn-primary btn-block">
                              View cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-ghost btn-circle ">
                        <div className="avatar placeholder">
                          <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
                            <span>
                              {user?.name?.split(" ")[0].split("")[0] +
                                "" +
                                user?.name?.split(" ")[1].split("")[0]}
                            </span>
                          </div>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-gray-100 shadow-lg  rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between">Profile</a>
                        </li>
                        <li>
                          <a>Settings</a>
                        </li>
                        <li
                          onClick={() => {
                            dispatch({
                              type: "LOGOUT",
                              payload: {
                                email: localStorage.getItem("email"),
                                navigate,
                              },
                            });
                          }}
                        >
                          <a>Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* create a drawer */}
                </>
              )}
            </div>
          </div>
        </div>
        {token && user?.role === "ADMIN" && (
          <div>
            {!adminView ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(
                    setAdminView({
                      adminView: true,
                    })
                  );
                }}
              >
                Switch to Admin
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  dispatch(
                    setAdminView({
                      adminView: false,
                    })
                  );
                }}
              >
                Switch to User
              </div>
            )}
          </div>
        )}
        <div className="text-2xl logotext w-32 md:w-28 lg:w-32">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
