import React from "react";

const AboutInnerOne = () => {
  return (
    <div className='about-area position-relative pd-top-110 pd-bottom-70'>
      <div className='container'>
        <div className='text-center mb-5 fade-slide bottom' data-delay='0.2'>
          <img src='assets/img/about/8.png' alt='img' />
        </div>
        <div className='intro-box-wrap gap-3 mb-5'>
          <div
            className='intro-box-inner text-center fade-slide bottom'
            data-delay='0.3'
          >
            <div className='icon'>
              <img src='assets/img/icon/1.png' alt='img' />
            </div>
            <div className='content'>
              <h4>Come Play</h4>
            </div>
          </div>
          <div
            className='intro-box-inner text-center fade-slide bottom'
            data-delay='0.4'
          >
            <div className='icon'>
              <img src='assets/img/icon/2.png' alt='img' />
            </div>
            <div className='content'>
              <h4>Come Play</h4>
            </div>
          </div>
          <div
            className='intro-box-inner text-center fade-slide bottom'
            data-delay='0.5'
          >
            <div className='icon'>
              <img src='assets/img/icon/3.png' alt='img' />
            </div>
            <div className='content'>
              <h4>Come Play</h4>
            </div>
          </div>
          <div
            className='intro-box-inner text-center fade-slide bottom'
            data-delay='0.6'
          >
            <div className='icon'>
              <img src='assets/img/icon/4.png' alt='img' />
            </div>
            <div className='content'>
              <h4>Come Play</h4>
            </div>
          </div>
          <div
            className='intro-box-inner text-center fade-slide bottom'
            data-delay='0.7'
          >
            <div className='icon'>
              <img src='assets/img/icon/5.png' alt='img' />
            </div>
            <div className='content'>
              <h4>Come Play</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-7 col-lg-10 ps-xl-5 order-lg-last'>
            <div
              className='about-thumb-inner position-relative mb-4 text-lg-end fade-slide bottom'
              data-delay='0.5'
            >
              <img src='assets/img/about/9.png' alt='img' />
              <img
                className='animate-top-left top_image_bounce'
                src='assets/img/about/10.png'
                alt='img'
              />
            </div>
          </div>
          <div className='col-xl-5 align-self-center order-lg-start'>
            <div className='about-content section-title mt-5 mt-xl-0 mb-0'>
              <h6 className='sub-title split_chars'>
                Our Roadmap{" "}
                <img
                  className='ms-2'
                  src='assets/img/icon/shalep-1.png'
                  alt='img'
                />
              </h6>
              <h2 className='title move-line-3d'>
                Visual Max <br />
                Confront Oblivion
              </h2>
              <p className='content fade-slide bottom' data-delay='0.2'>
                Building your own stuff, you can do that too. The ASSET CREATOR
                will allow creators to make things for the as well as sell them
                game’s marketp just characters.
              </p>
              <div
                className='small-title-2 pb-4 fade-slide bottom'
                data-delay='0.4'
              >
                <img src='assets/img/about/2.png' alt='img' /> | Earn Great
                Rewards <span className='color-base'>( Friend )</span>
              </div>
              <img src='assets/img/shape/2.png' alt='img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInnerOne;
