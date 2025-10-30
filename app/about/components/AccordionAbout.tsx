"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";

const AccordionAbout = () => {
    const workSchedule = [
        { day: "Понедельник", hours: "09:00 - 18:00", break: "13:00 - 14:00" },
        { day: "Вторник", hours: "09:00 - 18:00", break: "13:00 - 14:00" },
        { day: "Среда", hours: "09:00 - 18:00", break: "13:00 - 14:00" },
        { day: "Четверг", hours: "09:00 - 18:00", break: "13:00 - 14:00" },
        { day: "Пятница", hours: "09:00 - 18:00", break: "13:00 - 14:00" },
        { day: "Суббота", hours: "09:00 - 18:00", break: "13:00 - 14:00" },
        { day: "Воскресенье", hours: "Выходной", break: null },
    ];

    return (
        <>
            <div className="container mx-auto max-w-7xl p-10 md:p-20">
                <Accordion type="single" collapsible className="md:w-[80%] mx-auto" defaultValue="1">
                    {/* 🟦 Atlant Fortuna */}
                    <AccordionItem value="1">
                        <AccordionTrigger className="text-xl">Atlant Fortuna</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-6 text-lg text-justify">
                            <p>ООО «Atlant Fortuna» было создано в 2016 году для внедрения ...</p>
                            <p>ООО “Atlant Fortuna” – первая компания ...</p>
                            <p>Также мы осуществляем поставку комплектующих ...</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* 🟩 Partners */}
                    <AccordionItem value="2">
                        <AccordionTrigger className="text-xl">Нашими партнёрами являются</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            <ul className="list-disc list-inside leading-8">
                                <li>Компания Навоийский горно-металлургический комбинат</li>
                                <li>Компания Enter Engineering PTE LTD</li>
                                {/* boshqa elementlar */}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* 🟨 Addresses */}
                    <AccordionItem value="3">
                        <AccordionTrigger className="text-xl">Адреса офисов</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            <Table className="text-sm md:text-base">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Офис</TableHead>
                                        <TableHead>Локация</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Основной офис</TableCell>
                                        <TableCell>Бухарская область, г. Каган, ул. Махмуд Торобий, 183</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>

                    {/* 🟧 Work schedule */}
                    <AccordionItem value="4">
                        <AccordionTrigger className="text-xl">График работы</AccordionTrigger>
                        <AccordionContent>
                            <div className="bg-white rounded-2xl p-6 md:text-justify">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {workSchedule.map((item, index) => (
                                        <div key={index} className="flex justify-between p-4 rounded-xl">
                                            <span className="font-medium text-gray-700">{item.day}</span>
                                            <div className="text-right">
                                                {item.hours === "Выходной" ? (
                                                    <span className="text-red-500 font-semibold">{item.hours}</span>
                                                ) : (
                                                    <>
                                                        <p className="text-gray-800 font-medium">График {item.hours}</p>
                                                        <p className="text-sm text-gray-500">Перерыв {item.break}</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <iframe
                    className="mx-auto mt-10 rounded-md w-72 h-50 md:w-[780px] md:h-[410px]"
                    src="https://www.youtube.com/embed/0rhml4OCWdo"
                    title="25 ноября 2024 г."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            {/* 🟦 Footer */}
            <footer className="bg-gray-700 text-white">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">У вас есть вопросы?</h3>
                        <p className="text-sm text-gray-200 mb-4">
                            Закажите звонок и мы свяжемся с вами в ближайшее время
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all">
                            Заказать звонок
                        </button>
                    </div>

                    <div className="flex flex-col items-start md:items-center">
                        <h3 className="text-lg font-semibold mb-3">Мы в соц. сетях</h3>
                        <div className="flex gap-4 text-2xl">
                            <a
                                href="https://www.instagram.com/atlant_fortuna"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://t.me/suv_filtrlari"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors"
                            >
                                <FaTelegramPlane />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Контакты</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li className="flex items-start gap-2">
                                <MdLocationOn className="mt-1" />
                                <span>Бухарская область, Город Каган, ул. Махмуд Торобий, 183</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +998 99 707 00 59
                            </li>
                            <li className="flex items-center gap-2">
                                <HiOutlineMail /> atlant-fortuna@mail.ru
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 py-3 text-center text-sm text-gray-300 flex flex-col md:flex-row justify-between items-center px-6">
                    <p>© 2025 ООО "Atlant Fortuna"</p>
                    <a href="#" className="hover:text-blue-400 transition-colors text-sm mt-2 md:mt-0">
                        Создать сайт бесплатно
                    </a>
                </div>
            </footer>
        </>
    );
};

export default AccordionAbout;
