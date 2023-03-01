import { React, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Grid, Navigation } from "swiper";

import "./Slider.css";

const BASE_URI = "https://source.unsplash.com/random?sig=";

function Slider() {
  const ref = useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const slides = Array.from({ length: 40 }).map(
    (el, index) => <img src={BASE_URI + index.toString()} alt="" />
    // `Slide ${index + 1}`
  );

  const params = {
    Swiper,
    modules: [Grid, Navigation],
    cssMode: true,
    slidesPerView: "auto",
    slidesPerGroupAuto: true,
    spaceBetween: 15,
    grid: {
      rows: 2,
    },
  };
  return (
    <div style={{ display: "flex" }}>
      <Swiper ref={ref} className="mySwiper" {...params}>
        {slides.map((slideContent, index) => (
          <SwiperSlide
            style={{ cursor: "pointer" }}
            key={slideContent}
            virtualIndex={index}
          >
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={goNext}>&#62;</button>
    </div>
  );
}

export default Slider;
