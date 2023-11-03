import React from "react";
import "./Layout.css";

function Layouts() {
  return (
    <>
     <hr className="shop-hr"/>
      <div className="container mt-3 layout-1">
        <div className="row d-flex">
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Layouts</div>
            <span className="home-v text-secondary">Home V1</span>
            <span className="hot ">Hot</span>
            <span className="active-v">active</span>
            <div className="home-v text-secondary">Home V2</div>
            <span className="home-v text-secondary">Home V3</span>
            <span className="hot ">Hot</span>
            <div className="home-v text-secondary">Home V4</div>
            <div className="home-v text-secondary">Home V5</div>
            <span className="home-v text-secondary">Home V6</span>
            <span className="hot ">Hot</span>
            <div className="home-v text-secondary">Home V7</div>
            <span className="home-v text-secondary">Home V8</span>
            <span className="slider">Slider</span>
            <div className="home-v text-secondary">Home V9</div>
            <div className="home-v text-secondary">Home V10</div>
            <div className="home-v text-secondary">Home V11</div>
            <div className="home-v text-secondary">Home V12</div>
            <div className="home-v text-secondary">Home V13</div>
            <div className="home-v text-secondary">Home V14</div>
            <div className="home-v text-secondary">Home V15</div>
            <span className="home-v text-secondary">Home V16</span>
            <span className=" new">New</span>
            <br />
            <span className="home-v text-secondary">Home V17</span>
            <span className="hot ">Hot</span>
            <span className="new ">New</span>
            <br />
            <span className="home-v home-v text-secondary">Home V18</span>
            <span className="hot">Hot</span>
            <span className="new">New</span>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Skins</div>
            <div className="skin-v text-secondary">Skin 1 - Boutique</div>
            <div className="skin-v text-secondary">Skin 2 - Books</div>
            <div className="skin-v text-secondary">Skin 3 - Jewelry</div>
            <span className="skin-v text-secondary">Skin 4 - One Product</span>
            <span className="hot ">Hot</span>
            <div className="skin-v text-secondary">Skin 5 - Tools</div>
            <div className="skin-v text-secondary">Skin 6 - Gadgets</div>
            <div className="skin-v text-secondary">Skin 7 - Furniture</div>
            <div className="skin-v text-secondary">Skin 8 - Cosmetics</div>
            <div className="skin-v text-secondary">Skin 9 - Computers</div>
            <div className="skin-v text-secondary">Skin 10 - Kitchen</div>
            <div className="skin-v text-secondary">Skin 11 - Christmas</div>
            <span className="skin-v home-v text-secondary">Skin 12 - Cannabis</span>
            <span className="hot">Hot</span>
            <span className="new">New</span>
            <br />
            <span className="skin-v home-v text-secondary">Skin 13 - Wine</span>
            <span className="new">New</span>
            <br />
            <span className="skin-v home-v text-secondary">Skin 14 - Food Delivery</span>
            <span className="new">New</span>
            <br />
            <span className="skin-v home-v text-secondary">Skin 15 - Lenses</span>
            <span className="new">New</span>
            <br />
            <span className="skin-v home-v text-secondary">Skin 16 - Cakes</span>
            <span className="new">New</span>
            <br />
            <span className="skin-v home-v text-secondary">Skin 17 - Plants</span>
            <span className="new">New</span>
            <br />
            <span className="skin-v home-v text-secondary">Skin 18 - Pasta</span>
            <span className="new">New</span>
            <br />
          </div>
          <div className="col-lg-4">
            <img
              src="https://shella-demo.myshopify.com/cdn/shop/files/01_77aed88e-38bb-4f19-a1e3-7d99dccda052_815x.progressive.png.jpg?v=1613707542"
              className="layout-img"
            ></img>
            <div className="text-center layout-para mt-3">
              <div className="layout-shop">NEW IN</div>
              <div className="text-secondary">Spring/Summer 2020 Collection</div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src="https://shella-demo.myshopify.com/cdn/shop/files/02_94da7ef8-77bf-4355-9c75-dddabfa361b3_509x.progressive.png.jpg?v=1613707542"
              className="layout-img"
            ></img>
            <div className="text-center layout-para mt-3">
              <div className="layout-shop">SALE & SPECIAL OFFERS</div>
              <div className="text-secondary">Get up to 20% off</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layouts;
