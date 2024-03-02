import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
    faLock,
    faShield,
    faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="flex md:flex-row flex-col justify-between px-28 py-12 *:text-xs bg-gray-300">
                <div className="flex flex-col gap-12 w-1/4">
                    <div className="*:mt-1 *:leading-4">
                        <h1 className="font-bold text-[14px] my-2">
                            CONTACT DETAILS
                        </h1>
                        <p>
                            Factory: South Debipur (Ranigonj), Ghoraghat,
                            Dinajpur, Bangladesh
                        </p>
                        <p>
                            Head office: Plot #111 (8th Floor), Road #13
                            (Ranavola Avenue), Sector #10, Uttara Model Town,
                            Bangladesh.{" "}
                        </p>
                  
                    </div>
                    <div>
                        <h1 className="font-bold text-[14px] my-2">
                            WE USING SAFE PAYMENTS:
                        </h1>
                        <ul className="flex justify-start gap-6 *:w-10">
                            <FontAwesomeIcon
                                icon={faLock}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                            <FontAwesomeIcon
                                icon={faShield}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                            <FontAwesomeIcon
                                icon={faCreditCard}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    <div>
                        <h1 className="font-bold text-[14px] my-2">HOT LINE</h1>
                        <p>Call Us for any query</p>
                        <p className="text-2xl font-bold text-[#ff2832]">
                            +88 01942 257473
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[14px] my-2">
                            SOCIAL NETWORK
                        </h1>
                        <ul className="flex justify-start gap-3 *:w-6">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="hover:cursor-pointer hover:text-green-700 transition-colors"
                            />
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-[14px] my-2">MY ACCOUNT</h1>
                    <p>Login</p>
                    <p>Register</p>
                </div>
                <div>
                    <h1 className="font-bold text-[14px] my-2">INFOMATION</h1>
                    <p>Site: maafcraft.com</p>
                    <p>Email: maafcraftbd@gmail.com</p>
                </div>
            </div>

            {/* LAST PORTION  */}
            <div className="bg-gray-800 m-0 text-white flex justify-between p-4 *:text-xs px-28 *:uppercase items-center">
                <span>
                    Copyright © 2024 Maafcraft.com - All rights reserved
                </span>
                <ul className="flex divide-x-2 *:mx-0 divide-solid divide-[#555555] *:px-[11px]  *:text-[12px]  ">
                    <li>About us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Return Policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;