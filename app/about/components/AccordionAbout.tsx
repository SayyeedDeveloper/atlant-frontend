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
                            <p>ООО «Atlant Fortuna» было создано в 2016 году для внедрения высокотехнологичных и инновационных методов водоочистки в рынок Узбекистана. Основным продуктом нашей компании являются системы очистки воды на основе технологии обратного осмоса, которая на сегодняшний день является самой современной и передовой технологией в водоочистке. Мы имеем возможность производства систем разной конфигурации и комплектации, исходя из степени загрязнённости сырьевой воды и на основании требований заказчика к конечной воде.


                                ООО “Atlant Fortuna” – первая компания в Узбекистане, которая внедрила производство систем очистки воды производительностью более 50000 литров в час. С момента создания компания запустила более 100 проектов водоочистки мощностью от 1000 литров в час до 50000 литров в час. Наши системы очистки воды успешно функционируют во многих отраслях народного хозяйства Республики Узбекистан.



                                Также мы осуществляем поставку комплектующих частей к системам очистки воды таких как мембраны обратного осмоса, ультрафильтрационные мембраны, картриджные фильтры, насосы, ионообменные смолы и прочие комплектующие части, произведённые ведущими мировыми брендами в области водоочистки, такими как Hydranautics (США), TORAY (Япония), DOW Filmtec (США), VONTRON (Китай), CSM (Южная Корея) и другие.</p>

                        </AccordionContent>
                    </AccordionItem>

                    {/* 🟩 Partners */}
                    <AccordionItem value="2">
                        <AccordionTrigger className="text-xl">Нашими партнёрами являются</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            <ul className="list-disc list-inside leading-8">
                                <li>Компания Навоийский горно-металлургический комбинат</li>
                                <li>Компания Enter Engineering PTE LTD</li>
                                <li>Компания Eriell Uzbekistan</li>
                                <li>АО СП УЗБАТ А О British American Tobacco</li>
                                <li>АО UZAUTOMOTORS POWERTRAIN</li>
                                <li>ООО AKFA ASSEMBLY торговая марка AKFA</li>
                                <li>ООО Artel Electronics Manufacturing торговая марка ARTEL</li>
                                <li>ИП ООО Кнауф Гипс Бухара</li>
                                <li>Холдинг Jizzah Organic</li>
                                <li>Компания Мубарекское нефтегазодобывающее управление</li>
                                <li>ООО Buxoro Agroklaster DZZ торговая марка Lattico</li>
                                <li>ООО Дехканабадский калийный завод</li>
                                <li>ООО Кунградский содовый завод</li>
                                <li>Частные подрядные организации по проектам Обод махалла и Обод кишлок</li>
                                <li>ООО Silver-Vita питьевая вода Silver</li>
                                <li>ООО Real best hamkor питьевая вода Zam-zam</li>
                                <li>ООО Zarafshon Golden Group</li>
                                <li>ФХ Yangi Asr торговая марка Sof IN</li>
                                <li>Представительство компании MYUNG SUNG PLACON LTD Южная Корея в Узбекистане</li>
                                <li>Представительство компании Asya Sera Туркия в Узбекистане</li>
                                <li>Частные тепличные хозяйства</li>
                                <li>Частные производители питьевой воды и многие другие компании</li>


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
                                    <TableRow>
                                        <TableCell>Филиал в г. Ташкент</TableCell>
                                        <TableCell>	г. Ташкент, Чиланзарский район, ул.Гавхар, дом 122А/1</TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Филиал в г. Карши</TableCell>
                                        <TableCell>Кашкадарьинская область, г. Карши, Киличбек- Кургонча МСГ, ул. Каманди, дом 63А</TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Филиал в г. Ургенч</TableCell>
                                        <TableCell>Хорезмская область, Ургенчский район, махаллинский сход граждан Учкуприк, улица Фарход, 78</TableCell>

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



        </>
    );
};

export default AccordionAbout;
