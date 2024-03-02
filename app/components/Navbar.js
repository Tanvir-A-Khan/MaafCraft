import React from "react";
import HeaderTop from "./HeaderTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="flex justify-center gap-8">
            <div>
              <div className="">

                <FontAwesomeIcon
                    icon={faBars}
                    className="text-green-800 text-3xl p-1 ease-in w-6 md:hidden m-auto hover:cursor-pointer hover:bg-green-800 border-1 border-green-800 hover:text-white h-auto"
                    />
                    </div>
                 <div className="justify-center       h-12  md:hidden flex">
                        <div>
                            <h1 className="font-semibold hover:cursor-pointer hidden md:block">
                                CART
                            </h1>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="text-back w-10 hover:cursor-pointer"
                            />
                        </div>
                        <p className="bg-green-600 h-6 rounded-md items-center ms-1 mt-5 p-1 text-white font-semibold text-xs hover:cursor-pointer">
                            {" "}
                            0 Items
                        </p>
                    </div>
            </div>

            <div className="bg-[#444444] text-c mx-28 hidden md:block">
                <ul className="md:flex flex-wrap justify-start divide-x-2 divide-solid divide-[#555555] *:px-[11px] *:py-[11px] *:text-[12px] *:uppercase *:font-bold *:tracking-wide *:text-white">
                    {/* Add FontAwesome icon to the first list item */}
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer text-white bg-green-600 ">
                        <FontAwesomeIcon
                            icon={faHome}
                            className="text-white text-3xl w-5"
                        />
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Home
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        About
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Certification
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Legal License
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Membership
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Materials Info
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Gallery
                    </li>
                    <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
