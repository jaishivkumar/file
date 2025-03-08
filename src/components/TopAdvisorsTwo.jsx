"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const TopAdvisorsTwo = () => {
  const settings = {
    speed: 500,
    loop: true,
    arrows: false,
    slidesToShow: 4,
    responsive: [
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
    <div className='top-advisors-area pd-top-120 pd-bottom-90'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              <h6
                className='sub-title split_chars'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Team &amp; Advisors
              </h6>
              <h2
                className='title move-line-3d'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                Meet Our Members
              </h2>
              <img
                className='mt-3'
                src='assets/img/icon/shalep-1.png'
                alt='img'
              />
            </div>
          </div>
        </div>
        <div className='swiper advisors-slider'>
          <div
            className='swiper-wrapper_inner'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <Slider {...settings}>
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <Link href='/team-details'>
                      <img src='assets/img/team/1.png' alt='img' />
                    </Link>
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
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <Link href='/team-details'>
                      <img src='assets/img/team/1.png' alt='img' />
                    </Link>
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Robart Jn</Link>
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
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <Link href='/team-details'>
                      <img src='assets/img/team/2.png' alt='img' />
                    </Link>
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Ronea Alexa</Link>
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
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <Link href='/team-details'>
                      <img src='assets/img/team/3.png' alt='img' />
                    </Link>
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
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <Link href='/team-details'>
                      <img src='assets/img/team/4.png' alt='img' />
                    </Link>
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <Link href='/team-details'>Twinkle jn</Link>
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

export default TopAdvisorsTwo;
