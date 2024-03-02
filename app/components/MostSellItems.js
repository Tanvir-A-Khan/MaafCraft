import React from "react";

const MostSellItems = () => {
    return (
        <div className="w-[100%]  bg-[#efefef]">
            <div className="my-8 border-2 h-auto border-[#ff2832]">
                <p className="bg-[#ff2832] p-2 px-6 uppercase font-bold text-white">
                    Most Sale Items
                </p>
                <div className="flex ">
                    {/* PRODUCT 1 */}
                    <div className=" border-gray-500 border-[1px] h-[100%] w-48 m-2 p-2 flex flex-col justify-between gap-5">
                        <img
                            src="/prod1.jpg"
                            alt=""
                            className=" object-cover"
                        />
                        <span className="flex justify-center items-end h-fit">
                            Product Title
                        </span>
                    </div>

                    {/* PRODUCT 2 */}
                    <div className=" border-gray-500 border-[1px] h-[100%] w-48 m-2 p-2 flex flex-col justify-between gap-5">
                        <img
                            src="/prod1.jpg"
                            alt=""
                            className=" object-cover"
                        />
                        <span className="flex justify-center items-end h-fit">
                            Product Title
                        </span>
                    </div>

                    {/* PRODUCT 3 */}
                    <div className=" border-gray-500 border-[1px] h-[100%] w-48 m-2 p-2 flex flex-col justify-between gap-5">
                        <img
                            src="/prod1.jpg"
                            alt=""
                            className=" object-cover"
                        />
                        <span className="flex justify-center items-end h-fit">
                            Product Title
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostSellItems;
