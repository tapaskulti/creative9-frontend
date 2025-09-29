import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const stats = [
  { value: 350230, label: "Total Users Visited" },
  { value: 13, label: "Years In The Industry" },
  { value: 1300, label: "Total Clients" },
  { value: 1500, label: "Projects Completed" }
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration
    const increment = value / (duration / 50); // Adjust speed
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-3xl font-bold text-[#0363af]">{count}+</span>;
};

// PropTypes validation
Counter.propTypes = {
  value: PropTypes.number.isRequired
};

const StatsSection = () => {
  return (
    <div className="bg-white px-6 lg:px-32 xl:px-40 2xl:px-64 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <Counter value={stat.value} />
            <p className="text-black mt-2 font-semibold text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
