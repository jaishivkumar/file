import Link from "next/link";
import React from "react";

const GalleryTwo = () => {
  return (
    <div className='gallery-area-2'>
      <div className='row'>
        <div className='col-sm-3 px-2'>
          <div className='thumb'>
            <Link href='/tournament-details'>
              <img
                className='w-100'
                src='assets/img/gallery-3/1.png'
                alt='img'
              />
            </Link>
          </div>
        </div>
        <div className='col-sm-6 px-2'>
          <div className='thumb'>
            <Link href='/tournament-details'>
              <img
                className='w-100'
                src='assets/img/gallery-3/2.png'
                alt='img'
              />
            </Link>
          </div>
          <div className='row px-2'>
            <div className='col-sm-6 px-2'>
              <div className='thumb'>
                <Link href='/tournament-details'>
                  <img
                    className='w-100'
                    src='assets/img/gallery-3/3.png'
                    alt='img'
                  />
                </Link>
              </div>
            </div>
            <div className='col-sm-6 px-2'>
              <div className='thumb'>
                <Link href='/tournament-details'>
                  <img
                    className='w-100'
                    src='assets/img/gallery-3/4.png'
                    alt='img'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3 px-2'>
          <div className='thumb'>
            <Link href='/tournament-details'>
              <img
                className='w-100'
                src='assets/img/gallery-3/5.png'
                alt='img'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTwo;
