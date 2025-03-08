import Link from "next/link";
import React from "react";

const AboutAreaOne = () => {
  return (
    <div
      className='about-area position-relative bg-cover pd-top-120 pd-bottom-70'
      style={{ backgroundImage: 'url("assets/img/about/bg.png")' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 col-lg-10 pe-xl-5'>
            <div
              className='about-thumb-inner mb-4 fade-slide right'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <img src='assets/img/about/1.png' alt='img' />
            </div>
          </div>
          <div className='col-xl-5 align-self-center'>
            <div className='about-content section-title mt-lg-5 mt-xl-0 mb-0'>
              <h2
                className='title move-line-3d'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Gaming Next Level
              </h2>
              <h5
                className='small-title split_chars'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                arctic warfare magnum {"{"}nft’s{"}"}
              </h5>
              <p
                className='content fade-slide bottom'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                Building your own stuff, you can do that too. The ASSET CREATOR
                will allow creators to make things for the as well as sell them
                game’s marketp just characters.
              </p>
              <div
                className='small-title-2 fade-slide bottom'
                data-aos='fade-up'
                data-aos-delay='500'
              >
                <img src='assets/img/about/2.png' alt='img' /> | Earn Great
                Rewards <span className='color-base'>( Friend )</span>
              </div>
              <div
                className='btn-box d-inline-block fade-slide bottom'
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
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-3 col-sm-6'>
            <div
              className='game-single-level text-center p-4 fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <img src='assets/img/about/3.png' alt='img' />
              <h4 className='tt-uppercase mt-3 mb-3'>game &amp; key saler</h4>
              <p>Free yourself from complexities videos vital aspect.</p>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div
              className='game-single-level text-center p-4 fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <img src='assets/img/about/4.png' alt='img' />
              <h4 className='tt-uppercase mt-3 mb-3'>AD generation</h4>
              <p>Free yourself from complexities videos vital aspect.</p>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div
              className='game-single-level text-center p-4 fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <img src='assets/img/about/5.png' alt='img' />
              <h4 className='tt-uppercase mt-3 mb-3'>game promotion</h4>
              <p>Free yourself from complexities videos vital aspect.</p>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div
              className='game-single-level text-center p-4 fade-slide bottom'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <img src='assets/img/about/6.png' alt='img' />
              <h4 className='tt-uppercase mt-3 mb-3'>MOre Earning</h4>
              <p>Free yourself from complexities videos vital aspect.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaOne;
