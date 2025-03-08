import Link from "next/link";
import React from "react";

const TeamAreaInnerTwo = () => {
  return (
    <div className='team-area pd-top-120'>
      <div className='container'>
        <div className='section-title text-center'>
          <h6 className='sub-title split_chars'>Our team</h6>
          <h2 className='title move-line-3d'>meet our member</h2>
          <img className='mt-3' src='assets/img/icon/shalep-1.png' alt='img' />
        </div>
        <div className='row'>
          <div
            className='col-lg-3 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='single-advisors-inner'>
              <div className='thumb text-center p-0'>
                <img src='assets/img/team/1.png' alt='img' />
              </div>
              <div className='details'>
                <h5 className='name'>Alxender Pul</h5>
                <span className='designation'>CEO</span>
                <div className='social-list text-end'>
                  <Link href='#'>
                    <i className='fab fa-facebook' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-twitter' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-3 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='single-advisors-inner'>
              <div className='thumb text-center p-0'>
                <img src='assets/img/team/1.png' alt='img' />
              </div>
              <div className='details'>
                <h5 className='name'>Simon Fraser</h5>
                <span className='designation'>Developer</span>
                <div className='social-list text-end'>
                  <Link href='#'>
                    <i className='fab fa-facebook' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-twitter' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-3 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='single-advisors-inner'>
              <div className='thumb text-center p-0'>
                <img src='assets/img/team/2.png' alt='img' />
              </div>
              <div className='details'>
                <h5 className='name'>Alxender Pul</h5>
                <span className='designation'>Co-Founder</span>
                <div className='social-list text-end'>
                  <Link href='#'>
                    <i className='fab fa-facebook' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-twitter' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-3 col-md-6 fade-slide bottom'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <div className='single-advisors-inner'>
              <div className='thumb text-center p-0'>
                <img src='assets/img/team/3.png' alt='img' />
              </div>
              <div className='details'>
                <h5 className='name'>Robarl Nonal</h5>
                <span className='designation'>CEO</span>
                <div className='social-list text-end'>
                  <Link href='#'>
                    <i className='fab fa-facebook' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-twitter' />
                  </Link>
                  <Link href='#'>
                    <i className='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaInnerTwo;
