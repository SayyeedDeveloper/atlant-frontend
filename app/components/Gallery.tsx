"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react";

const Gallery = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    const images = [
        { src: "/images/Gallery1.webp", title: "Фотография" },
        { src: "/images/gallery2.webp", title: "Фотография" },
        { src: "/images/Gallery3.webp", title: "Фотография" },
        { src: "/images/Gallery4.webp", title: "Фотография" },
        { src: "/images/Gallery5.webp", title: "Фотография" },
        { src: "/images/Gallery6.webp", title: "Фотография" },
        { src: "/images/Gallery7.webp", title: "Фотография" },
        { src: "/images/Gallery8.webp", title: "Фотография" },
    ];

    const totalPages = Math.ceil(images.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const displayedImages = images.slice(startIndex, startIndex + imagesPerPage);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selected) return;
            if (e.key === "Escape") closeModal();
            else if (e.key === "ArrowLeft") navigateImage("prev");
            else if (e.key === "ArrowRight") navigateImage("next");
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selected, currentIndex]);

    const openModal = (src: string, index: number) => {
        setSelected(src);
        setCurrentIndex(startIndex + index);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelected(null);
        setIsZoomed(false);
        document.body.style.overflow = "unset";
    };

    const navigateImage = (direction: string) => {
        const newIndex = direction === "next"
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelected(images[newIndex].src);
    };

    const handleDownload = (src: string, title: string) => {
        const link = document.createElement("a");
        link.href = src;
        link.download = `${title}.webp`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const changePage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl translate-x-32 translate-y-32" />

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
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayedImages.map((img, i) => (
                        <motion.div
                            key={startIndex + i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay buttons */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <button
                                        onClick={() => openModal(img.src, i)}
                                        className="p-4 bg-white rounded-2xl text-gray-900 hover:scale-110 transition"
                                    >
                                        <ZoomIn className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => handleDownload(img.src, img.title)}
                                        className="p-4 bg-blue-600 rounded-2xl text-white hover:scale-110 transition"
                                    >
                                        <Download className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-5 flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-700">{img.title}</span>
                                <button
                                    onClick={() => openModal(img.src, i)}
                                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                                >
                                    Открыть
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={() => currentPage > 1 && changePage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 ${
                                currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Назад
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => changePage(i + 1)}
                                    className={`min-w-[3rem] h-12 rounded-xl font-bold transition ${
                                        currentPage === i + 1
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-blue-50'
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => currentPage < totalPages && changePage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 ${
                                currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                            Вперед
                            <ChevronRight className="w-5 h-5" />
                        </button>
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
                        className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 rounded-full text-white font-semibold">
                            {currentIndex + 1} / {images.length}
                        </div>

                        {/* Navigation buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: isZoomed ? 1.5 : 1 }}
                            className="max-w-7xl max-h-[90vh] p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selected}
                                alt={images[currentIndex].title}
                                className="max-w-full max-h-[85vh] rounded-2xl object-contain cursor-pointer"
                                onClick={() => setIsZoomed(!isZoomed)}
                            />
                        </motion.div>

                        {/* Bottom buttons */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold flex items-center gap-2"
                            >
                                <ZoomIn className="w-5 h-5" />
                                {isZoomed ? "Уменьшить" : "Увеличить"}
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); handleDownload(selected, images[currentIndex].title); }}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Скачать
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
