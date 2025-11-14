"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaInstagram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";


interface Category {
    id: number;
    title: string;
    image: string;
}

const categories: Category[] = [
    { id: 1, title: "Фильтры очистки воды", image: "/images/Category1.webp" },
    { id: 2, title: "Оборудование для газированной воды", image: "/images/Category2.webp" },
    { id: 3, title: "Бытовые фильтры для квартир и домов", image: "/images/Category3.webp" },
    { id: 4, title: "Диспенсеры (кулеры) для воды", image: "/images/Category4.webp" },
    { id: 5, title: "Запасные части для фильтров воды", image: "/images/Category5.webp" },
    { id: 6, title: "Прочие товары и оборудование", image: "/images/Category6.webp" },
];


interface Product {
    id: number;
    title: string;
    price: string;
    available: boolean;
    image: string;
}

const products: Product[] = [
    { id: 1, title: "Генератор озона DNA-10G-A", price: "5 575 200 сум", available: true, image: "/images/Recomend1.webp" },
    { id: 2, title: "Фильтр для воды Atlant Fortuna, 8-ступенчатая", price: "1 951 320 сум", available: true, image: "/images/Recomend2.webp" },
    { id: 3, title: "Насосная станция SHIMGE JET 1100G2 с баком 24 л", price: "1 602 870 сум", available: true, image: "/images/Recomend3.webp" },
    { id: 4, title: "Система обратного осмоса HLDRO-500LPH (VOLARDDA)", price: "28 572 900 сум", available: true, image: "/images/Recomend4.webp" },
    { id: 5, title: "Насосная станция SHIMGE JET 750G2 с баком 24 л", price: "1 393 800 сум", available: true, image: "/images/Recomend5.webp" },
];

const Catalogforproduct = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">

            <header className="bg-white text-black py-8 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">
                        Каталог
                    </h1>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-12 px-4 flex-grow">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {categories.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden border border-gray-100 group cursor-pointer"
                        >
                            <div className="relative w-full h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h2 className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                </h2>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                        Рекомендуем
                    </h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative group"
                            >
                                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition">
                                    <Heart className="w-5 h-5 text-blue-600" />
                                </button>

                                <div className="h-48 flex justify-center items-center bg-gray-50 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex flex-col flex-grow p-5 justify-between">
                                    <div>
                                        <h3 className="text-gray-800 font-medium text-base mb-2 leading-tight">
                                            {product.title}
                                        </h3>
                                        {product.available ? (
                                            <p className="text-green-600 font-medium text-sm mb-1">
                                                В наличии
                                            </p>
                                        ) : (
                                            <p className="text-red-500 text-sm mb-1">
                                                Нет в наличии
                                            </p>
                                        )}
                                        <p className="text-blue-700 font-semibold text-lg">
                                            {product.price}
                                        </p>
                                    </div>

                                    <div className="flex justify-between mt-4 gap-2">
                                        <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
                                            Купить
                                        </button>
                                        <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Catalogforproduct;
