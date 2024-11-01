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
                <div className="mt-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-lg text-orange-600"
                    />
                    <h2 className="font-bold uppercase">Call me now</h2>
                  </div>
                  <h2 className="text-sm font-normal leading-7">
                    {/* Call me now - +91 9681190458 */}
                    Call me now - +91 7872249293
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5" fill="#ea580c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"/></svg>
                    <h2 className="font-bold uppercase">Text me here!</h2>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5" fill="#ea580c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    <h2 className="font-bold uppercase">Text me here!</h2>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="#ea580c" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
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
                    rows={6}
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
