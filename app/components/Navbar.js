import React from "react";
import HeaderTop from "./HeaderTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="">
      <HeaderTop/>
      <div className="bg-[#444444] text-c mx-28">
        <ul className="flex justify-start divide-x-2 divide-solid divide-[#555555] *:px-[11px] *:py-[11px] *:text-[12px] *:uppercase *:font-bold *:tracking-wide *:text-white">
          {/* Add FontAwesome icon to the first list item */}
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer text-white bg-green-600 ">
            <FontAwesomeIcon
              icon={faHome}
              className="text-white text-3xl w-5"
            />
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Home
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            About
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Certification
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Legal License
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Membership
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Materials Info
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Gallery
          </li>
          <li className="hover:bg-[#555555] duration-300 hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
