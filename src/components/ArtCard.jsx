/* eslint-disable react/prop-types */
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useState } from "react";
import { addToCart } from "../redux/cart/cartSlice";

function ArtCard({
  artistName,
  image,
  title,
  medium,
  width,
  height,
  year,
  price,
  id,
}) {
  const dispatch = useDispatch();
  const { adminView, token } = useSelector((state) => state.user);

  const [isDelete, setisDelete] = useState(false);

  return (
    <>
      <div className="w-full h-[575px] sm:h-[575px] md:w-80 md:h-[575px] lg:w-72 lg:h-[575px] xl:w-80 xl:h-[575px] 2xl:w-80 2xl:h-[575px] 3xl:w-96 3xl:h-[575px] shadow-lg px-4 py-1 rounded-lg hover:shadow-xl border border-slate-200 relative">
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 py-2">
              <h2 className="text-base">Artist:</h2>
              <div className="font-sans text-base font-bold capitalize">
                {artistName}
              </div>
            </div>
            {!adminView ? (
              <div></div>
            ) : (
              <>
                <div className="mt-2">
                  <button
                    onClick={() => {
                      setisDelete(!isDelete);
                    }}
                    type="button"
                    className="text-center  text-sm cursor-pointer py-1"
                  >
                    <Delete className="text-red-500" />
                  </button>
                </div>
              </>
            )}
          </div>
          {isDelete && (
            <div className="absolute top-0 right-0 bg-white h-32 w-full shadow-xl px-1 py-4">
              <div className="flex flex-col space-y-2">
                <div className="text-sm text-[#D70000] font-semibold">
                  Are you sure you want to delete this art?
                </div>
                <div className="flex space-x-2">
                  <div
                    onClick={() => {
                      setisDelete(false);
                    }}
                    className="px-2 py-1 text-sm rounded-md border border-[#D70000] text-[#D70000] hover:bg-[#D70000] hover:text-white cursor-pointer"
                  >
                    No
                  </div>
                  <div
                    onClick={() => {
                      dispatch({
                        type: "DELETE_ART",
                        payload: {
                          id: id,
                        },
                      });
                      setisDelete(false);
                    }}
                    className="px-2 py-1 text-sm rounded-md bg-gradient-to-r text-white from-[#D70000] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#D70000] cursor-pointer"
                  >
                    Yes
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="">
            <div className="flex justify-center text-center h-80 w-full">
              
                {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-80" /> */}
                <img
                  src={image}
                  className="rounded-lg object-cover w-full h-full"
                />
              
            </div>
            <div className="mt-2 font-bold text-center">
              <Link to={`/Painting/${id}`}><button className="border bg-slate-100 border-slate-300 px-10 py-1 rounded-md">VIEW IN DETAIL</button></Link></div>
            <div className="mt-2 pt-1 font-sans tracking-wider md:pt-1">
              <div className="flex space-x-1">
                <div className="text-stone-500">Title:</div>
                <div>{title}</div>
              </div>
              <div className="">
                <div className="flex items-center space-x-1">
                  <div className="text-stone-500">Medium:</div>
                  <div>{medium}</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-stone-500">Size: </div>
                  <div>{width} * {height} inch</div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="text-stone-500">Year:</div>
                  <div>{year}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-0">
                <div className="text-stone-500">Price:</div>
                <div className="text-xl font-semibold text-orange-600">
                  USD {price}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-1">
            <button
                  onClick={() => {
                    if (!token) {
                      toast.error("Please Login to Buy");
                    }
                  }}
                  className="px-3 py-1.5 btn bg-gradient-to-r text-white from-[#ff974c] to-[#ff4e3e] hover:from-[#D70000] hover:to-[#FF6B00]"
                >
                  <FontAwesomeIcon icon={faMoneyBill} />
                  Buy Now
                </button>
              <button
                onClick={() => {
                  if (!token) {
                    toast.error("Please Login to Buy");
                  } else {
                    dispatch(
                      addToCart({
                        id: id,
                        title: title,
                        artistName: artistName,
                        image: image,
                        medium: medium,
                        width: width,
                        height: height,
                        year: year,
                        price: price,
                        quantity: 1,
                        totalPrice: price,
                      })
                    )
                  }
                }}
                className="px-3 py-1.5 rounded-md bg-gradient-to-r text-white from-[#ff974c] to-[#ff4e3e] hover:from-[#D70000] hover:to-[#FF6B00]"
              >
                <FontAwesomeIcon icon={faCartPlus} className="pr-1.5" />
                Add to Cart
              </button>
            </div>
          </div>
          {/* <img src={image} className="border rounded-lg" /> */}
          <div className="relative pt-2 bottom-2 md:pt-3">
            {!adminView ? (
              <div className="flex justify-between">
                {/* <div className="border border-[#FF6B00] text-lg rounded-full text-[#a04403] hover:bg-[#FF6B00] cursor-pointer hover:text-white px-3 py-0.5 border-gradient-to-r from-[#FF6B00] to-[#D70000] hover:from-[#D70000] hover:to-[#FF6B00]">
                Add to cart
              </div> */}
                {/* <div className="bg-gradient-to-r from-[#FF6B00] to-[#D70000] hover:from-[#D70000] hover:to-[#FF6B00] text-lg cursor-pointer px-3 h-8 py-0.5 rounded-full text-white font-bold">
                Buy Now
              </div> */}
                {/* <button
                  onClick={() => {
                    if (!token) {
                      toast.error("Please Login to add to cart");
                    }
                  }}
                  // className="border-2 border-orange-600 btn btn-circle"
                  className="border border-[#FF6B00] text-lg rounded-full text-[#a04403] hover:to-[#FF6B00] px-2 h-9 py-0.5"
                >
                  <FontAwesomeIcon
                    icon={faCartPlus} className="text-sm"
                  />
                </button> */}
                {/* <button
                  onClick={() => {
                    if (!token) {
                      toast.error("Please Login to Buy");
                    }
                  }}
                  className="btn bg-gradient-to-r text-white from-[#ff974c] to-[#ff4e3e] hover:from-[#D70000] hover:to-[#FF6B00]"
                >
                  <FontAwesomeIcon icon={faMoneyBill} />
                  Buy Now
                </button> */}
              </div>
            ) : (
              <>
                {/* create a modal for confirming delete art */}

                <div>
                  <Link
                    to="/Painting/12/update"
                    className="bg-gradient-to-r text-center from-[#FF6B00] to-[#D70000] hover:from-[#D70000] hover:to-[#FF6B00] text-sm cursor-pointer px-5 py-1.5 rounded-full text-white font-semibold"
                  >
                    Update
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtCard;
