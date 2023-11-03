import React from "react";
import "./Layout.css";

function Womens() {
  return (
    <>
     <hr className="shop-hr"/>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Clothing</div>
            <div className="women-v text-secondary">Coats</div>
            <div className="women-v text-secondary">Jackets</div>
            <div className="women-v text-secondary">Blazers</div>
            <span className="women-v text-secondary">Dresses</span>
            <span className="new ">New</span>
            <div className="women-v text-secondary">Playsuits & Jumpsuits</div>
            <div className="women-v text-secondary">Trousers</div>
            <div className="women-v text-secondary">Jeans</div>
            <div className="women-v text-secondary">Knitwear</div>
            <div className="women-v text-secondary">Sweatshirts & Hoodies</div>
            <div className="women-v text-secondary">T-Shirts</div>
            <div className="women-v text-secondary">Bodysuits</div>
            <div className="women-v text-secondary">Shirts</div>
            <div className="women-v text-secondary">Skirts</div>
            <div className="women-v text-secondary">Shorts</div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Shoes</div>
            <div className="women-v text-secondary">Trainers</div>
            <div className="women-v text-secondary">Boots & Ankle Boots</div>
            <span className="shop-v text-secondary">Heels</span>
            <span className="hot ">Hot</span>
            <div className="women-v text-secondary">Flats</div>
            <div className="women-v text-secondary">Platforms</div>
            <div className="women-v text-secondary">Heeled Sandals</div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Shoes</div>
            <div className="women-v text-secondary">Bags</div>
            <div className="women-v text-secondary">Backpacks</div>
            <div className="women-v text-secondary">Glasses</div>
            <div className="women-v text-secondary">Jewellery</div>
            <div className="women-v text-secondary">Earrings</div>
            <div className="women-v text-secondary">iPhone Cases</div>
            <div className="women-v text-secondary">Gadgets</div>
            <div className="women-v text-secondary">Hats & Beanie</div>
            <div className="women-v text-secondary">Purses</div>
            <div className="women-v text-secondary">Belts</div>
            <div className="women-v text-secondary">Socks</div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="d-flex">
              <div className="col-lg-6">
                <div>
                  <div className="women-parent">
                    <img
                      src="https://shella-demo.myshopify.com/cdn/shop/files/04_2f27b276-6fed-4f96-8559-7b6b8c57af0e_595x.progressive.png.jpg?v=1613707542"
                      className="women-img"
                    ></img>
                    <div className="text-center women-child">
                      <div className="">NEW IN</div>
                      <div className="shop-para1 text-secondary">Spring/Summer 2020 Collection</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="women-parent">
                    <img
                      src="https://shella-demo.myshopify.com/cdn/shop/files/03_4780b01c-0a2c-4054-b73e-f7611bccd652_595x.progressive.png.jpg?v=1613707542"
                      className="women-img"
                    ></img>
                    <div className="text-center women-child">
                      <div className="">SALE & SPECIAL OFFERS</div>
                      <div className="shop-para1 text-secondary">Get up to 20% off</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="col-lg-6 mt-2">
                <div>
                  <div className="women-parent">
                    <img
                      src="https://shella-demo.myshopify.com/cdn/shop/files/06_de144e07-89ea-473c-bfa4-ce41f091ba0b_595x.progressive.png.jpg?v=1613707542"
                      className="women-img"
                    ></img>
                    <div className="text-center women-child">
                      <div className="">FEATURED</div>
                      <div className="shop-para1 text-secondary">Popular Items</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-2">
                <div>
                  <div className="women-parent">
                    <img
                      src="https://shella-demo.myshopify.com/cdn/shop/files/05_6cb404e2-636f-466d-88cf-13340b2c190a_595x.progressive.png.jpg?v=1613707542"
                      className="women-img"
                    ></img>
                    <div className="text-center women-child">
                      <div className="">COMING SOON</div>
                      <div className="shop-para1 text-secondary">Autumn 2020 Collection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Womens;
