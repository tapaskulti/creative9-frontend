import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      cartItems.forEach((item) => {
        dispatch({
          type: "CREATE_ORDER",
          payload: {
            body: {
              orderType: "Art",
              user: localStorage.getItem("userid"),
              art: item,
              singlePaymentPrice: item.price,
              qty: item.quantity,
              artPaid: true,
            },
          },
        });
      });
      localStorage.removeItem("cartItems");
      localStorage.removeItem("userid");
    }

    if (localStorage.getItem("offer_single")) {
      const body = {
        ...JSON.parse(localStorage.getItem("offer_single")),
        offer: {
          ...JSON.parse(localStorage.getItem("offer_single")).offer,
          isPaid: true,
          paidTime: moment().format("YYYY-MM-DD HH:mm"),
        },
      };
      dispatch({
        type: "UPDATE_CHAT",
        payload: {
          id: JSON.parse(localStorage.getItem("offer_single"))?._id,
          body,
        },
      });
      localStorage.removeItem("offer_single");
    }

    if (localStorage.getItem("offer_milestone")) {
      const body = {
        ...JSON.parse(localStorage.getItem("offer_milestone")),
        offer: {
          ...JSON.parse(localStorage.getItem("offer_milestone")).offer,
          milestone:{
            ...JSON.parse(localStorage.getItem("offer_milestone")).offer.milestone,
            [localStorage.getItem("milestone_key")]: {
              ...JSON.parse(localStorage.getItem("offer_milestone")).offer.milestone[localStorage.getItem("milestone_key")],
              isPaid: true,
              paidTime: moment().format("YYYY-MM-DD HH:mm"),
            },
          }
        },
      };
         
      dispatch({
        type: "UPDATE_CHAT",
        payload: {
          id: JSON.parse(localStorage.getItem("offer_milestone"))?._id,
          body,
        },
      });

      localStorage.removeItem("milestone_key");
      localStorage.removeItem("offer_milestone");
    }

    if (localStorage.getItem("artId")) {
      dispatch({
        type: "PAID_ART_ORDER",
        payload: {
          id: localStorage.getItem("artId"),
        },
      });
      localStorage.removeItem("artId");
    }

    if (localStorage.getItem("illustrationOrder")) {
      dispatch({
        type: "CREATE_ORDER",
        payload: {
          body: JSON.parse(localStorage.getItem("illustrationOrder")),
        },
      });
      localStorage.removeItem("illustrationOrder");
      localStorage.removeItem("userid");
    }
  }, []);

  return (
    <div className="py-52">
      <h1 className="text-center font-bold leading-snug text-teal-600 text-2xl flex justify-center">
        Your Payment is successful {localStorage.getItem("artId")}
      </h1>
      <h1 className="pt-10 text-center font-normal leading-snug text-black text-lg flex justify-center">
        Thank you for buying our art
      </h1>
      <button
        onClick={() => {
          navigate("/Painting");
        }}
        className="bg-teal-600 hover:bg-teal-700 text-white flex justify-center px-2 py-2 text-center mx-auto mt-10"
      >
        Continue Browsing art
      </button>
    </div>
  );
};

export default SuccessPayment;
