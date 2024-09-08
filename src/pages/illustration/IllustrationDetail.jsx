/* eslint-disable react/prop-types */
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import {
  ArrowBack,
  Check,
  Close,
  Event,
  Repeat,
  Star,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

import "react-quill/dist/quill.snow.css";

import { useDispatch, useSelector } from "react-redux";

import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PayPalButton from "../../components/PaypalButton";
import { getPayingPrice } from "../../redux/art/artSlice";
import ModalComponent from "../../components/Modal";

const IllustrationDetail = () => {
  const dispatch = useDispatch();
  const search = useLocation().search;

  const { id, portfolioid } = useParams();
  const { adminView } = useSelector((state) => state.user);
  const { services } = useSelector((state) => state.category);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  console.log(services, "services");
  console.log(search.split("=")[1], "searchParams");

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    dispatch({
      type: "GET_ALL_SERVICES",
      payload: {
        categoryId: id,
      },
    });
  }, []);

  console.log(services, "services");

  return (
    <>
      <div className="w-screen  h-[100vh]">
        <Header />

        {/* LARGE SCREEN */}
        <div className="hidden md:flex px-5 md:px-10 pt-10 justify-between">
          <Link to="/illustration">
            <ArrowBack className="" />
          </Link>
          <div className="text-3xl font-sans text-center">
            {services[0]?.categoryDetail?.name}
          </div>
          {adminView ? (
            <Link to={`/Illustration/${id}/create`}>
              <div className="bg-teal-700 text-white px-2 py-1 rounded-md hover:bg-teal-800 cursor-pointer">
                Create Illustration
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* SMALL SCREEN */}
        <div className="md:hidden md:flex px-5 md:px-10 pt-10 justify-between">
          <div className="flex space-x-3">
            <Link to="/illustration">
              <ArrowBack className="" />
            </Link>
            <div className="text-2xl md:text-3xl font-sans text-center">
              {services[0]?.categoryDetail?.name}
            </div>
          </div>
          {adminView ? (
            <Link
              to={`/Illustration/${id}/create`}
              className="flex justify-end"
            >
              <div className=" bg-teal-700 text-white px-2 py-1 rounded-md hover:bg-teal-800 cursor-pointer text-center w-40 mt-3">
                Create Illustration
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
        <div className="overflow-y-auto px-2 sm:px-5 md:px-10 h-[70vh]">
          {services.map((service) => (
            <ServiceCard
              key={service?._id}
              service={service}
              type={search.split("=")[1].toLowerCase()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IllustrationDetail;

const ServiceCard = ({ service, type }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedPriceSection, setSelectedPriceSection] = useState(type);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleIllustrationPay = async (service) => {
    try {
      // const response = await axios.post('http://localhost:5001/create-payment-intent', {
      //   // const response = await axios.post('https://hammerhead-app-4du5b.ondigitalocean.app/create-payment-intent', {
      //   i: service._id,
      //   price: selectedPriceSection === "basic" ? service?.basicPrice : selectedPriceSection === "standard" ? service?.standardPrice : service?.premiumPrice,
      //   product_type: "Illustration",
      //   product_image: Object.values(service.picture)[selectedImageIndex]
      //   .secure_url
      // });

      // console.log('Response:', response.data);

      let illustrationOrder = {
        orderType: "Illustration",
        user: user?._id,
        illustration: service,
        singlePaymentPrice:
          selectedPriceSection === "basic"
            ? service?.basicPrice
            : selectedPriceSection === "standard"
            ? service?.standardPrice
            : service?.premiumPrice,
        qty: 1,
        illustrationPaid: true,
      };

      dispatch(
        getPayingPrice({
          payingPrice:
            selectedPriceSection === "basic"
              ? service?.basicPrice
              : selectedPriceSection === "standard"
              ? service?.standardPrice
              : service?.premiumPrice,
        })
      );
      handleOpen();

      localStorage.setItem(
        "illustrationOrder",
        JSON.stringify(illustrationOrder)
      );
      localStorage.setItem("userid", user?._id);

      // Redirect to Stripe checkout URL
      // window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div className="py-5 flex flex-col space-y-5 border-b">
      {modalOpen && (
        <ModalComponent
          open={modalOpen}
          handleClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      <div className="text-center lg:text-left">
        {/* <div className="text-xl font-semibold capitalize">{service.title}</div> */}
        {/* <div className="flex space-x-2 font-semibold">
          <Star className="text-orange-500" />
          <Star className="text-orange-500" />
          <Star className="text-orange-500" />
          <Star className="text-orange-500" />
        </div> */}
      </div>
      <div className="lg:flex lg:space-x-5">
        <div className="w-full lg:w-2/3">
          {/* carosel */}
          <div className="flex">
            {/* <div className="flex-col mt-0 overflow-y-auto scrollbar overflow-x-hidden h-80 pr-2 mr-5 space-y-1">
              {Object.values(service.picture).map((imageUrl, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 p-1 border cursor-pointer ${
                    selectedImageIndex === index ? "border-orange-500" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={imageUrl.secure_url}
                    alt={`Thumbnail ${index}`}
                    className="bg-cover w-full h-full"
                  />
                </div>
              ))}
            </div> */}
            <div className="flex mt-0 scrollbar overflow-x-hidden w-16 py-1 space-x-1">
              {Object.values(service.picture).map((imageUrl, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 p-1 border cursor-pointer ${
                    selectedImageIndex === index ? "border-orange-500" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={imageUrl.secure_url}
                    alt={`Thumbnail ${index}`}
                    className="bg-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center sm:space-x-4 w-full bg-slate-50 sm:px-5 relative">
              <button>
                <FontAwesomeIcon
                  icon={faCircleChevronLeft}
                  className="text-slate-200 w-6 md:w-9 h-6 md:h-9 absolute left-1 sm:relative sm:left-0"
                />
              </button>
              <div className="overflow-hidden w-full h-auto sm:h-[30rem]">
                <img
                  className="object-cover sm:object-contain h-auto sm:h-full md:h-full w-full"
                  src={
                    Object.values(service.picture)[selectedImageIndex]
                      .secure_url
                  }
                  alt={`Image ${selectedImageIndex}`}
                />
              </div>
              <button>
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  className="text-slate-500 w-6 md:w-9 h-6 md:h-9 absolute right-1 sm:relative sm:right-0"
                />
              </button>
            </div>
          </div>

          {/* rating and reviews */}
          <div className=" flex space-x-2 md:px-10 lg:px-0 pt-6 sm:pt-10 items-center">
            <div className="text-stone-500 font-semibold">Ratings:</div>
            <div className="flex space-x-0 font-semibold">
              <Star className="text-orange-500 text-xl" />
              <Star className="text-orange-500 text-xl" />
              <Star className="text-orange-500 text-xl" />
              <Star className="text-orange-500 text-xl" />
              <Star className="text-orange-500 text-xl" />
            </div>
            <div className="space-y-2">{/* Reviews go here */}</div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-3 mt-3 lg:mt-0">
          <div className="text-stone-500 font-semibold border-b">About</div>
          <div className="text-left max-h-24 overflow-y-auto scrollbar">
            <ReactQuill value={service.about} readOnly={true} theme="bubble" />
          </div>

          <div className="flex items-center justify-center space-x-5">
            <div
              className={`hover:border-b-2 ${
                selectedPriceSection === "basic"
                  ? "border-b-2 border-orange-600 text-orange-700"
                  : "hover:border-b-2 "
              } cursor-pointer `}
              onClick={() => setSelectedPriceSection("basic")}
            >
              Basic
            </div>
            <div
              className={`hover:border-b-2 ${
                selectedPriceSection === "standard"
                  ? "border-b-2 border-orange-600 text-orange-700"
                  : "hover:border-b-2 "
              } cursor-pointer `}
              onClick={() => setSelectedPriceSection("standard")}
            >
              Standard
            </div>
            <div
              className={`hover:border-b-2 ${
                selectedPriceSection === "premium"
                  ? "border-b-2 border-orange-600 text-orange-700"
                  : "hover:border-b-2 "
              } cursor-pointer `}
              onClick={() => setSelectedPriceSection("premium")}
            >
              Premium
            </div>
          </div>

          <div className="space-y-3">
            {selectedPriceSection === "basic" && (
              <>
                <DetailsWithCard
                  id={service._id}
                  serviceType={service.basicDetails}
                  currency={service?.basicPriceCurrency}
                  price={service?.basicPrice}
                  sectionName={selectedPriceSection}
                  handleIllustrationPay={() => handleIllustrationPay(service)}
                />
              </>
            )}
            {selectedPriceSection === "standard" && (
              <DetailsWithCard
                id={service._id}
                serviceType={service.standardDetails}
                currency={service?.standardPriceCurrency}
                price={service?.standardPrice}
                sectionName={selectedPriceSection}
                handleIllustrationPay={() => handleIllustrationPay(service)}
              />
            )}
            {selectedPriceSection === "premium" && (
              <DetailsWithCard
                id={service._id}
                serviceType={service.premiumDetails}
                currency={service?.premiumPriceCurrency}
                price={service?.premiumPrice}
                sectionName={selectedPriceSection}
                handleIllustrationPay={() => handleIllustrationPay(service)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5">
        {/* Price sections go here */}
      </div>
      <div className="space-y-3">{/* Pricing details go here */}</div>
    </div>
  );
};

const DetailsWithCard = ({
  serviceType,
  currency,
  price,
  sectionName,
  handleIllustrationPay,
}) => {
  console.log(serviceType, "serviceType");

  // const handleIllustrationPay = async (e) => {
  //   try {
  //     const response = await axios.post('http://localhost:5001/create-payment-intent', {
  //       i: id,
  //       price: selectedPriceSection === "basic" ? service?.basicPrice : selectedPriceSection === "standard" ? service?.standardPrice : service?.premiumPrice,
  //       product_type: "Illustration",
  //       product_image: Object.values(service.picture)[selectedImageIndex]
  //       .secure_url
  //     });

  //     console.log('Response:', response.data);
  //     // Redirect to Stripe checkout URL
  //     window.location.href = response.data.checkoutUrl;
  //   } catch (error) {
  //     console.error('Error processing payment:', error);
  //   }
  // }

  return (
    <div className="py-3 mt-6">
      <div className="text-sm py-3">{JSON.parse(serviceType).description}</div>
      <div className="grid grid-cols-2 space-y-1">
        <div className="space-x-2">
          {/* <Event /> */}
          <span>Day(s) of delivery:</span>
          <span className="font-semibold ">
            {JSON.parse(serviceType).daysOfDelivery}
          </span>
        </div>
        {/* <div className="rounded-full w-10 "></div> */}
        <div className="space-x-2 pl-6">
          {/* <Repeat /> */}
          <span>Revisions:</span>
          <span className="font-semibold ">
            {JSON.parse(serviceType).revisions}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 space-y-1">
        <div className="flex space-x-2">
          <div>Illustration Count:</div>
          <div className="font-semibold">
            {JSON.parse(serviceType).illustrationCount}
          </div>
        </div>
        <div className="flex space-x-2 pl-6">
          <div>Character Count:</div>
          <div className="font-semibold">
            {JSON.parse(serviceType).characterCount}
          </div>
        </div>
      </div>
      <div className="rounded-md bg-slate-200 my-5 p-2 grid grid-cols-2 space-y-1">
        <div className=" flex space-x-1 items-center">
          {JSON.parse(serviceType).backgroundScene ? (
            <Check className="text-green-500 text-xl" />
          ) : (
            <Close className="text-red-500 text-xl" />
          )}
          <div className="text-[15px">Backgound Scene</div>
        </div>
        <div className=" flex space-x-1">
          {JSON.parse(serviceType).colourIllusion ? (
            <Check className="text-green-500 text-xl" />
          ) : (
            <Close className="text-red-500 text-xl" />
          )}
          <div className="text-[15px]">Colour Illusion Scene</div>
        </div>
        <div className=" flex space-x-1 items-center">
          {JSON.parse(serviceType).printReady ? (
            <Check className="text-green-500 text-xl" />
          ) : (
            <Close className="text-red-500 text-xl" />
          )}
          <div className="text-[15px]">Print Ready</div>
        </div>
        <div className=" flex space-x-1 items-center">
          {JSON.parse(serviceType).sourceFile ? (
            <Check className="text-green-500 text-xl" />
          ) : (
            <Close className="text-red-500 text-xl" />
          )}
          <div className="text-[15px">Source File</div>
        </div>
      </div>
      <div className="text-stone-900 font-bold border-t mt-5 py-3">
        Price: USD {price}
      </div>
      <div
        onClick={handleIllustrationPay}
        className="flex justify-center bg-teal-700 hover:bg-teal-800 cursor-pointer rounded-md text-white py-1.5 capitalize"
      >
        Choose {sectionName}
      </div>
      {/* <PayPalButton
      
      /> */}
    </div>
  );
};
