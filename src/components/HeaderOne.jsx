"use client";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SpectateButton from "./SpectateButton";
//  import Shope from './Shope'
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Shope } from "../components/cloths/Shope";
import { PlayButton } from "./play";
import SucribeButton from "./SubcribeButton";
import Profile from "./profile";
import AuthHeaderButtons from "./SignupLogin";

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);
  const location = usePathname();
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const bodyOverlayRef = useRef(null);
  const searchPopupRef = useRef(null);
  const sidebarMenuRef = useRef(null);

  useEffect(() => {
    const handleOverlayClick = (e) => {
      e.preventDefault();
      bodyOverlayRef.current.classList.remove("active");
      searchPopupRef.current.classList.remove("active");
      sidebarMenuRef.current.classList.remove("active");
    };

    // Handle search button click
    const handleSearchBarClick = (e) => {
      e.preventDefault();
      searchPopupRef.current.classList.add("active");
      bodyOverlayRef.current.classList.add("active");
    };

    // Attach event listeners
    const bodyOverlayElement = bodyOverlayRef.current;
    const searchBarButton = document.querySelector(".search-bar-btn");

    if (bodyOverlayElement) {
      bodyOverlayElement.addEventListener("click", handleOverlayClick);
    }

    if (searchBarButton) {
      searchBarButton.addEventListener("click", handleSearchBarClick);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (bodyOverlayElement) {
        bodyOverlayElement.removeEventListener("click", handleOverlayClick);
      }
      if (searchBarButton) {
        searchBarButton.removeEventListener("click", handleSearchBarClick);
      }
    };
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sub-menu
  const handleSubMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      {/* search popup start*/}
      <div
        className="td-search-popup"
        id="td-search-popup"
        ref={searchPopupRef}
      >
        <form action="index" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div className="body-overlay" id="body-overlay" ref={bodyOverlayRef} />
      {/* navbar start */}
      <nav
        className={`navbar  main navbar-area navbar-area-1 navbar-border navbar-expand-lg ${scroll ? "sticky-active" : ""
          }`}
        style={{ backgroundColor: "#070b11" }}
      >
        <div className="container nav-container px-lg-0">

          <div className="logo">
            <div className="d-flex items-center gap-5">
              <Link href="/">
                <img src="assets/fonts/logo.png" alt="img" />
              </Link>
            </div>
          </div>
          <div>
            <SucribeButton />
          </div>
          {/* <div className='collapse navbar-collapse' id='xdyat_main_menu'>
            <ul className='navbar-nav menu-open ps-xl-5 pe-xl-4 text-end'>
              <li className='menu-item-has-children'>
                <Link
                  className={
                    ["/", "/index-2", "/index-3"].includes(location)
                      ? "active"
                      : ""
                  }
                  href='#'
                >
                  Home
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      className={location === "/" ? "current" : ""}
                      href='/'
                    >
                      Home 01
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/index-2'
                      className={location === "/index-2" ? "current" : ""}
                    >
                      Home 02
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/index-3'
                      className={location === "/index-3" ? "current" : ""}
                    >
                      Home 03
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='/about'
                  className={["/about"].includes(location) ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li className='menu-item-has-children'>
                <Link
                  className={
                    ["/tournament", "/tournament-details"].includes(location)
                      ? "active"
                      : ""
                  }
                  href='#'
                >
                  Tournament
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      href='/tournament'
                      className={location === "/tournament" ? "current" : ""}
                    >
                      Tournament
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/tournament-details'
                      className={
                        location === "/tournament-details" ? "current" : ""
                      }
                    >
                      Tournament Details
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className='menu-item-has-children'>
                <Link
                  className={
                    [
                      "/shop",
                      "/shop-details",
                      "/explore-product",
                      "/cart",
                      "/checkout",
                    ].includes(location)
                      ? "active"
                      : ""
                  }
                  href='#'
                >
                  Shop
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      className={location === "/shop" ? "current" : ""}
                      href='/shop'
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/shop-details" ? "current" : ""}
                      href='/shop-details'
                    >
                      Shop Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location === "/explore-product" ? "current" : ""
                      }
                      href='/explore-product'
                    >
                      Explore product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/cart" ? "current" : ""}
                      href='/cart'
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/checkout" ? "current" : ""}
                      href='/checkout'
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children dropdown-sub-menu'>
                <Link
                  className={
                    [
                      "/blog",
                      "/blog-list",
                      "/blog-grid",
                      "/create-item",
                      "/blog-details",
                      "/creators",
                      "/creator-details",
                      "/service",
                      "/service-details",
                      "/team",
                      "/team-details",
                      "/auction",
                      "/help-center",
                      "/login",
                      "/wallet",
                      "/error",
                    ].includes(location)
                      ? "active"
                      : ""
                  }
                  href='#'
                >
                  Pages
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      className={location === "/blog" ? "current" : ""}
                      href='/blog'
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/blog-list" ? "current" : ""}
                      href='/blog-list'
                    >
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/blog-grid" ? "current" : ""}
                      href='/blog-grid'
                    >
                      Blog Grid
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/blog-details" ? "current" : ""}
                      href='/blog-details'
                    >
                      Blog Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/create-item" ? "current" : ""}
                      href='/create-item'
                    >
                      Create Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/creators" ? "current" : ""}
                      href='/creators'
                    >
                      Creators
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location === "/creator-details" ? "current" : ""
                      }
                      href='/creator-details'
                    >
                      Creator details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/service" ? "current" : ""}
                      href='/service'
                    >
                      service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location === "/service-details" ? "current" : ""
                      }
                      href='/service-details'
                    >
                      Service Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/team" ? "current" : ""}
                      href='/team'
                    >
                      team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/team-details" ? "current" : ""}
                      href='/team-details'
                    >
                      team Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/auction" ? "current" : ""}
                      href='/auction'
                    >
                      Auction
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/help-center" ? "current" : ""}
                      href='/help-center'
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/login" ? "current" : ""}
                      href='/login'
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/wallet" ? "current" : ""}
                      href='/wallet'
                    >
                      Wallet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={location === "/error" ? "current" : ""}
                      href='/error'
                    >
                      404
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={["/contact"].includes(location) ? "active" : ""}
                  href='/contact'
                >
                  Contact Us
                </Link>
              </li> */}
            {/* </ul>
          // </div> */}

          <div>

                <SpectateButton/>
              </div>
              <div>
                <PlayButton/>
              </div>
              <div>
              <Shope/>
              </div>
             <div>
              <play/>
             </div>
           <div>

           <Login/>
           {/* <Profile/> */}
            </div>
            <div>
       <Signup/>
       </div>

        </div>


      </nav>
      {/* navbar end */}
      {/* off canvas */}

      {/* off canvas end */}

      {/* Mobile Menu */}
      <nav
        className={`navbar mobile navbar-area navbar-area-1 navbar-border navbar-expand-lg ${scroll ? "sticky-active" : ""
          }`}
      >
        <div className="container nav-container px-lg-0">
          {/* Mobile Menu Toggle Button */}
          <div className="responsive-mobile-menu">
            <button
              className={`menu toggle-btn d-block d-lg-none ${isMobileMenuOpen ? "open" : ""
                }`}
              onClick={handleMobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="icon-left"></span>
              <span className="icon-right"></span>
            </button>
          </div>

          {/* Logo */}
          <div className="logo">
            {/* <Link href='/'>
              <img src='assets/img/logo.png' alt='Logo' />
            </Link> */}
             <Link href='/'>
                <img src='assets/fonts/logo.png' alt='img' />
              </Link>
          </div>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? "sopen" : ""
              }`}
            id="xdyat_main_menu"
          >
            <ul className="navbar-nav menu-open ps-lg-5 pe-xl-4 text-end ">
              <li
              // className={`menu-item-has-children ${activeMenu === 0 ? "show" : ""
              //   }`}
              >
                <Link
                  href="#"
                >
                  <SpectateButton />
                </Link>
                <Link
                  href='#'

                >
                  <PlayButton/>
                </Link>

                {/* <ul
                  className='sub-menu'
                  style={{ display: activeMenu === 0 ? "block" : "none" }}
                >
                  <li>
                    <Link
                      href='/'
                      className={location === "/" ? "current" : ""}
                    >
                      Home 01
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/index-2'
                      className={location === "/index-2" ? "current" : ""}
                    >
                      Home 02
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/index-3'
                      className={location === "/index-3" ? "current" : ""}
                    >
                      Home 03
                    </Link>
                  </li>
                </ul> */}
              </li>

              <li>
                <Link
                  href="/about"
                  className={location === "/about" ? "active" : ""}
                >
                  <Shope />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={location === "/about" ? "active" : ""}
                >
                  <Login />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={location === "/about" ? "active" : ""}
                >
                  <Signup />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
