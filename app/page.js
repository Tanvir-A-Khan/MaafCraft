import Link from "next/link.js";
import HeaderTop from "./components/HeaderTop.js";
import Navbar from "./components/Navbar.js";
import Carousel from "./components/Carousel.js";
import MostSellItems from "./components/MostSellItems.js";
import LandingMain from "./components/LandingMain.js";

export default function Home() {
    return (
        <main className="bg-[#EFEFEF] h-screen">
            <div className="mx-28 py-6">
                <div>
                    <LandingMain/>
                </div>
                <div>
                    <MostSellItems/>
                </div>

            </div>
        </main>
    );
}
