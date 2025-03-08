import Link from "next/link";
import React from "react";

const CreatorAreaOne = () => {
  return (
    <div
      className='creator-area pd-top-120 pd-bottom-90 bg-cover'
      style={{ backgroundImage: 'url("assets/img/creator/bg2.png")' }}
    >
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6
                className='sub-title split_chars'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Our nft creator
              </h6>
              <h2
                className='title  move-line-3d'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                Top creator of week
              </h2>
            </div>
            <div
              className='col-lg-6 text-lg-end fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='btn-box d-inline-block'>
                <Link className='btn btn-main style-small' href='/about'>
                  <span>
                    <span>Explore More</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div
              className='single-creator-inner'
              style={{ backgroundImage: 'url("assets/img/creator/bg.png")' }}
            >
              <div className='top-list d-flex justify-content-between align-items-center'>
                <div className='author d-flex align-items-center'>
                  <img
                    className='me-2'
                    src='assets/img/creator/1.png'
                    alt='img'
                  />
                  <div className='info'>
                    <h5 className='mb-0'>Lune Studio</h5>
                    <p className='mb-0'>
                      <span>Created by</span> Ninja Hunter
                    </p>
                  </div>
                </div>
                <div className='wishlist product-item__wishlist'>
                  <i className='fas fa-heart pointer' />
                  89
                </div>
              </div>
              <div className='image-list'>
                <div className='row mx-1'>
                  <div className='col-6 px-2'>
                    <img src='assets/img/creator/4.png' alt='img' />
                  </div>
                  <div className='col-6 px-2'>
                    <div className='row'>
                      <div className='col-6 px-2'>
                        <img src='assets/img/creator/5.png' alt='img' />
                      </div>
                      <div className='col-6 px-2'>
                        <img src='assets/img/creator/6.png' alt='img' />
                      </div>
                      <div className='col-12 px-2 mt-2 pt-2'>
                        <img src='assets/img/creator/7.png' alt='img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div
              className='single-creator-inner'
              style={{ backgroundImage: 'url("assets/img/creator/bg.png")' }}
            >
              <div className='top-list d-flex justify-content-between align-items-center'>
                <div className='author d-flex align-items-center'>
                  <img
                    className='me-2'
                    src='assets/img/creator/1.png'
                    alt='img'
                  />
                  <div className='info'>
                    <h5 className='mb-0'>Lune Studio</h5>
                    <p className='mb-0'>
                      <span>Created by</span> Ninja Hunter
                    </p>
                  </div>
                </div>
                <div className='wishlist product-item__wishlist'>
                  <i className='fas fa-heart pointer' />
                  89
                </div>
              </div>
              <div className='image-list'>
                <div className='row mx-1'>
                  <div className='col-6 px-2'>
                    <img src='assets/img/creator/8.png' alt='img' />
                  </div>
                  <div className='col-6 px-2'>
                    <div className='row'>
                      <div className='col-6 px-2'>
                        <img src='assets/img/creator/9.png' alt='img' />
                      </div>
                      <div className='col-6 px-2'>
                        <img src='assets/img/creator/10.png' alt='img' />
                      </div>
                      <div className='col-12 px-2 mt-2 pt-2'>
                        <img src='assets/img/creator/11.png' alt='img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <div
              className='single-creator-inner'
              style={{ backgroundImage: 'url("assets/img/creator/bg.png")' }}
            >
              <div className='top-list d-flex justify-content-between align-items-center'>
                <div className='author d-flex align-items-center'>
                  <img
                    className='me-2'
                    src='assets/img/creator/1.png'
                    alt='img'
                  />
                  <div className='info'>
                    <h5 className='mb-0'>Lune Studio</h5>
                    <p className='mb-0'>
                      <span>Created by</span> Ninja Hunter
                    </p>
                  </div>
                </div>
                <div className='wishlist product-item__wishlist'>
                  <i className='fas fa-heart pointer' />
                  89
                </div>
              </div>
              <div className='image-list'>
                <div className='row mx-1'>
                  <div className='col-6 px-2'>
                    <img src='assets/img/creator/4.png' alt='img' />
                  </div>
                  <div className='col-6 px-2'>
                    <div className='row'>
                      <div className='col-6 px-2'>
                        <img src='assets/img/creator/5.png' alt='img' />
                      </div>
                      <div className='col-6 px-2'>
                        <img src='assets/img/creator/6.png' alt='img' />
                      </div>
                      <div className='col-12 px-2 mt-2 pt-2'>
                        <img src='assets/img/creator/7.png' alt='img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorAreaOne;
