"use client";
import {
    faEnvelope,
    faIndustry,
    faLocationCrosshairs,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic, possibly sending the data to a server
        console.log(formData);
    };

    return (
        <div className="md:mx-28 mx-2">
            <div className="container flex flex-wrap  flex-col md:flex-row items-center">
                {/* Form for leaving a message */}
                <div className="w-full md:w-1/2 bg-white p-8">
                    <h2 className="text-lg mb-5 font-semibold">
                        LEAVE A MESSAGE
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="phone"
                            >
                                Number Phone
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="tel"
                                placeholder="Your Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="comment"
                            >
                                Comment
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="comment"
                                placeholder="Your message..."
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Contact details */}
                <div className="w-full md:w-1/2 bg-white p-8">
                    <h2 className="text-lg mb-5 font-semibold">
                        CONTACT DETAIL
                    </h2>
                    <div className="mb-4">
                        <p className="flex items-center text-gray-700 mb-3">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-xl p-4"
                            />
                            ecosourcedbd.com@gmail.com
                        </p>
                        <p className="flex items-center text-gray-700 mb-3">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-xl p-4"
                            />
                            +88 01942 257473
                        </p>
                        <p className="flex items-center text-gray-700 mb-3">
                            <FontAwesomeIcon
                                icon={faIndustry}
                                className="text-xl p-4"
                            />
                            Factory: South Debipur (Ranigonj), Ghoraghat,
                            Dinajpur, Bangladesh
                        </p>
                        <p className="flex items-center text-gray-700">
                            <FontAwesomeIcon
                                icon={faLocationCrosshairs}
                                className="text-xl p-4"
                            />
                            Head office: Plot #111 (8th Floor), Road #13
                            (Ranavola Avenue), Sector #10, Uttara Model Town,
                            Bangladesh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
