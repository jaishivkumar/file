"use client";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderTwo = () => {
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
    // Handle overlay click
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
        className='td-search-popup'
        id='td-search-popup'
        ref={searchPopupRef}
      >
        <form action='index' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <i className='fa fa-search' />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div className='body-overlay' id='body-overlay' ref={bodyOverlayRef} />
      {/* navbar start */}
      <nav
        className={`navbar main navbar-area navbar-area-2 navbar-border navbar-expand-lg ${
          scroll ? "sticky-active" : ""
        }`}
      >
        <div className='container nav-container px-lg-0'>
          <div className='responsive-mobile-menu'>
            <button
              className='menu toggle-btn d-block d-lg-none'
              data-target='#xdyat'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link href='/'>
              <img src='assets/img/logo.png' alt='img' />
            </Link>
          </div>
          <div className='collapse navbar-collapse' id='xdyat_main_menu'>
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
              <li className='menu-item-has-children'>
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
              </li>
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center'>
            <div className='header-search search-bar-btn d-inline-block me-3'>
              <button>
                <svg
                  width={21}
                  height={21}
                  viewBox='0 0 21 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.25 8.625C16.25 10.4219 15.6641 12.1016 14.6875 13.4297L19.6094 18.3906C20.1172 18.8594 20.1172 19.6797 19.6094 20.1484C19.1406 20.6562 18.3203 20.6562 17.8516 20.1484L12.8906 15.1875C11.5625 16.2031 9.88281 16.75 8.125 16.75C3.63281 16.75 0 13.1172 0 8.625C0 4.17188 3.63281 0.5 8.125 0.5C12.5781 0.5 16.25 4.17188 16.25 8.625ZM8.125 14.25C11.2109 14.25 13.75 11.75 13.75 8.625C13.75 5.53906 11.2109 3 8.125 3C5 3 2.5 5.53906 2.5 8.625C2.5 11.75 5 14.25 8.125 14.25Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
            <Link className='header-cart' href='/cart'>
              <svg
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17 18C17.5304 18 18.0391 18.2107 18.4142 18.5858C18.7893 18.9609 19 19.4696 19 20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22C16.4696 22 15.9609 21.7893 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20C15 18.89 15.89 18 17 18ZM1 2H4.27L5.21 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75C7.17 14.8163 7.19634 14.8799 7.24322 14.9268C7.29011 14.9737 7.3537 15 7.42 15H19V17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2ZM7 18C7.53043 18 8.03914 18.2107 8.41421 18.5858C8.78929 18.9609 9 19.4696 9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20C5 18.89 5.89 18 7 18ZM16 11L18.78 6H6.14L8.5 11H16Z'
                  fill='#25C6DA'
                />
              </svg>
            </Link>
            <div className='btn-box d-inline-block'>
              <button
                className='me-3 header-menu-toggle bg-transparent border-0 shadow-0'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasright'
                aria-controls='offcanvasright'
              >
                <svg
                  width={24}
                  height={21}
                  viewBox='0 0 24 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 0V3H24V0H0ZM24 21H16V18H24V21ZM24 12H8V9H24V12Z'
                    fill='#fff'
                  />
                </svg>
              </button>
              <Link className='btn btn-main style-small' href='#'>
                <span>
                  <span>
                    <img src='assets/img/btn-arrow.png' alt='img' />~
                  </span>
                  <span>connect</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar end */}
      {/* off canvas */}
      <div
        className='offcanvas offcanvas-menu-wrap offcanvas-end'
        tabIndex={-1}
        id='offcanvasright'
        ref={sidebarMenuRef}
      >
        <div className='offcanvas-menu-inner'>
          <button
            type='button'
            className='offcanvas-icon'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'></path>
            </svg>
          </button>
          <div className='sidebar-inner'>
            <div className='thumb'>
              <img src='assets/img/logo.png' alt='logo' />
            </div>
            <p>
              we understand better that enim ad minim veniam, consectetur
              adipiscing enim ad minim elit,
            </p>
            <p>
              we understand better that enim ad minim veniam, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className='sidebar-address'>
              <h4 className='mb-3'>contact us</h4>
              <ul>
                <li>
                  <i className='fa fa-map-marker-alt' />
                  lavaca street, suite 2000
                </li>
                <li>
                  <i className='fa fa-envelope' />
                  email@evha.com
                </li>
                <li>
                  <i className='fa fa-phone' />
                  (+880) 172570051
                </li>
              </ul>
            </div>
            <ul className='social-media social-media-light'>
              <li>
                <Link href='#'>
                  <i className='fab fa-facebook-f' />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <i className='fab fa-twitter' />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <i className='fab fa-instagram' />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <i className='fab fa-pinterest' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* off canvas end */}

      {/* Mobile Menu */}
      <nav
        className={`navbar mobile navbar-area navbar-area-1 navbar-border navbar-expand-lg ${
          scroll ? "sticky-active" : ""
        }`}
      >
        <div className='container nav-container px-lg-0'>
          {/* Mobile Menu Toggle Button */}
          <div className='responsive-mobile-menu'>
            <button
              className={`menu toggle-btn d-block d-lg-none ${
                isMobileMenuOpen ? "open" : ""
              }`}
              onClick={handleMobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label='Toggle navigation'
            >
              <span className='icon-left'></span>
              <span className='icon-right'></span>
            </button>
          </div>

          {/* Logo */}
          <div className='logo'>
            <Link href='/'>
              <img src='assets/img/logo.png' alt='Logo' />
            </Link>
          </div>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "sopen" : ""
            }`}
            id='xdyat_main_menu'
          >
            <ul className='navbar-nav menu-open ps-lg-5 pe-xl-4 text-end '>
              <li
                className={`menu-item-has-children ${
                  activeMenu === 0 ? "show" : ""
                }`}
              >
                <Link
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubMenuToggle(0);
                  }}
                  className={
                    ["/", "/index-2", "/index-3"].includes(location)
                      ? "active"
                      : ""
                  }
                >
                  Home
                </Link>
                <ul
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
                </ul>
              </li>

              <li>
                <Link
                  href='/about'
                  className={location === "/about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>

              <li
                className={`menu-item-has-children ${
                  activeMenu === 1 ? "show" : ""
                }`}
              >
                <Link
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubMenuToggle(1);
                  }}
                  className={
                    ["/tournament", "/tournament-details"].includes(location)
                      ? "active"
                      : ""
                  }
                >
                  Tournament
                </Link>
                <ul
                  className='sub-menu'
                  style={{ display: activeMenu === 1 ? "block" : "none" }}
                >
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

              <li
                className={`menu-item-has-children ${
                  activeMenu === 2 ? "show" : ""
                }`}
              >
                <Link
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubMenuToggle(2);
                  }}
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
                >
                  Shop
                </Link>
                <ul
                  className='sub-menu'
                  style={{ display: activeMenu === 2 ? "block" : "none" }}
                >
                  <li>
                    <Link
                      href='/shop'
                      className={location === "/shop" ? "active" : ""}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/shop-details'
                      className={location === "/shop-details" ? "active" : ""}
                    >
                      Shop Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/explore-product'
                      className={
                        location === "/explore-product" ? "active" : ""
                      }
                    >
                      Explore Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/cart'
                      className={location === "/cart" ? "active" : ""}
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/checkout'
                      className={location === "/checkout" ? "active" : ""}
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`menu-item-has-children ${
                  activeMenu === 3 ? "show" : ""
                }`}
              >
                <Link
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubMenuToggle(3);
                  }}
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
                >
                  Pages
                </Link>
                <ul
                  className='sub-menu'
                  style={{ display: activeMenu === 3 ? "block" : "none" }}
                >
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
                  className={location === "/contact" ? "active" : ""}
                  href='/contact'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Part of Navbar */}
          <div className='nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center'>
            <div className='header-search search-bar-btn d-inline-block me-3'>
              <button>
                <svg
                  width='21'
                  height='21'
                  fill='white'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='8.5' cy='8.5' r='8' stroke='none' />
                  <line
                    x1='13'
                    y1='13'
                    x2='19'
                    y2='19'
                    strokeWidth='2'
                    stroke='white'
                  />
                </svg>
              </button>
            </div>

            <Link className='header-cart' href='/cart'>
              <svg
                width='24'
                height='24'
                fill='#25C6DA'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='9' cy='20' r='2' />
                <circle cx='18' cy='20' r='2' />
                <rect x='2' y='2' width='20' height='3' />
                <line x1='3' y1='6' x2='15' y2='15' />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderTwo;
