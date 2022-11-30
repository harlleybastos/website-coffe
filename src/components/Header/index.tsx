import React, { useState } from "react";

import { motion } from "framer-motion";

import Logo from "../../assets/img/logo-separed.png";

const Header = () => {
  const [isOpenMenu, setMenuIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <nav
      className={`bg-white z-10 fixed left-0 right-0 h-[8rem] ${
        !isOpenMenu && "h-[9.5rem]"
      } flex text-2xl border-gray-200 px-2 md_secondary:px-8 py-2.5 rounded shadow-lg`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-12 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap">
            Sunset Coffee
          </span>
        </a>
        <div className="flex md_secondary:order-2">
          <div className="relative hidden md_secondary:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-8 h-8 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block text-2xl w-full p-3 pl-12 text-gray-900 border-solid border border-gray-500 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              placeholder="Capuccino..."
            />
          </div>
          <button
            type="button"
            className="ml-8 sm_secondary:mr-8 text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          >
            Fazer Login
          </button>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md_secondary:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setMenuIsOpen(!isOpenMenu)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-10 h-10"
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
        </div>
        <motion.div
          animate={!isOpenMenu ? "open" : "closed"}
          variants={variants}
          className={`items-center justify-between ${
            isOpenMenu && "hidden"
          } w-full md_secondary:flex md_secondary:w-auto md_secondary:order-1`}
          id="navbar-search"
        >
          <div className="relative mt-3 md_secondary:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-8 h-8 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-3 pl-12 text-2xl border-solid border text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Capuccino..."
            />
          </div>
          <ul className="flex text-2xl flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md_secondary:flex-row md_secondary:space-x-8 md_secondary:mt-0 md_secondary:text-sm md_secondary:font-medium md_secondary:border-0 md_secondary:bg-white">
            <li>
              <a
                href="#"
                className="block text-2xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md_secondary:bg-transparent md_secondary:text-blue-700 md_secondary:p-0"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-2xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md_secondary:hover:bg-transparent md_secondary:hover:text-blue-700 md_secondary:p-0"
              >
                Porque nos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-2xl  py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md_secondary:hover:bg-transparent md_secondary:hover:text-blue-700 md_secondary:p-0"
              >
                Cardápio
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export { Header };
