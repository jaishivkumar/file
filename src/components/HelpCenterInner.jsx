import Link from "next/link";
import React from "react";

const HelpCenterInner = () => {
  return (
    <div className='creator-details-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4' data-aos='fade-up' data-aos-delay='300'>
            <div className='widget widget_search mb-5 pb-lg-5'>
              <h4 className='widget-title'>
                Search A <span>Question</span>
              </h4>
              <p className='mb-4'>Type Your Question Or Search Keyword</p>
              <form className='search-form'>
                <div className='form-group'>
                  <input type='text' placeholder='Key word' />
                </div>
                <button className='submit-btn' type='submit'>
                  <i className='fa fa-search' />
                </button>
              </form>
            </div>
            <div className='widget payment_wallet mb-4'>
              <Link href='#'>
                <span>
                  <i className='fa fa-copy' />
                  Payment &amp; Wallet
                </span>
                <span>
                  <i className='fa fa-angle-double-right' />
                </span>
              </Link>
            </div>
            <div className='widget list_widget'>
              <Link href='#'>
                <i className='fa fa-copy' />
                On Of The Kind Of NFT Marketplace
              </Link>
              <Link href='#'>
                <i className='fa fa-copy' />
                Exclusive Payment Constrac &amp; Wallet
              </Link>
              <Link href='#'>
                <i className='fa fa-copy' />
                Voting Payment &amp; Wallet
              </Link>
              <Link href='#'>
                <i className='fa fa-copy' />
                Kind Of NFT Marketplace
              </Link>
            </div>
          </div>
          <div
            className='col-lg-8 ps-xl-4'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='row pb-lg-4'>
              <div className='col-lg-6 align-self-center'>
                <div className='filter-inner-btn'>
                  <span>
                    <i className='fa fa-copy' />
                  </span>
                  <select>
                    <option>New Ticket</option>
                    <option>Monkey Jet</option>
                    <option>Baseball Cap</option>
                    <option>Black coin</option>
                  </select>
                </div>
              </div>
              <div className='col-lg-6 align-self-center text-lg-end'>
                <div className='filter-inner-btn'>
                  <select>
                    <option>Sort A-Z</option>
                    <option>Monkey Jet</option>
                    <option>Baseball Cap</option>
                    <option>Black coin</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='accordion-wrapper' id='accordionExample'>
              <div className='ticket-accordion accordion-items'>
                <h2 className='accordion-headers' id='headingOne'>
                  <button
                    className='accordion-buttons'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    What Is A Non Fin Bun Ticket
                    <i className='fa fa-angle-down down-arrow' />
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
                  </div>
                </div>
              </div>
              <div className='ticket-accordion accordion-items'>
                <h2 className='accordion-headers' id='headingTwo'>
                  <button
                    className='accordion-buttons collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Where I check Bun Ticket
                    <i className='fa fa-angle-down down-arrow' />
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
                  </div>
                </div>
              </div>
              <div className='ticket-accordion accordion-items'>
                <h2 className='accordion-headers' id='headingThree'>
                  <button
                    className='accordion-buttons collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Kind Of NFT Marketplace
                    <i className='fa fa-angle-down down-arrow' />
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
                  </div>
                </div>
              </div>
              <div className='ticket-accordion accordion-items'>
                <h2 className='accordion-headers' id='headingFour'>
                  <button
                    className='accordion-buttons collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    Exclusive Payment Constrac &amp; Wallet
                    <i className='fa fa-angle-down down-arrow' />
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
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

export default HelpCenterInner;
