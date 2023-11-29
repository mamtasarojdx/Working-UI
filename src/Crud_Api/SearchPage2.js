import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import SearchPage from "./SearchPage";

function Crud_Search() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2, setPostPerPage2] = useState(10);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getuser();
  }, []);
  function getuser() {
    axios("http://localhost:3000/posts")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (currentPage === 10) {
      document.getElementById("next").style.cursor = "not-allowed";
      document.getElementById("next").style.color = "Orange";
      document.getElementById("prev").style.cursor = "pointer";
      document.getElementById("prev").style.color = "black";
    } else if (currentPage === 1) {
      document.getElementById("prev").style.cursor = "not-allowed";
      document.getElementById("prev").style.color = "Orange";
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").style.color = "black";
    } else {
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").style.color = "black";
      document.getElementById("prev").style.cursor = "pointer";
      document.getElementById("prev").style.color = "black";
    }
  }, [currentPage]);

  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pages.push(i);
  }

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  function prevClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextClick() {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  }

  function firstClick() {
    setCurrentPage(1);
  }

  function lastClick() {
    setCurrentPage(10);
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredArray = data.filter((item) => {
    if (isNaN(searchText)) {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return item.id.toString() === searchText;
    }
  });

  let pages2 = [];
  for (let i = 1; i <= Math.ceil(filteredArray.length / postPerPage2); i++) {
    pages2.push(i);
  }

  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  const currentPost2 = filteredArray.slice(firstPostIndex2, lastPostIndex2);
  console.log(currentPage2, lastPostIndex2, firstPostIndex2, currentPost2);

  return (
    <div>
      <section className="search-2">
        <div className="container">
          <div className="row d-flex mt-4 mb-4">
            <div className="col-lg-4 col-md-4 col-sm-4 text-start">
              {/* <h5 className="head-text">
                <span className="all-text1">All</span>
                <span className="all-text2">Users</span>
              </h5> */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 d-flex">
              <h5 className="d-flex">
                <input type="text" placeholder="Search name" className="crud-search " onChange={handleSearch}></input>
              </h5>
            </div>
          </div>
        </div>
        <div>
          <table className=" table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Preferences</th>
              </tr>
            </thead>

            <tbody>
              {searchText ? (
                filteredArray.length ? (
                  currentPost2.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.address}</td>
                      <td>{item.gender}</td>
                      <td>{item.hobbies ? item.hobbies + " " : item.hobbies}</td>
                      <td>{item.preferences}</td>
                    </tr>
                  ))
                ) : (
                  <>
                    <div className="d-flex justify-content-center align-items-center position absolute" style={{ height: "200px", width: "100vw" }}>
                      <p className="m-0 data-found">No data found</p>
                    </div>
                  </>
                )
              ) : (
                currentPost.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.address}</td>
                    <td>{item.gender}</td>
                    <td>{item.hobbies ? item.hobbies + " " : item.hobbies}</td>
                    <td>{item.preferences}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {currentPost2 <= 10 ? (
          <>
            <div className="pag-1 d-inline-flex fw-bold m-1">
              {console.log("pages", pages)}
              {pages.length <= 1 ? (
                ""
              ) : (
                <>
                  {pages.map((page, index) => {
                    return (
                      <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? "activePage active-text" : "pag1"}>
                        {page}
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="pag-1 d-inline-flex fw-bold m-1">
              {console.log("pages2", pages2)}
              {pages2.length <= 1 ? (
                ""
              ) : (
                <>
                  {pages2.map((page2, index2) => {
                    return (
                      <button key={index2} onClick={() => setCurrentPage2(page2)} className={page2 === currentPage2 ? "activePage active-text" : "pag1"}>
                        {page2}
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}
        {currentPost2 <= 10 ? (
          <>
            <div className="d-inline-flex pag-2">
              <button type="button" id="prev" className="bt2 fw-bold c" onClick={prevClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                PREV
              </button>
              <button type="button" className="bt2 fw-bold" onClick={firstClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                FIRST
              </button>
              <button type="button" className="bt2 fw-bold" onClick={lastClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                LAST
              </button>
              <button type="button" id="next" className="bt2 fw-bold" onClick={nextClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                NEXT
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Crud_Search;
