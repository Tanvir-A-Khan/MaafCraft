"use client";
import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";


const ViewProduct = () => {
    const [q, setQ] = useState(0);
    const [data, setData] = useState({
        title:"Jute Product",
        art_no:"1235612342435",
        dimension:"15inch X 12inch x6inch",
        material: "100% Jute Fabric",
        unit: "1 set unit",
        packing: "1 Set per Carton",
        cartoon_size: "1x1x1cm",
        item_size: "38x30x16",
        cbm_per_cartoon: "5000",
        quantity: q,
        description: " This is the descripiton of the product including all the information"

    })
    const images = [
        "./carousel/1.jpg",
        "./carousel/2.jpg",
        "./carousel/3.jpg",
        "./carousel/4.jpg",
        "./carousel/5.jpg",
        "./carousel/6.jpg",
    ];
    const [img, setImg] = useState(images[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const handleHover = (image, index) => {
        setImg(image);
        setSelectedImageIndex(index);
    };

    const zoomProps = {
        width: 600,
        zoomWidth: 600,
        img: img,
        zoomPosition: "original ",
    };

    return (
        <div>
            <div>
                <div className="md:mx-28 m-4 flex md:flex-row flex-col gap-8">
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
                                        onMouseOver={() =>
                                            handleHover(image, index)
                                        }
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
                        <h2 className="text-3xl pb-4">{data.title}</h2>
                        <hr />
                        <div className="py-4 *:py-1 *:text-xs">
                            <p>
                                <strong className="text-gray-600">
                                    Art No:
                                </strong>{" "}
                                {data.art_no}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Dimension:
                                </strong>{" "}
                                {data.dimension}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Material:
                                </strong>{" "}
                                {data.material}
                            </p>
                            <p>
                                <strong className="text-gray-600">Unit:</strong>{" "}
                                {data.unit}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Packing:
                                </strong>{" "}
                                {data.packing}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Cartoon Size:
                                </strong>{" "}
                                {data.cartoon_size}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Item Size:
                                </strong>{" "}
                                {data.item_size}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    CBM/Cartoon:
                                </strong>{" "}
                                {data.cbm_per_cartoon}
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Quantity:
                                </strong>{" "}
                                {data.quantity}
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
                                        <td>{data.item_size}</td>
                                        <td className="flex flex-col border-none gap-3">
                                            <input
                                                type="number"
                                                
                                                onChange={(e)=> setQ(e.target.value)}
                                                className="text-right border-2 border-gray-400"
                                            />
                                            <button
                                                type="button"
                                                className="bg-green-800 rounded-md hover:bg-green-600 text-white px-4 py-2 text-xs transition-all"
                                            >
                                                Add Quantity
                                            </button>
                                        </td>
                                        <td>{q}</td>
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
            </div>
            <div className="md:mx-28 m-2">
                <h1 className="border-2 rounded-t-lg w-min px-4 py-1 font-semibold text-gray-600 hover:cursor-pointer">
                    {" "}
                    DESCRIPTION
                </h1>
                <hr />
                <div className="border-2 p-4">
                   

                    <p>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
