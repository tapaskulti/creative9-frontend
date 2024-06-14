import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const BACKEND_URL = "http://localhost:5001/api"
// const BACKEND_URL = "https://hammerhead-app-4du5b.ondigitalocean.app/api"
const PayPalButton = () => {
  const[paid,setPaid] = useState(false)
  console.log("paid===>",paid)

  useEffect(()=>{
    if(paid){
    window.location.href = `http://localhost:5173/success`
    }
  },[paid])

  const { payingPrice } = useSelector((state) => state.art);
  const initialOptions = {
    clientId:import.meta.env.VITE_PAYPAL_CLIENT_ID,     
    currency: "USD",
    intent: "capture",
    };


  async function createOrder() {
    console.log("payingPrice=->", payingPrice);
    return axios
      .post(`${BACKEND_URL}/orders`, {
        price: payingPrice,
      })
      // .then((response) => response.json())
      .then((response) => response.data)
      .then((order) => order.id)
      .catch((err) => {
        console.error("err==>", err);
      });

      
  }

  function onApprove(data) {
    return fetch(`${BACKEND_URL}/orders/${data.orderID}/capture`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((orderData) => {
        // Successful capture!
        setPaid(true)        
        console.log(orderData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onError(error) {
   
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          shape: "rect",
          layout: "vertical",
          color: "gold",
          label: "paypal",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
