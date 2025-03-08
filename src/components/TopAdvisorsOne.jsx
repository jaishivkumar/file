"use client";
import Link from "next/link";
import React, { useRef } from "react";

import Slider from "react-slick";

const TopAdvisorsOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    speed: 500,
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
    <div
      className='top-advisors-area one pd-top-120 pd-bottom-90 bg-cover'
      style={{ backgroundImage: 'url("assets/img/creator/bg2.png")' }}
    >
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6
                className='sub-title split_chars'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Team &amp; Advisors
              </h6>
              <h2
                className='title move-line-3d'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Crypto Expert Advisors
              </h2>
            </div>
            <div className='col-lg-6 align-self-center mt-md-0 mt-4'>
              <div className='array-button slider-control-round  text-lg-end'>
                <button
                  className='array-prev-advisors'
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <i className='fa fa-angle-left' />
                </button>
                <button
                  className='array-next-advisors'
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i className='fa fa-angle-right' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='swiper advisors-slider'>
          <div
            className='swiper-wrapper_inner'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <Slider ref={sliderRef} {...settings}>
              <div className='swiper-slide'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Alxender Pul</Link>
                    </h5>
                    <span className='designation'>CEO</span>
                    <div className='social-list text-end'>
                      <Link href='#'>
                        <i className='fab fa-facebook' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-twitter' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-linkedin' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Siddrat mat</Link>
                    </h5>
                    <span className='designation'>Developer</span>
                    <div className='social-list text-end'>
                      <Link href='#'>
                        <i className='fab fa-facebook' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-twitter' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-linkedin' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Robart Fine</Link>
                    </h5>
                    <span className='designation'>Co-Founder</span>
                    <div className='social-list text-end'>
                      <Link href='#'>
                        <i className='fab fa-facebook' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-twitter' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-linkedin' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Jone Doe</Link>
                    </h5>
                    <span className='designation'>CEO</span>
                    <div className='social-list text-end'>
                      <Link href='#'>
                        <i className='fab fa-facebook' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-twitter' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-linkedin' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/4.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Daniel vibe</Link>
                    </h5>
                    <span className='designation'>CEO</span>
                    <div className='social-list text-end'>
                      <Link href='#'>
                        <i className='fab fa-facebook' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-twitter' />
                      </Link>
                      <Link href='#'>
                        <i className='fab fa-linkedin' />
                      </Link>
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

export default TopAdvisorsOne;
