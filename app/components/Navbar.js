"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBars,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
    const slidebar = ()=>{
        console.log("slide bar popped");
    }
    return (
        <div className="sticky top-0 z-10">
            <div className="flex justify-end items-center gap-10 bg-gray-300 m-2">
                <div className=" gap-6 h-12  lg:hidden flex flex-row items-center">
                    <div>
                        <Link href={"/"}>
                        <h1 className="font-semibold hover:cursor-pointer h-[100%] items-center hidden lgs:block">
                            CART
                        </h1>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="text-back  hover:cursor-pointer text-3xl "
                            />
                        </Link>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-green-800 text-3xl mr-4 lg:hidden  hover:cursor-pointer "
                    />
            
            </div>

            <div className="bg-[#444444] text-c mx-28 hidden lg:flex px-0 py-0">
                <ul className=" lg:flex flex-wrap justify-start items-center divide-x-2 divide-solid divide-[#555555] *:px-[11px] *:py-1 *:text-[12px] *:uppercase *:font-bold *:tracking-wide *:text-white ">
                    {/* Add FontAwesome icon to the first list item */}
                    <Link
                        href="/"
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer text-white bg-green-600 "
                        // onClick={}
                    >
                        <li>
                            <FontAwesomeIcon
                                icon={faHome}
                                className="text-white text-3xl w-5"
                            />
                        </li>
                    </Link>
                    <Link
                        href="/allproducts"
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                                                
                    >
                        <li>

                        All Products
                        </li>
                    </Link>
                    <Link
                        href="/about"
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>About</li>
                    </Link>
                    <Link
                        href="/certification"
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>Certification</li>
                    </Link>
                    <Link
                        href="/license"
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>Legal License</li>
                    </Link>

                    <Link
                        href={"/membership"}
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>Membership</li>
                    </Link>
                    <Link
                        href={"/material-info"}
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>Materials Info</li>
                    </Link>
                    <Link
                        href={"/gallery"}
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>Gallery</li>
                    </Link>
                    <Link
                        href={"/contact"}
                        className="hover:bg-[#555555] duration-300 hover:cursor-pointer h-[100%] flex items-center"
                    >
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
