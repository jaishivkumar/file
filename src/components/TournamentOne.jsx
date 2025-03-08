import Link from "next/link";
import React from "react";

const TournamentOne = () => {
  return (
    <div className='tournament-area pd-top-120 pd-bottom-90'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='section-title text-center'>
              <h6
                className='subtitle color-base split_chars'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Our Tournaments
              </h6>
              <h2
                className='title move-line-3d'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                The VICTORY POINT
              </h2>
              <img
                className='mt-3'
                src='assets/img/icon/shalep-1.png'
                alt='img'
              />
            </div>
          </div>
        </div>
        <div
          className='single-tournament-inner fade-slide bottom'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <img
            className='bg-one'
            src='assets/img/tournament/bg.png'
            alt='img'
          />
          <img
            className='bg-two'
            src='assets/img/tournament/bg-2.png'
            alt='img'
          />
          <div className='row'>
            <div className='col-lg-4 align-self-center'>
              <div className='left-content'>
                <h6>Sky Hunetr</h6>
                <h4 className='location'>Venues Dubai</h4>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='tournament-inner-wrap'>
                <h5 className='date text-center'>August 19, 2023, 8:30 PM</h5>
                <div className='tournament-inner d-flex justify-content-between'>
                  <div className='team-left d-flex align-item-center align-items-center gap-md-5 gap-3'>
                    <img src='assets/img/tournament/1.png' alt='img' />
                    <h2 className='score'>0</h2>
                  </div>
                  <div className='middle-wrap align-self-center'>
                    <h3 className='tournament-beat'>VS</h3>
                  </div>
                  <div className='team-right d-flex align-item-center align-items-center gap-md-5 gap-3'>
                    <img src='assets/img/tournament/2.png' alt='img' />
                    <h2 className='score'>0</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single-tournament-inner fade-slide bottom'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <img
            className='bg-one'
            src='assets/img/tournament/bg.png'
            alt='img'
          />
          <img
            className='bg-two'
            src='assets/img/tournament/bg-2.png'
            alt='img'
          />
          <div className='row'>
            <div className='col-lg-4 align-self-center'>
              <div className='left-content'>
                <h6>Sky Hunetr</h6>
                <h4 className='location'>Venues Dubai</h4>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='tournament-inner-wrap'>
                <h5 className='date text-center'>August 19, 2023, 8:30 PM</h5>
                <div className='tournament-inner d-flex justify-content-between'>
                  <div className='team-left d-flex align-item-center align-items-center gap-md-5 gap-3'>
                    <img src='assets/img/tournament/3.png' alt='img' />
                    <h2 className='score'>0</h2>
                  </div>
                  <div className='middle-wrap align-self-center'>
                    <h3 className='tournament-beat'>VS</h3>
                  </div>
                  <div className='team-right d-flex align-item-center align-items-center gap-md-5 gap-3'>
                    <img src='assets/img/tournament/4.png' alt='img' />
                    <h2 className='score'>0</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single-tournament-inner fade-slide bottom'
          data-aos='fade-up'
          data-aos-delay='500'
        >
          <img
            className='bg-one'
            src='assets/img/tournament/bg.png'
            alt='img'
          />
          <img
            className='bg-two'
            src='assets/img/tournament/bg-2.png'
            alt='img'
          />
          <div className='row'>
            <div className='col-lg-4 align-self-center'>
              <div className='left-content'>
                <h6>Sky Hunetr</h6>
                <h4 className='location'>Venues Dubai</h4>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='tournament-inner-wrap'>
                <h5 className='date text-center'>August 19, 2023, 8:30 PM</h5>
                <div className='tournament-inner d-flex justify-content-between'>
                  <div className='team-left d-flex align-item-center align-items-center gap-md-5 gap-3'>
                    <img src='assets/img/tournament/5.png' alt='img' />
                    <h2 className='score'>0</h2>
                  </div>
                  <div className='middle-wrap align-self-center'>
                    <h3 className='tournament-beat'>VS</h3>
                  </div>
                  <div className='team-right d-flex align-item-center align-items-center gap-md-5 gap-3'>
                    <img src='assets/img/tournament/6.png' alt='img' />
                    <h2 className='score'>0</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='text-center mt-5'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          <div className='btn-box d-block'>
            <Link className='btn btn-main style-small' href='#'>
              <span>
                <span>View More</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentOne;
