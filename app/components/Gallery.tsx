"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react";

const Gallery = () => {
    const [selected, setSelected] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    const images = [
        { src: "/images/Gallery1.webp", title: "Фото 1" },
        { src: "/images/gallery2.webp", title: "Фото 2" },
        { src: "/images/Gallery3.webp", title: "Фото 3" },
        { src: "/images/Gallery4.webp", title: "Фото 4" },
        { src: "/images/Gallery5.webp", title: "Фото 5" },
        { src: "/images/Gallery6.webp", title: "Фото 6" },
        { src: "/images/Gallery7.webp", title: "Фото 7" },
        { src: "/images/Gallery8.webp", title: "Фото 8" },
    ];

    const totalPages = Math.ceil(images.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const displayedImages = images.slice(startIndex, endIndex);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selected) return;

            if (e.key === "Escape") {
                setSelected(null);
                setIsZoomed(false);
            } else if (e.key === "ArrowLeft") {
                navigateImage("prev");
            } else if (e.key === "ArrowRight") {
                navigateImage("next");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selected, currentIndex]);

    const openModal = (src, index) => {
        setSelected(src);
        setCurrentIndex(startIndex + index);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelected(null);
        setIsZoomed(false);
        document.body.style.overflow = "unset";
    };

    const navigateImage = (direction) => {
        let newIndex;
        if (direction === "next") {
            newIndex = (currentIndex + 1) % images.length;
        } else {
            newIndex = (currentIndex - 1 + images.length) % images.length;
        }
        setCurrentIndex(newIndex);
        setSelected(images[newIndex].src);
    };

    const handleDownload = (src, title) => {
        const link = document.createElement("a");
        link.href = src;
        link.download = `${title}.webp`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
            {/* Background Decorations - Blue Theme */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 mb-4">
                        Фотогалерея
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Наши лучшие моменты и достижения в фотографиях
                    </p>

                    <div className="mt-6 h-1 w-24 bg-gradient-to-r "></div>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {displayedImages.map((img, i) => (
                        <motion.div
                            key={startIndex + i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Main Card Container */}
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

                                {/* Gradient Border Effect - Blue */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                {/* Inner Card */}
                                <div className="relative bg-white rounded-3xl overflow-hidden">

                                    {/* Image Container with Aspect Ratio */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={img.src}
                                            alt={img.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                            loading="lazy"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Top Right Badge - Blue */}
                                        <div className="absolute top-4 right-4">
                                            <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg">
                                                <span className="text-xs font-bold text-white">
                                                    #{startIndex + i + 1}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Center Action Buttons */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <motion.button
                                                whileHover={{ scale: 1.15, rotate: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => openModal(img.src, i)}
                                                className="p-4 bg-white rounded-2xl text-gray-900 shadow-2xl hover:shadow-blue-500/50 transition-all"
                                            >
                                                <ZoomIn className="w-6 h-6" />
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.15, rotate: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleDownload(img.src, img.title)}
                                                className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white shadow-2xl hover:shadow-blue-500/50 transition-all"
                                            >
                                                <Download className="w-6 h-6" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-gray-700">{img.title}</span>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => openModal(img.src, i)}
                                                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                                            >
                                                Открыть
                                                <ChevronRight className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements - Blue */}
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex flex-col items-center gap-8 mt-20">
                        {/* Pagination Controls */}
                        <div className="flex items-center gap-3">
                            {/* Previous Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                                className={`px-6 py-3 rounded-2xl font-semibold transition-all shadow-lg flex items-center gap-2 ${
                                    currentPage === 1
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:shadow-xl'
                                }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span className="hidden sm:inline">Назад</span>
                            </motion.button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-lg border border-gray-100">
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;

                                    const showPage =
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

                                    const showEllipsisBefore = pageNumber === currentPage - 2 && currentPage > 3;
                                    const showEllipsisAfter = pageNumber === currentPage + 2 && currentPage < totalPages - 2;

                                    if (showEllipsisBefore || showEllipsisAfter) {
                                        return (
                                            <span key={pageNumber} className="px-2 text-gray-400 font-bold">
                                                ...
                                            </span>
                                        );
                                    }

                                    if (!showPage) return null;

                                    return (
                                        <motion.button
                                            key={pageNumber}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => goToPage(pageNumber)}
                                            className={`min-w-[3rem] h-12 rounded-xl font-bold transition-all ${
                                                currentPage === pageNumber
                                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50 scale-110'
                                                    : 'bg-transparent text-gray-700 hover:bg-blue-50'
                                            }`}
                                        >
                                            {pageNumber}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Next Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-6 py-3 rounded-2xl font-semibold transition-all shadow-lg flex items-center gap-2 ${
                                    currentPage === totalPages
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 hover:shadow-xl'
                                }`}
                            >
                                <span className="hidden sm:inline">Вперед</span>
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Page Info */}

                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all z-10"
                            onClick={closeModal}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold">
                            {currentIndex + 1} / {images.length}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("prev");
                            }}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("next");
                            }}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: isZoomed ? 1.5 : 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-7xl max-h-[90vh] p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selected}
                                alt={images[currentIndex].title}
                                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain cursor-pointer"
                                onClick={() => setIsZoomed(!isZoomed)}
                            />
                        </motion.div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold transition-all flex items-center gap-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsZoomed(!isZoomed);
                                }}
                            >
                                <ZoomIn className="w-5 h-5" />
                                {isZoomed ? "Уменьшить" : "Увеличить"}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 backdrop-blur-sm rounded-full text-white font-semibold transition-all flex items-center gap-2 shadow-lg"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(selected, images[currentIndex].title);
                                }}
                            >
                                <Download className="w-5 h-5" />
                                Скачать
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;