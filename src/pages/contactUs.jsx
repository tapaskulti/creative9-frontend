/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="">      
        <Header />
      <div className="">
      <div className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 h-32 px-32 py-10 text-center text-white text-4xl">Get in Touch</div>
        <div className="mx-6 mt-32 md:mx-20 lg:mx-32 2xl:mx-60 font-sans mb-60">
          {/* <h2 className="pb-10 text-4xl text-center uppercase text-slate-900">
            Get in Touch
          </h2> */}
          <div className=" flex justify-center">
            <div className="flex w-2/3 px-6 py-3">
              <div className="w-1/2">
                <div className="mt-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-lg text-orange-600"
                    />
                    <h2 className="font-bold uppercase">Call me now</h2>
                  </div>
                  <h2 className="text-sm font-normal leading-7">
                    Call me now - +91 9681190458
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-lg text-orange-600"
                    />
                    <h2 className="font-bold uppercase">Drop a Line</h2>
                  </div>
                  <h2 className="text-sm font-normal leading-7">
                    Drop me a line at - creativevalley9@gmail.com - <br />
                    and I'll get back soon
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <FontAwesomeIcon
                      icon={faLocation}
                      className="text-lg text-orange-600"
                    />
                    <h2 className="font-bold uppercase">Visit Us</h2>
                  </div>
                  <h2 className="text-sm font-normal leading-7">
                    Near Netaji Subhas Chandra Bose International Airport,{" "}
                    <br />
                    kolkata-700158
                  </h2>
                </div>
              </div>
              <div className="w-1/2 px-6 rounded-xl border border-slate-200 py-10 space-y-6">
                <div>
                  <input
                    type="text"
                    name="c_name"
                    className="w-full border border-slate-300 outline-none bg-transparent text-gray-500 rounded-lg text-sm px-3 py-2"
                    placeholder="Enter your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="c_email"
                    className="w-full border border-slate-300 outline-none bg-transparent text-gray-500 rounded-lg text-sm px-3 py-2"
                    placeholder="Enter a valid email ID"
                  />
                </div>
                {/* <div>
                  <input
                    type="text"
                    name="c_phone"
                    className="w-full border-b border-slate-300 outline-none bg-transparent"
                    placeholder="Enter your phone no."
                  />
                </div> */}
                <div>
                  <textarea
                    type="textarea"
                    name="c_phone"
                    rows={4}
                    className="w-full border border-slate-300 outline-none bg-transparent text-gray-500 rounded-lg text-sm px-3 py-2"
                    placeholder="Your message"
                  />
                </div>
                <button className="bg-orange-600 rounded-full w-full px-6 py-2 text-white font-semibold">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <Footer />
      
    </div>
  );
};

export default ContactUs;
