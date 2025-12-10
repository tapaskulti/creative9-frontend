// import React from "react";
import { motion } from "framer-motion";

import portfolio01 from "../assets/painting-portfolio01.jpg";
import portfolio02 from "../assets/painting-portfolio02.jpg";
import portfolio03 from "../assets/painting-portfolio03.jpg";
import portfolio04 from "../assets/painting-portfolio04.jpg";
import { Link } from "react-router-dom";
// import portfolio05 from "../assets/portfolio05.jpg";
// import portfolio06 from "../assets/portfolio06.jpg";
// import portfolio07 from "../assets/portfolio07.jpg";
// import portfolio08 from "../assets/portfolio08.jpg";

const items = [
  { image: portfolio01, title: "She", description: "Acrylic on canvas" },
  {
    image: portfolio02,
    title: "Woman with Nature",
    description: "Oil on canvas"
  },
  { image: portfolio03, title: "She-02", description: "Acrylic on canvas" },
  {
    image: portfolio04,
    title: "Oil painting commission",
    description: "Oil color on canvas"
  }
  // { image: portfolio05, title: "Title 5", description: "Description 5" },
  // { image: portfolio06, title: "Title 6", description: "Description 6" },
  // { image: portfolio07, title: "Title 7", description: "Description 7" },
  // { image: portfolio08, title: "Title 8", description: "Description 8" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const PortfolioPainting = () => {
  return (
    <div className="bg-gray-100 px-6 lg:px-32 xl:px-40 2xl:px-64 pt-24 pb-10">
      <h2 className="text-4xl text-center font-bold">
        Have a look at our <span className="text-[#0363af]">Paintings!</span>
      </h2>
      <div className="mx-auto grid md:grid-cols-4 gap-4 lg:gap-8 xl:gap-10 2xl:gap-12 mt-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="text-center p-3 bg-white shadow rounded"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={fadeIn}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="mt-0 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-1.5">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/Painting"
          className="w-36 bg-[#0363af] px-6 py-2 text-base text-white rounded-md text-center mt-6 lg:mt-10"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPainting;
