import React from "react";
import Testimonials from "../Content/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import { FaStar } from "react-icons/fa";

export default function WhoSays() {
  return (
    <>
      <section className="what_coustomer_says">
        <div className="container">
          <div className="section_title">
            <h2>What our customer says</h2>
            <p>Have a look at the testimonials from our valued customers!</p>
          </div>

          <Swiper
            id="coustomer_slider_white"
            slidesPerView={1}
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >
            {Testimonials.map((item, index) => (
              <SwiperSlide>
                <div className="coustomer_slide_box" key={index}>
                  <div className="rating">
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                  <p>{item.para}</p>
                  <div className="avtar_profil">
                    <div className="avatr">
                      <img src={item.au_img} alt="image" />
                    </div>
                    <div className="text">
                      <h3>{item.author}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
