import React, { useState } from "react";
import carausalImage1 from "../../assets/carausal/carausal-image-1.gif";
import carausalImage2 from "../../assets/carausal/carausal-image-2.gif";
import carausalImage3 from "../../assets/carausal/carausal-image-3.gif";

const carausalContent = [
  {
    image: carausalImage1,
    text: "Unlock your True Freelance Potential with GIGSTHAN",
    subtext: "Discover remote and flexible opportunities tailored to your skills.",
    link: "/jobs",
  },
  {
    image: carausalImage2,
    text: "Hire Top Freelancers Fast",
    subtext: "Connect with verified professionals ready to bring your vision to life.",
    link: "/hire",
  },
  {
    image: carausalImage3,
    text: "Platform Updates and Enhancements",
    subtext: "Build your brand, showcase your talent, and get hired globally.",
    link: "/career",
  },
];

export const Carausal = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? carausalContent.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === carausalContent.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-screen h-[32rem] overflow-hidden">
      {/* Slides */}
      <div
  className="flex transition-transform duration-700 ease-in-out h-full"
  style={{ transform: `translateX(-${current * 100}%)` }}
>
  {carausalContent.map((item, index) => (
    <div
      key={index}
      className="w-screen h-full flex-shrink-0 flex items-center justify-evenly px-16 bg-gradient-to-r from-slate-100 to-white"
    >
        <div className="flex flex-col justify-center h-full">
            <h1 className="font-bold text-5xl w-96">{item.text}</h1>
            <button className="p-2 px-4 w-32 bg-customOrange rounded text-customLightBlue">Get Started</button>
        </div>
        <div className="object-contain w-96">
            <img src={item.image} alt="" />
        </div>
      
      
    </div>
  ))}
</div>


      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg text-2xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg text-2xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {carausalContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
