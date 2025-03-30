import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Logo1 from "../../../public/img/Logo1.jpg";
import Logo2 from "../../../public/img/logo2.jpg";
import Logo3 from "../../../public/img/logo3.jpg";
import Logo4 from "../../../public/img/logo4.jpg";
import Logo5 from "../../../public/img/logo5.jpg";
import Logo6 from "../../../public/img/logo6.jpg";
import Logo7 from "../../../public/img/logo7.jpg";
import Logo8 from "../../../public/img/logo8.jpg";
import Logo9 from "../../../public/img/logo9.jpg";

const Bannar = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo1})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    Ancient Egyptian Weaponry MiddleAgesIllustration
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo2})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    Terracotta vase with indigenous pattern
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo3})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    View of ancient pottery vessels and earthenware
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo4})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    Close-up of an animal representation on wall
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo5})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    Ancient pottery vessel with retro design
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo6})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    Ancient pottery vessel with retro design
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo7})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    The Amaravati Collection sometimes called the Amaravati
                    Marbles is a series of 120 sculptures and inscriptions in
                    the British Museum
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo8})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    African stone statues on a green background Culture and Art
                    Africa
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              class="hero h-96"
              style={{
                backgroundImage: `url(${Logo9})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl font-bold text-center">
                    Old Skeleton Key
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <h1 className="text-3xl font-bold text-center mt-3">
          Featured Artifacts
        </h1>
      </div>
    </div>
  );
};

export default Bannar;
