import React from 'react';
// import {AiOutlineSearch} from "react-icons/ai";
import {IoCallOutline} from "react-icons/io5";
import {AiOutlineClockCircle} from "react-icons/ai";
import {RiArrowDropDownLine} from "react-icons/ri";
import "./Home_Page.css";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/LargeTablet.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css"
import  "./TabletMQ/TabletMQ.css";
import "./ImagePage.css";


function ContactBar() {
  return (
    <>
      <div className="heading_1">
          {/*    ------------first line container -------- */}
          <div className="container-fluid" id="up-arrow">
            <div className="row d-flex first-line pt-2 pb-2">
                 <div className="col-lg-6 col-md-6 col-sm-6 clock-icon">
                  <IoCallOutline className="call" style={{ fontSize: "20px" }} />
                  <span style={{ color: "rgb(139 142 145)" }}>Call Us: </span>
                  <span style={{ color: "#fd8224", paddingLeft: "5px" }}>800-123-4567</span>
                  <AiOutlineClockCircle style={{ fontSize: "20px" }} className="clock" />
                  <span style={{ color: "rgb(139 142 145)" }}>Mon-Sun: 9:00 am - 6:00 pm</span>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 register">
                  <span style={{ paddingRight: "5px" }} className="register">
                    Register
                  </span>
                  <span style={{ color: "rgb(92, 89, 89)" }}>or</span>
                  <span style={{ paddingLeft: "5px" }} className="register">
                    sign in
                  </span>
                  <span style={{ padding: "0 5px 0 15px" }} id="client">
                    Client Services
                  </span>
                  <span style={{ padding: "0 10px", color: "rgb(139 142 145)" }}>|</span>

                  <div class="dropdown dollar">
                    <button class="dropbtn dollar">
                      US($)
                      <RiArrowDropDownLine style={{ fontSize: "30px" }} />
                    </button>
                    <div class="dropdown-content">
                      <div>USD - US Dollar</div>
                      <div>EUR - Euro</div>
                      <div>GBP - British Pound</div>
                    </div>
                  </div>

                  <div class="dropdown dollar">
                    <button class="dropbtn dollar">
                      English
                      <RiArrowDropDownLine style={{ fontSize: "30px" }} />
                    </button>
                    <div class="dropdown-content">
                      <div>English</div>
                      <div>Main demp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          
          
    </>
  )
}

export default ContactBar
