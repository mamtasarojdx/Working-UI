import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Home_Page.css";
import "./TabletMQ/TabletMQ.css";
import "./ImagePage.css";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function Special_Products2() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [active, IsActive] =useState(1);
 
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };
  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };

  const handleHover4 = () => {
    setIsHovered4(!isHovered4);
  };

  const handleHover5 = () => {
    setIsHovered5(!isHovered5);
  };

  const handleHover6 = () => {
    setIsHovered6(!isHovered6);
  };
  const handleHover7 = () => {
    setIsHovered7(!isHovered7);
  };
  const handleHover8 = () => {
    setIsHovered8(!isHovered8);
  };
  return (
    <div>
       <div className="container special-product2">
       <div className="text-center">
        <div onClick={()=>IsActive(1)} style={active===1?{color: "#ff751d"}:{color:'black'}}>  <h3 className="head2 mt-3 fw-bold "  >
            New Products  </h3></div>
            <div onClick={()=>IsActive(2)} style={active===2?{color: "#ff751d"}:{color:'black'}}><h3 className="head2 fw-bold " > Special Products </h3></div>
            <div onClick={()=>IsActive(3)} style={active===3?{color: "#ff751d"}:{color:'black'}}><h3 className="head2 mb-3 fw-bold " > Featured Products</h3></div>
             </div>
        <div className="row d-flex">
        {active == 1 && <>
             
        <div className="d-flex">
          <div className="col-sm-6 mt-4 mb-3 ">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
              {isHovered ? (
                <div className='cont'>
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/8-1_338x.progressive.jpg?v=1570203602"
                  alt="Hovered Image"
                   className="special-image1"
                />
                 <div className='overlay'>
                <div className="hover-icon">
                                <AiOutlineEye className="hover-eye" />
                                </div>
                              <div className="hover-icon2"><span><AiOutlineLeft className="hover-left"/></span>
                            <span><AiOutlineRight  className="hover-right"/></span>  </div>
                            </div></div>
                        
              ) : (
                <>   
                <img
                    src="https://shella-computers.myshopify.com/cdn/shop/products/8_338x.progressive.jpg?v=1570203600"
                    alt="Original Image"
                     className="special-image1"
                  /> </>
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">CORSAIR - Desktop Memory Kit</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$80.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>

          </div>

          
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
              {isHovered2 ? (
                
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/6-1_338x.progressive.jpg?v=1570203592"
                  alt="Hovered Image"
                   className="special-image2"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/6_338x.progressive.jpg?v=1570203590"
                  alt="Original Image"
                  className="special-image2"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">Dell - S2419NX 24 IPS LED Monitor</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$100.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>

          </div>
          </div>
     
          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3 ">
            <div onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
              {isHovered3 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3_793144cc-0a25-42fd-b190-a44d7a869202_338x.progressive.jpg?v=1570203627"
                  alt="Hovered Image"
                  className="special-image3"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3-1_6ecc0ba1-812d-4e93-b8cc-350b7b335151_338x.progressive.jpg?v=1570203614"
                  alt="Original Image"
                   className="special-image3"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">CORSAIR - ATX Mid-Tower Case</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$40.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
          
          
          <div className=" col-sm-6 mt-4 mb-3 ">
            <div onMouseEnter={handleHover4} onMouseLeave={handleHover4}>
              {isHovered4 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/4-1_338x.progressive.jpg?v=1570203581"
                  alt="Hovered Image"
                   className="special-image4"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/4_338x.progressive.jpg?v=1570203578"
                  alt="Original Image"
                  className="special-image4"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">Linksys - Tri-Band Mesh WiFi 5 Router</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$140.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
          </div>
              
          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3 ">
            <div onMouseEnter={handleHover5} onMouseLeave={handleHover5}>
              {isHovered5 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/7-1_338x.progressive.jpg?v=1570203597"
                  alt="Hovered Image"
                   className="special-image5"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/7_338x.progressive.jpg?v=1570203594"
                  alt="Original Image"
                   className="special-image5"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">CORSAIR - Liquid Cooling System</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$60.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
         
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover6} onMouseLeave={handleHover6}>
              {isHovered6 ? (
                <img src="https://shella-computers.myshopify.com/cdn/shop/products/3-1_338x.jpg" alt="Hovered Image"  className="special-image6"/>
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3_338x.progressive.jpg?v=1570203573"
                  alt="Original Image"
                   className="special-image6"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">MSI - GAMING PRO Intel Motherboard</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$160.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
          </div>

            
          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover7} onMouseLeave={handleHover7}>
              {isHovered7 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/2-1_338x.progressive.jpg?v=1570203572"
                  alt="Hovered Image"
                  className="special-image7"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/2_338x.progressive.jpg?v=1570203570"
                  alt="Original Image"
                  className="special-image7"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">PNY - NVIDIA GeForce GT 1030 2GB GDDR5 PCI</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$180.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
        
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover8} onMouseLeave={handleHover8}>
              {isHovered8 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/2_338x.progressive.jpg?v=1570203570"
                  alt="Hovered Image"
                  className="special-image8"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/2-1_338x.progressive.jpg?v=1570203572"
                  alt="Original Image"
                  className="special-image8"
                />
              )}
            </div>
            <div className="image-content">
              <div className="text-start mt-3 mb-2">
                <div className="special-head">Apple - MacBook Air 13.3 - Gold</div>
                <div style={{ color: "black", fontWeight: "bolder" }}>$20.00</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
          </div></>
            } 
           


                 
         {active == 2 && <>
            <div className="d-flex">
            <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
              {isHovered ? (
                <div className='cont'>
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/2_2d3b7885-a3b1-4cb1-93cc-701746d7d4f0_338x.progressive.jpg?v=1570203631"
                  alt="Hovered Image"
                   className="special-image1"
                />
                 <div className='overlay'>
                <div className="hover-icon">
                                <AiOutlineEye className="hover-eye" />
                                </div>
                              <div className="hover-icon2"><span><AiOutlineLeft className="hover-left"/></span>
                            <span><AiOutlineRight  className="hover-right"/></span>  </div>
                            </div></div>
                        
              ) : (
                <>   
                <img
                    src="https://shella-computers.myshopify.com/cdn/shop/products/2-1_26bf544a-146b-4abd-bcdb-6b424593b57f_338x.progressive.jpg?v=1570203622"
                    alt="Original Image"
                     className="special-image1"
                  /> </>
              )}
            </div>

            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{fontWeight:"100"}}>Apple - MacBook Air 13.3 - Gold</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$20.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>

          
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
              {isHovered2 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3_793144cc-0a25-42fd-b190-a44d7a869202_338x.progressive.jpg?v=1570203627"
                  alt="Hovered Image"
                   className="special-image2"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3-1_6ecc0ba1-812d-4e93-b8cc-350b7b335151_338x.progressive.jpg?v=1570203614"
                  alt="Original Image"
                  className="special-image2"
                />
              )}
            </div>
           
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>CORSAIR - ATX Mid-Tower Case</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$40.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div></div>
      


          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
              {isHovered3 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/7-1_338x.progressive.jpg?v=1570203597"
                  alt="Hovered Image"
                  className="special-image3"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/7_338x.progressive.jpg?v=1570203594"
                  alt="Original Image"
                   className="special-image3"
                />
              )}
            </div>
          
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>CORSAIR - Liquid Cooling System</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$60.00 USd</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
            
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover4} onMouseLeave={handleHover4}>
              {isHovered4 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/6-1_338x.progressive.jpg?v=1570203592"
                  alt="Hovered Image"
                   className="special-image4"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/6_338x.progressive.jpg?v=1570203590"
                  alt="Original Image"
                  className="special-image4"
                />
              )}
            </div>
           
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>Dell - S2419NX 24 IPS LED Monitor</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$100.00 USd</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div></div>
         



          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover5} onMouseLeave={handleHover5}>
              {isHovered5 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/8-1_338x.progressive.jpg?v=1570203602"
                  alt="Hovered Image"
                   className="special-image5"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/8_338x.progressive.jpg?v=1570203600"
                  alt="Original Image"
                   className="special-image5"
                />
              )}
            </div>
           

            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>CORSAIR - Desktop Memory Kit</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$80.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
          
         
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover6} onMouseLeave={handleHover6}>
              {isHovered6 ? (
                <img src="https://shella-computers.myshopify.com/cdn/shop/products/5_338x.progressive.jpg?v=1570203583" alt="Hovered Image"  className="special-image6"/>
              ) : (
                <img src="https://shella-computers.myshopify.com/cdn/shop/products/5-1_338x.jpg"
                  alt="Original Image"
                   className="special-image6"
                />
              )}
            </div>
        

            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>Epson - EcoTank Wireless Printer</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$120.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div> </div>
         


          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover7} onMouseLeave={handleHover7}>
              {isHovered7 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/4-1_338x.progressive.jpg?v=1570203581"
                  alt="Hovered Image"
                  className="special-image7"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/4_338x.progressive.jpg?v=1570203578"
                  alt="Original Image"
                  className="special-image7"
                />
              )}
            </div>
          
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>Linksys - Tri-Band Mesh WiFi 5 Router</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$140.00 USd</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
        
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover8} onMouseLeave={handleHover8}>
              {isHovered8 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3-1_6ecc0ba1-812d-4e93-b8cc-350b7b335151_338x.progressive.jpg?v=1570203614"
                  alt="Hovered Image"
                  className="special-image8"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3_793144cc-0a25-42fd-b190-a44d7a869202_338x.progressive.jpg?v=1570203627"
                  alt="Original Image"
                  className="special-image8"
                />
              )}
            </div>
      
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>MSI - GAMING PRO Intel Motherboard</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$160.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div> </div>
     
         </>
            } 





{active == 3 && <>
            <div className="d-flex">
            <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
              {isHovered ? (
                <div className='cont'>
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/2_2d3b7885-a3b1-4cb1-93cc-701746d7d4f0_338x.progressive.jpg?v=1570203631"
                  alt="Hovered Image"
                   className="special-image1"
                />
                 <div className='overlay'>
                <div className="hover-icon">
                                <AiOutlineEye className="hover-eye" />
                                </div>
                              <div className="hover-icon2"><span><AiOutlineLeft className="hover-left"/></span>
                            <span><AiOutlineRight  className="hover-right"/></span>  </div>
                            </div></div>
                        
              ) : (
                <>   
                <img
                    src="https://shella-computers.myshopify.com/cdn/shop/products/2-1_26bf544a-146b-4abd-bcdb-6b424593b57f_338x.progressive.jpg?v=1570203622"
                    alt="Original Image"
                     className="special-image1"
                  /> </>
              )}
            </div>

            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{fontWeight:"100"}}>Apple - MacBook Air 13.3 - Gold</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$20.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>

          
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
              {isHovered2 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3_793144cc-0a25-42fd-b190-a44d7a869202_338x.progressive.jpg?v=1570203627"
                  alt="Hovered Image"
                   className="special-image2"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3-1_6ecc0ba1-812d-4e93-b8cc-350b7b335151_338x.progressive.jpg?v=1570203614"
                  alt="Original Image"
                  className="special-image2"
                />
              )}
            </div>
           
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>CORSAIR - ATX Mid-Tower Case</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$40.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div></div>
      


          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
              {isHovered3 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/7-1_338x.progressive.jpg?v=1570203597"
                  alt="Hovered Image"
                  className="special-image3"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/7_338x.progressive.jpg?v=1570203594"
                  alt="Original Image"
                   className="special-image3"
                />
              )}
            </div>
          
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>CORSAIR - Liquid Cooling System</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$60.00 USd</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
            
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover4} onMouseLeave={handleHover4}>
              {isHovered4 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/6-1_338x.progressive.jpg?v=1570203592"
                  alt="Hovered Image"
                   className="special-image4"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/6_338x.progressive.jpg?v=1570203590"
                  alt="Original Image"
                  className="special-image4"
                />
              )}
            </div>
           
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>Dell - S2419NX 24 IPS LED Monitor</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$100.00 USd</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div></div>
         



          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover5} onMouseLeave={handleHover5}>
              {isHovered5 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/8-1_338x.progressive.jpg?v=1570203602"
                  alt="Hovered Image"
                   className="special-image5"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/8_338x.progressive.jpg?v=1570203600"
                  alt="Original Image"
                   className="special-image5"
                />
              )}
            </div>
           

            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>CORSAIR - Desktop Memory Kit</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$80.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
          
         
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover6} onMouseLeave={handleHover6}>
              {isHovered6 ? (
                <img src="https://shella-computers.myshopify.com/cdn/shop/products/5_338x.progressive.jpg?v=1570203583" alt="Hovered Image"  className="special-image6"/>
              ) : (
                <img src="https://shella-computers.myshopify.com/cdn/shop/products/5-1_338x.jpg"
                  alt="Original Image"
                   className="special-image6"
                />
              )}
            </div>
        

            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>Epson - EcoTank Wireless Printer</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$120.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div> </div>
         


          <div className="d-flex">
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover7} onMouseLeave={handleHover7}>
              {isHovered7 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/4-1_338x.progressive.jpg?v=1570203581"
                  alt="Hovered Image"
                  className="special-image7"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/4_338x.progressive.jpg?v=1570203578"
                  alt="Original Image"
                  className="special-image7"
                />
              )}
            </div>
          
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>Linksys - Tri-Band Mesh WiFi 5 Router</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$140.00 USd</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div>
        
          <div className=" col-sm-6 mt-4 mb-3">
            <div onMouseEnter={handleHover8} onMouseLeave={handleHover8}>
              {isHovered8 ? (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3-1_6ecc0ba1-812d-4e93-b8cc-350b7b335151_338x.progressive.jpg?v=1570203614"
                  alt="Hovered Image"
                  className="special-image8"
                />
              ) : (
                <img
                  src="https://shella-computers.myshopify.com/cdn/shop/products/3_793144cc-0a25-42fd-b190-a44d7a869202_338x.progressive.jpg?v=1570203627"
                  alt="Original Image"
                  className="special-image8"
                />
              )}
            </div>
      
            <div className="image-content2">
              <div className="text-start mt-3 mb-2">
                <div className="apple" style={{ fontWeight:"100"}}>MSI - GAMING PRO Intel Motherboard</div>
                <div style={{ color: "black",fontWeight:"bold",fontSize:"18px"}}>$160.00 USD</div>
              </div>
              <div>
                <button className="cart-btn mt-2 mb-3">
                  {" "}
                  <span>
                    <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
                  </span>{" "}
                  <span>Add to cart</span>
                </button>
              </div>
              <div className="d-flex cart-icons">
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balance-icon"></i>
                <AiOutlineEye style={{ fontSize: "20px" }} className="eye-icon" />
              </div>
            </div>
          </div> </div>
     
         </>
            } 


        </div>
      </div>
    </div>
  )
}

export default Special_Products2
