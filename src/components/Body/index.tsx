import React, { useState } from "react";
import Image from "../../assets/img/image/capsula.png";
import ImageTwo from "../../assets/img/image/xicara-branca.png";
import ImageThree from "../../assets/img/image/coffee-cup.png";
import ImageArrow from "../../assets/img/image/arrow.png";

const Body = () => {
  const [currentImage, setCurrentImage] = useState<string>(Image);
  const [currentRight, setCurrentRight] = useState<number>(50);
  return (
    <section
      className="home min-h-[100vh] pt-[12rem] bg-bg-img bg-no-repeat bg-center bg-cover"
      id="home"
    >
      <div className="row flex items-center flex-wrap gap-[1.5rem]">
        <div className="content flex-content">
          <h3 className="text-[6.5rem] text-[#433] uppercase">
            fresh coffee in the morning
          </h3>
          <a href="#" className="btn">
            buy one now
          </a>
        </div>

        <div className="image flex-content pt-[10rem] text-center">
          <img
            src={currentImage}
            className="main-home-image h-[35rem] animate-[float_4s_linear_infinite]"
            alt=""
          />
        </div>
      </div>
      <div className="image-slider flex items-center justify-center py-[3rem] px-[0]">
        <img
          className="h-[9rem] my-[0] mx-[0.5rem] mt-[5rem] hover:translate-y-[-2rem] relative"
          src={Image}
          alt=""
          onClick={() => {
            setCurrentImage(Image);
            setCurrentRight(50);
          }}
        />
        <img
          className="h-[9rem] my-[0] mx-[0.5rem] mt-[5rem] hover:translate-y-[-2rem] relative"
          src={ImageTwo}
          alt=""
          onClick={() => {
            setCurrentImage(ImageTwo);
            setCurrentRight(61);
          }}
        />
        <img
          className="h-[9rem] my-[0] mx-[0.5rem] mt-[5rem] hover:translate-y-[-2rem] relative"
          src={ImageThree}
          alt=""
          onClick={() => {
            setCurrentImage(ImageThree);
            setCurrentRight(70);
          }}
        />
        <div
          className={`w-full absolute right-0 ${
            currentRight === 50 ? "left-[50rem]" : `left-[${currentRight}rem]`
          } bottom-20`}
        >
          <img
            className={`animate-[float_2s_linear_infinite] `}
            src={ImageArrow}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { Body };
