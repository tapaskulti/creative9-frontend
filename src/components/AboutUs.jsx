import Header from "./Header";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-[#297cc0] via-[#0363af] to-[#297cc0] h-32 px-32 py-10 text-center text-white text-4xl">
          <h1>About Us</h1>
        </div>

        <div className="px-6 lg:px-32 xl:px-40 2xl:px-64 pt-14">
          <h3>
            Welcome to CreativeValley9 where stories come to life and art meets
            innovation. Founded by an experienced painter and illustrator with
            <span className="font-semibold">14+ years</span> experience, Prabir
            Sarkar, CreativeValley9 is the home to ideas converted into awesome
            images.
            <br />
            <br />
            Prabir was born{" "}
            <span className="font-semibold">
              August 24, 1983 in Kolkata, India
            </span>{" "}
            after graduating with a degree in Painting from the Indian College
            of Arts and Draughtsmanship. Over the years, he has honed his craft
            and has become passionate in blending tradition with modern
            imagination. Prabir has served clients in over 40 countries and
            delivered over <span className="font-semibold">1,700</span>{" "}
            successful projects. Moreover, he has over
            <span className="font-semibold">1,600</span> positive reviews on
            well-known platforms including{" "}
            <span className="font-semibold">Fiverr.com</span>,{" "}
            <span className="font-semibold">Upwork.com</span>,{" "}
            <span className="font-semibold">Freelancer.com</span> and{" "}
            <span className="font-semibold">Etsy.com</span>.
            <br />
            <br />
            Here at CreativeValley9, we focus in different creative fields and
            offer custom made pieces as well as personal works that are ready to
            please a wide range of clientele across industries.
          </h3>
          <div className="my-10">
            <h2 className="text-xl text-black font-medium">
              Our experience includes the following:
            </h2>
            <h3 className="text-[#0363af] text-2xl pb-3 mt-10 font-semibold">
              Fine Art:
            </h3>
            <span className="text-base leading-7">
              Our comprehensive fine art line offers everything from classic oil
              paints and acrylic paintings to intricate mixed media, charcoal,
              and pencil works. In turn, each piece is meticulously handmade to
              speak to the viewer personally, communicating its own story
              through color, texture and form.
            </span>
          </div>
          <div className="my-10">
            <h3 className="text-[#0363af] text-2xl pb-3 mt-10 font-semibold">
              Illustration:
            </h3>
            <span className="text-base leading-7">
              African American Culture Inspired Children&apos;s Book
              Illustrations, Character Designs, Sketch Concepts Portraits and
              Caricatures – Whether the children&apos;s book illustrations have
              a theme with an African American culture or just character design
              sheets and individual concept art drawings or portraits or
              caricatures: We like drawing to leave something up to your
              imagination. We illustrate to work for each story, making our
              illustrations memorable and relatable for any age.
            </span>
          </div>
          <div className="my-10">
            <h3 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
              Creative Design:
            </h3>
            <span className="text-base leading-7">
              At CreativeValley9, we also offer creative innovative solutions
              for business and individuals. Our 2D game development, logo design
              service background art, and t-shirt design services are tailor
              made to fit your concept while making creative illusion. Our
              designs are a visual knock-out and effective in conveying the
              intended message so your brand lies in the mind of others long
              after.
            </span>
          </div>
          <div className="my-10">
            <h3 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
              Our Vision:
            </h3>
            <span className="text-base leading-7">
              CreativeValley9 originated from Prabir&apos;s vision to enhance
              the availability and value of art for everyone. We believe that
              art can and should be more than just beautiful; it should also be
              meaningful, inspire conversation, and connections with emotions.
              The aim is to combine traditional art with modern design to create
              imaginative solutions that inspire, last, and tell stories.
              <br />
              <br />
              Simply put, CreativeValley9 is to connect the past and present and
              provide individuals, brands, and companies with creative solutions
              that not only endure but connect to time. Whether you are looking
              for a unique painting for your home or need some unique designs
              for your business, CreativeValley9 is looking to help you present
              your ideas into reality.
              <br />
              <br />
              Thank you for your visit to CreativeValley9. We look forward to
              being partners for your next creative idea!
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
