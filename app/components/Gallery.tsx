"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const images = [
    "/images/Gallery1.webp",
    "/images/gallery2.webp",
    "/images/Gallery3.webp",
    "/images/Gallery4.webp",
    "/images/Gallery5.webp",
    "/images/Gallery6.webp",
    "/images/Gallery7.webp",
    "/images/Gallery8.webp",
  ];

  return (
    <section className="relative bg-gradient-to-b bg-white py-10 overflow-hidden">
      {/* Orqa fon bezaklari */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Sarlavha */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-gray-800"
        >
          <span className="text-black-100 text-4xl">Фотогалерея</span>
        </motion.h2>

        {/* Rasmlar */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setSelected(src)}
            >
              <motion.img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full rounded-3xl object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ rotateX: 8, rotateY: -8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tugma */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg text-lg"
          >
            Показать все
          </motion.button>
        {/*  todo: Hammasini pasini to'g'rila   */}
        </div>
      </div>

      {/* To‘liq rasm ochilishi */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            alt="Selected"
            className="max-w-4xl max-h-[80vh] rounded-2xl shadow-2xl object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
