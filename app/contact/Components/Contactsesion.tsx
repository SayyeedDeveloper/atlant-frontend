"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contactsesion = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-6 justify-center items-start">

                    {/* 📍 Manzil */}
                    <div className="flex flex-col items-center text-center border border-blue-400 rounded-xl p-6 hover:shadow-md transition">
                        <div className="text-blue-600 text-3xl mb-3">
                            <FaMapMarkerAlt />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Наш адрес
                        </h3>
                        <p className="text-gray-600">
                            Бухарская область, Город Каган, ул. Махмуд Торобий, 183
                        </p>
                    </div>

                    {/* 📞 Telefonlar */}
                    <div className="flex flex-col items-center text-center border border-blue-400 rounded-xl p-6 hover:shadow-md transition">
                        <div className="text-blue-600 text-3xl mb-3">
                            <FaPhoneAlt />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Контактный телефон
                        </h3>
                        <ul className="text-gray-600 space-y-1">
                            <li>+998 99 707 00 59 (Улугбек ака)</li>
                            <li>+998 99 707 29 99 (Ихтиёр ака)</li>
                            <li>+998 99 707 56 55 (Мухриддин ака)</li>
                            <li>+998 99 709 05 10 (Диёрбек ака)</li>
                            <li>+998 99 118 22 00 (Ражаб ака)</li>
                        </ul>
                    </div>

                    {/* ✉️ Email */}
                    <div className="flex flex-col items-center text-center border border-blue-400 rounded-xl p-6 hover:shadow-md transition">
                        <div className="text-blue-600 text-3xl mb-3">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Эл.почта
                        </h3>
                        <a
                            href="mailto:atlant-fortuna@mail.ru"
                            className="text-blue-600 hover:underline"
                        >
                            atlant-fortuna@mail.ru
                        </a>
                    </div>
                </div>

                {/* ✍️ Tugma */}
                <div className="flex justify-center mt-10">
                    <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
                        Написать
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contactsesion;
