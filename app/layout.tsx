import { Luckiest_Guy, Baloo_2, Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stand Up For Yourself and Others!",
  description: "Helping children value individuality through puppet shows, storytimes, and books",
};

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest",
  subsets: ["latin"],
  weight: "400",
});

const baloo2 = Baloo_2({
  variable: "--font-baloo2",
  subsets: ["latin"],

});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});



export default function RootLayout({ 
  children 
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
    <body className={`${luckiestGuy.variable} ${baloo2.variable} ${nunito.variable} `}>
      <Header />
      {children}
      <Footer />
    </body>
      
    </html>
  );
}
