import Header from "./Header";
import Abtus01 from "../assets/abtus-img01.jpg";
import Abtus02 from "../assets/abtus-img02.jpg";
import Abtus03 from "../assets/abtus-img03.jpg";
import Abtus04 from "../assets/abtus-img04.jpg";
import Abtus05 from "../assets/abtus-img05.jpg";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-[#297cc0] via-[#0363af] to-[#297cc0] h-32 px-32 py-10 text-center text-white text-4xl">
          About Us
        </div>

        <div className="px-10 3xl:px-64">
          <div className="my-12">
            <h2 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
              Who We Are
            </h2>
            <h3 className="text-base leading-7">
              CreativeValley9 is a passionate team of designers, developers, and
              creative professionals dedicated to helping businesses thrive in
              the digital world. We believe in the power of a well-crafted
              online presence and are committed to making your brand stand out
              in the crowded digital landscape.
            </h3>
          </div>
          <div className="my-12">
            <div>
              <h2 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
                Our Services
              </h2>
              <h3 className="text-base leading-7">
                We offer a diverse range of services tailored to meet your
                unique needs: Web Design: Capturing the essence of your brand
                through visually stunning designs. Graphic Design: Creating
                compelling visuals that tell your story. Logo Design: Crafting
                memorable logos that leave a lasting impression. Website
                Development: Building robust, functional, and optimized
                websites. E-commerce Solutions: Specializing in Shopify and
                WooCommerce to drive sales and streamline operations.
              </h3>
            </div>
          </div>
          <div className="my-12">
            <h2 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
              Our Expertise
            </h2>
            <h3 className="text-base leading-7">
              We specialize in creating custom solutions that are flexible,
              scalable, and easy to manage. Our team is experienced in
              developing WordPress websites, ensuring they are not only visually
              appealing but also user-friendly and optimized for performance.
              For e-commerce, our tailored Shopify and WooCommerce websites are
              designed to maximize sales and efficiency.
            </h3>
          </div>
          <div className="my-12">
            <div>
              <h2 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
                Our Approach
              </h2>
              <h3 className="text-base leading-7">
                At CreativeValley9, we take a client-centered and results-driven
                approach. We take the time to understand your business,
                audience, and objectives, allowing us to create solutions that
                are both strategically effective and visually engaging.
                Collaboration and transparency are key to our process, ensuring
                you’re involved at every step.
              </h3>
            </div>
          </div>
          <div className="my-12">
            <h2 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
              Our Mission
            </h2>
            <h3 className="text-base leading-7">
              Our mission is to empower businesses by delivering top-notch
              digital services that lead to growth and success. We are more than
              just a service provider; we are your partner in this journey,
              committed to exceeding your expectations and creating real value
              for your business. Thank you for considering CreativeValley9.
              Together, let's create something truly remarkable.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
