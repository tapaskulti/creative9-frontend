// import React from "react";
import { motion } from "framer-motion";

import portfolio01 from "../assets/illustration-portfolio01.jpg";
import portfolio02 from "../assets/illustration-portfolio02.jpg";
import portfolio03 from "../assets/illustration-portfolio03.jpg";
import portfolio04 from "../assets/illustration-portfolio04.jpg";
import { Link } from "react-router-dom";
// import portfolio05 from "../assets/portfolio05.jpg";
// import portfolio06 from "../assets/portfolio06.jpg";
// import portfolio07 from "../assets/portfolio07.jpg";
// import portfolio08 from "../assets/portfolio08.jpg";
// import portfolio09 from "../assets/portfolio09.jpg";
// import portfolio010 from "../assets/portfolio010.jpg";
// import portfolio011 from "../assets/portfolio011.jpg";
// import portfolio012 from "../assets/portfolio012.jpg";

const items = [
  { image: portfolio01, title: "Title 1", description: "Description 1" },
  { image: portfolio02, title: "Title 2", description: "Description 2" },
  { image: portfolio03, title: "Title 3", description: "Description 3" },
  { image: portfolio04, title: "Title 4", description: "Description 4" },
  // { image: portfolio05, title: "Title 5", description: "Description 5" },
  // { image: portfolio06, title: "Title 6", description: "Description 6" },
  // { image: portfolio07, title: "Title 7", description: "Description 7" },
  // { image: portfolio08, title: "Title 8", description: "Description 8" },
  // { image: portfolio09, title: "Title 9", description: "Description 9" },
  // { image: portfolio010, title: "Title 10", description: "Description 10" },
  // { image: portfolio011, title: "Title 11", description: "Description 11" },
  // { image: portfolio012, title: "Title 12", description: "Description 12" },
];

  

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PortfolioIllustrator = () => {
  return (
    <div className="bg-gray-100 lg:px-64 py-10">
        <h2 className="text-4xl text-center font-bold">Have a look at our <span className="text-orange-500">Illustrations!</span></h2>
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
      <div className="flex justify-center">
        <Link to="/Illustration" className="w-36 bg-orange-500 px-6 py-2 text-base text-white rounded-md text-center mt-6">See More</Link>
      </div>
    </div>
  );
};

export default PortfolioIllustrator;
