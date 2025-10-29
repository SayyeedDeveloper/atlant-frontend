"use client";
import React from "react";
import { motion } from "framer-motion";

interface Product {
    id: number;
    title: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Фильтры очистки воды",
        image: "/images/Category1.webp",
    },
    {
        id: 2,
        title: "Оборудование для газированной воды",
        image: "/images/Category2.webp",
    },
    {
        id: 3,
        title: "Бытовые фильтры для квартир и домов",
        image: "/images/Category3.webp",
    },
    {
        id: 4,
        title: "Диспенсеры (кулеры) для воды",
        image: "/images/Category4.webp",
    },
    {
        id: 5,
        title: "Запасные части для фильтров воды",
        image: "/images/Category5.webp",
    },
    {
        id: 6,
        title: "Прочие товары и оборудование",
        image: "/images/Category6.webp",
    },
];

const Catalogforproduct = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            {/* Header */}
            <header className="bg-white text-black py-8 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">
                        Каталог
                    </h1>

                </div>
            </header>

            {/* Catalog Grid */}
            <main className="max-w-7xl mx-auto py-12 px-4">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {products.map((item, index) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden border border-gray-100 group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative w-full h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Text */}
                            <div className="p-5 text-center">
                                <h2 className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                </h2>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Catalogforproduct;
