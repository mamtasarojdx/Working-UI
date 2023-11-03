import React from "react";
import "./Layout.css";

function Mens() {
  return (
    <>
     <hr className="shop-hr"/>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3">
            <div className="text-center">
              <img
                src="https://shella-demo.myshopify.com/cdn/shop/files/08_a2bc5350-5e78-460c-be3d-839d426fae28_595x.progressive.png.jpg?v=1613707542"
                className="men-img mb-3"
              ></img>
              <div className="layout-shop">NEW IN</div>
              <div className="shop-para1 text-secondary">Spring/Summer 2020 Collection</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Clothing</div>
            <img
              src="https://shella-demo.myshopify.com/cdn/shop/files/09_c7be3217-13ff-491e-ab9d-1254c9f909ce_341x.progressive.png.jpg?v=1613707542"
              className="men-img2 mb-3"
            ></img>
            <div className="women-v text-secondary">Coats</div>
            <span className="women-v text-secondary">Jackets</span>
            <span className="active-v text-uppercase ">Sale</span>
            <div className="women-v text-secondary">Jeans</div>
            <div className="women-v text-secondary">T-Shirts</div>
            <div className="women-v text-secondary">Sweatshirts</div>
            <div className="women-v text-secondary">Knitwear</div>
            <div className="women-v text-secondary">Shirts</div>
            <div className="women-v text-secondary">Trousers</div>
            <div className="women-v text-secondary">Shorts</div>
          </div>
          <div className="col-lg-2">
            <span className="text-uppercase fs-large">Shoes</span>
            <span className="active-v text-uppercase ">Sale</span>
            <img
              src="https://shella-demo.myshopify.com/cdn/shop/files/10_87681560-d4ea-462d-83fd-296a0417d5d6_341x.progressive.png.jpg?v=1613707542"
              className="men-img2 mb-3 mt-3"
            ></img>
            <div className="women-v text-secondary">Trainers</div>
            <div className="women-v text-secondary">Boots & Ankle Boots</div>
            <div className="women-v text-secondary">Shoes</div>
            <div className="women-v text-secondary">Sandals</div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Accessories</div>
            <img
              src="https://shella-demo.myshopify.com/cdn/shop/files/11_9b629d9c-ffbe-4100-8413-5d12132122b8_341x.progressive.png.jpg?v=1613707542"
              className="men-img2 mb-3"
            ></img>
            <div className="women-v text-secondary">Backpacks</div>
            <div className="women-v text-secondary">Hats</div>
            <div className="women-v text-secondary">Belts</div>
            <div className="women-v text-secondary">Glasses</div>
            <div className="women-v text-secondary">Mobile Accessories</div>
            <div className="women-v text-secondary">Socks</div>
          </div>
          <div className="col-lg-3">
            <div>
              <div className="men-parent">
                <img
                  src="https://shella-demo.myshopify.com/cdn/shop/files/07_6f8b51cb-d2f4-451e-bfee-32ab5d5e6645_595x.progressive.png.jpg?v=1613707542"
                  className="men-img2"
                ></img>
                <div className="text-center men-child">
                  <div className="">SALE & SPECIAL OFFERS</div>
                  <div className="shop-para1 text-secondary">Get up to 20% off</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mens;
