import Link from "next/link";
import React from "react";

const RoadmapOne = () => {
  return (
    <div
      className='roadmap-area pd-top-120 pd-bottom-90 bg-cover'
      style={{ backgroundImage: 'url("assets/img/creator/bg2.png")' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 align-self-center'>
            <div className='section-title'>
              <h6
                className='sub-title split_chars'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Wish-Keeper{" "}
                <img
                  className='ms-2'
                  src='assets/img/icon/shalep-1.png'
                  alt='img'
                />
              </h6>
              <h2
                className='title mb-4 move-line-3d'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Roadmap VICTORY ISLAND
              </h2>
              <nav
                className='roadmap-tab fade-slide bottom'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                  <button
                    className='nav-link active'
                    id='nav-home-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-home'
                    type='button'
                    role='tab'
                    aria-controls='nav-home'
                    aria-selected='true'
                  >
                    roadmap
                    <img src='assets/img/icon/6.png' alt='img' />
                  </button>
                  <button
                    className='nav-link'
                    id='nav-profile-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#nav-profile'
                    type='button'
                    role='tab'
                    aria-controls='nav-profile'
                    aria-selected='false'
                  >
                    Victory store
                    <img src='assets/img/icon/7.png' alt='img' />
                  </button>
                </div>
              </nav>
              <div
                className='tab-content fade-slide bottom'
                data-aos='fade-up'
                data-aos-delay='500'
                id='nav-tabContent'
              >
                <div
                  className='tab-pane fade show active'
                  id='nav-home'
                  role='tabpanel'
                  aria-labelledby='nav-home-tab'
                >
                  <p>
                    Earn Great Rewards Derwin gukets the unexpected endorseent
                    deal, an old flame.
                  </p>
                  <p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='18.25px'
                      height='18.25px'
                    >
                      <path
                        fillRule='evenodd'
                        stroke='rgb(38, 46, 56)'
                        strokeWidth='1.5px'
                        strokeLinecap='butt'
                        strokeLinejoin='miter'
                        fill='rgb(221, 242, 71)'
                        d='M8.750,0.748 C13.168,0.748 16.750,4.331 16.750,8.748 C16.750,13.166 13.168,16.748 8.750,16.748 C4.332,16.748 0.750,13.166 0.750,8.748 C0.750,4.331 4.332,0.748 8.750,0.748 Z'
                      />
                    </svg>{" "}
                    Great Rewards Derwin ( Friend )
                  </p>
                  <div className='btn-box d-block'>
                    <Link className='btn btn-main style-small' href='#'>
                      <span>
                        <span>Road Mape</span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='nav-profile'
                  role='tabpanel'
                  aria-labelledby='nav-profile-tab'
                >
                  <p>
                    Victory store Aards Derwin gukets the unexpected endorseent
                    deal, an old flame.
                  </p>
                  <p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      width='18.25px'
                      height='18.25px'
                    >
                      <path
                        fillRule='evenodd'
                        stroke='rgb(38, 46, 56)'
                        strokeWidth='1.5px'
                        strokeLinecap='butt'
                        strokeLinejoin='miter'
                        fill='rgb(221, 242, 71)'
                        d='M8.750,0.748 C13.168,0.748 16.750,4.331 16.750,8.748 C16.750,13.166 13.168,16.748 8.750,16.748 C4.332,16.748 0.750,13.166 0.750,8.748 C0.750,4.331 4.332,0.748 8.750,0.748 Z'
                      />
                    </svg>{" "}
                    Victory Rewards Derwin ( Friend )
                  </p>
                  <div className='btn-box d-block'>
                    <Link className='btn btn-main style-small' href='#'>
                      <span>Victory Mape</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='single-roadmap-inner'>
              <img
                className='shape-img'
                src='assets/img/roadmap/bg.png'
                alt='img'
              />
              <div className='roadmap-content'>
                <img
                  className='main-img'
                  src='assets/img/roadmap/1.svg'
                  alt='img'
                />
                <h3>Token Burning</h3>
                <ul>
                  <li>
                    <span className='active' /> Land Creation &amp; Building
                  </li>
                  <li>
                    <span className='active' /> Android Mobile
                  </li>
                  <li>
                    <span className='active' /> iOS Open Beta
                  </li>
                  <li>
                    <span className='active' /> Land Creation &amp; Building
                  </li>
                </ul>
                <div className='text-center divide-shape'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='278px'
                    height='3px'
                  >
                    <path
                      fillRule='evenodd'
                      fill='#0a0909'
                      d='M139.000,-0.002 C215.767,-0.002 278.000,0.670 278.000,1.498 C278.000,2.327 215.767,2.999 139.000,2.999 C62.232,2.999 -0.000,2.327 -0.000,1.498 C-0.000,0.670 62.232,-0.002 139.000,-0.002 Z'
                    />
                  </svg>
                </div>
                <h4>Season 1</h4>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='single-roadmap-inner'>
              <img
                className='shape-img'
                src='assets/img/roadmap/bg.png'
                alt='img'
              />
              <div className='roadmap-content'>
                <img
                  className='main-img'
                  src='assets/img/roadmap/2.svg'
                  alt='img'
                />
                <h3>NFT Holders</h3>
                <ul>
                  <li>
                    <span className='active' /> Land Creation &amp; Building
                  </li>
                  <li>
                    <span className='active' /> Android Mobile
                  </li>
                  <li>
                    <span className='active' /> iOS Open Beta
                  </li>
                  <li>
                    <span className='active' /> Land Creation &amp; Building
                  </li>
                </ul>
                <div className='text-center divide-shape'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='278px'
                    height='3px'
                  >
                    <path
                      fillRule='evenodd'
                      fill='#0a0909'
                      d='M139.000,-0.002 C215.767,-0.002 278.000,0.670 278.000,1.498 C278.000,2.327 215.767,2.999 139.000,2.999 C62.232,2.999 -0.000,2.327 -0.000,1.498 C-0.000,0.670 62.232,-0.002 139.000,-0.002 Z'
                    />
                  </svg>
                </div>
                <h4>Season 1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapOne;
