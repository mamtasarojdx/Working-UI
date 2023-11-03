import React from "react";
import "./Layout.css";

function Shop() {
  return (
    <>
    <hr className="shop-hr"/>
      <div className="container">
        <row className="row mt-2">
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Collection Layouts</div>
            <div className="shop-v text-secondary">List Collections V1</div>
            <div className="shop-v text-secondary">List Collections V2</div>
            <div className="shop-v text-secondary">2 Products per Row</div>
            <div className="shop-v text-secondary">3 Products per Row</div>
            <div className="shop-v text-secondary">4 Products per Row</div>
            <div className="shop-v text-secondary">List Products</div>

            <span className="shop-v text-secondary">List Products V2</span>
            <span className="hot ">Hot</span>
            <span className="new ">New</span>
            <div className="shop-v text-secondary">Left Sidebar</div>
            <div className="shop-v text-secondary">Right Sidebar</div>
            <div className="shop-v text-secondary">Horizontal Filter</div>
            <div className="shop-v text-secondary">Without Sidebar</div>
            <div className="shop-v text-secondary">Without Sidebar with Banner</div>
            <div className="shop-v text-secondary">With Description</div>
            <div className="shop-v text-secondary">With Full Width Banner</div>
            <span className="shop-v text-secondary">Look Book</span>
            <span className="hot ">Hot</span>
            <div className="shop-v text-secondary">Look Book V2</div>
            <div className="shop-v text-secondary">Catalog Mode</div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Single Product Layouts</div>
            <div className="shop-v text-secondary">Product V1 — Classic</div>
            <div className="shop-v text-secondary">Product V2 — Thumbs List</div>
            <div className="shop-v text-secondary">Product V3 — 3 Columns</div>
            <div className="shop-v text-secondary">Product V4 — Sticky Side</div>
            <span className="shop-v text-secondary">Product V5 — Grid</span>
            <span className="new ">New</span>
            <div className="shop-v text-secondary">Product V6 — Slider</div>
            <div className="shop-v text-secondary">Product V1 — With Column</div>
            <div className="shop-v text-secondary">Product V2 — With Column</div>
            <span className="shop-v text-secondary">3D Models and Video</span>
            <span className="hot ">Hot</span>
            <br />

            <span className="shop-v text-secondary">Pre Order</span>
            <span className="hot ">Hot</span>
            <span className="new ">New</span>
            <div className="shop-v text-secondary">Complementary products</div>
            <div className="shop-v text-secondary">Gift product recipient form</div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Product Options</div>
            <div className="shop-v text-secondary">On Listing</div>
            <div className="shop-v text-secondary">Color, Text</div>
            <div className="shop-v text-secondary">Image, Text</div>
            <div className="shop-v text-secondary">Big Image, Text</div>
            <div className="shop-v text-secondary">Color, Select Dropdown</div>
            <div className="shop-v text-secondary">Small Text, Text</div>
            <span className="shop-v text-secondary">Custom Image, Text</span>
            <span className="new ">New</span>
            <div className="shop-v text-secondary">Custom Big Image</div>
            <div className="shop-v text-secondary">Custom Color, Text</div>
            <div className="shop-v text-secondary">Square Color, Text</div>
            <span className="shop-v text-secondary">Gallery width</span>
            <span className="hot ">Hot</span>
          </div>
          <div className="col-lg-2">
            <div className="text-start ">
              <div className="text-uppercase fs-large mb-3">Featured products</div>
              <img
                src="https://shella-demo.myshopify.com/cdn/shop/products/3410534250_1_1_1_67eb2dce-35d8-4dfa-8d93-fee6c4b56c49_341x.progressive.jpg?v=1542543797"
                className="shop-img mb-3"
              />
              <div className="shop-para1">Blend Field Jacket</div>
              <div className="shop-para2">$470.00</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-start ">
              <img
                src="https://shella-demo.myshopify.com/cdn/shop/products/2121900600_2_3_1_86b90065-d75b-4519-a95e-a02ae468f4e9_341x.progressive.jpg?v=1543244602"
                className="shop-img2 mb-3"
              />
              <div className="shop-para1">Jersey Graphic Tee</div>
              <div className="shop-para2">$330.00</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-uppercase fs-large mb-3">Top brands</div>
            <div className="d-flex mb-3">
              <div className="col-lg-6">
                <div className="shop-img3">
                  {" "}
                  <img
                    src="https://shella-demo.myshopify.com/cdn/shop/files/brand1_fe075add-d43b-408a-8d75-2b8e5e47c9dc_160x.progressive.jpg?v=1613796250"
                    className="brand-img"
                  ></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shop-img3">
                  {" "}
                  <img
                    src="https://shella-demo.myshopify.com/cdn/shop/files/brand2_b9ee6363-e223-4982-98b5-746282d17005_160x.progressive.jpg?v=1613796250"
                    className="brand-img"
                  ></img>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="col-lg-6">
                <div className="shop-img3">
                  <img
                    src="https://shella-demo.myshopify.com/cdn/shop/files/brand3_9f51652c-2d06-4a06-a964-805f55ef4aed_160x.progressive.jpg?v=1613796251"
                    className="brand-img"
                  ></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shop-img3">
                  <img
                    src="https://shella-demo.myshopify.com/cdn/shop/files/brand4_4921d231-feef-4617-adfb-0fcf44b5614c_160x.progressive.jpg?v=1613796251"
                    className="brand-img"
                  ></img>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-lg-6">
                <div className="shop-img3">
                  <img
                    src="https://shella-demo.myshopify.com/cdn/shop/files/brand5_e15bc16b-d59a-4ef4-af27-d970f53b40d0_160x.progressive.jpg?v=1613796251"
                    className="brand-img"
                  ></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shop-img3">
                  <img
                    src="https://shella-demo.myshopify.com/cdn/shop/files/brand6_6f559712-7cd6-48b0-9433-75679d8e4448_160x.progressive.jpg?v=1613796251"
                    className="brand-img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </row>
      </div>
    </>
  );
}

export default Shop;



