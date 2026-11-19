import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito, Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Pet One",
  description: "Pet One",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
