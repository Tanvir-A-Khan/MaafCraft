"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBars,
    faShoppingCart,
    faPhone, 
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const Navbar = () => {
    const slidebar = () => {
        console.log("slide bar popped");
    };
    return (
        <div>
            {/* // Heading TOP START */}
            <div className="w-[100%]">
                <div className="md:flex justify-between h-auto  md:px-28 bg-[#EFEFEF] py-2">
                    <div className="flex items-center h-auto justify-center text-xs gap-2 text-red-600">
                        <FontAwesomeIcon icon={faPhone} className="w-5" />
                        <h2>Hotline: +88 01942 257473</h2>
                    </div>

                    <h1 className="flex text-green-600 md:p-2 justify-center text-xl md:text-3xl font-semibold h-auto items-center ">
                        Maaf craft and fashion
                    </h1>
                    <span className="h-auto flex justify-center items-center gap-3 ">
                        <Link href={"/login"}>Login</Link>
                        <span>|</span>
                        <Link href={"/registration"}>Signup</Link>
                    </span>
                </div>
                <div className="flex-col flex md:flex-row md:mx-28 h-auto m-4 gap-3 items-center justify-center w-auto ">
                    <div className="flex justify-center gap-5 mb-3 md:min-w-32 min-w-max hover:cursor-pointer">
                        <img
                            src="/logo.jpg"
                            alt="logo"
                            className="md:h-14 h-auto max-w-48"
                        />
                    </div>

                    <div className="flex justify-between   h-10 border-2 border-green-600 ">
                        <input
                            type="text"
                            placeholder="Enter Product Title"
                            className="ps-6 active:border-none  md:w-[20rem]"
                        />

                        <select
                            name="language"
                            id="language"
                            className="bg-gray-200 text-gray-500 w-2/5 text-[13px] hidden md:block"
                        >
                            <option>All Categories</option>
                            <option>Jute</option>
                            <option>Cloth</option>
                            <option>Craft</option>
                        </select>

                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="w-12 p-3 border-green-600  text-white bg-green-600 hover:cursor-pointer hover:bg-green-800 tansition-all"
                            />
                        </div>
                    </div>

                    <div className="h-12 mb-5 hidden md:flex justify-start">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <h1 className=" text-xs font-semibold hover:cursor-pointer hidden md:block">
                                CART
                            </h1>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="text-back text-2xl w-24 hover:cursor-pointer"
                            />
                        </div>
                        <p className="bg-green-600 h-6 rounded-md items-center ms-1 mt-5 p-1 text-white font-semibold text-xs hover:cursor-pointer">
                            {" "}
                            0 Items
                        </p>
                    </div>
                </div>
            </div>
            {/* // HEADING TOP END */}
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
                            <li>All Products</li>
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
        </div>
    );
};

export default Navbar;
