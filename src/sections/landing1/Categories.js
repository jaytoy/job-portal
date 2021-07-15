import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area -->  */}
      <div
        className="pt-11 pt-lg-26 pb-lg-16"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-blue bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-1">
                      Teilzeit
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>415</span> Vacancy
                    </p>
                    <Link href="/#">
                      <a className="btn btn-outline-green text-uppercase">
                        Jobs ansehen
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-spray bg-spray-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-headset"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-1">
                      Vollzeit
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>235</span> Vacancy
                    </p>
                    <Link href="/#">
                      <a className="btn btn-outline-green text-uppercase">
                        Jobs ansehen
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
            {/* <!-- Single Category --> */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <Link href="/#">
                <a className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                  <div className="text-coral bg-coral-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                    <i className="fa fa-layer-group"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-1">
                      Minijob
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray">
                      <span>624</span> Vacancy
                    </p>
                    <Link href="/#">
                      <a className="btn btn-outline-green text-uppercase">
                        Jobs ansehen
                      </a>
                    </Link>
                  </div>
                </a>
              </Link>
            </div>
            {/* <!-- End Single Category --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
