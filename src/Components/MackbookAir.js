import React from "react";
import "./Home_Page.css";
import  "./TabletMQ/TabletMQ.css";
import "./ImagePage.css";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function MackbookAir() {
  return (
    <>
      {/* --------home-image1(first raw)--------- */}
      <div className="container mackBook">
        <div className="row d-flex mt-4 ">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className=" text-center">
              <img src="https://shella-computers.myshopify.com/cdn/shop/files/6_963x.progressive.jpg?v=1613743217"  className="macbook" ></img>
              <div className="text-center ">
                <p className=" h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  MACKBOOK AIR
                </p>
                <p className=" mack-image mt-0">Power to change anything</p>
              </div>{" "}
            </div>{" "}
          </div>

          {/* ------home-image2----- */}
             <div className="col-lg-4 col-md-4 col-sm-12">
            <div className=" text-center">
              <img src="https://shella-computers.myshopify.com/cdn/shop/files/7_463x.progressive.jpg?v=1613743217"  className="macbook" ></img>
              <div className="text-center">
              <p className=" h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  SALE &amp; SPECIAL OFFERS
                </p>
                <p className="mack-image mt-0">Get up to 20% off</p>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      {/* ------home-image3(2nd raw)------- */}
      <div className="container mackBook">
        <div className="row d-flex mt-4 ">
          <div className="col-lg-4 col-md-4  col-sm-12">
            <div className="text-center">
              <img src="https://shella-computers.myshopify.com/cdn/shop/files/8_463x.progressive.jpg?v=1613743217" className="macbook" ></img>
              <div className="text-center">
                <p className="h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  MAC PRO
                </p>
                <p className=" mack-image mt-0">Power to change everything</p>
              </div>{" "}
            </div>{" "}
          </div>

          {/* --------home-image4--------- */}
          <div className="col-lg-4 col-md-4  col-sm-12">
            <div className=" text-center">
              <img src="https://shella-computers.myshopify.com/cdn/shop/files/9_463x.progressive.jpg?v=1613743217" className="macbook"  ></img>
              <div className="text-center">
                <p className="h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  WATCH SERIES 4
                </p>
                <p className="mack-image mt-0">Change starts within</p>
              </div>{" "}
            </div>{" "}
          </div>

          {/* --------home-image5--------- */}
          <div className="col-lg-4 col-md-4  col-sm-12">
            <div className="text-center">
              <img src="https://shella-computers.myshopify.com/cdn/shop/files/10_463x.progressive.jpg?v=1613743217"  className="macbook" ></img>
              <div className="text-center">
                <p className="h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  IPAD
                </p>
                <p className="mack-image mt-0">Like a computer.Unlike any computer</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MackbookAir;
