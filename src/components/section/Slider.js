import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className="slider__inner">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="desc">
            <span>LIBRARY</span>
            <h3>SPACE</h3>
            <p>
              For thousands of years, people have looked up at the night sky
              with questions. <br />
              As technologies have advanced so to has our ability to investigate
              those questions.
            </p>
            <div class="btn">
              <a href="/">Learn more</a>
              <a href="/" class="black">
                View resource
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>LIBRARY</span>
            <h3>SPACE</h3>
            <p>
              For thousands of years, people have looked up at the night sky
              with questions. <br />
              As technologies have advanced so to has our ability to investigate
              those questions.
            </p>
            <div class="btn">
              <a href="/">Learn more</a>
              <a href="/" class="black">
                View resource
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>LIBRARY</span>
            <h3>SPACE</h3>
            <p>
              For thousands of years, people have looked up at the night sky
              with questions. <br />
              As technologies have advanced so to has our ability to investigate
              those questions.
            </p>
            <div class="btn">
              <a href="/">Learn more</a>
              <a href="/" class="black">
                View resource
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
