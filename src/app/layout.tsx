import type { Metadata } from "next";
import "./globals.scss";
import { Montserrat } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Чтец",
<<<<<<< HEAD
  description: "Проект1",
=======
  description: "Генерируй аудио с помощью ИИ",
>>>>>>> b818ecb825a041db46af4b64f9fba15f69fdb060
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable}`}>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
