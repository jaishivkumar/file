import Link from "next/link";
import React from "react";

const FooterTwo = () => {
  return (
    <footer
      className='footer-area footer-area-2 text-center bg-cover'
      style={{ backgroundImage: 'url("./assets/img/footer/bg-2.png")' }}
    >
      <div className='container'>
        <div className='footer-top'>
          <Link className='footer-logo' href='/'>
            <img src='assets/img/logo.png' alt='img' />
          </Link>
          <p>
            +0 123 456 7890 - <span>info@yourmail.com</span>
          </p>
          <ul className='p-0 m-0'>
            <li>
              {" "}
              <Link href='/'>Home</Link>
            </li>
            <li>
              {" "}
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              {" "}
              <Link href='/tournament'>Tournament</Link>
            </li>
            <li>
              {" "}
              <Link href='/news'>News</Link>
            </li>
            <li>
              {" "}
              <Link href='/pages'>Pages</Link>
            </li>
            <li>
              {" "}
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          <img src='assets/img/footer/line.png' alt='img' />
        </div>
        <p className='copyright'>
          ©2024–by <span>XDYAT</span> © All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default FooterTwo;
