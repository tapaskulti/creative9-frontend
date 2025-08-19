import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";

function ReviewEntry() {
  const orderId = useParams();
  const dispatch = useDispatch();

  console.log(orderId, "orderId");

  const [reviewNote, setreviewNote] = useState();

  const handleSubmit = () => {
    dispatch({
      type: "CREATE_ART_REVIEWS",
      payload: {
        orderId: orderId.orderid,
        reviewTitle: reviewNote
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="overflow-y-hidden grid justify-center my-20">
        <h2 className="text-base font-medium text-left">Add Reviews</h2>
        <div className="">
          <textarea
            type="textarea"
            placeholder="Please write your reviews"
            className="w-96 h-40 border border-slate-200 px-2 py-1 rounded-md focus:outline-none my-2"
            onChange={(e) => {
              setreviewNote(e.target.value);
            }}
          />
          <div>
            <button
              onClick={handleSubmit}
              className="bg-green-600 px-10 py-1.5 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReviewEntry;
