"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";

const ProductDetailsInner = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [activeColor, setActiveColor] = useState("bg-yellow");

  const handleColorClick = (color) => {
    setActiveColor(color);
  };
  return (
    <>
      {/* Product-details start */}
      <div
        className='product-details-area inner pd-top-120'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <div className='container'>
          <div className='row'>
            {/* Product Image Slider */}
            <div className='col-lg-6'>
              <div className='product-details-wrap mb-lg-0 mb-4'>
                {/* Thumbnail Slider */}
                <div className='product-small-slider-wrap'>
                  <Swiper
                    modules={[Thumbs]}
                    direction='vertical'
                    slidesPerView={3}
                    spaceBetween={15}
                    onSwiper={setThumbsSwiper}
                    className='productmySwiper'
                  >
                    <SwiperSlide>
                      <div className='thumb'>
                        <img src='assets/img/product/6.png' alt='img' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thumb'>
                        <img src='assets/img/product/7.png' alt='img' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thumb'>
                        <img src='assets/img/product/8.png' alt='img' />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <Swiper
                  modules={[Navigation, Thumbs]}
                  loop={true}
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".array1-next",
                    prevEl: ".array1-prev",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  className='productmySwiper2'
                >
                  <SwiperSlide>
                    <div className='thumb'>
                      <img src='assets/img/product/5.png' alt='img' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='thumb'>
                      <img src='assets/img/product/5.png' alt='img' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='thumb'>
                      <img src='assets/img/product/5.png' alt='img' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='thumb'>
                      <img src='assets/img/product/5.png' alt='img' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* Product Details */}
            <div className='col-lg-6 align-self-center'>
              <div className='product-details ps-xl-4'>
                <div className='ratting inner mb-2 tt-uppercase'>
                  <i className='fa fa-star color-base'></i>
                  <i className='fa fa-star color-base'></i>
                  <i className='fa fa-star color-base'></i>
                  <i className='fa fa-star color-base'></i>
                  <i className='fa fa-star color-base'></i>
                  <span className='ms-2'>100% Quality</span>
                </div>
                <h2 className='tt-uppercase fw-500 mb-4'>Smart Watch</h2>
                <h5 className='price mb-4'>
                  <span className='color-base me-4'>€50.00</span>{" "}
                  <del>€70.00</del>
                </h5>
                <p className='pe-xl-5'>
                  In a space saturated by rushed, low-quality video games,
                  Victory Point is designed by a top-notch gaming studio battle
                  other players through various games.
                </p>
                <div className='color-plate'>
                  <span
                    className={`bg-yellow ${
                      activeColor === "bg-yellow" ? "active" : ""
                    }`}
                    onClick={() => handleColorClick("bg-yellow")}
                  ></span>
                  <span
                    className={`bg-orange ${
                      activeColor === "bg-orange" ? "active" : ""
                    }`}
                    onClick={() => handleColorClick("bg-orange")}
                  ></span>
                  <span
                    className={`bg-white ${
                      activeColor === "bg-white" ? "active" : ""
                    }`}
                    onClick={() => handleColorClick("bg-white")}
                  ></span>
                </div>
                <div className='cart-wrap border-bottom-1 pb-4 mb-3'>
                  <Link
                    className='btn btn-base border-radius-0 tt-uppercase me-2 px-xl-5'
                    href='#'
                  >
                    Add to Cart
                  </Link>
                  <Link
                    className='btn btn-black border-radius-0 tt-uppercase'
                    href='#'
                  >
                    <i className='fa fa-heart ms-0'></i>
                  </Link>
                </div>
                <div className='info-list-product tt-uppercase fw-500'>
                  <span>Category:</span> <Link href='#'>Smart Watch</Link>
                </div>
                <div className='info-list-product tt-uppercase fw-500'>
                  <span>Tag:</span> <Link href='#'>Gadget</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product-details end */}
      {/* Product-details tab start */}
      <div
        className='product-details-tab-area pd-top-120'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <div className='container'>
          <div className='product-details-tab-inner'>
            <div className='row'>
              <div className='col-md-4 pe-0'>
                <div className='product-details-tabs-wrap'>
                  <ul
                    className='product-details-tabs nav nav-tabs'
                    id='myTab'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        id='home-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#home'
                        type='button'
                        role='tab'
                        aria-controls='home'
                        aria-selected='true'
                      >
                        DESCRIPTION
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link active'
                        id='profile-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#profile'
                        type='button'
                        role='tab'
                        aria-controls='profile'
                        aria-selected='false'
                      >
                        ADDITIONAL INFORMATION
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        id='contact-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#contact'
                        type='button'
                        role='tab'
                        aria-controls='contact'
                        aria-selected='false'
                      >
                        REVIEWS (0)
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-8 p-0'>
                <div
                  className='tab-content product-tab-content-wrap'
                  id='myTabContent'
                >
                  <div
                    className='tab-pane fade'
                    id='home'
                    role='tabpanel'
                    aria-labelledby='home-tab'
                  >
                    <div className='tab-content-inner'>
                      <p>
                        In a space saturated by rushed, low-quality video games,
                        space saturated by rushed, low-quality video games,
                        Victory Point is designed by a top-notch Victory Point
                        is designed by a top-notch gaming studio battle other
                        players through various game saturated by rushed,
                        low-quality video games, Victory Point is designed by a
                        top-notch gaming studio
                      </p>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade show active'
                    id='profile'
                    role='tabpanel'
                    aria-labelledby='profile-tab'
                  >
                    <div className='tab-content-inner'>
                      <ul className='tab-content-info-list'>
                        <li>
                          <span>Weight</span> 1.5oz
                        </li>
                        <li>
                          <span>Dimensions</span> 90 × 60 × 90 in
                        </li>
                        <li>
                          <span>Weight</span> Small, Medium, Large
                        </li>
                        <li>
                          <span>Color</span> Black, White
                        </li>
                        <li>
                          <span>Composition</span> 100% Safe
                        </li>
                        <li>
                          <span>Size &amp; Fit</span> This style comes in a
                          regular fit which fits true to size
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='contact'
                    role='tabpanel'
                    aria-labelledby='contact-tab'
                  >
                    <div className='tab-content-inner'>
                      <form className='blog-comment-form mt-0 pt-0'>
                        <div className='mb-3'>
                          <h4>Review Here</h4>
                        </div>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='single-input-inner style-border'>
                              <textarea
                                placeholder='Message'
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Name' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Email' />
                            </div>
                          </div>
                          <div className='col-lg-12'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Subject' />
                            </div>
                          </div>
                          <div className='col-12'>
                            <input type='checkbox' />
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </div>
                          <div className='col-12 mt-4'>
                            <button className='btn btn-base border-radius-5'>
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product-details tab end */}
      {/* product-area start */}
      <div className='product-area pd-top-100 bg-cover'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='title' data-aos='fade-up' data-aos-delay='200'>
              RELATED <span>PRODUCTS</span>
            </h2>
          </div>
          <div className='row'>
            <div
              className='col-lg-3 col-md-6'
              data-aos='fade-up'
              data-aos-delay='200'
            >
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
            <div
              className='col-lg-3 col-md-6'
              data-aos='fade-up'
              data-aos-delay='300'
            >
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
            <div
              className='col-lg-3 col-md-6'
              data-aos='fade-up'
              data-aos-delay='400'
            >
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
            <div
              className='col-lg-3 col-md-6'
              data-aos='fade-up'
              data-aos-delay='500'
            >
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
          </div>
        </div>
      </div>
      {/* product-area end */}
    </>
  );
};

export default ProductDetailsInner;
