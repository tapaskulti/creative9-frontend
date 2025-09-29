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
      <div className="text-slate-600 text-left bg-slate-100 w-full py-10 px-3 md:px-6 border-t-[12px] border-[#0363af]">
        <div className="lg:flex lg:space-x-5 lg:justify-between text-slate-600">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-40 md:w-28 lg:w-32 xl:w-40"
              />
            </Link>
            <h2 className="w-auto lg:w-48 xl:w-80 text-[13px] md:text-sm leading-6 pt-3">
              We have more than 9 years of experience in Graphics Design and
              illustration Field: Any art related graphics design job and we are
              playing in this field with successfully. creativevalley9.com is a
              Socially Responsible Graphics Design Studio based at Kolkata in
              India.
            </h2>
          </div>
          <div className="mt-3 md:mt-3">
            <div className="flex items-center">
              <h2 className="font-semibold text-base xl:text-lg lg:font-semibold border-b border-white/20 pb-1">
                Our Services
              </h2>
            </div>
            <div>
              <ul className="text-sm xl:text-base text-slate-600 space-y-1.5 lg:mt-3">
                <li>
                  <Link to="/Painting" className="hover:text-slate-400">
                    Painting
                  </Link>
                </li>
                <li>
                  <Link to="/Illustration" className="hover:text-slate-400">
                    Illustration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 md:mt-3">
            <div className="flex items-center">
              <h2 className="text-base xl:text-lg font-semibold border-b border-white/20">
                Trust & Legal
              </h2>
            </div>
            <ul className="text-sm xl:text-base text-slate-600 space-y-1.5 lg:mt-3">
              <li>
                <Link to="/terms-conditions" className="hover:text-slate-400">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy" className="hover:text-slate-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-3 md:mt-3">
            <h2 className="font-semibold text-base xl:text-lg lg:font-semibold border-b border-white/20 pb-1">
              Freelancing Profile links
            </h2>
            <div className="space-y-3 xl:space-y-4 lg:mt-3">
              <ul className="flex items-center space-x-3 xl:space-x-4 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/creativevalley9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Upwork}
                      alt="Upwork"
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-20 lg:w-20 xl:w-28 h-auto"
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
                      alt="Fiverr"
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-20 lg:w-20 xl:w-28 h-auto"
                    />
                  </a>
                </li>
              </ul>
              <ul className="flex items-center space-x-3 xl:space-x-4 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.etsy.com/in-en/shop/creativevalley9?ref=seller-platform-mcnav"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Etsy}
                      alt="Etsy"
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-20 lg:w-20 xl:w-28 h-auto"
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
                      alt="Freelancer"
                      className="border border-slate-200 hover:border-slate-300 rounded-lg w-20 lg:w-20 xl:w-28 h-auto"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <h2 className="font-semibold text-base xl:text-lg lg:font-semibold border-b border-white/20 pb-0 lg:pb-1">
              Our Location
            </h2>
            <div className="space-y-2 lg:space-y-3 pt-0 w-auto">
              <ul>
                <li className="flex items-center space-x-3 text-sm">
                  <span>
                    <img
                      src={Whatsapp}
                      alt="Whatsapp"
                      className="w-3.5 h-3.5"
                    />
                  </span>
                  <h2>+91 78722 49293</h2>
                </li>
              </ul>
              <ul>
                <li className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a
                    href="mailto:creativevalley9@gmail.com"
                    className="hover:text-slate-600"
                  >
                    creativevalley9@gmail.com
                  </a>
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
                  <a
                    href="https://www.facebook.com/creativevalley9graphicstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookSharp className="size-5 xl:size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/sarkarprabir03">
                    <Twitter className="size-5 xl:size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/creative.valley9/">
                    <Instagram className="size-5 xl:size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/prabir-sarkar-579a5387/">
                    <LinkedIn className="size-5 xl:size-7" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@creativevalley9">
                    <YouTube className="size-5 xl:size-7" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-200 border-t border-slate-300">
        <div className="lg:items-center px-3 py-3 md:px-6 text-slate-600 text-xs">
          <h2>Copyright © 2025 Creativevalley9.com.</h2>
          {/* <ul className="flex items-center space-x-5 justify-between mt-2 lg:mt-0">
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
