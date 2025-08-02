import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import FiverrProfile from "../assets/fiverr-profile.jpg";
import UpworkProfile from "../assets/upwork-profile.jpg";
import EtsyProfile from "../assets/etsy-profile.jpg";
import FreelancerProfile from "../assets/freelancer-profile.jpg";
import FiverrLogo from "../assets/fiverrLogo.png";
import UpworkLogo from "../assets/upworkLogo.png";
import EtsyLogo from "../assets/etsyLogo1.png";
import FreelancerLogo from "../assets/freelancer-logo.png";

export default function Freelancer() {
  return (
    <div>
      <Header />
      <div className="py-20">
        <div className="px-10 3xl:px-64 grid grid-cols-4 gap-5">
          {/* md:w-80 lg:w-72 xl:w-72 2xl:w-60 3xl:w-80 */}

          <div className="w-full h-[690px]  shadow-lg rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <Link to="https://www.fiverr.com/creativevalley9" target="_blank">
              <div className="text-center">
                {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-96" /> */}
                <img
                  src={FiverrLogo}
                  alt=""
                  className="w-auto h-full rounded-xl"
                />
                <img
                  src={FiverrProfile}
                  className="rounded-t-lg object-cover w-full h-auto px-2"
                />
              </div>
              <div className="h-[460px] overflow-y-auto scrollbar-hide px-4 py-3 mt-4">
                <h3 className="font-bold">About me</h3>
                <h2 className="text-base font-medium py-2">
                  BEST QUALITY ON TIME AT FARE PRICE
                </h2>
                <p className="text-sm leading-[22px]">
                  hi there, I'm prabir Sarkar. I've done 1100 plus projects with
                  850+ great reviews. I've completed 4 years degree course on
                  painting from the Indian college of arts and draftsmanship
                  from kolkata in India. From 2009 till now i'm working as a
                  freelance illustrator and painter. I'm Working on children
                  Book illustration, African American children book
                  illustration, character illustration, 2d Game Design, Logo
                  Design, Conceptual Drawing, Background illustration,portrait
                  illustration, caricature illustration, t-shirt Design.
                  <h2 className="py-2">Hit me on "creativevalley9".</h2>
                </p>
                <h2 className="text-sm font-semibold">
                  Thanks,
                  <br />
                  creativevalley9
                </h2>
              </div>
              <div className="bg-[#1dbf73] text-white font-semibold text-center text-lg py-3 absolute bottom-0 w-full rounded-b-lg">
                Visit my Fiver profile
              </div>
            </Link>
          </div>
          <div className="w-full h-[690px]  shadow-lg rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <Link
              to="https://www.upwork.com/freelancers/creativevalley9"
              target="_blank"
            >
              <div className="text-center">
                {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-96" /> */}
                <img
                  src={UpworkLogo}
                  alt=""
                  className="w-auto h-full rounded-xl"
                />
                <img
                  src={UpworkProfile}
                  className="rounded-t-lg object-cover w-full h-auto px-2"
                />
              </div>
              <div className="h-[460px] overflow-y-auto scrollbar-hide px-4 py-3 mt-4">
                <h3 className="font-bold">About me</h3>
                <h3 className="font-bold pt-2">
                  Children Book illustration I Logo I Oil painting I
                  creativevalley9
                </h3>
                <h2 className="text-base font-medium py-2">
                  WE'RE A TOP QUALITY / CHILDREN BOOK / LOGO / CHARACTER DESIGN
                  / BG ARTISTS
                </h2>
                <p className="text-sm leading-[22px]">
                  "I'LL SHAPE YOUR DREAM"
                  <br />
                  <h2 className="text-base font-medium py-2">
                    I'M WORKING ON MY WACOM CINTIQ PRO 16 CINTIQ AND MOBILE
                    STUDIO PRO 13"
                  </h2>
                  hi, I'm prabir sarkar a Great Skilled painter and illustrator.
                  I'm working here as a freelance Illustrator, painter, and Logo
                  Designer.{" "}
                  <h2 className="py-2">
                    * Children Picture Book Illustration, <br />* Comics Book
                    Illustration, <br />* Graphic Novel Illustration, <br />*
                    Background Design, <br />* oil and Acrylic painting, <br />*
                    Watercolor painting, <br />* Cartoon, portrait, caricature,{" "}
                    <br />* Realistic character Design,
                    <br />* Emoji, <br />* logo design, <br />* T-shirt design,{" "}
                    <br />* Game Design and Re-skin, Game Character, <br />*
                    Icon & Button Design, <br />* Mascot Design,
                  </h2>{" "}
                  any art-related graphics design job and we are playing in this
                  field with successfully.
                </p>
              </div>
              <div className="bg-[#108a00] text-white font-semibold text-center text-lg py-3 absolute bottom-0 w-full rounded-b-lg">
                Visit my Upwork profile
              </div>
            </Link>
          </div>
          <div className="w-full h-[690px]  shadow-lg rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <Link
              to="https://www.etsy.com/in-en/shop/creativevalley9?ref=seller-platform-mcnav"
              target="_blank"
            >
              <div className="text-center px-3">
                {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-96" /> */}
                <img src={EtsyLogo} alt="" className="w-auto h-full py-3" />
                <img
                  src={EtsyProfile}
                  className="rounded-t-lg object-cover w-full h-auto "
                />
              </div>
              <div className="h-[460px] overflow-y-auto scrollbar-hide px-4 py-3 mt-10">
                <h3 className="font-bold py-3">About me</h3>

                <p className="text-sm leading-[22px]">
                  hi, I'm prabir sarkar, specializes in Fine Art, especially
                  pure fluid Watercolor and acrylic and oil color medium and
                  custom illustration, character illustration, Background
                  illustration, children book illustration, comics illustration.
                  Thank you for visiting creativevalley9 on Etsy! While most of
                  my works can be found on my website, I decided to return etsy
                  after many requests from my art lovers. <br />
                  <br />
                  plz, visit my Etsy shop and{" "}
                  <strong>www.creativevalley9.com</strong> <br />
                  and enjoy my works. It's all my own creation and original
                  works.
                </p>
              </div>
              <div className="bg-[#f27224] text-white font-semibold text-center text-lg py-3 absolute bottom-0 w-full rounded-b-lg">
                Visit my Etsy profile
              </div>
            </Link>
          </div>
          <div className="w-full h-[690px]  shadow-lg rounded-lg hover:shadow-xl border border-slate-200 relative cursor-pointer">
            <Link
              to="https://www.freelancer.com/u/creativevalley9"
              target="_blank"
            >
              <div className="text-center  px-3">
                {/* <img src={image} className="h-full rounded-lg w-72 sm:w-80 md:w-96 3xl:w-96" /> */}
                <img
                  src={FreelancerLogo}
                  alt=""
                  className="w-auto h-full rounded-xl  py-3"
                />
                <img
                  src={FreelancerProfile}
                  className="rounded-t-lg object-cover w-full h-auto"
                />
              </div>
              <div className="h-[460px] overflow-y-auto scrollbar-hide px-4 py-3 mt-10">
                <h3 className="font-bold py-2">About me</h3>

                <p className="text-sm leading-[22px]">
                  hi there,
                  <br />
                  i'm prabir Sarkar I've completed 4 years degree course on
                  painting from the Indian college of arts and draftsmanship
                  from kolkata in India. From 2009 till now i'm working as a
                  freelance illustrator, painter and graphics designer. I'm
                  Working on children Book illustration, African American
                  children book illustration, character illustration, 2d Game
                  Design, Logo Design, Conceptual Drawing, Background
                  illustration,portrait illustration, caricature illustration,
                  t-shirt Design, website Design, Mobile apps Design Hit me on
                  "creativevalley9".
                  <br />
                  <br />
                  Thanks,
                  <br />
                  creativevalley9
                  <br />
                  <br />
                  Our Services Include:
                  <br />
                  <br />
                  * Oil painting
                  <br />
                  * Acrylic painting
                  <br />
                  * Watercolor painting
                  <br />
                  * Pencil shading work
                  <br />
                  * Children's book Illustrations
                  <br />
                  * Caricature & Cartoon Designs
                  <br />
                  * Portrait illustration
                  <br />
                  * Book cover / Cd Cover Designs
                  <br />
                  * T-Shirt Designs
                  <br />
                  * Logo Designs
                  <br />
                  * 2D-3D Logo Designs
                  <br />
                  * Logo Animation
                  <br />
                  * Icon Designs
                  <br />
                  * Flyer Designs
                  <br />
                  * Label and Packaging
                  <br />
                  * Brochure Designs
                  <br />
                  * Stationery Design and Brand Identity
                  <br />
                  * Banner / Poster Designs
                  <br />
                  * Business Card Designs
                  <br />
                  * Presentation designs
                  <br />* Sticker Designs
                </p>
              </div>
              <div className="bg-[#29b2fe] text-white font-semibold text-center text-lg py-3 absolute bottom-0 w-full rounded-b-lg">
                Visit my Freelancer profile
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
