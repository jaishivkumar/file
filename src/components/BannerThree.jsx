import Link from "next/link";
import React from "react";

const BannerThree = () => {
  return (
    <div
      className='banner-area bg-relative banner-area-3 bg-cover'
      style={{ backgroundImage: 'url("./assets/img/banner-3/bg.png")' }}
    >
      <div className='container position-relative'>
        <div className='banner-content text-center'>
          <div
            className='thumb fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <img src='assets/img/banner-3/1.png' alt='img' />
          </div>
          <h1
            className='title split_chars'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            create <span>nft’s</span>
          </h1>
          <h4
            className='sub-title split_chars'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            GENERAL INFORMATION
          </h4>
          <div
            className='btn-box d-block fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <Link className='btn btn-main style-small' href='/about'>
              <span>
                <span>Explore More</span>
              </span>
            </Link>
          </div>
        </div>
        {/* lefts-image */}
        <img
          className='animate-img-1 animate-img top_image_bounce'
          src='assets/img/banner-3/animate-1.png'
          alt='img'
        />
        <img
          className='animate-img-2 animate-img spin_image'
          src='assets/img/banner-3/animate-2.png'
          alt='img'
        />
        <img
          className='animate-img-3 animate-img spin_image shapeBlinker_img'
          src='assets/img/banner-3/animate-3.png'
          alt='img'
        />
        <img
          className='animate-img-4 animate-img'
          src='assets/img/banner-3/animate-4.png'
          alt='img'
        />
        {/* right-image */}
        <img
          className='animate-img-5 animate-img left_image_bounce'
          src='assets/img/banner-3/animate-5.png'
          alt='img'
        />
        <img
          className='animate-img-6 animate-img spin_image'
          src='assets/img/banner-3/animate-3.png'
          alt='img'
        />
        <img
          className='animate-img-7 animate-img spin_image'
          src='assets/img/banner-3/animate-3.png'
          alt='img'
        />
        <img
          className='animate-img-8 animate-img shapeBlinker_img'
          src='assets/img/banner-3/animate-4.png'
          alt='img'
        />
      </div>
    </div>
  );
};

export default BannerThree;
