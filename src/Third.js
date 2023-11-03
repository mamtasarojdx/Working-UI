import React from 'react'

function Third() {
  return (
    <div>
      {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active d-flex">
    <img src="https://shella-computers.myshopify.com/cdn/shop/articles/23_338x.progressive.jpg?v=1570204370" class="d-block " alt="..."/>
    <img src="https://shella-computers.myshopify.com/cdn/shop/articles/21_338x.progressive.jpg?v=1570204357" class="d-block" alt="..."/>
    <img src="https://shella-computers.myshopify.com/cdn/shop/articles/22_338x.progressive.jpg?v=1570204363" class="d-block " alt="..."/>
    <img src="https://shella-computers.myshopify.com/cdn/shop/articles/24_338x.progressive.jpg?v=1570204377" class="d-block" alt="..."/>
      <img src="https://shella-computers.myshopify.com/cdn/shop/articles/21_338x.progressive.jpg?v=1570204357" class="d-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://shella-computers.myshopify.com/cdn/shop/articles/22_338x.progressive.jpg?v=1570204363" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://shella-computers.myshopify.com/cdn/shop/articles/21_338x.progressive.jpg?v=1570204357" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://shella-computers.myshopify.com/cdn/shop/articles/23_338x.progressive.jpg?v=1570204370" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://shella-computers.myshopify.com/cdn/shop/articles/24_338x.progressive.jpg?v=1570204377" class="d-block" alt="..."/>
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
</div> */}


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
                  <div class="carousel-inner">
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
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                  </div>
                  
                </div>
    </div>
  )
}

export default Third
