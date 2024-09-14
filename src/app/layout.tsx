import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

const tomatoes = localFont({
  src: "./fonts/tomatoes.ttf",
  variable: "--tomatoes",
});
const biteChocolate = localFont({
  src: "./fonts/bite-chocolate.ttf",
  variable: "--bite-chocolates",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: "Confeitaria Diana | Lençóis Paulistas, SP",
  description:
    "Confeitaria Diana é uma confeitaria inovadora em Lençóis Paulistas, SP, especializada em doces artesanais de alta qualidade.",
  keywords: [
    "Confeitaria Diana",
    "Lençóis Paulistas",
    "confeitaria",
    "doces artesanais",
    "bolos",
  ],
  openGraph: {
    title: "Confeitaria Diana | Lençóis Paulistas, SP",
    description:
      "Conheça a Confeitaria Diana, uma confeitaria em Lençóis Paulistas, SP, famosa por seus deliciosos doces artesanais.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confeitaria Diana | Lençóis Paulistas, SP",
    description:
      "Confeitaria Diana oferece uma vasta seleção de doces artesanais em Lençóis Paulistas, SP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${biteChocolate.variable} ${tomatoes.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
