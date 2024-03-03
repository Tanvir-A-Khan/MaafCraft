import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const HeaderTop = () => {
    return (
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

                    <img src="/logo.jpg" alt="logo" className="md:h-14 h-auto max-w-48" />
                   
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

                    <div>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className=" h-[100%] w-14 p-2 border-2 border-green-600  text-white bg-green-600 hover:cursor-pointer "
                        />
                    </div>
                </div>

                <div className="justify-center items-center h-12 mb-5    hidden md:flex">
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
        </div>
    );
};

export default HeaderTop;
