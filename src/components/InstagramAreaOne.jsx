"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const InstagramAreaOne = () => {
  const settings = {
    speed: 500,
    loop: true,
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <div className='instagram-slider-area position-relative'>
      <Link className='instagram-btn' href='#'>
        Instagram
      </Link>
      <div className='swiper instagram-slider'>
        <div className='swiper-wrapper_inner_hold'>
          <Slider {...settings}>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/1.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/2.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/3.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/4.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/5.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/6.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/1.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/2.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/1.png' alt='img' />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='thumb'>
                <img src='assets/img/instagram/2.png' alt='img' />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default InstagramAreaOne;
