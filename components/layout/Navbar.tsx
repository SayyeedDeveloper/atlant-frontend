'use client'

import Image from "next/image";
import {FaRegHeart} from "react-icons/fa";
import {FiMenu, FiSearch, FiShoppingCart} from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Sheet, SheetContent, SheetTitle, SheetTrigger, SheetHeader} from "@/components/ui/sheet";
import {useState} from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";


const Navbar = () => {
    const t = useTranslations("navbar");
    const pathname = usePathname();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const navigationLinks = [
        { name: <IoHome className="w-6 h-6" />, link: "", key: "home" },
        { name: t("links.about"), link: "about", key: "about" },
        { name: t("links.catalog"), link: "category", key: "catalog" },
        { name: t("links.payment"), link: "payment-delivery", key: "payment" },
        { name: t("links.services"), link: "articles", key: "services" },
        { name: t("links.contacts"), link: "contact", key: "contacts" },
        { name: t("links.gallery"), link: "photo-galery", key: "gallery" },
        { name: t("links.discounts"), link: "discount", key: "discounts" },
        { name: t("links.licenses"), link: "license", key: "licenses" },
    ];

    const handleLinkClick = () => {
        setIsSheetOpen(false);
    };

    return(
        <div className={"fixed top-0 left-0 right-0 z-50"}>
            {/* Upper Navbar */}
            <div className={"bg-white border-b-1  border-gray-300 "}>
                <div className={"flex justify-between items-center py-2 max-w-7xl container mx-auto px-5"}>
                    <div className={"flex items-center gap-1 md:gap-4"}>
                        {/* Mobile menu button */}
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger asChild>
                                <button className={"lg:hidden"}>
                                    <FiMenu className={"w-6 h-6 text-primary hover:text-primary/50"}/>
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle className={"text-2xl"}>Меню</SheetTitle>
                                </SheetHeader>
                                <div className={"flex flex-col gap-4 mt-4"}>
                                    {navigationLinks.map((link) => (
                                        <Link
                                            key={link.link}
                                            className={"px-4 py-2 hover:bg-gray-100 rounded-md text-gray-800 hover:text-primary text-lg font-medium border-b border-gray-200 last:border-b-0"}
                                            href={`/${link.link}`}
                                            onClick={handleLinkClick}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                        {/* Logo */}
                        <Link href={"/"}><Image className={"w-14 h-14 select-none"} src={"/navLogo.png"} alt={"Logo"} width={100} height={100}/></Link>

                    </div>

                    {/* Search */}
                    <div className={"hidden sm:flex w-2/8 items-center rounded-md hover:border-ring hover:ring-primary/90 hover:ring-[3px] px-2 py-1 border border-gray-300 hover:border-white"}>
                        <input className={" border-none focus:border-none outline-none w-full"} placeholder={"Search"} type={"text"}/>
                        <Link href={"adfakld"}></Link>
                    </div>

                    {/* Buttons */}
                    <div className={"flex items-center justify-between gap-3"}>
                        <LanguageSwitcher />
                        <FaRegHeart className={"w-6 h-6 text-primary hover:text-primary/50"}/>
                        <FiShoppingCart className={"w-6 h-6 text-primary hover:text-primary/50"}/>
                        <FiSearch  className={"block sm:hidden w-6 h-6 text-primary hover:text-primary/50"}/>
                    </div>
                </div>

            </div>
            {/* Desktop Bottom Navbar */}
            <div className={" hidden lg:block bg-primary"}>
                {/* Links */}
                <div className={"flex justify-between items-center py-4 max-w-7xl container mx-auto px-10 text-white"}>
                    {
                        navigationLinks.map((link) => (
                            <Link
                                key={link.link}
                                className={`px-2 py-1 hover:bg-white rounded-md hover:text-primary text-lg font-semibold ${
                                    pathname === `/${link.link}` ? 'bg-white text-primary' : ''
                                }`}
                                href={`/${link.link}`}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar