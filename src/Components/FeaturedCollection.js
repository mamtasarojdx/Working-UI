import React from 'react';
import "./Home_Page.css";
import  "./TabletMQ/TabletMQ.css";
import "./TabletMQ/LargeMobile.css";
import "./ImagePage.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function FeaturedCollection() {
  return (
    <>
     {/* ------featured collection(part-1)------- */}
     <section style={{ backgroundColor: "#f5fafd"}}>
          <div className="container featured-1">
            <div>
              <h3 className="head1 text-center fw-bold mt-5 mb-4 ">Featured Collections</h3>
            </div>
            <div className="row">
              <div className="d-flex justify-content-center align-items-center  gap-2">
                {/* ------home-image14----- */}
                <div className="text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/11_263x.progressive.jpg?v=1613743217" className='featured-img' />
                  <div className="text-center ">
                    <p className="h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      LAPTOPS
                    </p>
                  </div>
                </div>
                {/* ------home-image15----- */}
                <div className=" text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/12_263x.progressive.jpg?v=1613743217" className='featured-img' />
                  <div className="text-center">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      TABLETS
                    </p>
                  </div>
                </div>
                {/* ------home-image16----- */}
                <div className="text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/13_263x.progressive.jpg?v=1613743217"className='featured-img' />
                  <div className="text-center">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      GRAPHICS CARDS
                    </p>
                  </div>
                </div>
                {/* ------home-image17----- */}
                <div className="text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/14_263x.progressive.jpg?v=1613743217" className='featured-img' />
                  <div className="text-center  ">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      MONITORS
                    </p>
                  </div>
                </div>
                {/* ------home-image18----- */}
                <div className=" text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/15_263x.progressive.jpg?v=1613743217" className='featured-img' />
                  <div className="text-center ">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      COMPUTERS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------featured collection(6th raw)------- */}
          <div className="container featured-1 pb-5">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center gap-2">
                {/* ------home-image19----- */}
                <div className=" text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/16_263x.progressive.jpg?v=1613743217"  className='featured-img'/>
                  <div className="text-center ">
                    <p className="h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      PROCESSORS
                    </p>
                  </div>
                </div>
                {/* ------home-image20----- */}
                <div className="text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/17_263x.progressive.jpg?v=1613743217" className='featured-img'/>
                  <div className="text-center ">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      MEMORY
                    </p>
                  </div>
                </div>
                {/* ------home-image21----- */}
                <div className="text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/18_263x.progressive.jpg?v=1613743217"  className='featured-img'/>
                  <div className="text-center">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      PRINTERS
                    </p>
                  </div>
                </div>
                {/* ------home-image22----- */}
                <div className=" text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/19_263x.progressive.jpg?v=1613743217" className='featured-img'/>
                  <div className="text-center ">
                    <p className="  h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      MOTHERBOARDS
                    </p>
                  </div>
                </div>
                {/* ------home-image23----- */}
                <div className=" text-center">
                  <img src="https://shella-computers.myshopify.com/cdn/shop/files/20_263x.progressive.jpg?v=1613743217" className='featured-img'/>
                  <div className="text-center ">
                    <p className=" h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder", fontSize: "17px" }}>
                      MICE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


 
    </>
  )
}

export default FeaturedCollection
