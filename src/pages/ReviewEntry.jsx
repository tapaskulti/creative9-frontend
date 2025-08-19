import { useState } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function ReviewEntry() {
  const orderId = useParams(); // works for both art & illustration
  const location = useLocation();
  const dispatch = useDispatch();

  // Get query param
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "art"; // default art if no query param

  console.log(orderId, "orderId");

  const [reviewNote, setreviewNote] = useState();

  // const [review, setReview] = useState("");
  const [error, setError] = useState("");

  // const handleSubmit = () => {
  //   dispatch({
  //     type: "CREATE_ART_REVIEWS",
  //     payload: {
  //       orderId: orderId.orderid,
  //       reviewTitle: reviewNote
  //     }
  //   });
  // };

  // const reviewhandleSubmit = (e) => {
  //   e.preventDefault();
  //   if (reviewNote.trim().length < 16) {
  //     setError("Review must be at least 16 characters.");
  //     return;
  //   }
  //   setError("");
  // };

  const reviewhandleSubmit = (e) => {
    e.preventDefault();

    if (reviewNote.trim().length < 16) {
      setError("Review must be at least 16 characters.");
      return;
    }
    setError("");

    // Dispatch depending on type
    if (type === "illustration") {
      dispatch({
        type: "CREATE_ILLUSTRATION_REVIEWS",
        payload: {
          orderId: orderId.orderid,
          reviewTitle: reviewNote
        }
      });
    } else {
      dispatch({
        type: "CREATE_ART_REVIEWS",
        payload: {
          orderId: orderId.orderid,
          reviewTitle: reviewNote
        }
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="overflow-y-hidden grid justify-center my-20">
        <h2 className="text-base font-medium text-left">
          Add Reviews ({type})
        </h2>
        <form onSubmit={reviewhandleSubmit}>
          <textarea
            name="review"
            value={reviewNote}
            // minLength={16}
            // required
            placeholder="Please write your reviews"
            className="w-96 h-40 border border-slate-200 px-2 py-1 rounded-md focus:outline-none my-2"
            onChange={(e) => {
              setreviewNote(e.target.value);
            }}
          ></textarea>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          <div>
            <button
              type="submit"
              // onClick={handleSubmit}
              className="bg-green-600 px-10 py-1.5 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ReviewEntry;
