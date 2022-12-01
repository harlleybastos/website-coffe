import React from "react";
import { MenuItems } from "../../constants";
import Image from "../../assets/img/image/menu-1.png";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading text-[9rem] uppercase text-transparent stroke-slate-500 traking-[.2rem] text-center pointer-events-none relative">
        {" "}
        Menu{" "}
        <span className="absolute text-[3rem] text-[#443] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Cardápio Popular
        </span>{" "}
      </h1>

      <div className="box-container flex flex-wrap gap-[2rem] justify-center">
        {MenuItems.map((item, index) => (
          <Link key={index} to={`products/${index}`} className="box">
            <img src={item.imageSource} alt="" />
            <div className="content">
              <h3>{item.firstText}</h3>
              <p>{item.secondText}</p>
              <span>{item.price}</span>
            </div>
          </Link>
        ))}
        <Outlet />
      </div>
    </section>
  );
};

export { Menu };
