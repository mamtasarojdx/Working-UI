import React, { useState } from "react";
import "./ImagePage.css";

import { VscVerifiedFilled } from "react-icons/vsc";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Footer from "./FooterPage";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";


function ImagePage() {
  
  
  
  return (
    <>
      <section className="footer-path">
      
       

      

      

    
       
        {/* -------side verified icon */}
        {/* <div onMouseEnter={handleVerified} onMouseLeave={handleVerified}>
          {isHovered1 ? (
            <div id="verified">
              <div
                style={{ padding: "1px 2px 2px 5px", backgroundColor: "black", color: "white", width: "18%", position: "relative", top: "30px", right: "28px" }}
              >
                <RxCross2 />
              </div>
              <div className="verified-toggle ">
                {" "}
                <div style={{ margin: "-50px 0 0 -20px", fontSize: "13px" }}>
                  <span>Boxed</span>
                  <span>
                    <BsToggleOff style={{ fontSize: "30px", marginLeft: "70px" }} />
                  </span>
                </div>
                <div style={{ margin: "2px 0 0 -20px", fontSize: "13px" }}>
                  <span>RTL</span>
                  <span>
                    <BsToggleOff style={{ fontSize: "30px", marginLeft: "88px" }} />
                  </span>
                </div>
                <div style={{ margin: "0px 0 0 -20px", fontSize: "13px" }}>
                  <span>Animation</span>
                  <span>
                    <BsToggleOn style={{ fontSize: "30px", marginLeft: "50px" }} />
                  </span>
                </div>
                <hr style={{ width: "110%", marginLeft: "-22px" }} />
                <div style={{ margin: "0px 0 0 -20px", fontSize: "13px" }}>
                  <span>Documentation</span>
                </div>
                <hr style={{ width: "110%", marginLeft: "-22px" }} />
                <div style={{ margin: "0px 0 0 -20px" }}>
                  <span>BUY NOW!</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="verified-icon">
           
              <VscVerifiedFilled />
            </div>
          )}
        </div> */}
     
      

      </section>
      <Footer />
    </>
  );
}

export default ImagePage;
