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

const ProductCart = () => {
  return (
    <div className='product-cart-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
            <div className='product-cart-wrap'>
              <div className='media product-cart-inner'>
                <div className='media-left'>
                  <input className='left-checkbox' type='checkbox' />
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
                <div className='media-left'>
                  <input className='left-checkbox' type='checkbox' />
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
              <div className='media product-cart-inner'>
                <div className='media-left'>
                  <input className='left-checkbox' type='checkbox' />
                  <span className='left-img'>
                    <span>
                      <img src='assets/img/product/3.png' alt='img' />
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
            </div>
          </div>
          <div
            className='col-lg-4 ps-xl-5'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='order-samary mb-3'>
              <ul>
                <li>
                  <h4>oder summary</h4>
                </li>
                <li>
                  <span>subtotal</span>
                  <span>$150.00</span>
                </li>
                <li>
                  <span>tax</span>
                  <span>$5.00</span>
                </li>
                <li>
                  <span>total</span>
                  <span>$155.00</span>
                </li>
                <li>
                  <Link className='btn btn-base w-100 mt-4' href='/checkout'>
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
            <div className='order-samary pt-4 pb-4 mb-4'>
              <ul>
                <li className='mb-0'>
                  <span>Promo Code</span>
                  <span>+</span>
                </li>
              </ul>
            </div>
            <h4 className='tt-uppercase fw-600 mb-3'>Accepted Payments</h4>
            <img src='assets/img/payment-method.png' alt='img' />
            <h4 className='tt-uppercase fw-600 mt-5'>
              Free &amp; Easy <span className='color-base'>Return</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
