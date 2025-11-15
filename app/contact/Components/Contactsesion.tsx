"use client";
import React, { useState, useEffect } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
    User,
    MessageCircle,
} from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });

            setTimeout(() => setSubmitted(false), 5000);
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactPersons = [
        { name: "Улугбек", phone: "+998 99 707 00 59", position: "Главный менеджер", emoji: "👨‍💼", color: "from-blue-500 to-blue-600" },
        { name: "Ихтиёр", phone: "+998 99 707 29 99", position: "Отдел продаж", emoji: "🎯", color: "from-blue-600 to-blue-700" },
        { name: "Мухриддин", phone: "+998 99 707 56 55", position: "Техподдержка", emoji: "🔧", color: "from-cyan-500 to-blue-500" },
        { name: "Диёрбек", phone: "+998 99 709 05 10", position: "Консультант", emoji: "💡", color: "from-sky-500 to-blue-600" },
        { name: "Ражаб", phone: "+998 99 118 22 00", position: "Специалист", emoji: "⚡", color: "from-indigo-500 to-blue-600" },
    ];

    return (
        <div className="relative min-h-screen bg-white py-20 px-4 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:44px_44px]"></div>

            {/* Soft Blue Gradient Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl"></div>

            {/* Subtle Cursor Follow Effect */}
            <div
                className="pointer-events-none fixed w-96 h-96 rounded-full bg-gradient-radial from-blue-100/40 to-transparent blur-3xl transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 animate-gradient">
                        Контакты
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Готовы начать? Свяжитесь с нами любым удобным способом
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Contact Form - Left Side */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

                        <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Отправить сообщение</h2>
                            </div>

                            {submitted ? (
                                <div className="text-center py-20 space-y-6 animate-fade-in">
                                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                                        <CheckCircle className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">Отлично!</h3>
                                    <p className="text-gray-600 text-lg">
                                        Ваше сообщение успешно отправлено.<br />
                                        Мы свяжемся с вами в ближайшее время!
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <User className="w-4 h-4 text-blue-600" />
                                            Ваше имя
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Введите ваше имя"
                                            className="w-full px-6 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-blue-600" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full px-6 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-blue-600" />
                                                Телефон
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+998 XX XXX XX XX"
                                                className="w-full px-6 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <MessageCircle className="w-4 h-4 text-blue-600" />
                                            Сообщение
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            placeholder="Расскажите нам о вашем проекте..."
                                            className="w-full px-6 py-4 bg-blue-50/50 border-2 border-blue-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full relative px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="relative flex items-center justify-center gap-3">
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Отправка...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-6 h-6" />
                                                    Отправить сообщение
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Info - Right Side */}
                    <div className="space-y-6">
                        {/* Address Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Наш офис</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                            Бухарская область, Город Каган<br />
                                            ул. Махмуд Торобий, 183
                                        </p>
                                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl text-blue-700 font-semibold transition-all group/btn">
                                            <MapPin className="w-5 h-5 group-hover/btn:animate-bounce" />
                                            Открыть карту
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
                                        <a
                                            href="mailto:atlant-fortuna@mail.ru"
                                            className="text-xl text-blue-600 hover:text-blue-700 transition-colors font-semibold"
                                        >
                                            atlant-fortuna@mail.ru
                                        </a>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Ответим в течение 24 часов
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Часы работы</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 font-medium">Пн - Пт</span>
                                                <span className="text-gray-900 font-bold">09:00 - 18:00</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 font-medium">Суббота</span>
                                                <span className="text-gray-900 font-bold">09:00 - 14:00</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 font-medium">Воскресенье</span>
                                                <span className="text-red-600 font-bold">Выходной</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Persons Grid */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">Наша команда</h2>
                        <p className="text-xl text-gray-600">Выберите специалиста для связи</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {contactPersons.map((person, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className={`absolute -inset-1 bg-gradient-to-r ${person.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                                <div className="relative bg-white rounded-3xl p-6 border-2 border-blue-200 shadow-xl hover:shadow-2xl h-full transition-all duration-300 group-hover:scale-105">
                                    <div className="text-center space-y-4">
                                        <div className="relative">
                                            <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${person.color} rounded-2xl flex items-center justify-center text-4xl transform group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                                                {person.emoji}
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-pulse shadow-lg"></div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{person.position}</p>
                                        </div>

                                        <a
                                            href={`tel:${person.phone.replace(/\s/g, "")}`}
                                            className={`block w-full px-4 py-3 bg-gradient-to-r ${person.color} rounded-xl text-white font-semibold hover:shadow-2xl transform hover:scale-105 transition-all`}
                                        >
                                            <Phone className="w-4 h-4 inline mr-2" />
                                            Позвонить
                                        </a>

                                        <p className="text-xs text-gray-500 font-mono">{person.phone}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ContactSection;