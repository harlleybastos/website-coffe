import React, { useState } from "react";
import Image from "../../assets/img/image/capsula.png";
import ImageTwo from "../../assets/img/image/xicara-branca.png";
import ImageTree from "../../assets/img/image/coffee-cup.png";
import ImageArrow from "../../assets/img/image/arrow.png";
import { ShapeContent } from "../../shared/types";

const Body = () => {
  const [currentImage, setCurrentImage] = useState<string>(Image);
  const [currentRight, setCurrentRight] = useState<string>(
    "sm:left-[calc(25%-100px)] sm_secondary:left-[calc(15%-100px)] md:left-[calc(10%-100px)] lg:left-[calc(5%-100px)] 2xl:left-[calc(10%-100px)]"
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const content = [
    {
      image: Image,
      onClick: (index: number) => {
        setCurrentIndex(index);
        setCurrentImage(Image);
        setCurrentRight(
          "sm:left-[calc(25%-100px)] sm_secondary:left-[calc(15%-100px)] md:left-[calc(10%-100px)] lg:left-[calc(5%-100px)] 2xl:left-[calc(10%-100px)]"
        );
      },
    },
    {
      image: ImageTwo,
      onClick: (index: number) => {
        setCurrentIndex(index);
        setCurrentImage(ImageTwo);
        setCurrentRight("left-[calc(50%-100px)]");
      },
    },
    {
      image: ImageTree,
      onClick: (index: number) => {
        setCurrentIndex(index);
        setCurrentImage(ImageTree);
        setCurrentRight("left-[calc(95%-100px)]");
      },
    },
  ];

  const contentText: ShapeContent = {
    0: "Sunset Capuccino com Whey Protein",
    1: "Sunset Xícara Personalizada",
    2: "Sunset Cup Personalizado",
  };

  return (
    <section className="home min-h-[100vh] pt-[12rem]" id="home">
      <div className="row flex items-center flex-wrap gap-[1.5rem]">
        <div className="content flex-content">
          <h3 className="sm:text-[3rem] sm_secondary:text-[3.5rem]  md:text-[4.5rem] lg:text-[6.5rem] xl:text-[5rem] 2xl:text-[5rem] text-[#433] uppercase">
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
      <div className="relative flex justify-between 2xl:mx-auto 2xl:max-w-4xl">
        {content.map((item, index) => (
          <img
            key={index}
            className="w-[9rem] h-[9rem] object-contain hover:translate-y-[-2rem]"
            src={item.image}
            alt=""
            onClick={() => item.onClick(index)}
          />
        ))}
        <img
          className={`absolute animate-[float_2s_linear_infinite] w-[10rem] lg:w-[12rem] xl:w-[18rem] ${currentRight}  bottom-[10rem]`}
          src={ImageArrow}
          alt=""
        />
      </div>
    </section>
  );
};

export { Body };
