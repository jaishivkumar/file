import Link from "next/link";
import React from "react";

const ShopInner = () => {
  return (
    <div className='creator-details-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3' data-aos='fade-up' data-aos-delay='300'>
            <div className='creator-widget creator-details-widget'>
              <h4 className='widget-title'> Filter Title </h4>
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
                  <Link className='btn btn-base' href='#'>
                    FILTER
                  </Link>
                  <div className='slider-values'>
                    Price :<span id='min-value'>10</span> -{" "}
                    <span id='max-value'>90</span>
                  </div>
                </div>
              </form>
            </div>
            <div className='creator-widget creator-category-widget'>
              <h4 className='widget-title mb-4'> Filter Title </h4>
              <ul>
                <li>
                  <label>
                    <input type='checkbox' className='me-2' /> Monkey Jet{" "}
                    <span className='count'>03</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' className='me-2' /> Black Coin{" "}
                    <span className='count'>08</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' className='me-2' /> Legendary{" "}
                    <span className='count'>06</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className='creator-widget widget-recent-post style-2'>
              <h4 className='widget-title'>Recent News</h4>
              <ul>
                <li>
                  <div className='media'>
                    <div className='media-left'>
                      <img src='assets/img/widget/1.png' alt='blog' />
                    </div>
                    <div className='media-body align-self-center'>
                      <h6 className='title'>
                        <Link href='/blog-details'>Monkey Jet</Link>
                      </h6>
                      <div className='post-info'>
                        <span>3.05 ETH</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='media'>
                    <div className='media-left'>
                      <img src='assets/img/widget/2.png' alt='blog' />
                    </div>
                    <div className='media-body align-self-center'>
                      <h6 className='title'>
                        <Link href='/blog-details'>Black Coin</Link>
                      </h6>
                      <div className='post-info'>
                        <span>3.05 ETH</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='media'>
                    <div className='media-left'>
                      <img src='assets/img/widget/3.png' alt='blog' />
                    </div>
                    <div className='media-body align-self-center'>
                      <h6 className='title'>
                        <Link href='/blog-details'>Legendary</Link>
                      </h6>
                      <div className='post-info'>
                        <span>3.05 ETH</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='creator-widget instagram-widget'>
              <h4 className='widget-title'>Recent News</h4>
              <ul>
                <li>
                  <img src='assets/img/top-auction/5.png' alt='img' />
                </li>
                <li>
                  <img src='assets/img/top-auction/6.png' alt='img' />
                </li>
                <li>
                  <img src='assets/img/top-auction/7.png' alt='img' />
                </li>
                <li>
                  <img src='assets/img/top-auction/8.png' alt='img' />
                </li>
              </ul>
            </div>
          </div>
          <div
            className='col-lg-9 ps-xl-4'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='row mb-4 pb-lg-4'>
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
                    <option>Recent added</option>
                    <option>Monkey Jet</option>
                    <option>Baseball Cap</option>
                    <option>Black coin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/4.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/4.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-product-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/product/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4 className='title'>
                      <Link href='/shop-details'>Baseball Cap</Link>
                    </h4>
                    <div className='ratting'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6 className='amount'>€50.00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopInner;
