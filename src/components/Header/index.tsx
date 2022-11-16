import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Logo from "../../assets/img/logo-separed.png";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <nav className="bg-gray-900 border-gray-200 px-[9%] sm:px-4 py-[2rem] rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} width={35} className="mr-5" />
          <span className="self-center text-xl lg:text-[2.3rem] font-semibold whitespace-nowrap text-white">
            Sunset Coffee
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 text-[1.7rem] pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#fe881a] md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-[1.7rem] pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-[#ffc48d] hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-[1.7rem] pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-[1.7rem] pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white"
              >
                Review
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-[1.7rem] pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Book
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header };
