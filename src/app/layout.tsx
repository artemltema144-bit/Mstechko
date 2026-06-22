import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MESTECHKO online — Официальный сайт игры",
  description: "MESTECHKO online — уникальная кубическая игра с двумя серверами: строительство на карте Городок и CRMP в стиле ГТА. Присоединяйся к нашему комьюнити!",
  keywords: "местечко онлайн, местечко, городок ирновия, игра крмп, гта, мультикрафт, кубическая игра, сервер городок",
  openGraph: {
    title: "MESTECHKO online — Кубическая игра в стиле CRMP",
    description: "Играй в MESTECHKO online: строительство и экшен в одном мире.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
