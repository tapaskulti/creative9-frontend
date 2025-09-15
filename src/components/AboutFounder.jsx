import Header from "./Header";
import Footer from "./Footer";

export default function AboutFounder() {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-[#297cc0] via-[#0363af] to-[#297cc0] h-32 px-32 py-10 text-center text-white text-4xl">
          About Founder
        </div>

        <div className="px-10 3xl:px-64">
          <div className="my-12">
            <h2 className="text-[#0363af] text-2xl pb-5 mt-10 font-semibold">
              About Founder
            </h2>
            <h3 className="text-base leading-7">
              Prabir Sarkar, founder of CreativeValley9, is a professional
              painter and illustrator with over 14 years of dedicated experience
              in the visual arts. A graduate in Painting from the Indian College
              of Arts and Draftsmanship, Kolkata (2011), his journey has been
              defined by transforming stories and ideas into powerful visuals
              through both commissioned and personal artworks. Over the years,
              Prabir has successfully delivered more than 1,700 projects,
              collaborating with clients across 40+ countries and earning 1,600+
              positive reviews in Fiverr.com, upwork.com, Freelancer.com and
              Etsy.com. His expertise covers a wide spectrum of creative
              disciplines:
              <br />
              <br />
              ● Fine Art: Oil and acrylic painting, mixed media, charcoal, and
              pencil works
              <br />
              ● Illustration: Children’s book illustration (including African
              American themes), character design, conceptual drawing, portraits,
              and caricatures
              <br />
              ● Creative Design: 2D game design, logo design, background art,
              and t-shirt design
              <br />
              <br />
              CreativeValley9 was born from Prabir’s vision to make art more
              accessible and meaningful—bridging tradition with innovation and
              offering individuals as well as brands creative solutions that
              inspire and endure.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
