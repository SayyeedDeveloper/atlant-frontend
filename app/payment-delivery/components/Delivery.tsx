"use client";
import React from "react";
import {
    FaMoneyBillWave,
    FaCreditCard,
    FaTruck,
    FaStore,
    FaGlobe,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type Product = {
    id: number;
    title: string;
    price: string;
    available: boolean;
    image: string;
};

const recommendedProducts: Product[] = [
    { id: 1, title: "Генератор озона DNA-10G-A", price: "5 575 200 сум", available: true, image: "/images/Recomend1.webp" },
    { id: 2, title: "Фильтр Atlant Fortuna, 8 ступеней", price: "1 951 320 сум", available: true, image: "/images/Recomend2.webp" },
    { id: 3, title: "Насосная станция SHIMGE JET 1100G2", price: "1 602 870 сум", available: true, image: "/images/Recomend3.webp" },
    { id: 4, title: "Система обратного осмоса HLDRO-500LPH", price: "28 572 900 сум", available: true, image: "/images/Recomend4.webp" },
    { id: 5, title: "Насосная станция SHIMGE JET 750G2", price: "1 393 800 сум", available: true, image: "/images/Recomend5.webp" },
];

const Delivery = () => {
    const paymentMethods = [
        {
            icon: <FaMoneyBillWave className="text-blue-600 text-3xl" />,
            title: "Наличными",
            text: `Оплата наличными осуществляется в головном офисе в г.Каган (Бухарская область), либо в одном из филиалов в Ташкенте, Карши или Ургенче.
[1] Бухара, г. Каган, ул. Махмуд Торобий, 183.
[2] Ташкент, Чиланзар, ул.Гавхар, 122А1.
[3] Карши, ул. Каманди, 63А.
[4] Ургенч, ул. Фарход, 78.`,
        },
        {
            icon: <MdPayments className="text-blue-600 text-3xl" />,
            title: "Перечислением",
            text: `Получатель: ООО "Atlant Fortuna";
Р/с: 20208000800705643001 в АКБ "Узпромстройбанк";
МФО:00440; ИНН:304440114.
Условия оплаты — предоплата 100%.`,
        },
        {
            icon: <FaCreditCard className="text-blue-600 text-3xl" />,
            title: "Терминал UzCard / HUMO",
            text: `Оплата банковской картой UzCard или HUMO осуществляется в офисе отдела продаж.`,
        },
        {
            icon: <FaGlobe className="text-blue-600 text-3xl" />,
            title: "Онлайн оплата (Click)",
            text: `Для оплаты:
(1) Введите "ATLANT FORTUNA AF" в поиске Click,
(2) выберите компанию,
(3) укажите номер заказа, телефон и сумму,
(4) оплатите,
(5) ожидайте звонка для подтверждения.`,
        },
    ];

    const deliveryMethods = [
        {
            icon: <FaTruck className="text-blue-500 text-3xl" />,
            title: "Курьерская доставка",
            text: `Доставка осуществляется через BTS. Стоимость — 100 000 сум.
Все регионы Узбекистана.
Подробнее: https://bts.uz/ru/calculate`,
        },
        {
            icon: <FaStore className="text-blue-500 text-3xl" />,
            title: "Самовывоз",
            text: `Заберите товар в наших офисах:
[1] Бухара, г. Каган, ул. Махмуд Торобий, 183.
[2] Ташкент, ул.Гавхар, 122А1.
[3] Карши, ул. Каманди, 63А.
[4] Ургенч, ул. Фарход, 78.`,
        },
        {
            icon: <FaTruck className="text-blue-500 text-3xl" />,
            title: "Транспортная компания",
            text: `Доставка крупногабаритного оборудования осуществляется грузовым автотранспортом.
Стоимость — от 1 000 000 сум.
Бесплатная погрузка, разгрузка — за счёт покупателя.`,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10 text-center shadow-md">
                <h1 className="text-4xl font-bold">Оплата и доставка</h1>
            </div>

            <div className="flex-1 container mx-auto px-4 py-10">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Способы оплаты</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paymentMethods.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold text-blue-500 mt-12 mb-6">Способы доставки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {deliveryMethods.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

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
                        {recommendedProducts.map((product) => (
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
                                            <p className="text-green-600 font-medium text-sm mb-1">В наличии</p>
                                        ) : (
                                            <p className="text-red-500 text-sm mb-1">Нет в наличии</p>
                                        )}
                                        <p className="text-blue-700 font-semibold text-lg">{product.price}</p>
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

export default Delivery;
