import Link from "next/link";
import React from "react";

const BlogAreaOne = () => {
  return (
    <div className='blog-area bg-gray-black pd-top-110 pd-bottom-90'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              <h6
                className='sub-title split_chars'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Our Latest Blog
              </h6>
              <h2
                className='title move-line-3d'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Our Digital Blog
              </h2>
              <span data-aos='fade-up' data-aos-delay='400'>
                <img
                  className='mt-3'
                  src='assets/img/icon/shalep-1.png'
                  alt='img'
                />
              </span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='single-blog-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/blog/1.png' alt='img' />
              </div>
              <div className='details'>
                <span className='date'>
                  <i className='fa fa-calendar-alt' /> march 19, 2024
                </span>
                <h4 className='title'>
                  <Link href='/blog-details'>
                    Industry Best of Support Venues Dubai
                  </Link>
                </h4>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='357px'
                  height='2px'
                >
                  <path
                    fillRule='evenodd'
                    fill='rgb(30, 41, 54)'
                    d='M178.500,-0.000 C277.083,-0.000 357.000,0.447 357.000,1.000 C357.000,1.552 277.083,1.999 178.500,1.999 C79.917,1.999 -0.000,1.552 -0.000,1.000 C-0.000,0.447 79.917,-0.000 178.500,-0.000 Z'
                  />
                </svg>
                <Link className='read-more-arrow-text' href='/blog-details'>
                  Read More
                  <img src='assets/img/blog/arrow.png' alt='img' />
                </Link>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='single-blog-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/blog/2.png' alt='img' />
              </div>
              <div className='details'>
                <span className='date'>
                  <i className='fa fa-calendar-alt' /> march 19, 2024
                </span>
                <h4 className='title'>
                  <Link href='/blog-details'>
                    Game Pass Available Now Exclusive Reward
                  </Link>
                </h4>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='357px'
                  height='2px'
                >
                  <path
                    fillRule='evenodd'
                    fill='rgb(30, 41, 54)'
                    d='M178.500,-0.000 C277.083,-0.000 357.000,0.447 357.000,1.000 C357.000,1.552 277.083,1.999 178.500,1.999 C79.917,1.999 -0.000,1.552 -0.000,1.000 C-0.000,0.447 79.917,-0.000 178.500,-0.000 Z'
                  />
                </svg>
                <Link className='read-more-arrow-text' href='/blog-details'>
                  Read More
                  <img src='assets/img/blog/arrow.png' alt='img' />
                </Link>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='single-blog-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/blog/3.png' alt='img' />
              </div>
              <div className='details'>
                <span className='date'>
                  <i className='fa fa-calendar-alt' /> march 19, 2024
                </span>
                <h4 className='title'>
                  <Link href='/blog-details'>
                    Industry Best of Support Venues Dubai
                  </Link>
                </h4>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='357px'
                  height='2px'
                >
                  <path
                    fillRule='evenodd'
                    fill='rgb(30, 41, 54)'
                    d='M178.500,-0.000 C277.083,-0.000 357.000,0.447 357.000,1.000 C357.000,1.552 277.083,1.999 178.500,1.999 C79.917,1.999 -0.000,1.552 -0.000,1.000 C-0.000,0.447 79.917,-0.000 178.500,-0.000 Z'
                  />
                </svg>
                <Link className='read-more-arrow-text' href='/blog-details'>
                  Read More
                  <img src='assets/img/blog/arrow.png' alt='img' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAreaOne;
