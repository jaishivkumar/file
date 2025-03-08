"use client";
import Link from "next/link";
import React, { useRef } from "react";

import Slider from "react-slick";

const TopAuctionAreaOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
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
    <div className='top-auction-area  pd-top-120 pd-bottom-90'>
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div
              className='col-lg-6 col-md-8'
              data-aos='fade-up'
              data-aos-delay='250'
            >
              <h6 className='sub-title split_chars'>top Auction</h6>
              <h2 className='title move-line-3d'>Limited Auction</h2>
            </div>
            <div className='col-lg-6 col-md-4 mt-md-0 mt-4'>
              <div className='array-button slider-control-round text-md-end'>
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
          </div>
        </div>
        <div className='swiper top-auction-slider'>
          <div
            className='swiper-wrapper_inner'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <Slider ref={sliderRef} {...settings}>
              <div className='swiper-slide'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <Link href='/creator-details'>Lune Studio</Link>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <Link href='/creator-details' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </Link>
                      </div>
                      <div className='right'>
                        <Link
                          className='btn btn-base bid'
                          href='/creator-details'
                        >
                          BID <i className='fa fa-arrow-right' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <Link href='/creator-details'>Aune Studio</Link>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <Link href='/creator-details' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </Link>
                      </div>
                      <div className='right'>
                        <Link
                          className='btn btn-base bid'
                          href='/creator-details'
                        >
                          BID <i className='fa fa-arrow-right' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <Link href='/creator-details'>Quae Studio</Link>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <Link href='/creator-details' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </Link>
                      </div>
                      <div className='right'>
                        <Link
                          className='btn btn-base bid'
                          href='/creator-details'
                        >
                          BID <i className='fa fa-arrow-right' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/4.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <Link href='/creator-details'>Lune Studio</Link>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <Link href='/creator-details' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </Link>
                      </div>
                      <div className='right'>
                        <Link
                          className='btn btn-base bid'
                          href='/creator-details'
                        >
                          BID <i className='fa fa-arrow-right' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAuctionAreaOne;
