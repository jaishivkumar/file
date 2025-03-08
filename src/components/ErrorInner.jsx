import Link from "next/link";
import React from "react";

const ErrorInner = () => {
  return (
    <div className='error-area pd-top-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='error-area-inner text-center'>
              <h3>error page</h3>
              <div className='thumb'>
                <img src='assets/img/404.png' alt='img' />
              </div>
              <h4>page not found</h4>
              <p className='px-xl-5'>
                This standard HTTP error message code signals the website you
                were trying to reach couldn't be found on the server.
              </p>
              <div className='btn-box d-inline-block'>
                <Link className='btn btn-main' href='/'>
                  <span>
                    <span>Explore More</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorInner;
