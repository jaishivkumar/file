import Link from "next/link";
import React from "react";

const ServiceDetailsInner = () => {
  return (
    <div className='service-details-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4' data-aos='fade-up' data-aos-delay='300'>
            <div className='service-sitebar mb-5'>
              <div className='widget-trending-match'>
                <ul>
                  <li className='title'>
                    <h4 className='service-widget-title'>Trending Match</h4>
                  </li>
                  <li>
                    <Link href='#'>
                      <span /> Upgrade your NFTs
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <span /> Sell on the Marketplace.
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <span /> Receive tokens NFTs
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <span /> Hardcore Multiplayer battles
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='widget-instagram'>
                <div className='border-bottom-1 pb-2 mb-3'>
                  <h4 className='service-widget-title'>instagram</h4>
                </div>
                <ul>
                  <li>
                    <img src='assets/img/service/4.png' alt='img' />
                  </li>
                  <li>
                    <img src='assets/img/service/5.png' alt='img' />
                  </li>
                  <li>
                    <img src='assets/img/service/6.png' alt='img' />
                  </li>
                  <li>
                    <img src='assets/img/service/7.png' alt='img' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
            <div className='service-details-content'>
              <div className='thumb mb-3'>
                <img src='assets/img/service/1.png' alt='img' />
              </div>
              <h2 className='tt-uppercase border-bottom-1 pb-3 mb-3 mobile-medium'>
                Know about warrior
              </h2>
              <p className='mb-3'>
                We think your skin should look and refshed matter Nourish your
                outnsectr inner bety with our essential infused beauty products
                We think your skin should look a refshed matter Nourish your
                outonsectr inner beauty with our essential infused beauty produs
                Lorem coectetur adipisic some fo injected humour, or randomised
                words which don't look even slightly believable.
              </p>
              <p className='mb-3'>
                Anything embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators on the Internet ten repeat predefied
                chunks as neceary, making this the first true generor on the
                Internet. uses dictionary of over 200 Latin words, combined with
                a handful of model.
              </p>
              <ul>
                <li>Multiplayer shooter game built on Unreal</li>
                <li>Saturated by rushed, low-quality video games</li>
              </ul>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='thumb mt-2'>
                    <img src='assets/img/service/2.png' alt='img' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='thumb mt-2'>
                    <img src='assets/img/service/3.png' alt='img' />
                  </div>
                </div>
              </div>
              <h4 className='tt-uppercase mt-4 mb-3'>
                Modern bloggers are a part
              </h4>
              <p className='mb-3'>
                We think your skin should look and refshed matter Nourish your
                outnsectr inner bety with our essential infused beauty products
                We think your skin should look a refshed matter Nourish your
                outonsectr inner beauty with our essential infused beauty produs
                Lorem coectetur adipisic some fo injected humour, or randomised
                words which don't look even slightly believable.
              </p>
              <div className='service-tag-share'>
                <ul>
                  <li>
                    <strong>Tags : </strong>
                  </li>
                  <li>
                    <Link href='#'>Killer Hunter ,</Link>
                  </li>
                  <li>
                    <Link href='#'>Ninja ii ,</Link>
                  </li>
                  <li>
                    <Link href='#'>public</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsInner;
