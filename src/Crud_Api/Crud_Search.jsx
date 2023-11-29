import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

function Crud_Search() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  //   pagination 2 state...........................
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2, setPostPerPage2] = useState(10);
  //   pagination 2 state...........................
  const [searchText, setSearchText] = useState("");
  const [searchText2, setSearchText2] = useState("");
  const [searchText3, setSearchText3] = useState("");
  // feacth data................................................
  useEffect(() => {
    getuser();
  }, []);
  function getuser() {
    axios("http://localhost:3000/posts")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }
  // console.log(data);
  // Delete data..................................
  function DeleteFunction(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      // alert("successfully deleted")
      result.json().then((resp) => {
        console.log(resp);
        getuser();
      });
    });
  }
  // next and prev button disable.........................
  useEffect(() => {
    if (currentPage === 10) {
      document.getElementById("next").style.cursor = "not-allowed";
      document.getElementById("next").style.color = "lightgray";
      document.getElementById("prev").style.cursor = "pointer";
      document.getElementById("prev").style.color = "black";
    } else if (currentPage === 1) {
      document.getElementById("prev").style.cursor = "not-allowed";
      document.getElementById("prev").style.color = "lightgray";
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").style.color = "black";
    } else {
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").style.color = "black";
      document.getElementById("prev").style.cursor = "pointer";
      document.getElementById("prev").style.color = "black";
    }
  }, [currentPage]);
  // slice 100 data..............................
  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pages.push(i);
  }
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  //   search data event.....................
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch3 = (e) => {
    setSearchText3(e.target.value);
  };

  const handleSearch2 = (e) => {
    setSearchText2(e.target.value);
  };
  // ..............................
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

  // search by id.........................
  const filteredArray2 = data.filter((item) => {
    if (searchText2) {
      return item.id.toString() === searchText2;
    }
  });
  //   console.log(filteredArray2);
  //   search by name.................................
  const filteredArray = data.filter((item) => {
    if (searchText) {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    }
  });
  console.log("filteredArray", filteredArray);
  // search by name in filter data......................
  let pages2 = [];
  for (let i = 1; i <= Math.ceil(filteredArray.length / postPerPage2); i++) {
    pages2.push(i);
  }
  //   console.log("pages2", pages2);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  const currentPost2 = filteredArray.slice(firstPostIndex2, lastPostIndex2);
  // console.log(currentPage2, lastPostIndex2, firstPostIndex2, currentPost2);
  // search by name and id 10 data..................
  const filteredArray3 = currentPost.filter((item) => {
    if (isNaN(searchText3)) {
      return item.name.toLowerCase().includes(searchText3.toLowerCase());
    } else {
      return item.id.toString() === searchText3;
    }
  });

  return (
    <div>
      <section className="search-1">
        <div className="container">
          <div className="row d-flex mt-4 mb-4">
            <div className="col-lg-4 col-md-4 col-sm-4 text-start">
              <h5 className="head-text">
                <span className="all-text1">All</span>
                <span className="all-text2">Users</span>
              </h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 d-flex">
              <h5 className="d-flex">
                <input type="text" placeholder="Search name" className="crud-search " onChange={handleSearch}></input>
                <input type="text" placeholder="Search id" className="crud-search" onChange={handleSearch2}></input>
                <input type="text" placeholder="Search page" className="crud-search " onChange={handleSearch3}></input>
              </h5>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-end">
              <Link to="/form-2">
                {" "}
                <button type="button" className="user-btn">
                  Add New User
                </button>
              </Link>
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
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {searchText3 ? (
                <>
                  {" "}
                  {searchText3 ? (
                    filteredArray3.length ? (
                      filteredArray3.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>{item.address}</td>
                          <td>{item.gender}</td>
                          <td>{item.hobbies ? item.hobbies + " " : item.hobbies}</td>
                          <td>{item.preferences}</td>

                          <td>
                            <Link to={`/update/${item.id}`}>
                              <button type="button" className="edit-btn">
                                Edit
                              </button>
                            </Link>
                          </td>
                          <td>
                            {/* <button type="button" className="dlt-btn" onClick={(e) => DeleteFunction(item.id)}>
                    Delete
                  </button> */}

                            <button
                              type="button"
                              className="dlt-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={(e) => DeleteFunction(item.id)}
                            >
                              Delete
                            </button>

                            <div
                              className="modal fade crud-delete"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabIndex="-1"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel"></h5>
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                  </div>
                                  <div className="modal-body">Successfully deleted</div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                      ok
                                    </button>
                                    {/* <button type="button" className="btn btn-primary">Understood</button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
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

                        <td>
                          <Link to={`/update/${item.id}`}>
                            <button type="button" className="edit-btn">
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="dlt-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={(e) => DeleteFunction(item.id)}
                          >
                            Delete
                          </button>

                          <div
                            className="modal fade crud-delete"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="staticBackdropLabel"></h5>
                                </div>
                                <div className="modal-body">Successfully deleted</div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    ok
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </>
              ) : (
                <>
                  {/* search by name 100 data */}
                  {searchText ? (
                    <>
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

                              <td>
                                <Link to={`/update/${item.id}`}>
                                  <button type="button" className="edit-btn">
                                    Edit
                                  </button>
                                </Link>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="dlt-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
                                  onClick={(e) => DeleteFunction(item.id)}
                                >
                                  Delete
                                </button>

                                <div
                                  className="modal fade crud-delete"
                                  id="staticBackdrop"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby="staticBackdropLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel"></h5>
                                      </div>
                                      <div className="modal-body">Successfully deleted</div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                          ok
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <>
                            <div className="d-flex justify-content-center align-items-center position absolute " style={{ height: "200px", width: "100vw" }}>
                              <p className="m-0 data-found">No data found</p>
                            </div>
                          </>
                        )
                      ) : (
                        "no data"
                      )}
                    </>
                  ) : (
                    <>
                      {/* search by id 100 data */}
                      {searchText2 ? (
                        filteredArray2.length ? (
                          filteredArray2.map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.mobile}</td>
                              <td>{item.address}</td>
                              <td>{item.gender}</td>
                              <td>{item.hobbies ? item.hobbies + " " : item.hobbies}</td>
                              <td>{item.preferences}</td>

                              <td>
                                <Link to={`/update/${item.id}`}>
                                  <button type="button" className="edit-btn">
                                    Edit
                                  </button>
                                </Link>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="dlt-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
                                  onClick={(e) => DeleteFunction(item.id)}
                                >
                                  Delete
                                </button>

                                <div
                                  className="modal fade crud-delete"
                                  id="staticBackdrop"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby="staticBackdropLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel"></h5>
                                      </div>
                                      <div className="modal-body">Successfully deleted</div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                          ok
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <>
                            <div className="d-flex justify-content-center align-items-center position absolute " style={{ height: "200px", width: "100vw" }}>
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

                            <td>
                              <Link to={`/update/${item.id}`}>
                                <button type="button" className="edit-btn">
                                  Edit
                                </button>
                              </Link>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="dlt-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={(e) => DeleteFunction(item.id)}
                              >
                                Delete
                              </button>

                              <div
                                className="modal fade crud-delete"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="staticBackdropLabel"></h5>
                                    </div>
                                    <div className="modal-body">Successfully deleted</div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        ok
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* {filteredArray3 < 10 ? ( */}
        {
          filteredArray3 ? (
            currentPost2 < 10 ? (
              <>
                {searchText ? (
                  ""
                ) : (
                  <div className="pag-1 d-inline-flex fw-bold m-1">
                    {searchText2 ? (
                      ""
                    ) : (
                      <>
                        {filteredArray2.length >= 1 ? (
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
                            <div className="d-inline-flex pag-2">
                              <button
                                type="button"
                                id="prev"
                                className="bt2 fw-bold c"
                                onClick={prevClick}
                                style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}
                              >
                                PREV
                              </button>
                              <button type="button" className="bt2 fw-bold" onClick={firstClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                                FIRST
                              </button>
                              <button type="button" className="bt2 fw-bold" onClick={lastClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                                LAST
                              </button>
                              <button
                                type="button"
                                id="next"
                                className="bt2 fw-bold"
                                onClick={nextClick}
                                style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}
                              >
                                NEXT
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </>
            ) : (
              <>
                {" "}
                {/* {searchText ?
                  ("")
                  :(<> */}
                <div className="pag-1 d-inline-flex fw-bold m-1">
                  {/* {console.log("pages2", pages2)} */}
                  {filteredArray.length <= 1 ? (
                    ""
                  ) : (
                    <>
                      {pages2.length <= 1 ? (
                        ""
                      ) : (
                        <>
                          {pages2.map((page2, index2) => {
                            return (
                              <button
                                key={index2}
                                onClick={() => setCurrentPage2(page2)}
                                className={page2 === currentPage2 ? "activePage active-text" : "pag1"}
                              >
                                {page2}
                              </button>
                            );
                          })}
                          <div className="d-inline-flex pag-2">
                            <button
                              type="button"
                              id="prev"
                              className="bt2 fw-bold c"
                              onClick={prevClick}
                              style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}
                            >
                              PREV
                            </button>
                            <button type="button" className="bt2 fw-bold" onClick={firstClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                              FIRST
                            </button>
                            <button type="button" className="bt2 fw-bold" onClick={lastClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
                              LAST
                            </button>
                            <button
                              type="button"
                              id="next"
                              className="bt2 fw-bold"
                              onClick={nextClick}
                              style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}
                            >
                              NEXT
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </>
            )
          ) : (
            ""
          )
          // ) : (
          //   ""
          // )}
        }
      </section>
    </div>
  );
}

export default Crud_Search;
