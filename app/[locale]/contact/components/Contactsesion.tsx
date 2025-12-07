"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, X } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<typeof contactPersons[0] | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setSubmitted(false), 5000);
        }, 2000);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactPersons = [
        { name: "Улугбек", phone: "+998 99 707 00 59", position: "Главный менеджер", image: "/team/ulugbek.jpg" },
        { name: "Ихтиёр", phone: "+998 99 707 29 99", position: "Отдел продаж", image: "/team/ikhtiyor.jpg" },
        { name: "Мухриддин", phone: "+998 99 707 56 55", position: "Техподдержка", image: "/team/mukhriddin.jpg" },
        { name: "Диёрбек", phone: "+998 99 709 05 10", position: "Консультант", image: "/team/diyorbek.jpg" },
        { name: "Ражаб", phone: "+998 99 118 22 00", position: "Специалист", image: "/team/rajab.jpg" },
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "#0A7EED" }}>
                        Контакты
                    </h1>
                    <p className="text-xl text-gray-800">
                        Готовы начать? Свяжитесь с нами любым удобным способом
                    </p>
                </div>

                {/* Form + Info Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2" style={{ borderColor: "#0A7EED" }}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Отправить сообщение</h2>

                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: "#0A7EED" }}>
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Отлично!</h3>
                                <p className="text-gray-800 text-lg">
                                    Ваше сообщение успешно отправлено.<br />
                                    Мы свяжемся с вами в ближайшее время!
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Ваше имя</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Введите ваше имя"
                                        className="w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:bg-white focus:outline-none transition"
                                        style={{ borderColor: "#E5E7EB" }}
                                        onFocus={(e) => e.target.style.borderColor = "#0A7EED"}
                                        onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:bg-white focus:outline-none transition"
                                            style={{ borderColor: "#E5E7EB" }}
                                            onFocus={(e) => e.target.style.borderColor = "#0A7EED"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Телефон</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+998 XX XXX XX XX"
                                            className="w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:bg-white focus:outline-none transition"
                                            style={{ borderColor: "#E5E7EB" }}
                                            onFocus={(e) => e.target.style.borderColor = "#0A7EED"}
                                            onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Сообщение</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Расскажите нам о вашем проекте..."
                                        className="w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl focus:bg-white focus:outline-none resize-none transition"
                                        style={{ borderColor: "#E5E7EB" }}
                                        onFocus={(e) => e.target.style.borderColor = "#0A7EED"}
                                        onBlur={(e) => e.target.style.borderColor = "#E5E7EB"}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-5 rounded-2xl font-bold text-white text-lg transition disabled:opacity-50"
                                    style={{ background: isSubmitting ? "#94a3b8" : "#0A7EED" }}
                                    onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.background = "#0865C4")}
                                    onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.background = "#0A7EED")}
                                >
                                    {isSubmitting ? "Отправка..." : (
                                        <span className="flex items-center justify-center gap-3">
                                            <Send className="w-6 h-6" />
                                            Отправить сообщение
                                        </span>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-6">
                        {/* Address */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 cursor-pointer hover:shadow-2xl transition" style={{ borderColor: "#0A7EED" }}>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Город+Каган+ул.+Махмуд+Торобий+183+Bukhara+Region+Uzbekistan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-6"
                            >
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#0A7EED" }}>
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Наш офис</h3>
                                    <p className="text-lg leading-relaxed hover:underline" style={{ color: "#0A7EED" }}>
                                        Бухарская область, Город Каган<br />
                                        ул. Махмуд Торобий, 183
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border-2" style={{ borderColor: "#0A7EED" }}>
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#0A7EED" }}>
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
                                    <a href="mailto:atlant-fortuna@mail.ru" className="text-xl font-semibold" style={{ color: "#0A7EED" }}>
                                        atlant-fortuna@mail.ru
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border-2" style={{ borderColor: "#0A7EED" }}>
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#0A7EED" }}>
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Часы работы</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-800 font-medium">Пн - Пт</span>
                                            <span className="text-gray-900 font-bold">09:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-800 font-medium">Суббота</span>
                                            <span className="text-gray-900 font-bold">09:00 - 14:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-800 font-medium">Воскресенье</span>
                                            <span className="text-red-600 font-bold">Выходной</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: "#0A7EED" }}>
                            Наша команда
                        </h2>
                        <p className="text-xl text-gray-800">Выберите специалиста для связи</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {contactPersons.map((person, index) => (
                            <div key={index} className="bg-white rounded-3xl p-6 shadow-xl border-2 hover:shadow-2xl hover:scale-105 transition" style={{ borderColor: "#0A7EED" }}>
                                <div className="text-center space-y-4">
                                    <div className="relative inline-block">
                                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4" style={{ borderColor: "#0A7EED" }}>
                                            <Image
                                                src={person.image}
                                                alt={person.name}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                                        <p className="text-sm text-gray-700 mb-3">{person.position}</p>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPerson(person)}
                                        className="block w-full px-4 py-3 rounded-xl text-white font-semibold transition"
                                        style={{ background: "#0A7EED" }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "#0865C4"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "#0A7EED"}
                                    >
                                        <Phone className="w-4 h-4 inline mr-2" />
                                        Позвонить
                                    </button>

                                    <p className="text-xs text-gray-700 font-mono">{person.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call Confirmation Modal */}
            {selectedPerson && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPerson(null)}>
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Позвонить?</h3>
                            <button
                                onClick={() => setSelectedPerson(null)}
                                className="text-gray-500 hover:text-gray-900 transition"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="text-center mb-6">
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 mb-4" style={{ borderColor: "#0A7EED" }}>
                                <Image
                                    src={selectedPerson.image}
                                    alt={selectedPerson.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">{selectedPerson.name}</h4>
                            <p className="text-gray-700 mb-3">{selectedPerson.position}</p>
                            <p className="text-2xl font-bold" style={{ color: "#0A7EED" }}>{selectedPerson.phone}</p>
                        </div>

                        <div className="space-y-3">
                            <a
                                href={`tel:${selectedPerson.phone.replace(/\s/g, "")}`}
                                className="block w-full px-6 py-4 rounded-2xl text-white font-bold text-center transition"
                                style={{ background: "#0A7EED" }}
                                onMouseEnter={(e) => e.currentTarget.style.background = "#0865C4"}
                                onMouseLeave={(e) => e.currentTarget.style.background = "#0A7EED"}
                            >
                                <Phone className="w-5 h-5 inline mr-2" />
                                Позвонить сейчас
                            </a>
                            <button
                                onClick={() => setSelectedPerson(null)}
                                className="block w-full px-6 py-4 rounded-2xl border-2 font-bold text-gray-900 transition hover:bg-gray-50"
                                style={{ borderColor: "#E5E7EB" }}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactSection;
