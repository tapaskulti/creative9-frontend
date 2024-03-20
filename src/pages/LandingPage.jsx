import "./landingpage.css";
// import imageLandingPage1 from "./../assets/28.jpg";
// import imageLandingPage2 from "./../assets/11.jpg";
// import imageLandingPage3 from "./../assets/09.jpg";
import slid1 from "./../assets/slid1.jpg";
import slid2 from "./../assets/slid2.jpg";
import slid3 from "./../assets/slid3.jpg";
import slid4 from "./../assets/slid4.jpg";
import slid5 from "./../assets/slid5.jpg";
import slid6 from "./../assets/slid6.jpg";

import {
  Facebook,
  LinkedIn,
  LocationOn,
  Mail,
  Pinterest,
  WhatsApp,
} from "@mui/icons-material";

import Header from "../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
            <img src={slid1} alt="" />
            <p className="legend">730+ Trusted Clients</p>
          </div>
          <div>
            <img src={slid2} alt="" />
            <p className="legend">9 years of experience in Graphics Design</p>
          </div>
          <div>
            <img src={slid3} alt="" />
            <p className="legend">620+ Project Completed</p>
          </div>
          <div>
            <img src={slid4} alt="" />
            <p className="legend">71119+ Users visited</p>
          </div>
          <div>
            <img src={slid5} alt="" />
            <p className="legend">Responsibillity, Honesty, Reliability</p>
          </div>
          <div>
            <img src={slid6} alt="" />
            <p className="legend">We look forward to starting new relationships!</p>
          </div>
        </Carousel>
        {/* content */} {/* Snaps */}
        <div className="z-0 overflow-x-hidden lg:px-10">

          <div className="w-full px-5 space-y-6 lg:px-0 lg:w-2/5 pt-28">            
            <div className="font-sans text-2xl font-semibold lg:text-5xl">
              Best Graphics Studio
            </div>
            <h2 className="text-lg font-semibold">We're trusted by more than 730 clients</h2>
            <div>
              <div className="font-sans tracking-wider text-justify text-[#682c02]">
                We have more than 9 years of experience in Graphics Design and
                illustration Field: Any art related graphics design job and we
                are playing in this field with successfully. creativevalley9.com
                is a Socially Responsible Graphics Design Studio based at
                Kolkata in India.{" "}
              </div>
              <div className="text-orange-500">Read more...</div>
            </div>
          </div>

          {/* <div className="relative hidden space-y-2 lg:block">
            <img
              src={imageLandingPage1}
              alt=""
              className="rounded-full w-72 h-72 border-4 border-[#FF6B00] shadow-2xl shadow-[#e16d3c]   transform -translate-x-32"
            />
            <img
              src={imageLandingPage2}
              alt=""
              className="rounded-full w-52 h-52 border-4 border-[#FF6B00]  transform -translate-x-24
            "
            />

            <img
              src={imageLandingPage3}
              alt=""
              className="rounded-full w-40 h-40 border-4 border-[#FF6B00] transform translate-x-24 -translate-y-72"
            />
          </div> */}
        </div>
        {/* contact */}
        <div className="justify-end font-sans tracking-wider md:flex lg:px-10">
          <div className="flex px-2 space-x-3 md:hidden md:px-0">
            <div className="bg-gradient-to-t transform -translate-y-5 from-[#ff6d05] to-[#BE5000] px-5 py-3 text-white rounded-lg shadow-2xl">
              <div className="text-4xl font-semibold">730+</div>
              <div className="text-3xl">Clients</div>
            </div>
            <div className="bg-gradient-to-t transform -translate-y-10 from-[#ff6d05] to-[#BE5000] px-5 py-3 text-white rounded-lg shadow-2xl">
              <div className="text-4xl font-semibold">620+</div>
              <div className="text-3xl">Projects Completed</div>
            </div>
          </div>
          {/* <div className="text-white bg-gradient-to-t from-[#FF6B00] to-[#743504] w-full md:w-[60%]  py-2 text-red rounded-lg md:rounded-xl ">
            <div className="space-x-2 xl:flex">
              <div className="flex">
                <div className="px-5 py-3 lg:px-7">
                  <div className="text-xl border-b-2 ">Contact </div>
                  <div className="flex pt-2 space-x-3">
                    <Facebook />
                    <LinkedIn />
                    <Pinterest />
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <div className="flex space-x-2">
                    <Mail />
                    <div>sarkarprabir03@gmail.com</div>
                  </div>
                  <div className="flex space-x-2">
                    <WhatsApp />
                    <div>+91 7872249293</div>
                  </div>
                  <div className="flex space-x-2">
                    <div>Skype</div>
                    <div>prabir.sarkar39</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start pt-5 pl-2 pr-5 lg:px-4 lg:pr-0">
                <LocationOn />
                <div>
                  Near Netaji Subhas Chandra Bose International Airport
                  kolkata-700158
                </div>
              </div>
            </div>
          </div> */}
          <div className="hidden space-x-3 md:flex">
            <div className="bg-gradient-to-t transform -translate-y-5 from-slate-700 to-slate-400 px-5 py-3 text-white rounded-lg shadow-2xl text-center">
              <div className="text-4xl font-semibold">730+</div>
              <div className="text-2xl">Clients</div>
            </div>
            <div className="bg-gradient-to-t transform -translate-y-10 from-slate-900 to-slate-600 px-5 py-3 text-white rounded-lg shadow-2xl text-center">
              <div className="text-4xl font-semibold">620+</div>
              <div className="text-xl">
                Projects
                <br />
                Completed
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
