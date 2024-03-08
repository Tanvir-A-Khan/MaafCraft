"use client";
import React, { useState } from "react";
import ReactImageZoom from 'react-image-zoom';

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
      zoomWidth: 500, 
      img: img,
      
    };


    return (
        <div className="md:mx-28 m-4">
            <div className="w-1/2">
                <div className="h-auto w-auto">
                    {/* <img src={img} alt="" /> */}
                   
                        <ReactImageZoom {...zoomProps} />
                </div>

                <div className="flex justify-start gap-2 w-11/12 my-4">
                    {/* Displaying the first image separately */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`border-2 ${
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
            </div>
        </div>
    );
};

export default ViewProduct;
