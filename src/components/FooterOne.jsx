import Link from "next/link";
import React from "react";

const FooterOne = () => {
  return (
    <footer
      className='footer-area footer-area-1 pd-top-110'
      style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='widget widget_about'>
              <div className='thumb'>
                <img src='assets/img/logo.png' alt='img' />
              </div>
              <div className='details'>
                <p className='mb-3'>
                  Centerl Park West La, New York <br />
                  +0 123 456 7890 <br />
                  info@andspa.com
                </p>
                <h5>Open Hours</h5>
                <p>
                  <strong>
                    Sunday to Friday{" "}
                    <span className='color-base'>08:00-20:00</span>
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='widget widget_nav_menu ps-xl-5'>
              <h4 className='widget-title'>Important Links</h4>
              <ul>
                <li>
                  <Link href='/creators'>CURATION</Link>
                </li>
                <li>
                  <Link href='/about'>ABOUT US</Link>
                </li>
                <li>
                  <Link href='/login'>MY ACCOUNT</Link>
                </li>
                <li>
                  <Link href='/contact'>CONTACT</Link>
                </li>
                <li>
                  <Link href='/checkout'>SHIPPING &amp; RETURNS</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='widget widget_subscribe'>
              <h4 className='widget-title'>Subscribe</h4>
              <p className='mb-3'>
                Sedsit amet nisl inveli viverra bendum acnisi. Etiam efficitur.
              </p>
              <form action='#'>
                <div className='single-input-inner'>
                  <input type='text' placeholder='info@yourmail.com' />
                </div>
                <div className='btn-box d-inline-block'>
                  <button className='btn btn-main style-small'>
                    <span>
                      <span>Subscribe</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='widget widget_instagram ps-xl-5'>
              <h4 className='widget-title'>Instagram</h4>
              <div className='widget widget_contact'>
                <ul>
                  <li>
                    <img src='assets/img/footer/1.png' alt='img' />
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                  <li>
                    <img src='assets/img/footer/2.png' alt='img' />
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                  <li>
                    <img src='assets/img/footer/3.png' alt='img' />
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                  <li>
                    <img src='assets/img/footer/4.png' alt='img' />
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                  <li>
                    <img src='assets/img/footer/5.png' alt='img' />
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                  <li>
                    <img src='assets/img/footer/6.png' alt='img' />
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <p>© 2024 By dyat, All Rights Reserved</p>
            </div>
            <div className='col-lg-6 text-lg-end'>
              <img src='assets/img/footer/7.png' alt='img' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
