import React from "react";
import Image from "../../assets/img/image/about-img.png";
import AboutIconOne from "../../assets/img/image/about-icon-1.png";
import AboutIconTwo from "../../assets/img/image/about-icon-2.png";
import AboutIconThree from "../../assets/img/image/about-icon-3.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading text-[9rem] text-uppercase text-transparent stroke-slate-500 traking-[.2rem] text-center pointer-events-none relative">
        {" "}
        Sobre nós{" "}
        <span className="absolute text-[3rem] text-[#443] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          porque nos escolher
        </span>{" "}
      </h1>

      <div className="row flex items-center flex-wrap gap-[1.5rem]">
        <div className="image flex-content">
          <img
            src={Image}
            alt=""
            className="w-full animate-[image_4s_linear_infinite]"
          />
        </div>

        <div className="content flex-content">
          <h3 className="title text-[#443] text-[3rem] leading-[1.8]">
            what's make our coffee special!
          </h3>
          <p className="text-[#443] text-[1.5rem] leading-[1.8] py-[1rem] px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et
            commodi, ad, doloremque obcaecati maxime quam minima dolore mollitia
            saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum
            at autem.
          </p>
          <a href="#" className="btn">
            read more
          </a>
          <div className="icons-container">
            <div className="icons">
              <img src={AboutIconOne} alt="" />
              <h3>quality coffee</h3>
            </div>
            <div className="icons">
              <img src={AboutIconTwo} alt="" />
              <h3>our branches</h3>
            </div>
            <div className="icons">
              <img src={AboutIconThree} alt="" />
              <h3>free delivery</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
