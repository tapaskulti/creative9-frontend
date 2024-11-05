import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookSharp,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <>
      <div className="text-slate-600 text-left bg-slate-100 w-full py-10 px-3 md:px-10 border-t-[12px] border-orange-400">
        <div className="flex space-x-5 justify-between text-slate-600">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="md:w-28 lg:w-32 xl:w-40" />
            </Link>
            <h2 className="w-80 text-sm leading-6 pt-3">We have more than 9 years of experience in Graphics Design and
                illustration Field: Any art related graphics design job and we
                are playing in this field with successfully. creativevalley9.com
                is a Socially Responsible Graphics Design Studio based at
                Kolkata in India.</h2>
          </div>
          <div>
            <h2 className="text-lg font-light border-b border-white/20 pb-1">
              Quick Links - <span className="font-semibold">Illustration</span>
            </h2>
            <ul className="text-sm text-slate-600 space-y-1.5 mt-5">
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
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-light border-b border-white/20 pb-1">
              Quick Links - <span className="font-semibold">Painting</span>
            </h2>
            <div className="text-sm text-slate-600 space-y-1.5 mt-5">
            <a
                  href="https://www.creativevalley9.com/Illustration/653ea116c883168c94fc8a80/Portfolio"
                  className="hover:text-slate-400"
                >
                  Painting
                </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-light border-b border-white/20 pb-1">
            Our Freelancing - <span className="font-semibold">Profile links</span>
            </h2>
            <div className="flex items-start">
              <ul className="text-sm text-slate-600 space-y-1.5 mt-5">
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/creativevalley9"
                    className="hover:text-slate-400"
                  >
                    https://www.upwork.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fiverr.com/creativevalley9?up_rollout=true"
                    className="hover:text-slate-400"
                  >
                    https://www.fiverr.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.etsy.com/in-en/shop/creativevalley9?ref=seller-platform-mcnav"
                    className="hover:text-slate-400"
                  >
                    https://www.etsy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-0 space-y-2">
            <h2 className="text-lg font-light border-b border-white/20 pb-1">
              Our - <span className="font-semibold">Location</span>
            </h2>
            <div className="space-y-3 pt-5">
              <ul>
                <li className="flex items-center space-x-3 text-sm">
                   <span><img src={Whatsapp} alt="" className="w-3.5 h-3.5" /></span>
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
              <ul className="flex items-center space-x-3 pl-4">
                <li>
                  <FacebookSharp />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <YouTube />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-200 border-t border-slate-300">
        <div className="flex items-center justify-between px-3 py-3 md:px-10 text-slate-600 text-xs">
          <h2>Copyright © 2024 Creativevalley9.com.</h2>
          <ul className="flex items-center space-x-5">
            <li>
              <Link to="/TermsConditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
