import Link from "next/link";
import React from "react";

const CreatorItems = () => {
  return (
    <>
      <div className='creator-details-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-3 col-lg-4'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='creator-widget creator-details-widget'>
                <h4 className='creator-widget'> Filter Title </h4>
                <form>
                  <div className='range-slider'>
                    <input
                      type='range'
                      id='min'
                      min={0}
                      max={100}
                      defaultValue={10}
                      className='range-input'
                    />
                    <input
                      type='range'
                      id='max'
                      min={0}
                      max={100}
                      defaultValue={90}
                      className='range-input'
                    />
                  </div>
                  <div className='d-flex justify-content-between align-items-center mt-4 pt-3'>
                    <Link className='btn btn-base bid' href='#'>
                      FILTER
                    </Link>
                    <div className='slider-values'>
                      Price :<span id='min-value'> 10</span> -{" "}
                      <span id='max-value'>90</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className='creator-widget creator-category-widget'>
                <h4 className='creator-widget mb-4'> Filter Title </h4>
                <ul>
                  <li>
                    <span className='dot' /> Monkey Jet{" "}
                    <span className='count'>03</span>
                  </li>
                  <li>
                    <span className='dot' /> Black Coin{" "}
                    <span className='count'>08</span>
                  </li>
                  <li>
                    <span className='dot' /> Legendary{" "}
                    <span className='count'>06</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-xl-9 col-lg-8'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='row mb-4 pb-lg-3'>
                <div className='col-lg-6 align-self-center'>
                  <p className='mb-0 tt-uppercase'>
                    <span className='color-base'>showing 1 - 9</span> of 16
                    Results
                  </p>
                </div>
                <div className='col-lg-6 align-self-center text-lg-end'>
                  <div className='filter-inner-btn'>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='14px'
                        height='15px'
                      >
                        <path
                          fillRule='evenodd'
                          fill='rgb(207, 204, 204)'
                          d='M0.424,8.733 L0.424,6.267 L13.576,6.267 L13.576,8.733 L0.424,8.733 ZM0.424,0.513 L13.576,0.513 L13.576,2.979 L0.424,2.979 L0.424,0.513 ZM8.644,14.487 L0.424,14.487 L0.424,12.021 L8.644,12.021 L8.644,14.487 Z'
                        />
                      </svg>
                    </span>
                    <select>
                      <option>shot by : Recent added</option>
                      <option>shot by : Recent added</option>
                      <option>shot by : Recent added</option>
                      <option>shot by : Recent added</option>
                      <option>shot by : Recent added</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl-4 col-md-6'>
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
                          <span className='color-base'>25 SOL</span>
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
                            </span>
                            3.005 <span className='color-base'>ETH</span>
                          </Link>
                        </div>
                        <div className='right'>
                          <Link className='btn btn-base bid' href='#'>
                            BID <i className='fa fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='single-feature-inner style-2'>
                    <div className='thumb text-center p-0'>
                      <img src='assets/img/top-auction/6.png' alt='img' />
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
                          <span className='color-base'>25 SOL</span>
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
                            </span>
                            3.005 <span className='color-base'>ETH</span>
                          </Link>
                        </div>
                        <div className='right'>
                          <Link className='btn btn-base bid' href='#'>
                            BID <i className='fa fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='single-feature-inner style-2'>
                    <div className='thumb text-center p-0'>
                      <img src='assets/img/top-auction/7.png' alt='img' />
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
                          <span className='color-base'>25 SOL</span>
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
                            </span>
                            3.005 <span className='color-base'>ETH</span>
                          </Link>
                        </div>
                        <div className='right'>
                          <Link className='btn btn-base bid' href='#'>
                            BID <i className='fa fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='single-feature-inner style-2'>
                    <div className='thumb text-center p-0'>
                      <img src='assets/img/top-auction/8.png' alt='img' />
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
                          <span className='color-base'>25 SOL</span>
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
                            </span>
                            3.005 <span className='color-base'>ETH</span>
                          </Link>
                        </div>
                        <div className='right'>
                          <Link className='btn btn-base bid' href='#'>
                            BID <i className='fa fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='single-feature-inner style-2'>
                    <div className='thumb text-center p-0'>
                      <img src='assets/img/top-auction/9.png' alt='img' />
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
                          <span className='color-base'>25 SOL</span>
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
                            </span>
                            3.005 <span className='color-base'>ETH</span>
                          </Link>
                        </div>
                        <div className='right'>
                          <Link className='btn btn-base bid' href='#'>
                            BID <i className='fa fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-md-6'>
                  <div className='single-feature-inner style-2'>
                    <div className='thumb text-center p-0'>
                      <img src='assets/img/top-auction/10.png' alt='img' />
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
                          <span className='color-base'>25 SOL</span>
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
                            </span>
                            3.005 <span className='color-base'>ETH</span>
                          </Link>
                        </div>
                        <div className='right'>
                          <Link className='btn btn-base bid' href='#'>
                            BID <i className='fa fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* creator-details end */}
    </>
  );
};

export default CreatorItems;
