// import React from "react";
import { motion } from "framer-motion";

import portfolio01 from "../assets/portfolio01.jpg";
import portfolio02 from "../assets/portfolio02.jpg";
import portfolio03 from "../assets/portfolio03.jpg";
import portfolio04 from "../assets/portfolio04.jpg";
import portfolio05 from "../assets/portfolio05.jpg";
import portfolio06 from "../assets/portfolio06.jpg";
import portfolio07 from "../assets/portfolio07.jpg";
import portfolio08 from "../assets/portfolio08.jpg";

const items = [
  { image: portfolio01, title: "Title 1", description: "Description 1" },
  { image: portfolio02, title: "Title 2", description: "Description 2" },
  { image: portfolio03, title: "Title 3", description: "Description 3" },
  { image: portfolio04, title: "Title 4", description: "Description 4" },
  { image: portfolio05, title: "Title 5", description: "Description 5" },
  { image: portfolio06, title: "Title 6", description: "Description 6" },
  { image: portfolio07, title: "Title 7", description: "Description 7" },
  { image: portfolio08, title: "Title 8", description: "Description 8" },
];

  

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PortfolioPainting = () => {
  return (
    <div className="bg-gray-100 lg:px-64 pt-24 pb-10">
        <h2 className="text-4xl text-center font-bold">Have a look at our Paintings!</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mt-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="text-center p-4 bg-white shadow rounded"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={fadeIn}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPainting;
