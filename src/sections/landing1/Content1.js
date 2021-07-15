import React from "react";
import Link from "next/link";
import imgC from "../../assets/image/l1/jpg/content-1-img1.jpg";
import imgL1 from "../../assets/image/l1/png/smal-logo1.png";
import imgL2 from "../../assets/image/l1/png/smal-logo2.png";
import imgL3 from "../../assets/image/l1/png/smal-logo3.png";
import imgL4 from "../../assets/image/l1/png/smal-logo4.png";
import imgL5 from "../../assets/image/l1/png/smal-logo5.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area -->  */}
      <section className="pt-7 pt-lg-16 pb-2 pb-lg-32">
        <div className="container">
          <div className="row pb-lg-6 justify-content-center">
            <div
              className="col-xl-6 col-lg-5 col-md-10 col-sm-11"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {/* <!-- content-1 left-content start --> */}
              <div className="position-relative pr-xl-20 pr-md-15 pr-15">
                {/* <!-- content img start --> */}
                <img
                  src={imgC}
                  alt=""
                  className="w-100 rounded overflow-hidden"
                />
                {/* <!-- content img end --> */}
              </div>
              {/* <!-- content-1 left-content end --> */}
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-8"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-1 start --> */}
              <div className="pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-md-13 pr-xl-15 pr-xxl-25 pr-0 ">
                {/* <!-- content-1 section-title start --> */}
                <h2 className="font-size-9 mb-8 pr-xxl-15">
                  Findest du sicher das Richtige für dich
                </h2>
                <p className="text-gray font-size-5 mb-10 mb-lg-16">
                  Sei Gastgeber im Markt, bewege was in der Logistik, 
                  oder gestalte mit deinen Ideen den Lebensmittelhandel im Außendienst oder in der Zentrale.
                </p>
                {/* <!-- content-1 section-title end --> */}
                {/* <!-- content-1 list-group start --> */}
                <ul className="list-unstyled pl-0">
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">      
                    <i className="fas fa-arrow-right font-size-5 text-green mr-6"></i>
                    <Link href="/#">
                      <a>Jobs in Markt</a>
                    </Link>
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-arrow-right font-size-5 text-green mr-6"></i>
                    <Link href="/#">
                      <a>Jobs in der Logistik</a>
                    </Link>
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-arrow-right font-size-5 text-green mr-6"></i>
                    <Link href="/#">
                      <a>Jobs in der Zentrale</a>
                    </Link>
                  </li>
                </ul>
                {/* <!-- content-1 list-group end --> */}
              </div>
              {/* <!-- content-1 end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;