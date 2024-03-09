"use client";
import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";

const images = [
    "./carousel/1.jpg",
    "./carousel/2.jpg",
    "./carousel/3.jpg",
    "./carousel/4.jpg",
    "./carousel/5.jpg",
    "./carousel/6.jpg",
];

const ViewProduct = () => {
    const [img, setImg] = useState(images[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const handleHover = (image, index) => {
        setImg(image);
        setSelectedImageIndex(index);
    };
    const [isHovered, setIsHovered] = useState(false);

    const zoomProps = {
        width: 600,
        zoomWidth: 700,
        img: img,
        zoomPosition: "right",
    };

    return (
        <div className="md:mx-28 m-4 flex md:flex-row flex-col" >
            <div className="w-[700px] h-auto flex gap-4 items-start">

                <div className="flex flex-col justify-start gap-3 ">
                    {/* Displaying the first image separately */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`border-2 transition-all ${
                                index === selectedImageIndex
                                    ? "border-green-500"
                                    : ""
                            }`}
                        >
                            <img
                                src={image}
                                alt="Product Image"
                                onMouseOver={() => handleHover(image, index)}
                                className="w-24 border-transparent transition-all"
                            />
                        </div>
                    ))}
                </div>
                <div className="mx-4">
                    {/* <img src={img} alt="" /> */}
                    <ReactImageZoom {...zoomProps} />
                </div>
            </div>
            <div className="">
                <h2 className="text-3xl pb-4">Jute Grocery Bag</h2>
                <hr />
                <div className="py-4 *:py-1">
                    <p>
                        <strong className="text-gray-600">Art No:</strong>{" "}
                        ESB-JB-80
                    </p>
                    <p>
                        <strong className="text-gray-600">Description:</strong>{" "}
                        15inch X 12inch x6inch
                    </p>
                    <p>
                        <strong className="text-gray-600">Material:</strong>{" "}
                        100% Jute Fabric
                    </p>
                    <p>
                        <strong className="text-gray-600">Unit:</strong> Set of
                        1
                    </p>
                    <p>
                        <strong className="text-gray-600">Packing:</strong> 1
                        Set per Carton
                    </p>
                    <p>
                        <strong className="text-gray-600">Cartoon Size:</strong>{" "}
                        1x1x1cm
                    </p>
                    <p>
                        <strong className="text-gray-600">Item Size:</strong>{" "}
                        38x30x16
                    </p>
                    <p>
                        <strong className="text-gray-600">CBM/Cartoon:</strong>{" "}
                        1.0E-6
                    </p>
                    <p>
                        <strong className="text-gray-600">Quantity:</strong>{" "}
                        1000Sets/Pcs
                    </p>
                    {/* <!-- ... other product details ... --> */}
                    <table className="border-2 border-gray-400 mt-3">
                        <thead className="border-2 border-gray-400">
                            <tr className="*:border-2 *:border-gray-400 *:p-2">
                                <th>Items Size</th>
                                <th>Quantity</th>
                                <th>Total CBM</th>
                                <th>Total Carton</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="*:border-2 *:border-gray-400 *:p-2 *:text-right">
                                <td>38x30x16cm</td>
                                <td className="flex flex-col border-none gap-3">
                                    <input
                                        type="number"
                                        value={0}
                                        className="text-right border-2 border-gray-400"
                                    />
                                    <button
                                        type="button"
                                        className="bg-green-800 rounded-md hover:bg-green-600 text-white px-4 py-2 text-xs transition-all"
                                    >
                                        Add Quantity
                                    </button>
                                </td>
                                <td>0.001</td>
                                <td>1000</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                    <div className="flex gap-4 justify-left mt-4  ">
                        <button
                            type="button"
                            className="bg-green-800 rounded-md w-40 hover:bg-green-600 text-white px-4 py-2  text-xs transition-all"
                        >
                            {" "}
                            Add To Cart
                        </button>
                        <button
                            type="button"
                            className="bg-green-800 rounded-md w-40 hover:bg-green-600 text-white px-4 py-2  text-xs transition-all"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
