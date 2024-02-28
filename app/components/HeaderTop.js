import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const HeaderTop = () => {
    return (
        <div className="">
            <div className="flex justify-between h-14 px-28 bg-[#EFEFEF] ">
                <div className="flex items-center h-14 text-xs gap-2 text-red-600">
                    <FontAwesomeIcon icon={faPhone} className="w-5" />
                    <h2>Hotline: +88 01942 257473</h2>
                </div>

                <h1 className="flex text-green-600 text-4xl font-semibold h-14 items-center ">
                    Maaf craft and fashion
                </h1>
                <span className="h-14 flex justify-between items-center gap-3 ">
                    <Link href={"/login"}>Login</Link>
                    <span>|</span>
                    <Link href={"/signup"}>Signup</Link>
                </span>
            </div>
            <div className="flex h-16 m-4 mx-28 items-center justify-between">
                <img src="/logo.jpg" alt="logo" className="h-14" />
                <div className="flex align-middle h-10 border-2 border-green-600">
                    <input
                        type="text"
                        placeholder="Enter Product Title"
                        className=" ps-6 active:border-none w-80"
                    />

                    <select
                        name="language"
                        id="language"
                        className="bg-gray-200 text-gray-500 w-48 text-[13px]"
                    >
                        <option >All Categories</option>
                        <option>Jute</option>
                        <option>Cloth</option>
                        <option>Craft</option>
                    </select>

                    <div>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className=" h-[100%] w-14 p-2 border-2 border-green-600  text-white bg-green-600 hover:cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex align-bottom h-12 me-48">
                    <div>
                        <h1 className="font-semibold hover:cursor-pointer">
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
        </div>
    );
};

export default HeaderTop;
