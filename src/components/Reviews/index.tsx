import React from "react";

import { ReviewItems } from "../../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading text-[9rem] uppercase text-transparent stroke-slate-500 traking-[.2rem] text-center pointer-events-none relative">
        {" "}
        Avaliações{" "}
        <span className="absolute text-[3rem] text-[#443] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Oque as pessoas dizem
        </span>{" "}
      </h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          {ReviewItems.map((item, index) => (
            <div key={index} className="swiper-slide box">
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
              <p>{item.firstText}</p>
              <h3> {item.secondText}</h3>
              <span> {item.review}</span>
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export { Reviews };
