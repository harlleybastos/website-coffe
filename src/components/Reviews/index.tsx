import React from "react";

import { ReviewItems } from "../../constants";

import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

const Reviews = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        spacing: 40,
        perView: 2,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section className="review" id="review">
      <h1 className="heading text-[9rem] uppercase text-transparent stroke-slate-500 traking-[.2rem] text-center pointer-events-none relative">
        {" "}
        Avaliações{" "}
        <span className="absolute text-[3rem] text-[#443] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Oque as pessoas dizem
        </span>{" "}
      </h1>

      <div ref={sliderRef} className="review-slider">
        <div className="swiper-wrapper">
          {ReviewItems.map((item, index) => (
            <div key={index} className="box keen-slider__slide">
              <i className="fas fa-quote-left"></i>
              <i className="fas fa-quote-right"></i>
              <img src={item.imageSource} alt="" />
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="normal-case">{item.firstText}</p>
              <h3>{item.secondText}</h3>
              <span>{item.review}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Reviews };
