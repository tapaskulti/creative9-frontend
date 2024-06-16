/* eslint-disable react/prop-types */
import { ArrowBack, Star } from "@mui/icons-material";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";

import "./ArtDetail.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { addToCart } from "../../redux/cart/cartSlice";
import { getPayingPrice } from "../../redux/art/artSlice";
import ModalComponent from "../../components/Modal";

function ArtDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [review, setReview] = useState("");
  const { artDetail } = useSelector((state) => state.art);
  const { user, artReview } = useSelector((state) => state.user);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);

  useEffect(() => {
    dispatch({
      type: "GET_ART_BY_ID",
      payload: {
        id,
      },
    });
    dispatch({
      type: "GET_ART_REVIEW_BY_ID",
      payload: {
        artId: id,
      },
    });
  }, []);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_REVIEW",
      payload: {
        body: {
          art: id,
          username: user?._id,
          reviewTitle: review,
        },
      },
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://localhost:5001/create-payment-intent', {
      // const response = await axios.post(
      //   "https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent",
      //   {
      //     artId: id,
      //     price: artDetail?.price,
      //     product_type: "Art",
      //     product_image: artDetail?.art[0].secure_url,
      //   }
      // );

      dispatch(getPayingPrice({ payingPrice: artDetail?.price }));
      handleOpen();

      let cartItems = [
        {
          id: artDetail?._id,
          title: artDetail?.title,
          price: artDetail?.price,
          quantity: 1,
          image: artDetail?.art[0].secure_url,
          totalPrice: artDetail?.price,
          year: artDetail?.year,
          artistName: artDetail?.artistName,
          medium: artDetail?.categoryMedium,
          width: artDetail?.width,
          height: artDetail?.height,
        },
      ];

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("userid", user?._id);

      // console.log('Response:', response.data);
      // Redirect to Stripe checkout URL
      // window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  console.log(artDetail, "art details");

  return (
    <div className="overflow-y-hidden">
      {modalOpen && <ModalComponent open={modalOpen} handleClose={()=>{
        setModalOpen(false)
      }} />}

      <div className="py-2">
        <Header />
      </div>

      <div className="pt-5 sm:pt-10 overflow-y-auto h-[90vh]">
        <Link to="/Painting" className="px-10">
          <ArrowBack />
        </Link>
        <div className="px-6 mt-5 sm:flex md:px-10 sm:space-x-10">
          {/* <div className="w-5/6 ">
            <ul className="">
              <Carousel className="w-full h-80 ">
                {artDetail?.art &&
                  Object.values(artDetail?.art)?.map((artimage) => {
                    return (
                      <div key={artimage?.public_id}>
                        <img
                          src={artimage?.secure_url}
                          className="rounded-lg w-80"
                        />
                      </div>
                    );
                  })}
              </Carousel>
            </ul>
          </div> */}
          <div className="w-2/3">
            {artDetail?.art && <ArtCarousel arts={artDetail?.art} />}
            {/* rating and review */}
          </div>
          <div className="w-1/2 mt-10 font-sans sm:mt-0">
            <div className="flex items-center space-x-2 text-xl sm:text-2xl bg-slate-300 px-2 py-1 rounded-md text-black">
              <div className="text-base">Artist:</div>
              <div className="text-base font-bold">{artDetail?.artistName}</div>
            </div>
            <div className="px-2 pt-5 space-y-3">
              <div className="flex space-x-2 text-lg">
                <div className="text-stone-700">Title:</div>
                <div className="font-bold">{artDetail?.title}</div>
              </div>
              <div className="flex space-x-2 text-lg max-h-24 overflow-y-auto scrollbar">
                <div className="text-stone-700">About:</div>
                <div className="text-base pt-0.5">{artDetail?.description}</div>
              </div>
            </div>
            <div className="px-2 py-5 md:py-10">
              <div className="flex space-x-2 text-base md:text-lg">
                <div className=" text-stone-700">Medium:</div>
                <div className="font-bold">{artDetail?.categoryMedium}</div>
              </div>
              <div className="flex space-x-2 text-base md:text-lg">
                <div className=" text-stone-700">Size:</div>
                <div className="font-bold">
                  {artDetail?.width} * {artDetail?.height} inches
                </div>
              </div>
              <div className="flex space-x-2 text-base md:text-lg">
                <div className=" text-stone-700">Year:</div>
                <div className="font-bold">{artDetail?.year}</div>
              </div>
            </div>
            <div className="flex px-2 space-x-2 text-xl">
              <div className=" text-stone-700">Price:</div>
              <div className="text-2xl font-semibold text-orange-600 uppercase">
                USD {artDetail?.price}
              </div>
            </div>
            <div className="w-1/2 py-10 mx-auto space-y-6 md:w-1/3">
              <div
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: id,
                      title: artDetail?.title,
                      artistName: artDetail?.artistName,
                      image: artDetail?.art[0]?.secure_url,
                      medium: artDetail?.categoryMedium,
                      width: artDetail?.width,
                      height: artDetail?.height,
                      year: artDetail?.year,
                      price: artDetail?.price,
                      quantity: 1,
                      totalPrice: artDetail?.price,
                    })
                  );
                }}
                className="border border-[#FF6B00] text-lg text-center rounded-full text-[#a04403] hover:bg-[#FF6B00] cursor-pointer hover:text-white px-3 py-0.5 border-gradient-to-r from-[#FF6B00] to-[#D70000] hover:from-[#D70000] hover:to-[#FF6B00]"
              >
                Add to Cart
              </div>
              <div
                onClick={handleCheckout}
                className="bg-gradient-to-r from-[#FF6B00] text-center to-[#D70000] hover:from-[#D70000] hover:to-[#FF6B00] text-lg cursor-pointer px-5 md:px-3 h-8 py-0.5 rounded-full text-white font-bold"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 space-y-5 sm:pt-10 md:px-10">
          <div className="flex items-center space-x-3">
            <div className="font-sans text-xl text-green-600">Ratings: </div>
            <div className="flex">
              <Star className="text-[#f45c02]" />
              <Star className="text-[#f45c02]" />
              <Star className="text-[#f45c02]" />
              <Star className="text-[#f45c02]" />
            </div>
            <div className="text-xl font-semibold">10+</div>
          </div>
          <div>
            <div className="font-sans text-xl border-b border-[#f45c02]">
              Reviews{" "}
            </div>
            <div className="flex">
              <textarea
                className="bg-slate-50 border-stone-200 "
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="text-slate-100 w-9 h-9 bg-slate-700 cursor-pointer"
                onClick={sendMessageHandler}
              />
            </div>
            <div className="px-0 pt-5 space-y-5 font-sans sm:px-10">
              {artReview?.map((singleReview) => {
                console.log("singleReview=====>",singleReview)
                return (
                  <>
                    <ReviewCard
                      date={singleReview?.createdAt}
                      username={singleReview?.username?.name}
                      review={singleReview?.reviewTitle}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtDetailsPage;

export const ReviewCard = ({ date, username, review }) => {
  return (
    <div className="px-5 py-3 border rounded-md shadow-sm bg-slate-50 border-stone-200">
      <div className="flex space-x-20 border-b border-stone-300">
        <div className="text-base sm:text-base text-stone-800">
          Username:{username}
        </div>
        <div className="text-base sm:text-base text-stone-800">
          Date & Time:{date}
        </div>
      </div>
      <div className="py-3 text-base sm:text-lg font-normal">{review}</div>
    </div>
  );
};

export const ArtCarousel = ({ arts }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <div className="flex ">
      <div className="flex-col mt-0 overflow-y-auto scrollbar overflow-x-hidden h-80 pr-2 mr-5">
        {Object.values(arts).map((imageUrl, index) => (
          <div
            key={index}
            className={`w-12 h-12 p-1 border cursor-pointer ${
              selectedImageIndex === index ? "border-orange-500" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={imageUrl?.secure_url}
              alt={`Thumbnail ${index}`}
              className="bg-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 w-full bg-slate-50 px-5">
        <button>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="text-slate-200 w-9 h-9"
          />
        </button>
        <div className="overflow-hidden w-full h-auto sm:h-[36rem]">
          <img
            className="object-cover sm:object-contain h-auto sm:h-full md:h-full w-full"
            src={Object.values(arts)[selectedImageIndex].secure_url}
            alt={`Image ${selectedImageIndex}`}
          />
        </div>
        <button>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="text-slate-500 w-9 h-9"
          />
        </button>
      </div>
    </div>
  );
};
