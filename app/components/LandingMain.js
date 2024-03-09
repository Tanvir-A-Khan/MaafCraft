import React from "react";
import Carousel from "./Carousel";

const LandingMain = () => {
    return (
        <div className="md:flex md:justify-between h-[80%]  bg-white border-1 border-black">
            <div className="md:w-[15%]">
                <h1 className="ps-4 pt-4">All Category</h1>
                <ul className="p-4  hover:cursor-pointer text-xs">
                    <li className="p-1 border-2 border-transparent hover:border-gray-100">
                        category 1
                    </li>
                    <li className="p-1 border-2 border-transparent hover:border-gray-100">
                        category 2
                    </li>
                    <li className="p-1 border-2 border-transparent hover:border-gray-100">
                        {" "}
                        category 3
                    </li>
                    <li className="p-1 border-2 border-transparent hover:border-gray-100">
                        category 4
                    </li>
                </ul>
            </div>
            <div className=" bg-gray-200 md:w-[50%]">
                <Carousel />
            </div>

            <div className="md:w-[30%] p-2 ">
                <h1 className="font-bold mb-1">Discount Products</h1>

                {/* Each Product */}
                <div className="flex gap-4 mb-2 mr-2 hover:cursor-pointer hover:bg-gray-100">
                    <img
                        src="/prod1.jpg"
                        alt="product"
                        className="h-[85px] w-[95px]  object-cover "
                    />

                    <div className="">
                        <h1 className="font-semibold ">Prod Title</h1>
                        <p className="text-xs">Description of the product</p>
                    </div>
                </div>

                <div className="flex gap-4 mb-2 hover:cursor-pointer  hover:bg-gray-100">
                    <img
                        src="/prod1.jpg"
                        alt="product"
                        
                        className="h-[85px] w-[95px]  object-cover "
                    />
                    <div>
                        <h1 className="font-semibold">Prod Title</h1>
                        <p className="text-xs">Description of the product</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingMain;
