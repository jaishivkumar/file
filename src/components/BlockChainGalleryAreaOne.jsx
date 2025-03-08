"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Navigation } from "swiper/modules";
const BlockChainGalleryAreaOne = () => {
  return (
    <div className='block-chain-gallery-area one pd-bottom-120'>
      <div className='container'>
        <div className='section-title text-center'>
          <h6
            className='sub-title split_chars'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            Our Blockchain
          </h6>
          <h2
            className='title move-line-3d'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            Powered by blockchain
          </h2>
        </div>
        <div className='block-chain-gallery-slider'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            speed={2000}
            loop={true}
            centeredSlides={true}
            navigation={{
              nextEl: ".array-next",
              prevEl: ".array-prev",
            }}
            breakpoints={{
              1499: {
                slidesPerView: 5,
              },
              1399: {
                slidesPerView: 5,
              },
              1199: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {/* Slides */}
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/1.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/2.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/3.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/4.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/5.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/1.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/2.png')" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='block-chain-gallery-thumb'
                style={{ backgroundImage: "url('assets/img/gallery/3.png')" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlockChainGalleryAreaOne;
