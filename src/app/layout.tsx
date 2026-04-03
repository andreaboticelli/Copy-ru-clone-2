import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Копицентр и Типография у метро Москва-Сити | COPY.RU (Копи.Ру)",
  description:
    "Копицентр Москва-Сити ✅ Сеть современных копировальных центров в Москве ➤ Удобное расположение ➤ Работаем 24/7 Звоните ☎ +7(495)156-10-00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[rgb(50,53,57)]">
        {children}
      </body>
    </html>
  );
}
