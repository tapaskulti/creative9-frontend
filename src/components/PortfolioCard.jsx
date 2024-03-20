/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PortfolioCardImg from "../assets/portfolioCardImg.jpg";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PortfolioCard = ({ id, pictue, price, path }) => {
  const dispatch = useDispatch();
  const { adminView } = useSelector((state) => state.user);
  const [deleteConfirmationModal, setdeleteConfirmationModal] = useState(false);
  return (
    <>
      {deleteConfirmationModal && (
        <div className="bg-black/50 absolute  h-screen z-10"></div>
      )}
      {/* create a modal for delete and message Are you sure to delete and and a backdrop should be there */}
      {deleteConfirmationModal && (
        <div className="bg-white shadow-2xl absolute w-full md:w-1/2 lg:w-1/3 h-auto z-40 top-1/3 right-52 rounded-md">
          <div className="px-5 py-5 text-2xl border-b-2">Delete Portfolio</div>
          <div className="px-5 py-3 space-y-2">
            <div className="space-y-3">
              <div className="">Are you sure to delete this portfolio?</div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    dispatch({
                        type: "DELETE_PORTFOLIO",
                        payload: {
                          portfolioId: id,
                        },
                      });
                    setdeleteConfirmationModal(false);
                  }}
                  className="px-3 py-1 text-white bg-green-700 rounded-md"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    
                    setdeleteConfirmationModal(false);
                  }}
                  className="px-3 py-1 text-white bg-red-700 rounded-md"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="">
        {adminView && (
          <button
            className="flex justify-end w-full"
            onClick={() => {
              // dispatch({
              //   type: "DELETE_PORTFOLIO",
              //   payload: {
              //     portfolioId: id ,
              //   },
              // });
              setdeleteConfirmationModal(true);
            }}
          >
            <Delete className="text-red-500" />
          </button>
        )}
        <div>
          <img src={pictue} alt="" className="h-auto rounded w-full" />
        </div>
        <div className="flex items-center justify-between mt-2 w-full">
          <div className="text-base font-bold">
            Price: <span className="text-sm text-orange-600">USD</span>{" "}
            <span className="font-semibold text-orange-600">{price}</span>
          </div>
          <Link
            to={path}
            className="px-3 py-1 text-sm text-white bg-green-600 rounded-full md:text-sm"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
