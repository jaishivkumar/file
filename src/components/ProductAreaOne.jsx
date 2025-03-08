import Link from "next/link";
import React from "react";

const ProductAreaOne = () => {
  return (
    <div className='product-area pd-top-100 pd-bottom-100 bg-cover'>
      <div className='container'>
        <div className='section-title text-center'>
          <h6 className='sub-title' data-aos='fade-up' data-aos-delay='300'>
            Our Product
          </h6>
          <h2 className='title' data-aos='fade-up' data-aos-delay='400'>
            Discover collect
          </h2>
          <span data-aos='fade-up' data-aos-delay='500'>
            <img
              className='mt-3'
              src='assets/img/icon/shalep-1.png'
              alt='img'
            />
          </span>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div
              className='single-product-inner text-center'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='thumb'>
                <img src='assets/img/product/1.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <Link href='/shop-details'>AirPods</Link>
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
          <div className='col-lg-3 col-md-6'>
            <div
              className='single-product-inner text-center'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='thumb'>
                <img src='assets/img/product/2.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <Link href='/shop-details'>Main Watch</Link>
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
          <div className='col-lg-3 col-md-6'>
            <div
              className='single-product-inner text-center'
              data-aos='fade-up'
              data-aos-delay='400'
            >
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
          <div className='col-lg-3 col-md-6'>
            <div
              className='single-product-inner text-center'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <div className='thumb'>
                <img src='assets/img/product/4.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <Link href='/shop-details'>Headphones</Link>
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
  );
};

export default ProductAreaOne;
