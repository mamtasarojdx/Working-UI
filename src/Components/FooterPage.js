import React from "react";

import { IoCallOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { PiCopyrightLight } from "react-icons/pi";
import {BiLogoFacebook} from "react-icons/bi";
import {TiSocialTwitter} from "react-icons/ti";
import {LiaInstagram} from "react-icons/lia";
import {RiPinterestFill} from "react-icons/ri";
import {BiLogoYoutube} from "react-icons/bi";
import {BsArrowUp} from "react-icons/bs";
import "./Home_Page.css";
import  "./TabletMQ/TabletMQ.css";
import "./TabletMQ/LargeMobile.css";
import "./ImagePage.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function FooterPage() {
  return (
    <>
      <section style={{ backgroundColor: "#f5fafd"}} className="footer-page">
        <div className="container pt-5 shella-footer " >
          <div className="raw">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center pb-5 ">
           
              <div className="col-lg-6 col-md-6 col-sm-6 px-3">
                <div className="footer-shella">
                  <h4 style={{ fontWeight: "bold", paddingBottom: "7px" }}>Shella</h4>
                  <div className="footer-head">The more content you provide about you and your business, the</div>
                  <div className="footer-head">more confident people will be when purchasing from your store.</div>
                </div>

                <div className="footer-call">
                  <IoCallOutline style={{ fontSize: "20px", marginBottom: "5px" }} />
                  <span className="call-number">Call Us: 800-123-4567</span>
                </div>

                <AiOutlineClockCircle style={{ fontSize: "20px" }} />
                <div className="footer-time">
                  <div>Mon-Fri: 9:00 am - 6:00 pm</div>
                  <div>Sat: 9:00 am - 4:00 pm</div>
                  <div>Sun: 9:00 am - 2:00 pm</div>
                </div>

                <div>
                  <AiOutlineMail />
                  <span className="footer-mail">Send us an email</span>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-2">
                <h6 style={{ fontWeight: "bolder", paddingBottom: "7px" }}>SHOP</h6>
                <div className="footer-shop">New In</div>
                <div className="footer-shop">Sale & Special Offers</div>
                <div className="footer-shop">Laptops</div>
                <div className="footer-shop">Tablets</div>
                <div className="footer-shop">Monitors</div>
                <div className="footer-shop">Computers</div>
                <div className="footer-shop">Memory</div>
                <div className="footer-shop">Mice</div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-2">
                <h6 style={{ fontWeight: "bolder", paddingBottom: "7px" }}>INFORMATION</h6>
                <div className="footer-shop">About us</div>
                <div className="footer-shop">Customer Service</div>
                <div className="footer-shop">Blog</div>
                <div className="footer-shop">Page 404</div>
                <div className="footer-shop">Sizing Guide</div>
                <div className="footer-shop">FAQs</div>
                <div className="footer-shop">Contact Us</div>
                <div className="footer-shop">Documentation</div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-2">
                <h6 style={{ fontWeight: "bolder", paddingBottom: "7px" }}>ORDER</h6>
                <div className="footer-shop">My Account</div>
                <div className="footer-shop">View Bag</div>
                <div className="footer-shop">Wishlist</div>
                <div className="footer-shop">Compare</div>
              </div>
            </div>
          </div>
          <hr className="footer-hr" />
        </div>

        <div className="container">
          <div className="raw">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex copyFooter">
              <div className="col-lg-8 col-md-8 col-sm-8 ">
                <div className="copyright">
                  <PiCopyrightLight />
                  <span>2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by</span>
                  <span className="footer-theme">MPIthemes.</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 footer-icons ">
                <BiLogoFacebook className="facebook"/>
                <TiSocialTwitter className="facebook"/>
                <LiaInstagram className="facebook"/>
                <RiPinterestFill className="facebook"/>
                <BiLogoYoutube className="facebook"/>
                <a href="#up-arrow"><BsArrowUp className="up-arrow"/></a>
              </div>
             
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterPage;
