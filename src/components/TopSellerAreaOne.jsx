'use client'
import React, { useRef } from "react";
import Slider from "react-slick";

const TopSellerAreaOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='top-seller-area  pd-bottom-80'>
      <div className='container'>
        <div className='section-title d-md-flex justify-content-between align-items-center'>
          <h2 className='title move-line-3d' data-aos='fade-up'>
            Top Seller <span>In 1 Day</span>
          </h2>
          <div className='array-button slider-control-round mt-md-0 mt-4'>
            <button
              className='array-next'
              onClick={() => sliderRef.current.slickNext()}
            >
              <i className='fa fa-angle-left' />
            </button>
            <button
              className='array-prev'
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className='fa fa-angle-right' />
            </button>
          </div>
        </div>
        <div className='swiper top-seller-slider '>
          <div
            className='swiper-wrapper_inner'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <Slider ref={sliderRef} {...settings}>
              <div className='swiper-slide'>
                <div
                  className='top-seller-inner'
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className='top-seller-item d-flex justify-content-between'>
                    <div className='thumb'>
                      <img src='assets/img/top-seller/1.png' alt='img' />
                    </div>
                    <div className='content'>
                      <h5 className='tt-uppercase'>first player</h5>
                      <span className='color-base mb-2 d-block'>
                        Highest bid
                      </span>
                      <div className='author-img'>
                        <img src='assets/img/top-seller/4.png' alt='img' />
                        <span>+56</span>
                      </div>
                    </div>
                    <div className='button text-end'>
                      <span className='tag mb-2'>
                        <span>158</span>
                      </span>
                      <span className='tag'>
                        <span>35K</span>
                      </span>
                    </div>
                  </div>
                  <h6 className='bottom-item'>
                    <span />
                    powered by blockchain
                  </h6>
                </div>
              </div>
              <div className='swiper-slide'>
                <div
                  className='top-seller-inner'
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className='top-seller-item d-flex justify-content-between'>
                    <div className='thumb'>
                      <img src='assets/img/top-seller/2.png' alt='img' />
                    </div>
                    <div className='content'>
                      <h5 className='tt-uppercase'>Second player</h5>
                      <span className='color-base mb-2 d-block'>
                        Highest bid
                      </span>
                      <div className='author-img'>
                        <img src='assets/img/top-seller/4.png' alt='img' />
                        <span>+56</span>
                      </div>
                    </div>
                    <div className='button text-end'>
                      <span className='tag mb-2'>
                        <span>158</span>
                      </span>
                      <span className='tag'>
                        <span>35K</span>
                      </span>
                    </div>
                  </div>
                  <h6 className='bottom-item'>
                    <span />
                    powered by blockchain
                  </h6>
                </div>
              </div>
              <div className='swiper-slide'>
                <div
                  className='top-seller-inner'
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className='top-seller-item d-flex justify-content-between'>
                    <div className='thumb'>
                      <img src='assets/img/top-seller/3.png' alt='img' />
                    </div>
                    <div className='content'>
                      <h5 className='tt-uppercase'>Third player</h5>
                      <span className='color-base mb-2 d-block'>
                        Highest bid
                      </span>
                      <div className='author-img'>
                        <img src='assets/img/top-seller/4.png' alt='img' />
                        <span>+56</span>
                      </div>
                    </div>
                    <div className='button text-end'>
                      <span className='tag mb-2'>
                        <span>158</span>
                      </span>
                      <span className='tag'>
                        <span>35K</span>
                      </span>
                    </div>
                  </div>
                  <h6 className='bottom-item'>
                    <span />
                    powered by blockchain
                  </h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellerAreaOne;
