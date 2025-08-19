import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";

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
      <div className="overflow-y-hidden grid justify-center">
        <div>Add reviews</div>
        <input
          type="text"
          placeholder=""
          className=" border border-slate-200 px-2 py-1 rounded-md"
          onChange={(e) => {
            setreviewNote(e.target.value);
          }}
        />
        <button onClick={handleSubmit} className="bg-green-600 px-6 py-1.5">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewEntry;
