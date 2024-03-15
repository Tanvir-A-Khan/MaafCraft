import React from "react";

const Gallery = () => {
    return (
        <div className="mx-4 ">
            <div className="container mx-auto px-5 py-2 lg:px-32">
                <h1 className="text-3xl text-center my-4 uppercase font-bold mb-8">
                    Photo Gallery
                </h1>

                <div className="my-8 flex flex-wrap md:m-2 bg-gray-200">
                    <div className="flex w-1/2 flex-wrap ">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="hover:scale-105 transition-all block h-full w-full rounded-lg object-cover object-center"
                                src="./products/1.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="hover:scale-105 transition-all block h-full w-full rounded-lg object-cover object-center"
                                src="./products/2.jpg"
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block hover:scale-105 transition-all h-full w-full rounded-lg object-cover object-center"
                                src="./products/3.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block hover:scale-105 transition-all h-full w-full rounded-lg object-cover object-center"
                                src="./products/3.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block hover:scale-105 transition-all h-full w-full rounded-lg object-cover object-center"
                                src="./products/5.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block hover:scale-105 transition-all h-full w-full rounded-lg object-cover object-center"
                                src="./products/6.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
