import "./landingpage.css";

import slide1 from "./../assets/slide1.jpg";
import slide2 from "./../assets/slide2.jpg";
import slide3 from "./../assets/slide3.jpg";
import slide4 from "./../assets/slide4.jpg";
import slide5 from "./../assets/slide5.jpg";
import slide6 from "./../assets/slide6.jpg";
import slide7 from "./../assets/slide7.jpg";
import slide8 from "./../assets/slide8.jpg";

// import {
//   Facebook,
//   LinkedIn,
//   LocationOn,
//   Mail,
//   Pinterest,
//   WhatsApp,
// } from "@mui/icons-material";

import Header from "../components/Header";
// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (token) {
  //       navigate("/Painting", { replace: true });
  //     } else {
  //       navigate("/", { replace: true });
  //     }
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [token]);

  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-scroll">
      {/* <div className="bg-gradient-to-t from-[#FF6B0000] to-[#feb861]  w-full absolute hidden lg:block h-full px-52 py-52  rounded-full transform translate-x-2/3 -translate-y-20 "></div> */}
      <div className="pt-0">
        {/* header */}
        <Header />
        <Carousel autoPlay infiniteLoop>
          <div>
            <div>
              <img src={slide8} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Painting</h2>
                <h3 className="text-lg py-4 leading-7">
                  Transform your ideas with visually stunnig Oil, Acrylic,
                  watercolor or mixed media paintings. Our painters team and I
                  creates stunning paintings for you. visit our portfolo and
                  enjoy our recent works.
                </h3>
                <Link
                  to="/painting"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            {/* <p className="legend">71119+ Users visited</p> */}
          </div>
          <div>
            <div>
              <img src={slide6} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={slide7} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src={slide1} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            {/* <p className="legend">730+ Trusted Clients</p> */}
          </div>

          <div>
            <div>
              <img src={slide2} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            {/* <p className="legend">9 years of experience in Graphics Design</p> */}
          </div>
          <div>
            <div>
              <img src={slide3} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            {/* <p className="legend">620+ Project Completed</p> */}
          </div>
          <div>
            <div>
              <img src={slide4} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            {/* <p className="legend">71119+ Users visited</p> */}
          </div>
          <div>
            <div>
              <img src={slide5} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            {/* <p className="legend">Responsibillity, Honesty, Reliability</p> */}
          </div>

          {/* <div>
            <div>
              <img src={slide7} alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute left-64 top-1/3 transform -translate-y-1/2 w-1/4 text-white text-left mt-10">
                <h2 className="text-4xl font-semibold">Illustration</h2>
                <h3 className="text-lg py-4 leading-7">
                  We'll give a shape of your ideas with a visually stunnig
                  digital hand drawn illustrations. Our illustrators team and I
                  creates a unique and beautiful children's book illustrations,
                  comics, storyboards for you. visit our portfolo and see our
                  recent works.
                </h3>
                <Link
                  to="/illustration"
                  className="text-sm bg-[#0363af] rounded-md text-white px-6 py-2.5"
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>

          </div> */}
        </Carousel>
        {/* content */} {/* Snaps */}
        <div className="z-0 overflow-x-hidden">
          <div className="w-full pt-10 pb-20 lg:px-64">
            <div className="font-sans text-2xl font-semibold lg:text-5xl">
              Best Paintings and Illustrations Studio
            </div>
            <h2 className="text-lg font-semibold py-4">
              We&apos;re trusted by more than 730 clients
            </h2>
            <div>
              <div className="font-sans tracking-wider text-justify text-[#682c02] leading-7">
                At CreativeValley9, we offer a comprehensive range of services
                designed to elevate your brand and drive your business forward.
                Our expertise includes creative design, digital marketing, web
                development, and brand management. We craft tailored solutions
                that enhance your online presence, engage your audience, and
                achieve your goals. From visually striking designs and effective
                SEO to compelling content and strategic guidance, our team is
                committed to delivering exceptional results. Reach out to us to
                explore how we can help your business thrive.
              </div>
              <Link to="/About-us">
                <button className="text-white bg-[#0363af] mt-4 px-4 py-2 rounded-md">
                  Read More
                </button>
              </Link>
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
