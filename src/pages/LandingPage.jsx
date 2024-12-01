import "./landingpage.css";

import slid1 from "./../assets/slid1.jpg";
import slid2 from "./../assets/slid2.jpg";
import slid3 from "./../assets/slid3.jpg";
import slid4 from "./../assets/slid4.jpg";
import slid5 from "./../assets/slid5.jpg";

// import {
//   Facebook,
//   LinkedIn,
//   LocationOn,
//   Mail,
//   Pinterest,
//   WhatsApp,
// } from "@mui/icons-material";

import Header from "../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import StatsSection from "../components/StatsSection";
import PortfolioPainting from "../components/PortfolioPainting";
import PortfolioIllustrator from "../components/portfolioIllustrator";

function LandingPage() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        navigate("/Painting", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [token]);

  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-scroll">
      {/* <div className="bg-gradient-to-t from-[#FF6B0000] to-[#feb861]  w-full absolute hidden lg:block h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div> */}
      <div className="pt-0">
        {/* header */}
        <Header />
        <Carousel autoPlay infiniteLoop>
          <div>
            <div className="relative"><img src={slid1} alt="" />
            <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
            <h2 className="text-4xl font-semibold">Painting</h2>
            <h3 className="text-base py-4 leading-7">
            Transform your online presence with visually stunning, user-friendly web designs that reflect your brand&apos;s unique identity. 
            Our team creates intuitive interfaces and engaging experiences that keep your audience connected and drive conversions.
            </h3>
              <button className="text-sm bg-blue-500 rounded-md text-white px-6 py-2.5">VIEW PORTFOLIO</button>
              </div>
            </div>
            {/* <p className="legend">730+ Trusted Clients</p> */}
            
          </div>
          <div>
            <div><img src={slid2} alt="" />
            <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
            <h2 className="text-4xl font-semibold">Painting</h2>
            <h3 className="text-base py-4 leading-7">
            Transform your online presence with visually stunning, user-friendly web designs that reflect your brand&apos;s unique identity. 
            Our team creates intuitive interfaces and engaging experiences that keep your audience connected and drive conversions.
            </h3>
              <button className="text-sm bg-blue-600 rounded-md text-white px-6 py-2.5">VIEW PORTFOLIO</button>
              </div>
            </div>
            {/* <p className="legend">9 years of experience in Graphics Design</p> */}
          </div>
          <div>
            <div><img src={slid3} alt="" />
            <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
            <h2 className="text-4xl font-semibold">Painting</h2>
            <h3 className="text-base py-4 leading-7">
            Transform your online presence with visually stunning, user-friendly web designs that reflect your brand&apos;s unique identity. 
            Our team creates intuitive interfaces and engaging experiences that keep your audience connected and drive conversions.
            </h3>
              <button className="text-sm bg-blue-500 rounded-md text-white px-6 py-2.5">VIEW PORTFOLIO</button>
              </div>
            </div>
            {/* <p className="legend">620+ Project Completed</p> */}
          </div>
          <div>
            <div><img src={slid4} alt="" />
            <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
            <h2 className="text-4xl font-semibold">Painting</h2>
            <h3 className="text-base py-4 leading-7">
            Transform your online presence with visually stunning, user-friendly web designs that reflect your brand&apos;s unique identity. 
            Our team creates intuitive interfaces and engaging experiences that keep your audience connected and drive conversions.
            </h3>
              <button className="text-sm bg-purple-500 rounded-md text-white px-6 py-2.5">VIEW PORTFOLIO</button>
              </div>
            </div>
            {/* <p className="legend">71119+ Users visited</p> */}
          </div>
          <div>
            <div>
              <img src={slid5} alt="" />
            <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
            <h2 className="text-4xl font-semibold">Painting</h2>
            <h3 className="text-base py-4 leading-7">
            Transform your online presence with visually stunning, user-friendly web designs that reflect your brand&apos;s unique identity. 
            Our team creates intuitive interfaces and engaging experiences that keep your audience connected and drive conversions.
            </h3>
              <button className="text-sm bg-blue-700 rounded-md text-white px-6 py-2.5">VIEW PORTFOLIO</button>
              </div>
            </div>
            {/* <p className="legend">Responsibillity, Honesty, Reliability</p> */}
          </div>
          {/* <div>
            <img src={slid6} alt="" />
            <p className="legend">We look forward to starting new relationships!</p>
          </div> */}
        </Carousel>
        {/* content */} {/* Snaps */}
        <div className="z-0 overflow-x-hidden">

          <div className="w-full py-20 lg:px-64">            
            <div className="font-sans text-2xl font-semibold lg:text-5xl">
              Best Graphics Studio
            </div>
            <h2 className="text-lg font-semibold py-4">We&apos;re trusted by more than 730 clients</h2>
            <div>
              <div className="font-sans tracking-wider text-justify text-[#682c02] leading-7">
              At CreativeValley9, we offer a comprehensive range of services designed to elevate your brand and drive your business forward. 
              Our expertise includes creative design, digital marketing, web development, and brand management. 
              We craft tailored solutions that enhance your online presence, engage your audience, and achieve your goals. 
              From visually striking designs and effective SEO to compelling content and strategic guidance, 
              our team is committed to delivering exceptional results. Reach out to us to explore how we can help your business thrive.
              </div>
              <button className="text-white bg-orange-500 mt-4 px-4 py-2 rounded-md">Read More</button>
            </div>

            
          </div>

          <PortfolioPainting />
          <PortfolioIllustrator />
          <StatsSection />

          
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
