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

        </>
    );
};

export default AccordionAbout;
