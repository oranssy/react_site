import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const sliderCont = [
  {
    category : "CREATIVE ON",
    title : "당신의 첫 날을 응원합니다: CRAFTON 'Day 1' 온보딩 키트",
    desc : "온보딩 경험 설계를 위한 콘텐츠 플로우. One Team, One Dream을 위해 제작된 굿즈들",
    btnTitle2 : "view more",
  },
  {
    category : "PEOPLE ON",
    title : "BE BOLD, LEARN AND WIN",
    desc : "'게임QA는 개발자 분들과 팬들의 중간 단계에 위치해 있다고 생각을 해요. 그래서 저희는 그 두 가지 입장을 다 잘 이해를 하는 게 중요해요.'",
    btnTitle2 : "view more",
  },
  {
    category : "GAME ON",
    title : "유저 덕분에 대박 난 게임들",
    desc : "게임은 게임사에서 만든다, 게임사는 거들 뿐! 게임 제작의 마지막 퍼즐 조각인 ‘갓유저’들을 보유한 게임들",
    btnTitle2 : "view more",
  },
  {
    category : "CURTURE ON",
    title : "버추얼 프로덕션으로 만들어낸 PNC 2022 오프닝 트레일러",
    desc : "3년만에 다시 열린 국가대항전 PUBG NATIONS CUP 2022",
    btnTitle2 : "view more",
  },

];

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
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
              <span>{sliderCont[0].category}</span>
              <h3>{sliderCont[0].title}</h3>
              <p>
                {sliderCont[0].desc}
              </p>
              <div class="btn">
                <a href="/" class="black">
                  {sliderCont[0].btnTitle2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderCont[1].category}</span>
              <h3>{sliderCont[1].title}</h3>
              <p>
                {sliderCont[1].desc}
              </p>
              <div class="btn">
                <a href="/" class="black">
                  {sliderCont[1].btnTitle2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderCont[2].category}</span>
              <h3>{sliderCont[2].title}</h3>
              <p>
                {sliderCont[2].desc}
              </p>
              <div class="btn">
                <a href="/" class="black">
                  {sliderCont[2].btnTitle2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderCont[3].category}</span>
              <h3>{sliderCont[3].title}</h3>
              <p>
                {sliderCont[3].desc}
              </p>
              <div class="btn">
                <a href="/" class="black">
                  {sliderCont[3].btnTitle2}
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
