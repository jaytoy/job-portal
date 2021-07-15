import React from "react";
import Link from "next/link";

import imgC from "../../assets/image/l1/jpg/content-1-img2.jpg";
import imgM1 from "../../assets/image/l1/png/media-img-1.png";
import imgM2 from "../../assets/image/l1/png/media-img-2.png";
import imgM3 from "../../assets/image/l1/png/media-img-3.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="py-13 py-lg-30">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-9 col-xs-10"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              <div className="content-2 pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-11 pr-md-13 pr-xl-15 pr-xxl-25 pr-0">
                {/* <!-- content-2 section title start --> */}
                <p className="text-dodger font-size-6 font-weight-semibold mb-8">
                  Suchen Sie nach einer spannenden Karriere?
                </p>
                <h2 className="font-size-9 mb-8">
                  Wir suchen neue Fach- und Führungskräfte.
                </h2>
                <p className="text-default-color font-size-5 mb-12">
                  Wir suchen Mitarbeiter, die für ihre Ideen brennen, 
                  Innovationen vorantreiben und Teamplayer sind. Finde jetzt deinen Job in unserer Jobbörse.
                </p>
                {/* <!-- content-2 section title end --> */}
                <Link href="/#">
                  <a className="btn btn-green btn-h-60 text-white w-180 rounded-5 text-uppercase">
                    Jobs ansehen
                  </a>
                </Link>
              </div>
              {/* <!-- content-2 end --> */}
            </div>
            <div
              className="col-xl-6 col-lg-5 col-md-10 col-sm-11"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="position-relative pr-lg-20 pr-md-15 pr-9">
                {/* <!-- content img start --> */}
                <img src={imgC} alt="" className="w-100 rounded-4" />
                {/* <!-- content img end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
