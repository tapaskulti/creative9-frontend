import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { ArrowBack } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArtCarousel } from "./ArtDetailsPage";
import axios from "axios";
import {Elements,PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51OFdnTSCz4KZaFaZMZhZE8QOzCkhdmrIwiorwXg1QcxSHjaVt6z5gBEInJA5uFCNI5lKGexExCzn45Fi3wUUOkuP00GtUyHfLX');

function ArtPayment() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { artDetail } = useSelector((state) => state.art);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51OFdnTSCz4KZaFaZr2arvOTZFPNzWRSBo14fcRuSrLRH3fwvDtlMWb1G4Ao40vyBzyWBZsz75TamQxSeSEd7hS5M008QGCl6au',
  };

  

  useEffect(() => {
    dispatch({
      type: "GET_ART_BY_ID",
      payload: {
        id,
      },
    });
  }, []);




 

  const [clientSecret, setClientSecret] = useState("");

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://localhost:5001/create-payment-intent', {
        const response = await axios.post('https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent', {
        artId: id,
        price: artDetail?.price,
        product_type: "Art",
        product_image: artDetail?.art[0].secure_url,
      });

      console.log('Response:', response.data);
      // Redirect to Stripe checkout URL
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };
 

  

  return (
    <div className="w-screen   overflow-y-hidden">
      <div className="py-2">
        <Header />
      </div>
      <div className="pt-5 sm:pt-10 overflow-y-auto h-[90vh] px-10">
        <Link to={`/Painting/${id}`} className="sm:px-10">
          <ArrowBack />
        </Link>
        <div className="flex sm:px-10 space-x-10 mt-2 font-sans">
          <div className="">
            <div className="flex space-x-2 text-base mt-3">
              <div className=" text-stone-700">Title:</div>
              <div className="font-bold">{artDetail?.title}</div>
            </div>
            <div className="my-5">
              {artDetail?.art && <ArtCarousel arts={artDetail?.art} />}
            </div>
            <div className="flex space-x-2 text-base">
              <div className=" text-stone-700">Year:</div>
              <div className="font-bold">{artDetail?.year}</div>
            </div>
            <div className="flex space-x-2 text-base">
              <div className=" text-stone-700">Size:</div>
              <div className="font-bold">
                {artDetail?.width} * {artDetail?.height} inch
              </div>
            </div>
            <div className="flex space-x-2 text-base">
              <div className=" text-stone-700">Price:</div>
              <div className="font-sans text-xl font-semibold text-orange-600">
                INR {artDetail?.price}
              </div>
            </div>
          </div>
          <div>
          <button onClick={handleCheckout}>Checkout</button>

        
              
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtPayment;


