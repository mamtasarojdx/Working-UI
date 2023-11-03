import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMemoPad } from "react-icons/ci";
import { BsPrinterFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { AiFillMobile } from "react-icons/ai";
import { RiRouterFill } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { SiSwiper } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

import "./Home_Page.css";
import "./TabletMQ/TabletMQ.css";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";
import { Link, NavLink } from "react-router-dom";

function CustomHeader() {
  // const [active, IsActive] = useState("");

  const handleClick = () => {
    var x = document.getElementById("category");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#1b2d39" }} id="navbar-1">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-4  d-flex justify-content-center align-items-center">
            <div className="cate" onClick={handleClick}>
              <GiHamburgerMenu style={{ fontSize: "20px" }} />
              <div style={{ color: "white" }} className="category-click">
                CATEGORIES
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 d-flex ">
            <div id="about">About</div>
            <div className="about">DELIVERY</div>
            <div className="about">RETURN</div>
            <div className="about">PAYMENTS</div>
            <div className="about">CONTACTS</div>
            <div class="dropdown about">
              {" "}
              BUY NOW!
              <button class="dropbtn">
                <RiArrowDropDownLine style={{ fontSize: "20px" }} className="about" />
              </button>
              <div class="dropdown-content" style={{ color: "#ff710a", width: "30%" }}>
                <div>Back to the main demo</div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </div>{" "}
      <div className="container footer-path navbar-2" id="last-top">
        <div className="row">
          <div className="d-flex">
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex three-line">
              <div id="navbar-2">
                <a style={{ color: "black" }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <GiHamburgerMenu style={{ fontSize: "20px", marginTop: "10px" }} />
                </a>
                {/* <BsSearch style={{ fontSize: "18px",position:"absolute",top:"17px",left:"25px" }} /> */}

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <div className="category-mq">
                      <div className="text-start">
                        <div>
                          <div style={{ fontSize: "15px" }}>
                            Search produtcs...
                            <span>
                              {" "}
                              <AiOutlineSearch style={{ fontSize: "18px", marginLeft: "42px" }} />
                            </span>
                          </div>
                        </div>
                        <hr className="laptop-hr" />
                        <div style={{ paddingBottom: "5px" }}>
                          {" "}
                          <i class="fa fa-laptop" style={{ fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>LAPTOPS</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "85px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <i class="fa fa-tablet" style={{ fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>TABLETS</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <i class="fa fa-address-card" style={{ fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>GRAPHICS CARD</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <i class="fa fa-desktop" style={{ fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>MONITORS</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <HiOutlineDesktopComputer style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}> COMPUTERS</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <i class="fas fa-microchip" style={{ fontSize: "23px" }}></i> <span style={{ fontSize: "14px" }}>PROCESSORS</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <CiMemoPad style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}>MEMORY</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          {" "}
                          <BsPrinterFill style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}>PRINTERS</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <BsFillMotherboardFill style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}>MOTHERBOARDS</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          {" "}
                          <AiFillMobile style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}>MIC</span>
                        </div>

                        <div style={{ paddingBottom: "5px" }}>
                          <i class="fa fa-keyboard-o" style={{ fontSize: "18px" }}></i> <span style={{ fontSize: "14px" }}>KEYBOARDS</span>
                        </div>

                        <div>
                          <RiRouterFill style={{ fontSize: "18px" }} /> <span style={{ fontSize: "14px" }}>ROUTERS</span>
                        </div>
                        <hr className="router-hr" />
                      </div>
                    <div>
                      <Link to="/about-page" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ fontSize: "13px", paddingBottom: "5px" }}>About</div>{" "}
                      </Link>
                      <Link to="/delivery-page" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ fontSize: "13px", paddingBottom: "5px" }}>Delivery</div>
                        </Link>
                        <Link to="/return-page" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ fontSize: "13px", paddingBottom: "5px" }}>Return</div>
                        </Link>
                        <Link to="/payment-page" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ fontSize: "13px", paddingBottom: "5px" }}>Payments</div>
                        </Link>
                        <Link to="/contacts-page" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ fontSize: "13px", paddingBottom: "5px" }}>Contacts</div>
                        </Link>
                      <div style={{ fontSize: "13px", paddingBottom: "5px" }}>
                        Buy Now!
                        <span>
                          {" "}
                          <BiChevronRight style={{ fontSize: "16px", marginLeft: "100px" }} />
                        </span>
                      </div>
                    </div>
                    </div>
                    <div
                      style={{ backgroundColor: "#f5fafd", fontSize: "12px", padding: "45px 0px 45px 18px", width: "116%", marginLeft: "-8%" }}
                      className="text-start mt-4"
                    >
                      <div style={{ paddingBottom: "5px" }}>USD-US Dollar</div>
                      <div style={{ paddingBottom: "5px", color: "grey" }}>EUR-Euro</div>
                      <div style={{ paddingBottom: "45px", color: "grey" }}>GBP-British Pound</div>
                      <div style={{ paddingBottom: "5px" }}>English</div>
                      <div style={{ color: "grey" }}>Main demo</div>
                    </div>
                  </div>
                </div>
                </div>
              <span className="mx-3" style={{ fontSize: "23px" }}>
                <SiSwiper />
              </span>
            </div> 
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex navbar-icons">
              <div className=" d-flex ">
                <div className="question">
                  <BsQuestionCircle style={{ fontSize: "20px" }} />
                </div>
                <div className="book">
                  <i class="fa fa-address-book-o" style={{ fontSize: "20px" }}></i>
                </div>
                <div className="heart">
                  <AiOutlineHeart style={{ fontSize: "20px" }} />
                </div>
                <div className="scale">
                  <i class="fa fa-balance-scale" style={{ fontSize: "20px" }}></i>
                </div>
                <div className="cart">
                  <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="navbar-hr" />
      </div>
    </>
  );
}

export default CustomHeader;
