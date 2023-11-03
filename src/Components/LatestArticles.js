import React from "react";
import "./Home_Page.css";
import "./TabletMQ/TabletMQ.css";
import "./ImagePage.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeMobile.css";
import "./TabletMQ/LargeTablet.css";

function LatestArticles() {
  return (
    <>
      {/* ------latest articles(7th raw)------- */}

      <div className="container mt-5 latest-art">
        <div>
          <h3 className="head1 text-center fw-bold  ">Latest Articles</h3>
        </div>
        <div className="raw d-flex mt-5 mb-5" style={{marginLeft:"0%"}} >
          <div className="col-lg-3 col-md-3 col-sm-3 " >
            <div className=" ">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/22_338x.progressive.jpg?v=1570204363" id="world-image1"></img> </div>{" "}
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  High-street cleansing creams
                </div>

                <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
          </div>

          {/* ------home-image25----- */}
          <div className="col-lg-3 col-md-3 col-sm-3 last-1">
            <div className=" ">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/21_338x.progressive.jpg?v=1570204357" id="world-image1"></img>  </div>
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                One of the best?
                </div>

                <div className="latest-head2" style={{ color: "rgb(80 82 84)" }}>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
          
          </div>

          {/* ------home-image26----- */}
          <div className="col-lg-3 col-md-3 col-sm-3 last-1">
            <div className=" ">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/23_338x.progressive.jpg?v=1570204370" id="world-image1"></img> </div>
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                Three of the best red lipsticks for spring
                </div>

                <div className="latest-head3" style={{ color: "rgb(80 82 84)"}}>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
           
          </div>

          {/* ------home-image27----- */}
          <div className="col-lg-3 col-md-3 col-sm-3 last-1">
            <div className="">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/24_338x.progressive.jpg?v=1570204377" id="world-image1"></img> </div>
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                Blast from the past: check out the 90s fashion revival
                </div>

                <div className="latest-head3" style={{ color: "rgb(80 82 84)"}}>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
           
          </div>
        </div>
      </div>

      <section className="latest-article2">
        <div className="container-fluid">
        <div>
          <h3 className="head1 text-center fw-bold  ">Latest Articles</h3>
        </div>
          <div className="row">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="col-lg-12 col-md-12  d-flex justify-content-center mt-4">
                        <div className="col-lg-6 col-md-6 mb-5 mt-4 ">
                          <div className="world-image1">
                            <img src="https://shella-computers.myshopify.com/cdn/shop/articles/22_338x.progressive.jpg?v=1570204363" id="world-image1" />
                            <div className="text-start">
                              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                                High-street cleansing creams
                              </div>

                              <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              </div>

                              <button type="button" className="read-btn">
                                Read & shop
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-5 mt-4 ">
                          <div className="world-image2">
                            <img src="https://shella-computers.myshopify.com/cdn/shop/articles/21_338x.progressive.jpg?v=1570204357" id="world-image1" />
                            <div className="text-start">
                              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                                One of the best?
                              </div>

                              <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </div>

                              <button type="button" className="read-btn">
                                Read & shop
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="col-lg-12 col-md-12  d-flex justify-content-center mt-4">
                        <div className="col-lg-6 col-md-6 mb-5 mt-4" >
                          <div className=" world-image3">
                            <img src="https://shella-computers.myshopify.com/cdn/shop/articles/23_338x.progressive.jpg?v=1570204370" id="world-image1" />
                            <div className="text-start">
                              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                                Three of the best red lipsticks for spring
                              </div>

                              <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                              </div>

                              <button type="button" className="read-btn">
                                Read & shop
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-5 mt-4 ">
                          <div className="world-image4">
                            <img src="https://shella-computers.myshopify.com/cdn/shop/articles/24_338x.progressive.jpg?v=1570204377" id="world-image1" />
                            <div className="text-start">
                              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                                Blast from the past:check out the 90s fashion revival
                              </div>

                              <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>

                              <button type="button" className="read-btn">
                                Read & shop
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev control-prev3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-article3">
      <div>
          <h3 className="head1 text-center fw-bold  ">Latest Articles</h3>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active mx-2 mb-5 mt-4">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/22_338x.progressive.jpg?v=1570204363" class="d-block w-100 " />
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  High-street cleansing creams
                </div>

                <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
            </div>
            <div class="carousel-item mx-2 mb-5 mt-4">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/21_338x.progressive.jpg?v=1570204357" class="d-block w-100" />
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  One of the best?
                </div>

                <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
            </div>

            <div class="carousel-item mx-2 mb-5 mt-4">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/23_338x.progressive.jpg?v=1570204370" class="d-block w-100" />
              <div className="text-start">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  Three of the best red lipsticks for spring
                </div>

                <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
            </div>

            <div class="carousel-item mx-2 mb-5 mt-4">
              <img src="https://shella-computers.myshopify.com/cdn/shop/articles/24_338x.progressive.jpg?v=1570204377" class="d-block w-100" />
              <div className="">
                <div id="blast1">
              <div className="latest-head1 mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                  Blast from the past:
                </div>
                <div className="latest-head1 " style={{ color: "#ff7209", fontWeight: "bolder" ,marginTop:"-3%"}}>
                check out the 90s 
                </div>
                <div className="latest-head1 " style={{ color: "#ff7209", fontWeight: "bolder",marginTop:"-3%"}}>
                 fashion revival
                </div></div>

              <div id="blast2">
              <div className="latest-head1 h4 h3-sm mt-3" style={{ color: "#ff7209", fontWeight: "bolder" }}>
                 Blast from the past:check out the 90s fashion revival
              </div>
                </div>

                <div className="latest-head2" style={{ color: "rgb(80 82 84)"}}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                <button type="button" className="read-btn">
                  Read & shop
                </button>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default LatestArticles;
