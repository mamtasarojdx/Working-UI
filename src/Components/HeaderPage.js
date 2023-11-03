import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Home_Page.css";
import "./TabletMQ/TabletMQ.css";
import "./TabletMQ/LargeMobile.css";
import "./ImagePage.css";
import "./TabletMQ/SmallMobile.css";
import "./TabletMQ/MediumMobile.css";
import "./TabletMQ/LargeTablet.css";

function HeaderPage() {
  return (
    <>
      {/*    ------------2nd line container -------- */}

      <div className="container header-page">
        <div className="row d-flex mt-4 second-line">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <h3 style={{ fontWeight: "bolder" }} className="shella">
              Shella
            </h3>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 search">
            <AiOutlineSearch style={{ fontSize: "20px", color: "rgb(139 142 145)" }} />
            <input type="search" placeholder="Search Products" />
            <button type="button" className="search-btn">
              Search
            </button>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2 heart">
            <AiOutlineHeart style={{ fontSize: "20px" }} id="client" />
            <i class="fa fa-balance-scale" style={{ fontSize: "20px" }} id="balancing-icon"></i>
            <AiOutlineShoppingCart style={{ fontSize: "23px" }} className="bag" />
            <span style={{ fontSize: "15px", fontWeight: "bold", padding: "px 0 0 7px" }} className="bag">
              Bag (0)
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPage;
