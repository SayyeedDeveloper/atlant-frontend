"use client";

import React, { useState, useEffect } from "react";

const images = [
  "/skipphoto.jpg",
  "/skipphoto2.webp",
  "/skipphoto3.webp",
  "/skipphoto4.webp",
  "/skipphoto5.webp",
];

export default function Carusel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100px] md:h-[500px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
      {/* Orqa fon (blur effekt bilan) */}
      <img
        src={images[current]}
        alt="Background"
        className="absolute w-full h-full object-cover blur-md scale-110"
      />

      {/* Asosiy rasm (aniq ko‘rinadigan) */}
      <img
        src={images[current]}
        alt="Main Slide"
        className="absolute w-full h-full object-contain object-center transition-opacity duration-700"
      />

      {/* Pastdagi tugmalar */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
