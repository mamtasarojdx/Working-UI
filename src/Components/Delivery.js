import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
// import { HiOutlineDesktopComputer } from "react-icons/hi";
// import { CiMemoPad } from "react-icons/ci";
// import { BsPrinterFill } from "react-icons/bs";
// import { BsFillMotherboardFill } from "react-icons/bs";
// import { AiFillMobile } from "react-icons/ai";
// import { RiRouterFill } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { SiSwiper } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { PiCopyrightLight } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaInstagram } from "react-icons/lia";
import { RiPinterestFill } from "react-icons/ri";
import { BiLogoYoutube } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { TiSocialSkype } from "react-icons/ti";
import { BiLogoBehance } from "react-icons/bi";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaCcDinersClub } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotOutlineFill } from "react-icons/pi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import "./Delivery.css";
import Layouts from "./Layouts";
import Shop from "./Shop";
import Mens from "./Mens";
import Womens from "./Womens";
import { Link } from "react-router-dom";

function Delivery() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [active, IsActive] = useState("");

  return (
    <div>
      <div className="container footer-path navbar-2 about-1" id="last-top">
        <div className="row">
          <div className="d-flex">
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex three-line">
              <div id="navbar-2">
                <a style={{ color: "black" }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <GiHamburgerMenu style={{ fontSize: "20px", marginTop: "10px" }} />
                </a>
                {/* <BsSearch style={{ fontSize: "18px",position:"absolute",top:"17px",left:"25px" }} /> */}

                {/* ------side navbar-------- */}
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
                        <div style={{ paddingBottom: "7px" }}>
                          {" "}
                          <span style={{ fontSize: "14px" }}>LAYOUTS</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "100px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>SHOP</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "123px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>BLOG</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "122px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>GALLERY</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "98px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>PAGES</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "117px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>WOMEN'S</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "94px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>MEN'S</span>
                          <span>
                            {" "}
                            <BiChevronRight style={{ fontSize: "16px", marginLeft: "120px" }} />
                          </span>
                        </div>

                        <div style={{ paddingBottom: "7px" }}>
                          <span style={{ fontSize: "14px" }}>BUY NOW!</span>
                          <span className="sale-about">SALE</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="container-fluid text-start mt-4 mb-0"
                      style={{ backgroundColor: "#e4e2e2", fontSize: "12px", padding: "45px 0px 45px 18px", width: "116%", marginLeft: "-8%" }}
                    >
                      <div className="row">
                        <p style={{ color: "black" }}>English</p>
                        <p style={{ color: "grey" }}>Arabic</p>
                        <p style={{ color: "grey" }}>German</p>
                        <p style={{ color: "grey" }}>Russian</p>
                        <p style={{ color: "grey" }}>Portuguese</p>
                        <p style={{ color: "grey" }}>French</p>
                        <p style={{ color: "grey" }}>Spanish</p>
                        <p style={{ color: "grey" }}>Hebrew</p>
                        <p style={{ color: "grey" }}>Japanese</p>
                      </div>
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
                  <BsBag style={{ fontSize: "20px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="navbar-hr" />
      </div>

      {/* ----starting contact bar---- */}
      <div className="container about-2">
        <div className="row d-flex mt-2">
          <div className="col-lg-6 navbar-shella ">Shella</div>
          <div className="col-lg-6  d-flex justify-content-end">
            <div className=" d-flex ">
              <div className="question2">
                <BsQuestionCircle style={{ fontSize: "20px" }} />
              </div>
              <div className="book2">
                <i class="fa fa-address-book-o" style={{ fontSize: "20px" }}></i>
              </div>
              <div className="heart2">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
              </div>
              <div className="scale2">
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }}></i>
              </div>
              <div className="cart2">
                <BsBag style={{ fontSize: "20px" }} />
              </div>
              <p className="about-bag mt-1">Bag (0)</p>
              <div class="dropdown dollar about-english">
                <button class="dropbtn dollar">
                  English
                  <RiArrowDropDownLine style={{ fontSize: "30px" }} />
                </button>
                <div class="dropdown-content">
                  <div style={{ color: "black" }}>English</div>
                  <div style={{ color: "grey" }}>Arabic</div>
                  <div style={{ color: "grey" }}>German</div>
                  <div style={{ color: "grey" }}>Russian</div>
                  <div style={{ color: "grey" }}>Portuguese</div>
                  <div style={{ color: "grey" }}>French</div>
                  <div style={{ color: "grey" }}>Spanish</div>
                  <div style={{ color: "grey" }}>Hebrew</div>
                  <div style={{ color: "grey" }}>Japanese</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="about-hr1" />

      {/* -----navbar---- */}
      <div className="container about-3" id="up-arrow">
        <nav className="navbar navbar-expand-lg navbar-light hide1">
          <div className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-lg-0  a6">
                <li className="nav-item a2 ">
                  <a
                    className="nav-link d-flex"
                    href="#"
                    onMouseOver={() => IsActive(1)}
                    style={active === 1 ? { color: "black " } : { color: "rgb(113, 107, 110)" }}
                  >
                    LAYOUTS{" "}
                    <span className="nav9">
                      <IoIosArrowDown />
                    </span>{" "}
                  </a>
                </li>
                <li className="nav-item a1 ">
                  <a
                    className="nav-link d-flex"
                    href="#"
                    onMouseOver={() => IsActive(2)}
                    style={active === 2 ? { color: "black " } : { color: " rgb(113, 107, 110)" }}
                  >
                    SHOP{" "}
                    <span className="nav9">
                      <IoIosArrowDown />
                    </span>
                  </a>
                </li>

                <li className="nav-item a1 ">
                  <div className=" dropdown " onMouseOver={() => IsActive(3)} style={active === 3 ? { color: "black" } : { color: " rgb(113, 107, 110)" }}>
                    <a className="nav-link d-flex" href="#">
                      BLOG
                      <span className="nav9">
                        <IoIosArrowDown />
                      </span>
                    </a>
                    <div class="dropdown-content">
                      <div style={{ color: "black" }}>Blog V1 — Classic</div>
                      <div style={{ color: "grey" }}>Blog V2 — Grid</div>
                      <div style={{ color: "grey" }}>Blog V3 — Masonry</div>
                      <div style={{ color: "grey" }}>Blog V4 — With Sidebar</div>
                      <div style={{ color: "grey" }}>Single Post</div>
                    </div>
                  </div>
                </li>
                <li className="nav-item a1 ">
                  <div className=" dropdown " onMouseOver={() => IsActive(4)} style={active === 4 ? { color: "black" } : { color: " rgb(113, 107, 110)" }}>
                    <a className="nav-link d-flex" href="#">
                      GALLERY
                      <span className="nav9">
                        <IoIosArrowDown />
                      </span>
                    </a>
                    <div class="dropdown-content">
                      <div style={{ color: "grey" }}>Gallery V1 — Masonry (3 Col)</div>
                      <div style={{ color: "grey" }}>Gallery V2 — Masonry (4 Col)</div>
                      <div style={{ color: "grey" }}>Gallery V3 — Grid (3 in row)</div>
                      <div style={{ color: "grey" }}>Gallery V4 — Grid (4 in row)</div>
                      <div style={{ color: "grey" }}>Menu example — level 2</div>
                    </div>
                  </div>
                </li>

                <li className="nav-item a1 ">
                  <div className=" dropdown " onMouseOver={() => IsActive(5)} style={active === 5 ? { color: "black " } : { color: "rgb(113, 107, 110)" }}>
                    <a className="nav-link d-flex" href="#">
                      PAGES
                      <span className="nav9">
                        <IoIosArrowDown />
                      </span>
                    </a>
                    <div class="dropdown-content">
                      <div style={{ color: "grey" }}>About Us</div>
                      <Link to="/delivery-page" style={{ textDecoration: "none" }}>
                        <div style={{ color: "grey" }}>Customer Service</div>
                      </Link>
                      <div style={{ color: "grey" }}>Sizing Guide</div>
                      <Link to="/payment-page" style={{ textDecoration: "none" }}>
                        <div style={{ color: "grey" }}>FAQs</div>
                      </Link>
                      <Link to="/contacts-page" style={{ textDecoration: "none" }}>
                        <div style={{ color: "grey" }}>Contact Us</div>
                      </Link>
                      <div style={{ color: "grey" }}>Brands</div>
                      <div style={{ color: "grey" }}>Brands V2</div>
                      <div style={{ color: "grey" }}>Coming Soon</div>
                      <div style={{ color: "grey" }}>Page 404</div>
                      <div style={{ color: "grey" }}>Icons</div>
                      <div style={{ color: "grey" }}>Documentation</div>
                    </div>
                  </div>
                </li>

                <li className="nav-item a1">
                  <a
                    className="nav-link d-flex"
                    href="#"
                    onMouseOver={() => IsActive(6)}
                    style={active === 6 ? { color: " black " } : { color: "rgb(113, 107, 110)" }}
                  >
                    WOMEN'S{" "}
                    <span className="nav9">
                      <IoIosArrowDown />
                    </span>
                  </a>
                </li>
                <li className="nav-item a1">
                  <a
                    className="nav-link d-flex"
                    href="#"
                    onMouseOver={() => IsActive(7)}
                    style={active === 7 ? { color: " black" } : { color: " rgb(113, 107, 110)" }}
                  >
                    MEN'S{" "}
                    <span className="nav9">
                      <IoIosArrowDown />
                    </span>
                  </a>
                </li>
                <li className="nav-item  a1">
                  <a
                    className="nav-link d-flex"
                    href="#"
                    onMouseOver={() => IsActive(8)}
                    style={active === 8 ? { color: "black  " } : { color: "rgb(113, 107, 110)" }}
                    onMouseLeave={() => IsActive(0)}
                  >
                    BUYNOW! <span className="sale-about2">SALE</span>
                  </a>
                </li>
                <li className="nav-item  a1">
                  <a className="nav-link d-flex about-search2" href="#">
                    SEARCH
                    <span className="search-icon" style={{ fontSize: "25px" }}>
                      <AiOutlineSearch />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="about-a">
          {active == 1 && (
            <>
              <div onMouseLeave={() => IsActive(0)}>
                <Layouts />
              </div>
            </>
          )}
          {active == 2 && (
            <>
              <div onMouseLeave={() => IsActive(0)}>
                <Shop />
              </div>
            </>
          )}
          {active == 6 && (
            <>
              <div onMouseLeave={() => IsActive(0)}>
                <Womens />
              </div>
            </>
          )}
          {active == 7 && (
            <>
              <div onMouseLeave={() => IsActive(0)}>
                <Mens />
              </div>
            </>
          )}
        </div>
      </div>

      <hr className="about-hr2" />

      {/* ------home/about */}
      {/* <hr className="about-hr" /> */}
      <div className="home1 mt-4" style={{ color: "grey", fontSize: "10px" }}>
        <p className="home1">Home / Customer Service</p>
        <p className="about-store mt-2" style={{ color: "black", fontSize: "20px" }}>
          Customer Service
        </p>

        <p className="mt-4 mb-4 text-center should" style={{ fontSize: "13px" }}>
          Should you require information or help, please contact us by or by email phone and we will be happy to assist you.
        </p>
      </div>

      {/* ------big img------ */}

      {/* -------big img content ----- */}
      <div className="container shipping-time mt-5">
        <div className="d-flex justify-content-center ">
          <div className="text-start">
            <div className="mb-3">
              <BsBag style={{ fontSize: "20px", marginRight: "10px" }} />
              SHIPPING TIMES AND COSTS{" "}
            </div>
            <div className="customer-1" style={{ fontSize: "14px", color: "grey" }}>
              <PiDotOutlineFill style={{ color: "black", fontSize: "18px" }} />
              Complimentary ground shipping within 1 to 7 business days{" "}
            </div>
            <div className="customer-1" style={{ fontSize: "14px", color: "grey" }}>
              <PiDotOutlineFill style={{ color: "black", fontSize: "18px" }} />
              In-store collection available within 1 to 7 business days{" "}
            </div>
            <div className="customer-1" style={{ fontSize: "14px", color: "grey" }}>
              <PiDotOutlineFill style={{ color: "black", fontSize: "18px" }} />
              Next-day and Express delivery options also available{" "}
            </div>
            <div className="customer-1" style={{ fontSize: "14px", color: "grey" }}>
              <PiDotOutlineFill style={{ color: "black", fontSize: "18px" }} />
              Next-day and Express delivery options also available{" "}
            </div>
            <div className="customer-1" style={{ fontSize: "14px", color: "grey" }}>
              <PiDotOutlineFill style={{ color: "black", fontSize: "18px" }} />
              See the delivery FAQs for details on shipping methods, costs and delivery times{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="payment-method">
        <div className="d-flex mt-5 customer4">
          <MdPayments style={{ marginRight: "10px" }} />
          <p>PAYMENT METHODS</p>
        </div>
        <p className="customer5 text-secondary" style={{ fontSize: "14px" }}>
          Shella accepts the following payment methods:-
        </p>
        <ul className="customer6 text-secondary" style={{ fontSize: "14px" }}>
          <li>
            Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.
          </li>
          <li>
            Shella features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future
            purchases.
          </li>
          <li>
            PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed.
            To register for a PayPal account, visit the website paypal.com.
          </li>
        </ul>{" "}
      </div>

      <div className="exchange mb-5">
        <div className="d-flex mt-5 customer3 ">
          <HiArrowUturnLeft style={{ marginRight: "10px", fontSize: "20px" }} />
          <p>EXCHANGES, RETURNS AND REFUNDS</p>
        </div>
        <p className="text-secondary customer7 mt-2" style={{ fontSize: "14px" }}>
          Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.Refunds will
          be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and
          shipping/handling fees of original purchase is non-refundable.
        </p>
      </div>
      <hr className="exchange-hr"></hr>

      {/* plus content */}
      <div className="about-footer1">
        <hr className="news-hr" />
        <div className="text-center mt-5">
          <h6 className="text-uppercase">Newsletter subscription</h6>
          <p style={{ fontSize: "12px", color: "#898282" }}>
            Sign up for Shella updates to receive information about new arrivals, future events and specials.
          </p>
        </div>
        <div className="container text-center mb-2">
          <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
            <input type="email" placeholder="Enter Your Email Address" className="about-email"></input>{" "}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 text-center mb-3">
            <input type="submit" value="SUBSCRIBE!" className="about-subscribe"></input>
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center mb-3 input-para">
          <p className="input-checkbox">
            {" "}
            <input type="checkbox"></input>
          </p>
          <p className="mx-3 mt-2 text-center input-about" style={{ fontSize: "12px" }}>
            I agree with the I agree with the Privacy. Tristique senectus et netus et malesuada.
            <br /> Nunc scelerisque viverra mauris in.
          </p>
        </div>

        <div className="container text-center">
          <hr className="about-hr" />
          <p onClick={() => setShowText4(!showText4)}>
            SHOP
            <span className="about-icon" onClick={() => setShowText4(!showText4)}>
              <BsPlus />
            </span>
          </p>
          <div className="my-text mt-0" style={{ color: "grey", fontSize: "12px" }}>
            {showText4 && (
              <>
                <p className="foot33  text-center">New in </p>
                <p className="foot33  text-center">Sale & Special Offers</p>
                <p className="foot33  text-center">Women’s</p>
                <p className="foot33 text-center">Men’s</p>
                <p className="foot33 text-center">Shoes</p>
                <p className="foot33 text-center">Bags & Accessories</p>
                <p className="foot33 text-center">Top Brands</p>
                <p className="foot33 text-center">Lookbook</p>
              </>
            )}
          </div>

          <hr className="about-hr" />
          <p onClick={() => setShowText1(!showText1)}>
            INFORMATION
            <span className="about-icon1">
              <BsPlus />
            </span>
          </p>
          <div className="my-text mt-0" style={{ color: "grey", fontSize: "12px" }}>
            {showText1 && (
              <>
                <p className="foot33 text-secondary text-center">About us</p>
                <p className="foot33 text-secondary text-center">Customer Service</p>
                <p className="foot33 text-secondary text-center">Blog</p>
                <p className="foot33 text-secondary text-center">Page 404</p>
                <p className="foot33 text-secondary text-center">Sizing Guide</p>
                <p className="foot33 text-secondary text-center">FAQs</p>
                <p className="foot33 text-secondary text-center">Contact Us</p>
                <p className="foot33 text-secondary text-center">Documentation</p>
              </>
            )}
          </div>
          <hr className="about-hr" />
          <p onClick={() => setShowText2(!showText2)}>
            ORDER
            <span className="about-icon2">
              <BsPlus />
            </span>
          </p>
          <div className="my-text mt-0" style={{ color: "grey", fontSize: "12px" }}>
            {showText2 && (
              <>
                <p className="foot33  text-center">My Account</p>
                <p className="foot33  text-center">View Bag</p>
                <p className="foot33  text-center">Privacy Policy</p>
                <p className="foot33  text-center">Cookie Policy</p>
              </>
            )}
          </div>
          <hr className="about-hr" />
          <p onClick={() => setShowText3(!showText3)}>
            HERE TO HELP
            <span className="about-icon3">
              <BsPlus />
            </span>
          </p>
          <div className="my-text mt-4 text-center" style={{ color: "grey", fontSize: "12px" }}>
            {showText3 && (
              <>
                <div>
                  <div className="foot33  ">Have a question? You may find an answer in our.FAQs </div>
                  <div className="foot33  ">But you can also contact us:</div>
                  <p className="foot33 mt-3 ">Customer Services</p>
                  <div className="foot33" style={{ marginTop: "-1%" }}>
                    <span style={{ fontSize: "18px" }}>
                      <IoCallOutline />
                    </span>{" "}
                    <span>Call Us: 800-123-4567</span>
                  </div>
                  <div className="foot33 mt-3">
                    <span className="mr-10" style={{ fontSize: "18px" }}>
                      <AiOutlineClockCircle />
                    </span>{" "}
                    <span className="text-left">
                      {" "}
                      Mon-Fri: 9:00 am - 6:00 pm <br />
                      Mon-Fri: 9:00 am - 6:00 pm
                      <br />
                      Mon-Fri: 9:00 am - 6:00 pm
                      <br />
                    </span>
                  </div>
                  <div className="foot33 mt-3 mb-5" style={{ marginTop: "-1%" }}>
                    <span style={{ fontSize: "18px" }}>
                      <AiOutlineMail />
                    </span>{" "}
                    <span>Send us an email</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr className="about-hr" />

          <div className="text-center about-shella mb-3 mt-4">Shella</div>
          <div style={{ fontSize: "12px", color: "rgb(96 93 93)" }}>
            <PiCopyrightLight />
            2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by{" "}
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center mt-4 mb-5 instagram">
          <BiLogoFacebook id="last-fb" />
          <RiTwitterXFill id="last-tw" />
          <LiaInstagram id="last-instagram" />
          <RiPinterestFill id="last-pin" />
          <BiLogoYoutube id="last-you" />
          <BiLogoBehance id="behance" />
          <TiSocialSkype id="skype" />
        </div>
        <hr className="shella-hr" />

        {/* -----payment icons--- */}
        <div className="text-center">
          <FaCcVisa className="visa" />
          <FaCcMastercard className="mastercard" />
          <MdPayments className="payment" />
          <FaCcPaypal className="paypal" />
          <FaCcDinersClub className="diner" />
          <FaCcDiscover className="discover-about" />
        </div>

        {/* -----top arrow---- */}
        <div className="last-up text-center mt-5 mb-3 pb-1 pt-1" style={{ backgroundColor: "black", color: "white" }}>
          {" "}
          <BsArrowUp />
          <a href="#last-top" style={{ textDecoration: "none", color: "white" }}>
            TOP
          </a>
        </div>
      </div>

      {/* ------newsletter----- */}
      <div className="about-footer2">
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <h5>Newsletter subscription</h5>
              <p style={{ fontSize: "12px", color: "grey" }}>
                Sign up for Shella updates to receive information about new arrivals, future events and specials.
              </p>
            </div>
            <div className="col-lg-6 mt-3">
              <form>
                <input type="email" placeholder="Enter Your Email Address" className="about-mail"></input>
                <input type="submit" className="about-btn" value="SUBSCRIBE!"></input>
              </form>
              <div className="container d-flex  mb-4 input-para">
                <p className="input-checkbox mt-2">
                  {" "}
                  <input type="checkbox"></input>
                </p>
                <p className="mx-3 mt-2 text-start input-about" style={{ fontSize: "12px" }}>
                  I agree with the I agree with the Privacy. Tristique senectus et netus et malesuada.
                  <br /> Nunc scelerisque viverra mauris in.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------footer----- */}
        <div className="container shop-order">
          <div className="row d-flex">
            <div className="col-lg-2">
              <h6 className="text-uppercase mb-3">SHOP</h6>
              <div style={{ fontSize: "13px", color: "grey" }}>New In</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Sale & Special Offers</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Women’s</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Men’s</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Shoes</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Bags & Accessories</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Top Brands</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Lookbook</div>
            </div>
            <div className="col-lg-2">
              <h6 className="text-uppercase mb-3">Information</h6>
              <div style={{ fontSize: "13px", color: "grey" }}>About us</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Customer Service</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Blog</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Page 404</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Sizing Guide</div>
              <div style={{ fontSize: "13px", color: "grey" }}>FAQs</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Contact Us</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Documentation</div>
            </div>
            <div className="col-lg-2">
              <h6 className="text-uppercase mb-3">Order</h6>
              <div style={{ fontSize: "13px", color: "grey" }}>My Account</div>
              <div style={{ fontSize: "13px", color: "grey" }}>View Bag</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Privacy Policy</div>
              <div style={{ fontSize: "13px", color: "grey" }}>Cookie Policy</div>
            </div>
            <div className="col-lg-3 here-help">
              <h6 className="text-uppercase  mb-3">Here to help</h6>
              <div>
                <div style={{ fontSize: "13px", color: "grey" }}>Have a question? You may find an answer in our.FAQs But you can also contact us: </div>
                <p style={{ fontSize: "13px", color: "grey" }}>Customer Services</p>
                <div className="foot33" style={{ marginTop: "-1%", fontSize: "13px", color: "grey" }}>
                  <span style={{ fontSize: "18px" }}>
                    <IoCallOutline />
                  </span>{" "}
                  <span>Call Us: 800-123-4567</span>
                </div>
                <div className="foot33 mt-2">
                  <span className="mr-10" style={{ fontSize: "18px", color: "black" }}>
                    <AiOutlineClockCircle />
                  </span>{" "}
                  <span className="text-left" style={{ fontSize: "13px", color: "grey" }}>
                    {" "}
                    Mon-Fri: 9:00 am - 6:00 pm <br />
                    Mon-Fri: 9:00 am - 6:00 pm
                    <br />
                    Mon-Fri: 9:00 am - 6:00 pm
                    <br />
                  </span>
                </div>
                <div className="foot33 mt-2 mb-4" style={{ marginTop: "-1%" }}>
                  <span style={{ fontSize: "18px" }}>
                    <AiOutlineMail />
                  </span>{" "}
                  <span style={{ fontSize: "13px", color: "grey" }}>Send us an email</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 follow-us">
              <h6 className="text-uppercase mb-3">Follow us</h6>
              <div className="d-flex mb-2">
                <BiLogoFacebook />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Facebook
                </div>
              </div>
              <div className="d-flex mb-2">
                <RiTwitterXFill />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Twitter
                </div>
              </div>
              <div className="d-flex mb-2">
                <LiaInstagram />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Instagram
                </div>
              </div>
              <div className="d-flex mb-2">
                <RiPinterestFill />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Pinterest
                </div>
              </div>
              <div className="d-flex mb-2">
                <BiLogoYoutube />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Youtube
                </div>
              </div>
              <div className="d-flex mb-2">
                <BiLogoBehance />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Behance
                </div>
              </div>
              <div className="d-flex mb-2">
                <TiSocialSkype />
                <div className="mx-1" style={{ color: "grey", fontSize: "13px" }}>
                  Skype
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="exchange-hr" />
        <div className="container mb-4">
          <div className="row d-flex">
            <div className="col-lg-6 d-flex">
              <div className="text-center about-shella2">Shella</div>
              <div style={{ fontSize: "12px", color: "rgb(96 93 93)" }} className="mx-3 mt-2">
                <PiCopyrightLight />
                2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by{" "}
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <FaCcVisa id="last-fb2" />
              <FaCcMastercard className="mastercard" />
              <MdPayments className="payment" />
              <FaCcPaypal className="paypal" />
              <FaCcDinersClub className="diner" />
              <FaCcDiscover className="discover-about" />
              <a href="#up-arrow" className="arrow2">
                <BsArrowUp />
              </a>
            </div>
          </div>
        </div>
        {/* -----top arrow---- */}
      </div>
    </div>
  );
}

export default Delivery;
