import React from "react";
import Popup from "../client/popup";

const License = () => {
    return (
        <div className="md:mx-28 h-auto">
            <h1 className="text-3xl text-center my-4 uppercase font-bold mb-8">
                Legal License
            </h1>

            <Popup/>

            <h1 className="text-center text-xl font-semibold text-blue-800 m-4">
                Your trust is our priority. We are committed to transparency and integrity in all our practices
            </h1>
            <div className="flex md:flex-row flex-col items-center flex-wrap md:justify-start">
                <div className="w-56 h-auto m-2">
                    <img src="/license/1.jpg" alt="License 1" className="w-56 h-72 hover:scale-105 transition-all " />
                    <h1 className="text-xl font-semibold text-center">License 1</h1>
                </div>
                <div className="w-56 h-auto m-2">
                    <img src="/license/2.jpg" alt="License 2" className="w-56 h-72 hover:scale-105 transition-all" />
                    <h1 className="text-xl font-semibold text-center">License 2</h1>
                </div>

                <div className="w-56 h-auto m-2">
                    <img src="/license/3.jpg" alt="License 3" className="w-56 h-72 hover:scale-105 transition-all" />
                    <h1 className="text-xl font-semibold text-center">License 3</h1>
                </div>
                <div className="w-56 h-auto m-2">
                    <img src="/license/4.jpg" alt="License 4" className="w-56 h-72 hover:scale-105 transition-all" />
                    <h1 className="text-xl font-semibold text-center">License 4</h1>
                </div>
                <div className="w-56 h-auto m-2">
                    <img src="/license/5.jpg" alt="License 5" className="w-56 h-72 hover:scale-105 transition-all" />
                    <h1 className="text-xl font-semibold text-center">License 5</h1>
                </div>
                <div className="w-56 h-auto m-2">
                    <img src="/license/6.jpg" alt="License 6" className="w-56 h-72 hover:scale-105 transition-all" />
                    <h1 className="text-xl font-semibold text-center">License 6</h1>
                </div>
                <div className="w-56 h-auto m-2">
                    <img src="/license/7.jpg" alt="License 7" className="w-56 h-72 hover:scale-105 transition-all" />
                    <h1 className="text-xl font-semibold text-center">License 7</h1>
                </div>
            </div>
        </div>
    );
};

export default License;
