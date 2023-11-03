import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMemoPad } from "react-icons/ci";
import { BsPrinterFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { AiFillMobile } from "react-icons/ai";
import { RiRouterFill } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

import "./Home_Page.css";
import "./TabletMQ/TabletMQ.css";
import "./TabletMQ/LargeMobile.css";
import "./ImagePage.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function CustomSlider() {
  const [isHovered, setIsHovered] = useState(false);

  const handleVerified = () => {
    setIsHovered(!isHovered);
  };
  function handleClick() {
    document.getElementById("cross-verified").style.display = "none";
  }
  return (
    <>
      <div className="container footer-path">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            {}{" "}
            <div id="category">
              {" "}
              <div id="tablet">
                {" "}
                <i class="fa fa-laptop" style={{ fontSize: "20px", paddingTop: "12px", marginLeft: "15px" }} id="computer-icon"></i>{" "}
                <span className="laptop">LAPTOPS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <i class="fa fa-tablet" id="computer-icon"></i> <span className="laptop">TABLETS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <i class="fa fa-address-card" id="computer-icon"></i> <span className="laptop">GRAPHICS CARD</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <i class="fa fa-desktop" id="computer-icon"></i> <span className="laptop">MONITORS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <HiOutlineDesktopComputer id="computer-icon" /> <span className="laptop"> COMPUTERS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <i class="fas fa-microchip" id="computer-icon"></i> <span className="laptop">PROCESSORS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <CiMemoPad id="computer-icon" /> <span className="laptop">MEMORY</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <BsPrinterFill id="computer-icon" /> <span className="laptop">PRINTERS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                <BsFillMotherboardFill id="computer-icon" /> <span className="laptop">MOTHERBOARDS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <AiFillMobile id="computer-icon" /> <span className="laptop">MIC</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <i class="fa fa-keyboard-o" id="computer-icon"></i> <span className="laptop">KEYBOARDS</span>
              </div>
              <hr className="category-hr" />
              <div className="tablet" id="tablet">
                {" "}
                <RiRouterFill id="computer-icon" /> <span className="laptop">ROUTERS</span>
              </div>
              <div className="tablet" id="tablet">
                <p>Hide </p>
              </div>
            </div>
          </div>
          <div className=" col-xxl-8 col-lg-12 col-md-12 col-sm-12 images-slides">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  id="img1"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" id="img2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" id="img3" aria-label="Slide 3"></button>
              </div>
              <div className="images-carousel">
                <div class="carousel-item active">
                  <div className="slide-img">
                    {" "}
                    <img src="https://shella-computers.myshopify.com/cdn/shop/files/1_1088x.progressive.jpg?v=1613743217" class="d-block w-100" alt="..." />
                  </div>
                  <div className="img-content">
                    <h2 className="img-head">Pretty.</h2>
                    <h2 className="img-head">Freaking powerful</h2>
                    <button type="button" className="discover">
                      Discover More
                    </button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="slide-img">
                    <img src="https://shella-computers.myshopify.com/cdn/shop/files/2_1088x.progressive.jpg?v=1613743217" class="d-block w-100" alt="..." />
                  </div>
                  <div className="img-content">
                    <h2 className="img-head2">Power to change</h2>
                    <h2 className="img-head2">everything.</h2>
                    <button type="button" className="discover2">
                      Discover More
                    </button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="slide-img">
                    <img src="https://shella-computers.myshopify.com/cdn/shop/files/3_1088x.progressive.jpg?v=1613743217" class="d-block w-100" alt="..." />
                  </div>
                  <div className="img-content">
                    <h2 className="img-head2">Pro Display</h2>
                    <h2 className="img-head2">XDR</h2>
                    <button type="button" className="discover3">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------side verified icon */}
      {/* <div onMouseEnter={handleVerified} onMouseLeave={handleVerified}>
          {isHovered ? (
            <div id="verified">
              <div
                style={{ padding: "1px 2px 2px 5px", backgroundColor: "black", color: "white", width: "18%", position: "relative", top: "30px", right: "28px" }} onClick={handleClick}>
              
                <RxCross2 />
              </div>
              <div id="cross-verified">
              <div className="verified-toggle">
                {" "}
                <div style={{ margin: "-50px 0 0 -20px" ,fontSize:"13px"}}>
                  <span>Boxed</span>
                  <span>
                    <BsToggleOff style={{ fontSize: "30px", marginLeft: "70px" }} />
                  </span>
                </div>
                <div style={{ margin: "2px 0 0 -20px",fontSize:"13px" }}>
                  <span>RTL</span>
                  <span>
                    <BsToggleOff style={{ fontSize: "30px", marginLeft: "88px" }} />
                  </span>
                </div>
                <div style={{ margin: "0px 0 0 -20px",fontSize:"13px" }}>
                  <span>Animation</span>
                  <span>
                    <BsToggleOn style={{ fontSize: "30px", marginLeft: "50px" }} />
                  </span>
                </div>
                <hr style={{ width: "110%", marginLeft: "-22px"}} />
                <div style={{ margin: "0px 0 0 -20px",fontSize:"13px" }}>
                  <span>Documentation</span>
                </div>
                <hr style={{ width: "110%", marginLeft: "-22px" }} />
                <div style={{ margin: "0px 0 0 -20px" }}>
                  <span>BUY NOW!</span>
                </div>
              </div>
            </div></div>
          ) : (
            <div className="verified-icon">
             
              <VscVerifiedFilled />
            </div>
          )}
        </div> */}
    </>
  );
}

export default CustomSlider;
