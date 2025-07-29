import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import FiverrImage from "../assets/fiver-page.jpg";

export default function Freelancer() {
  return (
    <div>
      <Header />
      <div className="py-20">
        <div className="px-10 3xl:px-64 flex gap-5">
          <div className="w-full h-96 md:w-80 lg:w-72 xl:w-80 2xl:w-80 3xl:w-96 shadow-lg  rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <div className="flex justify-center text-center">
              {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-80" /> */}
              <img
                src={FiverrImage}
                className="rounded-t-lg object-cover w-full h-24"
              />
            </div>
            <div className="px-4 py-3 text-[15px]">
              hi there, I'm prabir Sarkar. I've done 1100 plus projects with
              850+ great reviews. I've completed 4 years degree course on
              painting from the Indian college of arts and draftsmanship from
              kolkata in India. From 2009 till now i'm working as a freelance
              illustrator and painter.
            </div>
            <div className="bg-gray-200 text-black text-center py-3 absolute bottom-0 w-full">
              Know more
            </div>
          </div>
          <div className="w-full h-96 md:w-80 lg:w-72 xl:w-80 2xl:w-80 3xl:w-96 shadow-lg  rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <div className="flex justify-center text-center">
              {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-80" /> */}
              <img
                src={FiverrImage}
                className="rounded-t-lg object-cover w-full h-24"
              />
            </div>
            <div className="px-4 py-3 text-[15px]">
              hi there, I'm prabir Sarkar. I've done 1100 plus projects with
              850+ great reviews. I've completed 4 years degree course on
              painting from the Indian college of arts and draftsmanship from
              kolkata in India. From 2009 till now i'm working as a freelance
              illustrator and painter.
            </div>
            <div className="bg-gray-200 text-black text-center py-3 absolute bottom-0 w-full">
              Know more
            </div>
          </div>
          <div className="w-full h-96 md:w-80 lg:w-72 xl:w-80 2xl:w-80 3xl:w-96 shadow-lg  rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <div className="flex justify-center text-center">
              {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-80" /> */}
              <img
                src={FiverrImage}
                className="rounded-t-lg object-cover w-full h-24"
              />
            </div>
            <div className="px-4 py-3 text-[15px]">
              hi there, I'm prabir Sarkar. I've done 1100 plus projects with
              850+ great reviews. I've completed 4 years degree course on
              painting from the Indian college of arts and draftsmanship from
              kolkata in India. From 2009 till now i'm working as a freelance
              illustrator and painter.
            </div>
            <div className="bg-gray-200 text-black text-center py-3 absolute bottom-0 w-full">
              Know more
            </div>
          </div>
          <div className="w-full h-96 md:w-80 lg:w-72 xl:w-80 2xl:w-80 3xl:w-96 shadow-lg  rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <div className="flex justify-center text-center">
              {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-80" /> */}
              <img
                src={FiverrImage}
                className="rounded-t-lg object-cover w-full h-24"
              />
            </div>
            <div className="px-4 py-3 text-[15px]">
              hi there, I'm prabir Sarkar. I've done 1100 plus projects with
              850+ great reviews. I've completed 4 years degree course on
              painting from the Indian college of arts and draftsmanship from
              kolkata in India. From 2009 till now i'm working as a freelance
              illustrator and painter.
            </div>
            <div className="bg-gray-200 text-black text-center py-3 absolute bottom-0 w-full">
              Know more
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
