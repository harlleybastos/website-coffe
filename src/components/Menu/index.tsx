import React from "react";
import { MenuItems } from "../../constants";
import Image from "../../assets/img/image/menu-1.png";

const Menu = () => {
  return (
    <section className="menu bg-bg-menu bg-no-repeat bg-cover" id="menu">
      <h1 className="heading">
        {" "}
        our menu <span>popular menu</span>{" "}
      </h1>

      <div className="box-container flex flex-wrap gap-[2rem] justify-center">
        {MenuItems.map((item, index) => (
          <a key={index} href="#" className="box">
            <img src={item.imageSource} alt="" />
            <div className="content">
              <h3>{item.firstText}</h3>
              <p>{item.secondText}</p>
              <span>{item.price}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Menu };
