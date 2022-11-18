import React from "react";
import { ReviewItems } from "../../constants";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  
  return (
    <section className="review" id="review">
      <h1 className="heading">
        {" "}
        reviews <span>what people says</span>{" "}
      </h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          {ReviewItems.map((item) => (
            <div className="swiper-slide box">
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
