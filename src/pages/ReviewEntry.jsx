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
        reviewTitle: reviewNote,
      },
    });
  };

  return (
    <div>
      <div className="overflow-y-hidden">
        <div>Add reviews</div>
        <input
          type="text"
          placeholder=""
          className=""
          onChange={(e) => {
            setreviewNote(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default ReviewEntry;
