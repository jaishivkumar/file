import Link from "next/link";
import React from "react";

const CreatorDetailsArea = () => {
  return (
    <div className='creator-details-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-xl-3 col-lg-4'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='creator-widget creator-category-widget'>
              <h4 className='creator-widget mb-4'>Preview Items</h4>
              <div className='single-feature-inner style-2'>
                <div className='thumb text-center p-0'>
                  <img src='assets/img/top-auction/5.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='d-flex justify-content-between border-bottom-1 align-items-center pb-4 mb-4'>
                    <div className='left d-flex justify-content-between align-items-center'>
                      <div className='img border-radius-50 overflow-hidden me-2'>
                        <img src='assets/img/creator-2/u-1.png' alt='img' />
                      </div>
                      <div className='info-d'>
                        <h5 className='mb-0 text-white'>Legendary</h5>
                        <span>@Danil03</span>
                      </div>
                    </div>
                    <div className='right text-end'>
                      <span className='color-base'>25 SOL </span>
                      <i className='far fa-heart' />
                      <div className='ratting'>
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='left'>
                      <h5 className='d-block'>Highest bid</h5>
                      <Link href='#' className='bid'>
                        <span className='icon'>
                          <i className='fa fa-link' />
                        </span>{" "}
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
          </div>
          <div
            className='col-xl-9 col-lg-8'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <form className='create-items-form'>
              <div className='image-upload d-md-flex justify-content-between align-items-center'>
                <p className='mb-md-0'>
                  <img
                    className='me-2'
                    src='assets/img/icon/13.png'
                    alt='img'
                  />
                  PNG, JPG, GIF, WEBP Max 40Mb.
                </p>
                <label className='upload-file'>
                  <input type='file' />
                  Upload File
                </label>
              </div>
              <input
                className='item-field'
                type='text'
                placeholder='Owned by'
              />
              <textarea
                className='item-field'
                placeholder='Description'
                defaultValue={""}
              />
              <input
                className='item-field'
                type='text'
                placeholder='About Link'
              />
              <div className='row'>
                <div className='col-lg-6 mt-3'>
                  <span className='tt-uppercase text-white'>TRails</span>
                  <input
                    className='item-field'
                    type='text'
                    placeholder='Trails'
                  />
                </div>
                <div className='col-lg-6 mt-3'>
                  <span className='tt-uppercase text-white'>Current price</span>
                  <input className='item-field' type='text' placeholder='-/-' />
                </div>
              </div>
              <button className='btn btn-base bid mt-4' type='submit'>
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDetailsArea;
