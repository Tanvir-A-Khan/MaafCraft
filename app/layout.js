import Navbar from "./components/Navbar.js";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import HeaderTop from "./components/HeaderTop.js";
import Footer from "./components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Maafcraft.com",
    description: "Designed and created by Tanvir Ahmed Khan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <HeaderTop />
                <Navbar />
                   {children}
                   <h1>Hello from the outside</h1>
                <Footer />
            </body>
        </html>
    );
}
