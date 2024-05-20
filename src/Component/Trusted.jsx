import React from "react";
import Logos from "../Content/Logos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
export default function Trusted() {
  return (
    <>
      <section className="row_am trusted_section">
        <div className="container">
          <div className="section_title">
            <h2>
              Trusted by <span>150+</span> companies
            </h2>
            <p>
              We have effectively partnered with numerous companies and
              businesses worldwide, providing innovative design solutions and
              creating company logos.
            </p>
          </div>

          <div className="company_logos">
            <Swiper
              id="company_slider"
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}        
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay,Pagination]}
              className="mySwiper"
            >
              {Logos.map((item, index) => (
                <SwiperSlide>
                  <div className="logo">
                    <img key={index} src={item.image} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
