import Link from "next/link";
import React from "react";

const TeamDetailsInner = () => {
  return (
    <div className='team-details-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-4 col-12 pe-xl-5'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='single-advisors-inner'>
              <div className='thumb text-center p-0'>
                <img src='assets/img/team/2.png' alt='img' />
              </div>
              <div className='details'>
                <h5 className='name'>Alxender Pul</h5>
                <span className='designation'>Co-Founder</span>
                <div className='social-list text-end'>
                  <Link href='#'>
                    <i className='fab fa-facebook' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-twitter' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
            <div className='team-details-page-content'>
              <div className='thumb mb-4'>
                <img
                  className='w-100'
                  src='assets/img/team/team-d-1.png'
                  alt='img'
                />
              </div>
              <div className='info-meta d-flex justify-content-between align-self-center'>
                <h3 className='tt-capitalize'>
                  <img src='assets/img/team/info1.png' alt='img' /> About
                  Alxender Pul
                </h3>
                <Link className='btn btn-base' href='#'>
                  Join Now{" "}
                  <img
                    className='ms-2'
                    src='assets/img/team/info2.png'
                    alt='img'
                  />
                </Link>
              </div>
              <div className='price-meta'>
                <div className='row'>
                  <div className='col-3'>
                    <span className='tt-uppercase'>Prize Money</span> <br />
                    <span className='tt-uppercase color-base'>
                      <i className='fa fa-award me-2' /> $15000
                    </span>
                  </div>
                  <div className='col-3'>
                    <span className='tt-uppercase'>Win time</span> <br />
                    <span className='tt-uppercase'>
                      <i className='fa fa-clock me-2' /> 5 Time
                    </span>
                  </div>
                  <div className='col-6 text-end'>
                    <div className='team-share d-inline-block'>
                      <Link href='#'>
                        <i className='fa fa-share-alt' />
                      </Link>
                      <ul>
                        <li>
                          <Link href='#'>
                            <i className='fab fa-facebook' />
                          </Link>
                        </li>
                        <li>
                          <Link href='#'>
                            <i className='fab fa-twitter' />
                          </Link>
                        </li>
                        <li>
                          <Link href='#'>
                            <i className='fab fa-pinterest' />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='details mt-4'>
                <p>
                  Do think your skin should look and refhed matted Nourish your
                  outecon secture’arew inner deauty with our essential infused
                  include hits like have the best online games. From its
                  medieval origins to the digital erare learn everything there
                  is to know about the ubiquitous lorem ipsum.
                </p>
                <p>
                  We think your skin should look and refhed matted Nourish your
                  outecon secture’arew inner deauty with our essential infused
                  include hits like have the best online games. From its
                  medieval origins to the digital erare learn everything there
                  is to know about the ubiquitous lorem ipsum passage surge in
                  popularity during the 1960s when Letraset used it on their
                  dry-transfer sheets, and again during the 90tihs as desktop
                  publishers bundled the text with their software.
                </p>
                <div className='row mt-4  mb-4'>
                  <div className='col-md-6 mb-3 mb-md-0'>
                    <div className='thumb'>
                      <img src='assets/img/team/team-d-2.png' alt='img' />
                    </div>
                  </div>
                  <div className='col-md-6 mb-3 mb-md-0'>
                    <div className='thumb'>
                      <img src='assets/img/team/team-d-3.png' alt='img' />
                    </div>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsInner;
