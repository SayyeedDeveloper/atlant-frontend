import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Atlant - Фильтры очистки воды и промышленное оборудование",
    template: "%s | Atlant",
  },
  description: "Поставка фильтров очистки воды, промышленного оборудования и систем водоподготовки. Качественные решения для вашего бизнеса.",
  keywords: ["фильтры воды", "очистка воды", "промышленное оборудование", "atlant"],
  authors: [{ name: "Atlant" }],
  creator: "Atlant",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://atlant.uz",
    title: "Atlant - Фильтры очистки воды и промышленное оборудование",
    description: "Поставка фильтров очистки воды, промышленного оборудования и систем водоподготовки",
    siteName: "Atlant",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlant - Фильтры очистки воды",
    description: "Поставка фильтров очистки воды и промышленного оборудования",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}

        <Footer/>

      </body>
    </html>
  );
}
