import Link from "next/link";
import React from "react";

const CreatorOne = () => {
  return (
    <div
      className='creator-area service pd-top-120 pd-bottom-100 bg-cover'
      style={{ backgroundImage: 'url("assets/img/creator/bg2.png")' }}
    >
      <div className='container'>
        <div className='section-title text-center'>
          <h6
            className='subtitle color-base split_chars'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Trusted Wallet
          </h6>
          <h2
            className='title move-line-3d'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            trusted by the best
          </h2>
        </div>
        <div className='row'>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <img className='mb-3' src='assets/img/wallet/3.png' alt='img' />
            <h5>Ethereum Max</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <img className='mb-3' src='assets/img/wallet/4.png' alt='img' />
            <h5>Mahereum Max</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <img className='mb-3' src='assets/img/wallet/5.png' alt='img' />
            <h5>Max Tone</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <img className='mb-3' src='assets/img/wallet/6.png' alt='img' />
            <h5>Fix Turbo</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <img className='mb-3' src='assets/img/wallet/7.png' alt='img' />
            <h5>Edereum Max</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='700'
          >
            <img className='mb-3' src='assets/img/wallet/8.png' alt='img' />
            <h5>Roereum Max</h5>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-6 mb-lg-0 mb-5 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            <div className='trusted-wallet-inner'>
              <img
                className='bg-one w-100'
                src='assets/img/bg/1.png'
                alt='img'
              />
              <img
                className='bg-two w-100'
                src='assets/img/bg/2.png'
                alt='img'
              />
              <div className='content-inner text-center'>
                <div className='cat text-end'>
                  <Link href='/wallet'>Crepto User</Link>
                </div>
                <div className='icon'>
                  <img src='assets/img/wallet/1.png' alt='img' />
                </div>
                <span>
                  Safe {"{"}core{"}"}
                </span>
                <h4>The most battle-tested Account Abstraction Stack</h4>
                <Link className='read-more' href='/wallet'>
                  Learn More <i className='fa fa-angle-right' />
                </Link>
              </div>
            </div>
          </div>
          <div
            className='col-lg-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='900'
          >
            <div className='trusted-wallet-inner'>
              <img
                className='bg-one w-100'
                src='assets/img/bg/1.png'
                alt='img'
              />
              <img
                className='bg-two w-100'
                src='assets/img/bg/2.png'
                alt='img'
              />
              <div className='content-inner text-center'>
                <div className='cat text-end'>
                  <Link href='/wallet'>Developer</Link>
                </div>
                <div className='icon'>
                  <img src='assets/img/wallet/2.png' alt='img' />
                </div>
                <span>
                  Safe {"{"}core{"}"}
                </span>
                <h4>The most battle-tested Account Abstraction Stack </h4>
                <Link className='read-more' href='/wallet'>
                  Learn More <i className='fa fa-angle-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorOne;
