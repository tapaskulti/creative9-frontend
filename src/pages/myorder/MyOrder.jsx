/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  CalendarMonth,
  Email,
  LocationCity,
  People,
  PeopleAlt,
  Person,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function MyOrder() {
  const dispatch = useDispatch();
  const [isPainting, setisPainting] = useState(true);
  const { adminOrdersPaintings, adminOrderIllustrations } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch({
      type: "GET_ALL_ADMIN_PAINTINGS",
    });
    dispatch({
      type: "GET_ALL_ADMIN_ILLUSTRATION",
    });
  }, []);

  console.log(adminOrderIllustrations, "adminOrderIllustrations");

  return (
    <div className="w-screen pt-0">
      <Header />
      <div>
        {/* Buutons */}
        <div className="px-10 py-6">
          <button
            onClick={() => {
              setisPainting(true);
            }}
            className={`btn btn-sm  rounded-r-none ${
              isPainting && "bg-[#d76a1c] text-white hover:bg-[#eb721c]"
            } `}
          >
            Painting
          </button>
          <button
            onClick={() => {
              setisPainting(false);
            }}
            className={`btn btn-sm rounded-l-none ${
              !isPainting && "bg-[#d76a1c] text-white hover:bg-[#eb721c]"
            }`}
          >
            Illustration
          </button>
        </div>

        {isPainting ? (
          <div className="px-10 grid grid-cols-1 xl:grid-cols-2 gap-x-5 h-[80vh] overflow-y-auto">
            {/* Painting orders */}
            {adminOrdersPaintings?.map((painting) => (
              <OrderPaintCard
                key={painting?._id}
                id={painting?._id}
                title={painting?.art?.title}
                isPainting={true}
                printStatus={
                  painting?.painting_delivery_status === "NOT_DELIVERED"
                    ? "Not Deliverd"
                    : painting?.painting_delivery_status === "DELIVERED" &&
                      "Delivered"
                }
                image={painting?.art?.image}
                qty={painting?.qty}
                price={painting?.singlePaymentPrice}
                username={painting?.user?.name}
                useremail={painting?.user?.email}
                isPaintingPaid={painting?.artPaid}
              />
            ))}
          </div>
        ) : (
          <div className="px-10 grid grid-cols-1 xl:grid-cols-2 gap-x-5 h-[80vh] overflow-y-auto">
            {/* Painting orders */}
            {adminOrderIllustrations.map((illustration) => (
              // <OrderPaintCard
              //   title={illustration?.illustration?.title}
              //   username={illustration?.user?.name}
              //   useremail={illustration?.user?.email}
              //   key={illustration?._id}
              //   image={illustration?.illustration?.picture[0]?.secure_url}
              // />
              <div
                key={illustration?._id}
                className="bg-[#f8f7f7] w-full h-min rounded-md hover:shadow-sm px-4 py-3 my-3"
              >
                <div className="flex justify-between items-center">
                  <div>{illustration?.illustration?.title}</div>
                  <div className="flex space-x-3 text-sm">
                    <div className="text-stone-500"> Status:</div>
                    <div>{illustration?.illustration_status}</div>
                  </div>
                </div>
                <div className="py-2 ">
                  {/* image */}
                  <div className="flex space-x-6 ">
                    <img
                      className="w-32 h-32 rounded-md shadow-lg"
                      src={
                        illustration?.illustration &&
                        illustration?.illustration?.picture[0] &&
                        illustration?.illustration?.picture[0]?.secure_url
                      }
                      alt=""
                    />
                    <div className="w-full">
                      <div className="mb-2">
                        <div className="text-sm bg-slate-200 rounded-t-md px-2 py-1 text-black w-full">
                          User Details
                        </div>
                        <div className="px-2 py-2 flex space-x-10 border border-slate-200 rounded-b-md">
                          <div className="flex space-x-2 items-center text-sm">
                            <Person className="text-gray-400 w-6" />
                            <div>{illustration?.user?.name}</div>
                          </div>
                          <div className="flex space-x-2 items-center text-sm">
                            <Email className="text-gray-400 w-6" />
                            <div>{illustration?.user?.email}</div>
                          </div>
                        </div>
                      </div>
                      {illustration?.singlePaymentPrice === "" && (
                        <div>
                          <div className="text-sm border-b-2 text-gray-600 w-full ">
                            Milestones
                          </div>
                          {Object.keys(illustration?.milestone).map((m) => {
                            return (
                              <div key={m} className="flex justify-between">
                                <div className="text-sm py-1 text-gray-400">
                                  {illustration?.milestone[m]["title"]}
                                </div>
                                <div>
                                  {" "}
                                  {illustration?.milestone[m]["price"]}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <div>
                        <div className="text-sm bg-slate-200 rounded-t-md px-2 py-1 text-black w-full ">
                          Transactions
                        </div>
                        <div className="px-2 py-2 flex space-x-10 border border-slate-200 rounded-b-md">
                          <div className="flex space-x-2 items-center text-sm">
                            <LocationCity className="text-gray-400 w-6" />
                            <div>300</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  {illustration?.singlePaymentPrice !== "" && (
                    <div className="flex space-x-1 text-sm font-semibold">
                      <div className="text-gray-500">Price:</div>
                      <div className="flex space-x-2 ">
                        <div>INR {illustration?.singlePaymentPrice}</div>
                        {illustration.illustrationPaid ? (
                          <div className="border-green-500 border w-max px-2 text-xs text-center rounded-md text-green-600">
                            {" "}
                            Paid
                          </div>
                        ) : (
                          <>
                            <div className="flex space-x-2">
                              <div className="border-red-500 border w-max px-2 text-xs text-center rounded-md text-red-600">
                                {" "}
                                Not Paid
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrder;

const OrderPaintCard = ({
  isDelivered,
  image,
  isPainting,
  printStatus,
  illustrationStatus,
  username,
  useremail,
  price,
  title,
  isPaintingPaid,
  id,
  qty,
}) => {
  const dispatch = useDispatch();
  const handleArtPay = async ({ id, price, image }) => {
    try {
      // const response = await axios.post('http://localhost:5001/create-payment-intent', {
      const response = await axios.post(
        "https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent",
        {
          artId: id,
          price: price,
          product_type: "Art",
          product_image: image,
        }
      );

      localStorage.setItem("artId", id);

      console.log("Response:", response);

      // Redirect to Stripe checkout URL
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div className="bg-[#f8f7f7] w-full h-min rounded-md hover:shadow-sm px-4 py-3 my-3">
      <div className="flex justify-between items-center">
        <div>{title}</div>
        {isPainting ? (
          <div className="flex space-x-3 text-sm">
            <div className="text-stone-500">Delivery Status:</div>
            <div>{printStatus}</div>
          </div>
        ) : (
          <div className="flex space-x-3 text-sm">
            <div className="text-stone-500"> Status:</div>
            <div>{illustrationStatus}</div>
          </div>
        )}
      </div>
      <div className="py-2 ">
        {/* image */}
        <div className="flex space-x-6  ">
          <img className="w-32 h-32 rounded-md shadow-lg" src={image} alt="" />
          <div className="w-full">
            <div className="mb-2">
              <div className="text-sm bg-slate-200 rounded-t-md px-2 py-1 text-black">
                User Details
              </div>
              <div className="px-2 py-2 flex space-x-10 border border-slate-200 rounded-b-md">
                <div className="flex space-x-2 items-center text-sm">
                  <Person className="text-gray-400 w-6" />
                  <div>{username}</div>
                </div>
                <div className="flex space-x-2 items-center text-sm">
                  <Email className="text-gray-400 w-6" />
                  <div>{useremail}</div>
                </div>
              </div>
            </div>
            {isPainting ? (
              <div>
                <div className="text-sm bg-slate-200 rounded-t-md px-2 py-1 text-black w-full ">
                  Shipping Details
                </div>
                <div className="px-2 py-2 flex space-x-10 border border-slate-200 rounded-b-md">
                  <div className="flex space-x-2 items-center text-sm">
                    <LocationCity className="text-gray-400 w-6" />
                    <div>Abc Street, kol-700344</div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-sm border-b-2 text-gray-600 w-52 ">
                  Transaction Details
                </div>
                <div className="py-2 flex space-x-10 ">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-4 items-center text-sm">
                    <div className="flex space-x-2 ">
                      <div>Jul 30, 2022</div>
                      <div className="font-semibold">INR 120</div>
                    </div>
                    <div className="flex space-x-2 ">
                      <div>Jul 30, 2022</div>
                      <div className="font-semibold">INR 120</div>
                    </div>
                    <div className="flex space-x-2 ">
                      <div>Jul 30, 2022</div>
                      <div className="font-semibold">INR 120</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between my-3">
        <div className="flex space-x-1 text-sm font-semibold items-center">
          <div className="text-gray-500">Price:</div>
          <div className="flex items-center space-x-2">
            <div>
              INR {price} * {qty} = {price * qty}
            </div>
            {isPaintingPaid ? (
              <div className="border-green-500 border w-max px-2 text-xs text-center rounded-md text-green-600">
                {" "}
                Paid
              </div>
            ) : (
              <>
                <div className="flex space-x-2">
                  <div className="border-red-500 border w-max px-2 text-xs text-center rounded-md text-red-600">
                    {" "}
                    Not Paid
                  </div>
                  <div
                    className="cursor-pointer hover:text-teal-500"
                    onClick={() =>
                      handleArtPay({
                        id: id,
                        price: price,
                        image: image,
                      })
                    }
                  >
                    Pay Now
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* {isPainting && (
          <button className="btn btn-sm  rounded-md bg-[#159d23] text-white hover:bg-[#0e6d37]">
            Deliver
          </button>
        )} */}
      </div>
    </div>
  );
};
