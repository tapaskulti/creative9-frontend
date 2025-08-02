import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookSharp,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube
} from "@mui/icons-material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Whatsapp from "../assets/whatsapp.png";
import Fiverr from "../assets/fiverrLogo.png";
import Upwork from "../assets/upworkLogo.png";
import Etsy from "../assets/etsyLogo.png";
import Freelancer from "../assets/freelancerLogo.png";

const Footer = () => {
  return (
    <>
      <div className="text-slate-600 text-left bg-slate-100 w-full py-10 px-3 md:px-10 border-t-[12px] border-[#0363af]">
        <div className="lg:flex lg:space-x-5 lg:justify-between text-slate-600">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-40 md:w-28 lg:w-32 xl:w-40"
              />
            </Link>
            <h2 className="w-auto lg:w-60 xl:w-80 text-[13px] md:text-sm leading-6 pt-3">
              We have more than 9 years of experience in Graphics Design and
              illustration Field: Any art related graphics design job and we are
              playing in this field with successfully. creativevalley9.com is a
              Socially Responsible Graphics Design Studio based at Kolkata in
              India.
            </h2>
          </div>
          <div className="mt-3 md:mt-3">
            <div className="flex items-center">
              <h2 className="font-semibold text-sm lg:text-lg lg:font-light border-b border-white/20 pb-1">
                Quick <span className="font-semibold">Links</span>
              </h2>
              {/* <span className="font-semibold hidden lg:flex">Illustration</span> */}
            </div>
            <div className="text-base text-slate-600 space-y-1.5 lg:mt-3">
              <a
                href="https://www.creativevalley9.com/Painting"
                className="hover:text-slate-400"
              >
                Painting
              </a>
            </div>
            <div className="text-base text-slate-600 space-y-1.5 lg:mt-3">
              <a
                href="https://www.creativevalley9.com/Illustration"
                className="hover:text-slate-400"
              >
                Illustration
              </a>
            </div>
            {/* <ul className="text-sm text-slate-600 space-y-1.5 mt-5">
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/653ea116c883168c94fc8a80/Portfolio"
                  className="hover:text-slate-400"
                >
                  African American Children Book Illustration
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/6541ea9ef597792cfd51a91d/Portfolio"
                  className="hover:text-slate-400"
                >
                  Christmas children book illustration
                </a>
              </li>
              <li>
                <a href="https://www.creativevalley9.com/Illustration/6541fe2ef597792cfd51a980/Portfolio">
                  Cartoon style children book illustration
                </a>
              </li>
              <li>
                <a href="£" className="hover:text-slate-400">
                  Animal Children Book Illustration
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/6542b641f597792cfd51aba0/Portfolio"
                  className="hover:text-slate-400"
                >
                  Children book cover illustration
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/65437e2ef597792cfd51ac72/Portfolio"
                  className="hover:text-slate-400"
                >
                  Adventure children book illustration
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/6544ead7f597792cfd51ae1c/Portfolio"
                  className="hover:text-slate-400"
                >
                  Story Book illustration
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/6544f2cff597792cfd51ae7e/Portfolio"
                  className="hover:text-slate-400"
                >
                  Children book Drawings
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/6569b5dcd2858bd1925a2736/Portfolio"
                  className="hover:text-slate-400"
                >
                  Children and kids book illustration
                </a>
              </li>
              <li>
                <a
                  href="https://www.creativevalley9.com/Illustration/65812aa203de39950c9ad7ba/Portfolio"
                  className="hover:text-slate-400"
                >
                  Logo Design
                </a>
              </li>
            </ul> */}
          </div>
          {/* <div className="mt-3 md:mt-3">
            <div className="flex items-center">
              <h2 className="text-sm lg:text-lg font-light border-b border-white/20">Quick Links - &nbsp;</h2>
              <span className="font-semibold hidden lg:flex">Painting</span>
            </div>
            <div className="text-sm text-slate-600 space-y-1.5 lg:mt-5">
            <a
                  href="https://www.creativevalley9.com/Painting"
                  className="hover:text-slate-400"
                >
                  Painting
                </a>
            </div>
          </div> */}
          <div className="mt-3 md:mt-3">
            <h2 className="font-semibold text-sm lg:text-lg lg:font-light border-b border-white/20 pb-1">
              Freelancing - <span className="font-semibold">Profile links</span>
            </h2>
            <div className="space-y-4">
              <ul className="flex items-center space-x-4 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/creativevalley9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Upwork}
                      alt=""
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-28 h-auto"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fiverr.com/creativevalley9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Fiverr}
                      alt=""
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-28 h-auto"
                    />
                  </a>
                </li>
              </ul>
              <ul className="flex items-center space-x-4 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.etsy.com/in-en/shop/creativevalley9?ref=seller-platform-mcnav"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Etsy}
                      alt=""
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-28 h-auto"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freelancer.com/u/creativevalley9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Freelancer}
                      alt=""
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-28 h-auto"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-5 lg:pt-0 space-y-2">
            <h2 className="font-semibold text-sm lg:text-lg lg:font-light border-b border-white/20 pb-0 lg:pb-1">
              Our - <span className="font-semibold">Location</span>
            </h2>
            <div className="lg:space-y-3 pt-0 lg:pt-5">
              <ul>
                <li className="flex items-center space-x-3 text-sm">
                  <span>
                    <img src={Whatsapp} alt="" className="w-3.5 h-3.5" />
                  </span>
                  <h2>+91 78722 49293</h2>
                </li>
              </ul>
              <ul>
                <li className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h2>creativevalley9@gmail.com</h2>
                </li>
              </ul>
              <ul>
                <li className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h2>
                    Near Netaji Subhas Chandra Bose
                    <br /> International Airport kolkata-700158
                  </h2>
                </li>
              </ul>
              <ul className="flex items-center space-x-6 pl-4 pt-2">
                <li>
                  <a href="https://www.facebook.com/creativevalley9graphicstudio">
                    <FacebookSharp className="size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/sarkarprabir03">
                    <Twitter className="size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/creative.valley9/">
                    <Instagram className="size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/prabir-sarkar-579a5387/">
                    <LinkedIn className="size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@creativevalley9">
                    <YouTube className="size-7" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-200 border-t border-slate-300">
        <div className="lg:flex lg:items-center  lg:justify-between px-3 py-3 md:px-10 text-slate-600 text-xs">
          <h2>Copyright © 2025 Creativevalley9.com.</h2>
          <ul className="flex items-center space-x-5 justify-between mt-2 lg:mt-0">
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
