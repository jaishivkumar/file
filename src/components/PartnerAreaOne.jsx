"use client";
import React from "react";
import Marquee from "react-fast-marquee";
const PartnerAreaOne = () => {
  return (
    <>
      <div className='partner-area-left pd-top-120'>
        <div className='swiper partner-slider-left'>
          <div className='swiper-wrapper'>
            <Marquee>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/1.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/2.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/3.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/4.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/1.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/2.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/3.png' alt='img' />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div className='partner-area-right mt-3'>
        <div className='swiper partner-slider-right'>
          <div className='swiper-wrapper'>
            <Marquee direction='right'>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/1.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/2.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/3.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/4.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/1.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/2.png' alt='img' />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='partner-inner'>
                  <img src='assets/img/partner/3.png' alt='img' />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerAreaOne;
