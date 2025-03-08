import Link from "next/link";
import React from "react";

const CreatorDetailsInner = () => {
  return (
    <div className='creator-details-info pd-top-110 pd-bottom-110'>
      <div className='container'>
        <div className='d-md-flex align-self-center align-items-center'>
          <div className='thumb me-4' data-aos='fade-up' data-aos-delay='300'>
            <img src='assets/img/creator-2/13.png' alt='img' />
          </div>
          <div className='details' data-aos='fade-up' data-aos-delay='300'>
            <Link className='details-btn' href='#'>
              <img src='assets/img/creator-2/14.png' alt='img' />
            </Link>
            <h3>Black Coin #0037</h3>
            <span className='info'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='13px'
                height='21px'
              >
                <image
                  x='0px'
                  y='0px'
                  width='13px'
                  height='21px'
                  xlinkHref='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAMAAACqsJS4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA51BMVEX////d8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kfd8kf///8jh+CvAAAAS3RSTlMAWAZI82EOw9MbboQk3v7rM5qzA0X8XArI2hV2/Ysw5kONonjihShOK6hHS6+tJkLF0iCevB0n6fRyHmM7UMlkZ6MBEsE58PhMB3e5VgxcAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+gJBxQOIvbIDkEAAAC0SURBVBjTTdDXEoIwEAXQVbFjBBULRcHeK9h71/3//zGJIN6HzZzZTJINAE8gCH5CQthHJIqx+E8JREx6EFNIMC25kpEKM1mOnMKFeYZCkYJQllQqTUei64wGQLlCO3QnLYIJFrIQXqsg1uqu0o0mmK22rLBGR+r2QO0PhqMxmfSmM9sBmC+Wq7U53SyWW3bhTsH9wUY8fl9m8ANP568uV4qY4w1xu+Pj6Y+rofX3E6/3ha8f+agf1l7KfqgAAAAASUVORK5CYII='
                />
              </svg>
              <span className='color-base'> 1minutenft.eth</span> Joined Aug
              2024
            </span>
            <span className='line-shadow' />
            <ul>
              <li>
                <Link href='#'>Collected 45</Link>
              </li>
              <li>
                <Link href='#'>Offers made</Link>
              </li>
              <li>
                <Link href='#'>Deals</Link>
              </li>
              <li>
                <Link href='#'>Created</Link>
              </li>
              <li>
                <Link href='#'>Favorited</Link>
              </li>
              <li>
                <Link href='#'>Activity</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDetailsInner;
