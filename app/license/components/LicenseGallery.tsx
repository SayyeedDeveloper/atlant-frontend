"use client";
import React, { useState } from "react";
import { X, Download, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        id: 1,
        src: "/images/license1.jpg",
        pdf: "/pdfs/license1.pdf",
        title: "Лицензия №1",
        description: "Государственная лицензия",
        issueDate: "2023-01-15",
    },
    {
        id: 2,
        src: "/images/license2.jpg",
        pdf: "/pdfs/license2.pdf",
        title: "Лицензия №2",
        description: "Сертификат качества",
        issueDate: "2023-03-20",
    },
    {
        id: 3,
        src: "/images/license3.jpg",
        pdf: "/pdfs/license3.pdf",
        title: "Лицензия №3",
        description: "Международный сертификат",
        issueDate: "2023-06-10",
    },
    {
        id: 4,
        src: "/images/license4.jpg",
        pdf: "/pdfs/license4.pdf",
        title: "Лицензия №4",
        description: "Аккредитация",
        issueDate: "2023-09-05",
    },
];

const LicenseGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (img: {
        id: number;
        src: string;
        pdf: string;
        title: string;
        description: string;
        issueDate: string
    } | { id: number; src: string; pdf: string; title: string; description: string; issueDate: string } | {
        id: number;
        src: string;
        pdf: string;
        title: string;
        description: string;
        issueDate: string
    } | { id: number; src: string; pdf: string; title: string; description: string; issueDate: string }) => {
        setSelectedImage(img);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "unset";
        setTimeout(() => setSelectedImage(null), 300);
    };

    const navigateImage = (direction: string) => {
        const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
        const newIndex =
            direction === "next"
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
    };

    const handleDownload = (pdfUrl: string, title: string) => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 animate-fade-in">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-indigo-100 text-blue-500 rounded-full text-sm font-semibold tracking-wide uppercase">
                                Сертификаты
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                            Лицензионные Сертификаты
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Наши официальные разрешения и аккредитации
                        </p>
                        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {images.map((img, index) => (
                            <div
                                key={img.id}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                            <button
                                                onClick={() => openModal(img)}
                                                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-indigo-50 hover:scale-105"
                                            >
                                                <ZoomIn className="w-5 h-5" />
                                                Открыть
                                            </button>
                                            <button
                                                onClick={() => handleDownload(img.pdf, img.title)}
                                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-indigo-700 hover:scale-105"
                                            >
                                                <Download className="w-5 h-5" />
                                                Скачать PDF
                                            </button>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                                            <span className="text-xs font-bold text-blue-600">
                                                №{img.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                                        {img.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {img.description}
                                    </p>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        {new Date(img.issueDate).toLocaleDateString("ru-RU")}
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
                        isModalOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
                            <div>
                                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                                <p className="text-indigo-100 text-sm mt-1">
                                    {selectedImage.description}
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Image */}
                        <div className="relative bg-gray-100">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />

                            {/* Navigation Buttons */}
                            <button
                                onClick={() => navigateImage("prev")}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-900" />
                            </button>
                            <button
                                onClick={() => navigateImage("next")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-900" />
                            </button>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-between p-6 bg-gray-50">
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold">Дата выдачи:</span>{" "}
                                {new Date(selectedImage.issueDate).toLocaleDateString("ru-RU", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={selectedImage.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                                >
                                    <ZoomIn className="w-5 h-5" />
                                    Открыть в новой вкладке
                                </a>
                                <button
                                    onClick={() => handleDownload(selectedImage.pdf, selectedImage.title)}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
                                >
                                    <Download className="w-5 h-5" />
                                    Скачать PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.6s ease-out both;
                }
            `}</style>
        </>
    );
};

export default LicenseGallery;