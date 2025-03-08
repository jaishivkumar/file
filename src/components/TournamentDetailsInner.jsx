import Link from "next/link";
import React from "react";

const TournamentDetailsInner = () => {
  return (
    <>
      {/* tournament-details area start */}
      <div className='tournament-details-area pd-top-120 '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
              <div className='team-details-page-content'>
                <div className='row mb-4'>
                  <div className='col-md-6'>
                    <div className='thumb mb-md-0 mb-2'>
                      <img
                        className='w-100'
                        src='assets/img/tournament/11.png'
                        alt='img'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='thumb mb-2 pb-1'>
                      <img
                        className='w-100'
                        src='assets/img/tournament/12.png'
                        alt='img'
                      />
                    </div>
                    <div className='thumb'>
                      <img
                        className='w-100'
                        src='assets/img/tournament/13.png'
                        alt='img'
                      />
                    </div>
                  </div>
                </div>
                <div className='info-meta d-lg-flex justify-content-lg-between align-self-center'>
                  <h3 className='tt-capitalize mobile-medium'>
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
                    <div className='col-md-3 col-6'>
                      <span className='tt-uppercase'>Prize Money</span> <br />
                      <span className='tt-uppercase color-base'>
                        <i className='fa fa-award me-2' /> $15000
                      </span>
                    </div>
                    <div className='col-md-3 col-6'>
                      <span className='tt-uppercase'>Win time</span> <br />
                      <span className='tt-uppercase'>
                        <i className='fa fa-clock me-2' /> 5 Time
                      </span>
                    </div>
                    <div className='col-lg-6 text-md-end mt-md-0 mt-3'>
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
                <div className='details mt-4 mb-4'>
                  <p>
                    Do think your skin should look and refhed matted Nourish
                    your outecon secture’arew inner deauty with our essential
                    infused include hits like have the best online games. From
                    its medieval origins to the digital erare learn everything
                    there is to know about the ubiquitous lorem ipsum.
                  </p>
                  <p>
                    We think your skin should look and refhed matted Nourish
                    your outecon secture’arew inner deauty with our essential
                    infused include hits like have the best online games. From
                    its medieval origins to the digital erare learn everything
                    there is to know about the ubiquitous lorem ipsum passage
                    surge in popularity during the 1960s when Letraset used it
                    on their dry-transfer sheets, and again during the 90tihs as
                    desktop publishers bundled the text with their software.
                  </p>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h4 className='tt-uppercase mb-3'>
                      Game <span className='color-base'>Info</span>
                    </h4>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='game-info bg-box border-box border-radius-10 p-4 mb-4'>
                      <div className='d-flex align-self-center justify-content-between mb-5'>
                        <img src='assets/img/icon/8.png' alt='img' />
                        <div className='img'>
                          <img src='assets/img/icon/11.png' alt='img' />
                        </div>
                      </div>
                      <h4 className='mb-1'>Team size</h4>
                      <span className='color-base'>4 player</span>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='game-info bg-box border-box border-radius-10 p-4 mb-4'>
                      <div className='d-flex align-self-center justify-content-between mb-5'>
                        <img src='assets/img/icon/8.png' alt='img' />
                        <div className='img'>
                          <img src='assets/img/icon/11.png' alt='img' />
                        </div>
                      </div>
                      <h4 className='mb-1'>Team size</h4>
                      <span className='color-base'>4 player</span>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='game-info bg-box border-box border-radius-10 p-4 mb-4'>
                      <div className='d-flex align-self-center justify-content-between mb-5'>
                        <img src='assets/img/icon/8.png' alt='img' />
                        <div className='img'>
                          <img src='assets/img/icon/11.png' alt='img' />
                        </div>
                      </div>
                      <h4 className='mb-1'>Team size</h4>
                      <span className='color-base'>4 player</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-12 pe-xl-5 mt-lg-0 mt-4'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='widget widget-tournament-contact'>
                <div className='border-bottom-1 pb-2 mb-4'>
                  <h3 className='border-left-base tt-uppercase ps-3 mobile-medium'>
                    <span className='color-base'>CHECK</span> Home Enquiry
                  </h3>
                </div>
                <form>
                  <div className='single-input-inner style-border style-bg'>
                    <label className='mb-2'>Your Name *</label>
                    <input type='text' placeholder='Name' />
                  </div>
                  <div className='single-input-inner style-border style-bg'>
                    <label className='mb-2'>Email *</label>
                    <input type='text' placeholder='Email' />
                  </div>
                  <div className='single-input-inner style-border style-bg'>
                    <label className='mb-2'>Phone *</label>
                    <input type='text' placeholder='Phone' />
                  </div>
                  <div className='single-input-inner style-border style-bg'>
                    <label className='mb-2'>Your Inquiry *</label>
                    <textarea placeholder='Message' defaultValue={""} />
                  </div>
                  <div className='check d-flex align-self-start mb-3'>
                    <label>
                      <input className='me-2' type='checkbox' />* I agree with
                      Terms of Service.
                    </label>
                  </div>
                  <button
                    type='submit'
                    className='btn btn-base border-radius-0 w-100 mt-2'
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
              <div className='widget widget-trending-match'>
                <h3 className='title'>trending match</h3>
                <ul>
                  <li>
                    <div className='thumb'>
                      <img src='assets/img/tournament/5.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h4>Crack Head</h4>
                      <span className='color-base'>
                        <img src='assets/img/1.png' alt='img' /> $15000
                      </span>
                      <img
                        className='right-icon'
                        src='assets/img/icon/11.png'
                        alt='img'
                      />
                    </div>
                  </li>
                  <li>
                    <div className='thumb'>
                      <img src='assets/img/tournament/6.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h4>Crack Head</h4>
                      <span className='color-base'>
                        <img src='assets/img/1.png' alt='img' /> $15000
                      </span>
                      <img
                        className='right-icon'
                        src='assets/img/icon/11.png'
                        alt='img'
                      />
                    </div>
                  </li>
                  <li>
                    <div className='thumb'>
                      <img src='assets/img/tournament/7.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h4>Crack Head</h4>
                      <span className='color-base'>
                        <img src='assets/img/1.png' alt='img' /> $15000
                      </span>
                      <img
                        className='right-icon'
                        src='assets/img/icon/11.png'
                        alt='img'
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tournament-details area end */}
      {/* schedule-details area start */}
      <div className='schedule-details-area bg-gray-black pd-top-100 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h6
                  className='sub-title tt-uppercase'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  schedule
                </h6>
                <h2 className='title' data-aos='fade-up' data-aos-delay='400'>
                  Match Schedule
                </h2>
              </div>
            </div>
          </div>
          <div className='row' data-aos='fade-up' data-aos-delay='300'>
            <div className='col-lg-4'>
              <div className='game-info bg-box border-box border-radius-10 p-4 mb-4'>
                <div className='d-flex align-self-center justify-content-between'>
                  <div className='left-content'>
                    <span className='mb-1 color-base tt-uppercase'>
                      Round 1
                    </span>
                    <h6>April 20 18 : 00</h6>
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/icon/12.png' alt='img' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='game-info bg-box border-box border-radius-10 p-4 mb-4'>
                <div className='d-flex align-self-center justify-content-between'>
                  <div className='left-content'>
                    <span className='mb-1 color-base tt-uppercase'>
                      Round 1
                    </span>
                    <h6>April 20 18 : 00</h6>
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/icon/12.png' alt='img' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='game-info bg-box border-box border-radius-10 p-4 mb-4'>
                <div className='d-flex align-self-center justify-content-between'>
                  <div className='left-content'>
                    <span className='mb-1 color-base tt-uppercase'>
                      Round 1
                    </span>
                    <h6>April 20 18 : 00</h6>
                  </div>
                  <div className='thumb'>
                    <img src='assets/img/icon/12.png' alt='img' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='schedule-img' data-aos='fade-up' data-aos-delay='300'>
            <img src='assets/img/schedule.png' alt='img' />
          </div>
        </div>
      </div>
      {/* schedule-details area end */}
    </>
  );
};

export default TournamentDetailsInner;
