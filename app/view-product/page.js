"use client";
import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";


const ViewProduct = () => {
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
        zoomWidth: 700,
        img: img,
        zoomPosition: "right",
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
                        <h2 className="text-3xl pb-4">Jute Grocery Bag</h2>
                        <hr />
                        <div className="py-4 *:py-1 *:text-xs">
                            <p>
                                <strong className="text-gray-600">
                                    Art No:
                                </strong>{" "}
                                ESB-JB-80
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Description:
                                </strong>{" "}
                                15inch X 12inch x6inch
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Material:
                                </strong>{" "}
                                100% Jute Fabric
                            </p>
                            <p>
                                <strong className="text-gray-600">Unit:</strong>{" "}
                                Set of 1
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Packing:
                                </strong>{" "}
                                1 Set per Carton
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Cartoon Size:
                                </strong>{" "}
                                1x1x1cm
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Item Size:
                                </strong>{" "}
                                38x30x16
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    CBM/Cartoon:
                                </strong>{" "}
                                1.0E-6
                            </p>
                            <p>
                                <strong className="text-gray-600">
                                    Quantity:
                                </strong>{" "}
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
            </div>
            <div className="md:mx-28 m-2">
                <h1 className="border-2 rounded-t-lg w-min px-4 py-1 font-semibold text-gray-600 hover:cursor-pointer">
                    {" "}
                    DESCRIPTION
                </h1>
                <hr />
                <div className="border-2 p-4">
                   

                    <p>
                        3 Strand Jute Rope Diameter- 6mm to 50mm Quality: CB,
                        Sacking and Hessian Price: Price: USD 1000.00 for
                        Sacking Quality (Sacking means Standard Quality) Price:
                        USD 1200.00 for Hessian Quality (Hessian means better
                        than Sacking Quality) Price: USD 1400.00 for Sacking
                        Quality (CB means high Quality) Jute rope is an organic
                        fibre known for its strength and resilience. The fibres
                        of the plant extend into thick threads, which can be
                        purchased or created on spindles. It's very thin, so for
                        long journeys, it's excellent. The rope Jute is also
                        heat resistant and the impact of sunlight. The Eco
                        Source Bangladesh Corporation has progressed in
                        marketing goods made of jute and supply the best jute
                        items in your budget. Through innovation and creativity,
                        we have also provided contemporary consumers with
                        innovative products. Jute grows during the ranges of
                        Bangladesh. Jute is a broad, shining plant fibre, which
                        may also be challenging and robust filets. As long as
                        the plant can, the fibres are between 3 and 13 feet
                        long. Jute ropes are white to light brown. The natural
                        jute rope has replaced synthetic material in many of
                        these applications; some services have the
                        environmentally friendly jute style that would not be
                        appropriate to use synthetics. We choose jute rope for
                        specific applications, such as for home decorating,
                        artisan products, etc. The following are the
                        applications of jute ropes: Jute is durable and elegant.
                        Therefore, it cannot be surprising that any of these
                        materials, from lampshades to elegant vases, are used
                        for weaving. Since they are widespread, coloured jute
                        rope has an incredibly dense and delicate contact. They
                        can withstand heavy traffic and are appropriate for
                        families with children and puppies who are substantial.
                        Our long-lasting Jute Rope Baskets with lid are soft
                        like the fabrics and yet firm like coil or wire. That is
                        like trying to bring existence home with no chemicals,
                        created from sustainable material. It looks gorgeous,
                        luxurious, and dried or fake flowers. While not in use,
                        you can pull flat or save quick storage space. During
                        machine washing, insert it greatest in a clothing bag or
                        pillowcase. It's fantastic for a nursery, a bathroom, a
                        bedroom, a kitchen, or an interior holder for planting.
                        The highest quality nursing ropes set offers outstanding
                        qualities such as UV resistance, including abrasion
                        resistance. With our wide selection of ropes designed to
                        have used in your care, you can give your nursery a
                        beautiful and natural appearance. Jute ropes can also be
                        prepared for the customer's requirement and are present
                        in a range of patterns and dimensions. The organization
                        is the best jute manufacturer company to produce jute
                        rope in Bangladesh. The company is the biggest
                        manufacturer of jute goods and exporting company for
                        jute rope wholesale, which specializes in an affordable
                        alternative everywhere and continuously. We are
                        Bangladesh's biggest jute rope exporter and a global
                        leader in producing jute items of rope. Our competitive
                        prices, cheap shipments, and regional selection of jute
                        rope for sale allow you to achieve considerable savings.
                        We even offer Jute rope items for various types and
                        textures as the most popular suppliers of jute ropes
                        available for the market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
