import React, { useState } from "react";
import Image from "../../assets/img/image/capsula.png";
import ImageTwo from "../../assets/img/image/xicara-branca.png";
import ImageTree from "../../assets/img/image/coffee-cup.png";
import ImageArrow from "../../assets/img/image/arrow.png";

const Body = () => {
  const [currentImage, setCurrentImage] = useState<string>(Image);
  const [currentRight, setCurrentRight] = useState<string>(
    "left-[-2rem] sm:left-[14rem] md:left-[14rem] lg:left-[32rem] xl:left-[55rem]"
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const content = [
    {
      image: Image,
      onClick: (index: number) => {
        setCurrentIndex(index);
        setCurrentImage(Image);
        setCurrentRight(
          "left-[-1rem] md:left-[15rem] lg:left-[25rem] xl:left-[55rem]"
        );
      },
    },
    {
      image: ImageTwo,
      onClick: (index: number) => {
        setCurrentIndex(index);
        setCurrentImage(ImageTwo);
        setCurrentRight(
          "left-[10rem]  md:left-[25rem] lg:left-[35rem] xl:left-[65rem]"
        );
      },
    },
    {
      image: ImageTree,
      onClick: (index: number) => {
        setCurrentIndex(index);
        setCurrentImage(ImageTree);
        setCurrentRight(
          "left-[21rem] md:left-[35rem] lg:left-[45rem] xl:left-[75rem]"
        );
      },
    },
  ];

  interface ShapeContent {
    [index: number]: string;
  }

  const contentText: ShapeContent = {
    0: "Sunset Capuccino com Whey Protein",
    1: "Sunset Xícara Personalizada",
    2: "Sunset Cup Personalizado",
  };

  return (
    <section
      className="home min-h-[100vh] pt-[12rem] bg-bg-img bg-no-repeat bg-center bg-cover"
      id="home"
    >
      <div className="row flex items-center flex-wrap gap-[1.5rem]">
        <div className="content flex-content">
          <h3 className="text-[4rem] md:text-[4.5rem] xl:text-[6.5rem] text-[#433] uppercase">
            {contentText[currentIndex]}
          </h3>
          <a href="#" className="btn">
            Comprar uma agora
          </a>
        </div>

        <div className="image flex justify-center flex-content pt-[10rem] text-center">
          <img
            src={currentImage}
            className="main-home-image h-[35rem] animate-[float_4s_linear_infinite] object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="relative image-slider flex items-center justify-center py-[3rem] px-[0]">
        <div
          className={`absolute bottom-[15rem] md:left-[30rem] md:bottom-[14rem] lg:bottom-[14rem] xl:bottom-[14rem] ${currentRight} lg:right-0`}
        >
          <img
            className={`animate-[float_2s_linear_infinite] w-[10rem] lg:w-[12rem] xl:w-[18rem]`}
            src={ImageArrow}
            alt=""
          />
        </div>
        {content.map((item, index) => (
          <img
            key={index}
            className="h-[9rem] my-[0] mx-[0.5rem] mt-[5rem] hover:translate-y-[-2rem]"
            src={item.image}
            alt=""
            onClick={() => item.onClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export { Body };
