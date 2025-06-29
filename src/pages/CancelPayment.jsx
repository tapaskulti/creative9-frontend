import React from "react";
import { useNavigate } from "react-router-dom";

const CancelPayment = () => {
  const navigate = useNavigate();
  return (
    <div className="py-52">
      <h1 className="text-center font-bold font-sans leading-snug text-red-600 text-2xl flex justify-center">
        Your Payment is Cancelled
      </h1>
      <button
        onClick={() => navigate("/Painting")}
        className="bg-[#0363af] rounded-md hover:bg-[#0363af]/80 text-white flex justify-center px-2 py-2 text-center mx-auto mt-10"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CancelPayment;
