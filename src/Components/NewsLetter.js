import React, { useState } from "react";
import { PiCopyrightLight } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { RiPinterestFill } from "react-icons/ri";
import { BiLogoYoutube } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import "./Home_Page.css";
import "./TabletMQ/TabletMQ.css";
import "./ImagePage.css";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function NewsLetter() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);

  const handleVerified = () => {
    setIsHovered1(!isHovered1);
  };

  function handleHoverIcon() {
    setIconHovered(!iconHovered);
  }
  return (
    <>
      {/* last footer line */}
     
        <div className="container-fluid" style={{ backgroundColor: "#1b2d39"}} id="last-footer">
          <div className="row text-white">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-6 pt-4 pb-4 newsletter-1">
                <div className="newsletter">NEWSLETTER SUBSCRIPTION</div>
                <div className="form-para">Sign up for Shella updates information about new arrivals, future events and specials.</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center align-items-center newsletter-2">
                <form>
                  <input type="email" placeholder="Enter Your Email Address" className="email"></input>
                  <input type="submit" className="submit-btn" value="SUBSCRIBE!"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      

      <div className="second-footer mt-4" style={{ backgroundColor: "#f5fafd" }}>
        <div className="container-fluid text-center mb-4 pt-4" style={{ backgroundColor: "#1b2d39" }}>
          <h6 style={{ color: "white", fontWeight: "bold" }}>NEWSLETTER SUBSCRIPTION</h6>
          <p style={{ color: "white", fontSize: "12px" }}>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <input type="email" placeholder="Enter Your Email Address" id="second-mail"></input>{" "}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <input type="submit" value="SUBSCRIBE!" id="second-submit"></input>
          </div>
        </div>

        <div className="container text-center">
          <h4 style={{ fontWeight: "bold" }}>Shella</h4>

          <hr className="shella-hr" />
          <h6 style={{ fontWeight: "700" }} onClick={() => setShowText1(!showText1)}>HERE TO HELP
          <span className="plus-icon" >
            <BsPlus />
          </span></h6>
          <div className="my-text mt-4" style={{ color: "#f66e0b", fontSize: "12px" }}>
            {showText1 && (
              <>
                <div className="foot33 text-secondary text-center" style={{ color: "#f66e0b" }}>
                  The more content you provide about you and your business, the{" "}
                </div>
                <div className="foot33 text-secondary text-center" style={{ color: "#f66e0b" }}>
                  more confident people will be when purchasing from your store.{" "}
                </div>
                <p className="foot33 text-secondary text-center">View Big</p>
                <p className="foot33 text-secondary text-center">Whishlist</p>
                <p className="foot33 text-secondary text-center">Compare</p>
              </>
            )}
          </div>
          <hr className="shella-hr" />
          <h6 style={{ fontWeight: "700" }} onClick={() => setShowText2(!showText2)}>SHOP
          <span className="plus-icon1" >
            <BsPlus />
          </span></h6>
          <div className="my-text mt-4" style={{ color: "#f66e0b", fontSize: "12px" }}>
            {showText2 && (
              <>
                <p className="foot33  text-center">New In</p>
                <p className="foot33  text-center">Sale & Special Offers</p>
                <p className="foot33  text-center">Laptops</p>
                <p className="foot33  text-center">Tablets</p>
                <p className="foot33  text-center">Monitors</p>
                <p className="foot33  text-center">Computers</p>
                <p className="foot33  text-center">Memory</p>
                <p className="foot33  text-center">Mice</p>
              </>
            )}
          </div>
          <hr className="shella-hr" />
          <h6 style={{ fontWeight: "700" }} onClick={() => setShowText3(!showText3)}>INFORMATION
          <span className="plus-icon2" >
            <BsPlus />
          </span></h6>
          <div className="my-text mt-4" style={{ color: "#f66e0b", fontSize: "12px" }}>
            {showText3 && (
              <>
                <p className="foot33  text-center">About us</p>
                <p className="foot33  text-center">Customer Service</p>
                <p className="foot33  text-center">Blog</p>
                <p className="foot33  text-center">Page 404</p>
                <p className="foot33  text-center">Sizing Guide</p>
                <p className="foot33  text-center">FAQs</p>
                <p className="foot33  text-center">Contact Us</p>
                <p className="foot33  text-center">Documentation</p>
              </>
            )}
          </div>
          <hr className="shella-hr" />
          <h6 style={{ fontWeight: "700" }} onClick={() => setShowText4(!showText4)}>ORDER
          <span className="plus-icon3" onClick={() => setShowText4(!showText4)}>
            <BsPlus />
          </span></h6>
          <div className="my-text mt-4" style={{ color: "#f66e0b", fontSize: "12px" }}>
            {showText4 && (
              <>
                <p className="foot33  text-center">My Account</p>
                <p className="foot33  text-center">View Big</p>
                <p className="foot33  text-center">Whishlist</p>
                <p className="foot33 text-center">Compare</p>
              </>
            )}
          </div>
          <hr className="order-hr" />

          <div style={{ fontSize: "12px", color: "rgb(96 93 93)" }}>
            {" "}
            <PiCopyrightLight />
            2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by{" "}
          </div>
          <div style={{ fontSize: "12px", color: "rgb(96 93 93)" }}>
            Shopify. Shopify Theme by <span style={{ fontSize: "12px", color: "#f66e0b" }}>MPIthemes.</span>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center mt-4 mb-4 instagram">
          <BiLogoFacebook id="last-fb" />
          <TiSocialTwitter id="last-tw" />
          <LiaInstagram id="last-instagram" />
          <RiPinterestFill id="last-pin" />
          <BiLogoYoutube id="last-you" />
        </div>

       <div className="last-up text-center mt-5 mb-3 pb-1 pt-1" style={{ backgroundColor: "#f66e0b", color: "white" }} >
          {" "}
          <BsArrowUp />
          <a href="#last-top" style={{textDecoration:"none",color:"white"}}>TOP</a>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
