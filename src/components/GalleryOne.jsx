"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const GalleryOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='gallery-area-2'>
        <div className='container'>
          <div className='section-title'>
            <div className='row'>
              <div className='col-lg-8 align-self-center'>
                <h2
                  className='title stoke-title large-title move-line-3d'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  Crypto Minings
                </h2>
              </div>
              <div className='col-lg-4 align-self-center'>
                <div className='border-left-5px ps-5'>
                  <button
                    href='#'
                    onClick={() => setIsOpen(true)}
                    className='video-play-btn me-3 video-play-btn-hover'
                  >
                    <i className='fa fa-play color-base' />
                  </button>
                  <span className='tt-uppercase d-md-inline-block d-none'>
                    see solution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-2 col-sm-6 px-2'>
            <div className='thumb'>
              <Link href='/tournament-details'>
                <img
                  className='w-100'
                  src='assets/img/gallery-2/1.png'
                  alt='img'
                />
              </Link>
            </div>
            <div className='thumb'>
              <Link href='/tournament-details'>
                <img
                  className='w-100'
                  src='assets/img/gallery-2/2.png'
                  alt='img'
                />
              </Link>
            </div>
          </div>
          <div className='col-lg-2 col-sm-6 order-lg-3 px-2'>
            <div className='thumb'>
              <Link href='/tournament-details'>
                <img
                  className='w-100'
                  src='assets/img/gallery-2/4.png'
                  alt='img'
                />
              </Link>
            </div>
            <div className='thumb'>
              <Link href='/tournament-details'>
                <img
                  className='w-100'
                  src='assets/img/gallery-2/5.png'
                  alt='img'
                />
              </Link>
            </div>
          </div>
          <div className='col-lg-6 col-sm-6 order-lg-2 px-2'>
            <div className='thumb'>
              <Link href='/tournament-details'>
                <img
                  className='w-100'
                  src='assets/img/gallery-2/3.png'
                  alt='img'
                />
              </Link>
            </div>
          </div>
          <div className='col-lg-2 col-sm-6 order-lg-4 px-2'>
            <div className='thumb'>
              <Link href='/tournament-details'>
                <img
                  className='w-100'
                  src='assets/img/gallery-2/6.png'
                  alt='img'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default GalleryOne;
