import Link from "next/link";
import React from "react";
import LazyLoad from "react-lazyload";
import CountUp from "react-countup";

const Numbers = () => {
    return (
        <>
            <section className="pt-7 pt-lg-16 pb-2 pb-lg-32">
                <div className="container">
                    <h2>goasia in Zahlen</h2>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                        {/* <!-- Single Category --> */}
                        <a
                        href="/#"
                        className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                        >
                        <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        {/* <!-- Category Content --> */}
                        <div className="">
                            <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                            <LazyLoad>
                                <span className="counter">
                                <CountUp duration={4} end={8000} />
                                </span>
                            </LazyLoad>
                            </h5>
                            <p className="font-size-4 font-weight-normal text-gray mb-0">
                                Produkte
                            </p>
                        </div>
                        </a>
                        {/* <!-- End Single Category --> */}
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                        {/* <!-- Single Category --> */}
                        <a
                        href="/#"
                        className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                        >
                        <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                            <i className="fas fa-user"></i>
                        </div>
                        {/* <!-- Category Content --> */}
                        <div className="">
                            <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                            <LazyLoad>
                                <span className="counter">
                                <CountUp duration={4} end={500} />
                                </span>
                            </LazyLoad>
                            </h5>
                            <p className="font-size-4 font-weight-normal text-gray mb-0">
                                Mitarbeiter
                            </p>
                        </div>
                        </a>
                        {/* <!-- End Single Category --> */}
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                        {/* <!-- Single Category --> */}
                        <a
                        href="/#"
                        className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                        >
                        <div className="text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7">
                            <i className="fas fa-eye"></i>
                        </div>
                        {/* <!-- Category Content --> */}
                        <div className="">
                            <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                            <LazyLoad>
                                <span className="counter">
                                <CountUp duration={4} end={32} />
                                </span>
                            </LazyLoad>
                            </h5>
                            <p className="font-size-4 font-weight-normal text-gray mb-0">
                                Märkte
                            </p>
                        </div>
                        </a>
                        {/* <!-- End Single Category --> */}
                    </div>
                    </div>
                    <Link href="/#">
                        <a className="btn btn-green btn-h-60 text-white w-180 rounded-5 text-uppercase">
                            Zur Jobbörse
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Numbers;

