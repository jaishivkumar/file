"use client";
import Link from "next/link";
import React, { useState } from "react";

const CartCount = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className='quantity-wrap'>
      <div className='quantity'>
        <input
          type='number'
          step={1}
          min={0}
          max={100}
          defaultValue={1}
          value={count}
          title='Qty'
          disabled
          className='input-text qty text'
        />
        <button className='inc qty-button custom' onClick={handleIncrement}>
          +
        </button>
        <button className='dec qty-button custom' onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

const CheckoutCartInner = () => {
  return (
    <div className='checkout-area bg-color-50 pd-top-120 pd-bottom-120'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-6 ps-xl-5 order-lg-2'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='media product-cart-inner'>
              <div className='media-left ps-0'>
                <span className='left-img'>
                  <span>
                    <img src='assets/img/product/2.png' alt='img' />
                  </span>
                </span>
              </div>
              <div className='media-body align-self-center'>
                <span className='close'>X</span>
                <h4>Baseball Cap</h4>
                <div className='color-plate'>
                  <select>
                    <option>White</option>
                    <option>Red</option>
                    <option>Black</option>
                  </select>
                  <CartCount />
                </div>
                <div className='amount-area d-flex justify-content-between mt-lg-5 mt-4'>
                  <span>Move to favorites</span>
                  <span className='color-base'>€50.00</span>
                </div>
              </div>
            </div>
            <div className='media product-cart-inner'>
              <div className='media-left ps-0'>
                <span className='left-img'>
                  <span>
                    <img src='assets/img/product/4.png' alt='img' />
                  </span>
                </span>
              </div>
              <div className='media-body align-self-center'>
                <h4>Baseball Cap</h4>
                <div className='color-plate'>
                  <select>
                    <option>White</option>
                    <option>Red</option>
                    <option>Black</option>
                  </select>
                  <CartCount />
                </div>
                <div className='amount-area d-flex justify-content-between mt-lg-5 mt-4'>
                  <span>Move to favorites</span>
                  <span className='color-base'>€50.00</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div className='single-input-inner style-border w-100 me-2'>
                <input
                  className='border-radius-6 tt-uppercase'
                  type='text'
                  placeholder='discount code'
                />
              </div>
              <Link className='btn btn-base px-xl-5' href='/'>
                Apply
              </Link>
            </div>
            <div className='order-samary mb-3 p-0 border-0 mt-4'>
              <ul>
                <li>
                  <span>subtotal</span>
                  <span>$150.00</span>
                </li>
                <li>
                  <span>Shipping cost</span>
                  <span>Free</span>
                </li>
                <li>
                  <span>total</span>
                  <span>$155.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className='col-lg-6 pe-xl-5 order-lg-1 mt-lg-0 mt-5'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <form className='checkout-inner-left'>
              <h5 className='tt-uppercase mb-4'>express checkout</h5>
              <div className='btn-wrap d-flex justify-content-between gap-2'>
                <Link className='btn btn-border-black w-100' href='/'>
                  <img src='assets/img/icon/14.png' alt='img' />
                </Link>
                <Link className='btn btn-border-black w-100' href='/'>
                  <img src='assets/img/icon/15.png' alt='img' />
                </Link>
                <Link className='btn btn-border-black w-100' href='/'>
                  <img src='assets/img/icon/16.png' alt='img' />
                </Link>
              </div>
              <span className='or-border'>
                <span>OR</span>
              </span>
              <div className='d-flex justify-content-between'>
                <h5 className='tt-uppercase mb-4'>express checkout</h5>
                <p className='mb-0 fw-500 tt-uppercase'>
                  Have an account? <Link href='/login'>LOG IN</Link>
                </p>
              </div>
              <div className='single-input-inner style-border border-1 border-radius-6'>
                <span className='p-3 d-block pb-0 pt-2'>Email</span>
                <input
                  className='border-0'
                  type='text'
                  placeholder='info.design@gmail.com'
                />
              </div>
              <h5 className='tt-uppercase mb-4 pt-3'>Shipping Address</h5>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='single-input-inner style-border'>
                    <input
                      className='border-radius-6 tt-uppercase'
                      type='text'
                      placeholder='First Name'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='single-input-inner style-border'>
                    <input
                      className='border-radius-6 tt-uppercase'
                      type='text'
                      placeholder='Last Name'
                    />
                  </div>
                </div>
              </div>
              <div className='single-input-inner style-border'>
                <input
                  className='border-radius-6 tt-uppercase'
                  type='text'
                  placeholder='Phone Number'
                />
              </div>
              <div className='single-input-inner style-border'>
                <input
                  className='border-radius-6 tt-uppercase'
                  type='text'
                  placeholder='Address'
                />
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='single-input-inner style-border'>
                    <input
                      className='border-radius-6 tt-uppercase'
                      type='text'
                      placeholder='City'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='single-input-inner style-border'>
                    <input
                      className='border-radius-6 tt-uppercase'
                      type='text'
                      placeholder='State'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='single-input-inner style-border'>
                    <input
                      className='border-radius-6 tt-uppercase'
                      type='text'
                      placeholder='Country'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='single-input-inner style-border'>
                    <input
                      className='border-radius-6 tt-uppercase'
                      type='text'
                      placeholder='Zip Code'
                    />
                  </div>
                </div>
              </div>
              <h5 className='tt-uppercase mb-4 pt-4'>Shipping method</h5>
              <div className='delevary-status'>
                <div className='delevary-item border-bottom-1 pb-3 mb-3'>
                  <input type='radio' />
                  <h6>Home delivery</h6>
                  <span>Takes 3-5 Business Day</span>
                </div>
                <div className='delevary-item'>
                  <input type='radio' />
                  <h6>Home delivery</h6>
                  <span>Takes 3-5 Business Day</span>
                </div>
              </div>
              <Link className='btn btn-base w-100 tt-uppercase mt-4' href='/'>
                Continue to payment
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartInner;
