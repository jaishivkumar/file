import React from "react";

const ContactInner = () => {
  return (
    <div className='contact-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='300'>
            <div className='section-title pe-xl-5 pe-lg-4'>
              <h6 className='sub-title'>Contact Us</h6>
              <h2 className='title'>Get in Touch</h2>
              <p>
                In a space saturated by rushed, low-quality video games battle
                other players through game
              </p>
              <div className='contact-form mt-4 pt-3'>
                <div className='single-input-inner style-border'>
                  <textarea placeholder='Message' defaultValue={""} />
                </div>
                <div className='single-input-inner style-border'>
                  <input type='text' placeholder='Name' />
                </div>
                <div className='single-input-inner style-border'>
                  <input type='text' placeholder='Email' />
                </div>
                <button className='btn btn-base border-radius-0 w-100 mt-2'>
                  Post Message
                </button>
              </div>
            </div>
          </div>
          <div
            className='col-lg-6 mt-lg-0 mt-4'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='contact-map-area'>
              <iframe title="Example Content"
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd'
                allowFullScreen=''
                loading='lazy'
              />
            </div>
            <div className='contact-info-area'>
              <ul>
                <li>
                  <span>Address :</span> Centerl Park West LA87, New York
                </li>
                <li>
                  <span>email :</span> info@exemple.com{" "}
                  <span className='ms-xl-5'>time :</span> 16 : 00 - 19 : 00
                </li>
              </ul>
              <h2 className='phone-num'>+3 555 854 326</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInner;
