import Link from "next/link";
import React from "react";

const FeatureAreaOne = () => {
  return (
    <div className='feature-area pd-top-120 pd-bottom-90'>
      <div className='container'>
        <div className='section-title d-md-flex justify-content-between align-items-center'>
          <h2
            className='title move-line-3d'
            data-aos='fade-up'
            data-aos-delay='250'
          >
            featured Item
          </h2>
          <Link
            className='read-more-arrow-text d-flex align-items-center mt-md-0 mt-4'
            href='/explore-product'
          >
            Discover More
            <span>
              <i className='fa fa-arrow-right' />
            </span>
          </Link>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Lune Studio
                <img src='assets/img/feature/1.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/5.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <Link href='/creator-details'>Highest bid</Link>
                  </h5>
                  <Link href='/creator-details' className='bid'>
                    <span className='icon'>
                      <i className='fa fa-link' />
                    </span>
                    3.005 <span className='color-base'>ETH</span>
                  </Link>
                </div>
                <div className='right'>
                  <Link className='btn btn-base bid' href='/creator-details'>
                    BID <i className='fa fa-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Tune Studio
                <img src='assets/img/feature/2.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/6.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <Link href='/creator-details'>Highest bid</Link>
                  </h5>
                  <Link href='/creator-details' className='bid'>
                    <span className='icon'>
                      <i className='fa fa-link' />
                    </span>
                    3.005 <span className='color-base'>ETH</span>
                  </Link>
                </div>
                <div className='right'>
                  <Link className='btn btn-base bid' href='/creator-details'>
                    BID <i className='fa fa-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Bone Studio
                <img src='assets/img/feature/3.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/7.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <Link href='/creator-details'>Highest bid</Link>
                  </h5>
                  <Link href='/creator-details' className='bid'>
                    <span className='icon'>
                      <i className='fa fa-link' />
                    </span>
                    3.005 <span className='color-base'>ETH</span>
                  </Link>
                </div>
                <div className='right'>
                  <Link className='btn btn-base bid' href='/creator-details'>
                    BID <i className='fa fa-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Doe Studio
                <img src='assets/img/feature/4.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/8.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <Link href='/creator-details'>Highest bid</Link>
                  </h5>
                  <Link href='/creator-details' className='bid'>
                    <span className='icon'>
                      <i className='fa fa-link' />
                    </span>
                    3.005 <span className='color-base'>ETH</span>
                  </Link>
                </div>
                <div className='right'>
                  <Link className='btn btn-base bid' href='/creator-details'>
                    BID <i className='fa fa-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAreaOne;
