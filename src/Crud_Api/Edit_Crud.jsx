import React, { useState, useEffect } from "react";
import { navigate, useNavigate, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import axios from "axios";

function Edit_Crud() {
  const { id } = useParams();
  const [data, setData] = useState({ name: "", email: "", mobile: "", gender: "", hobbies: [], preferences: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/" + id)

      .then((res) => setData(res.data)) // Store the API data in the state variable
      .catch((error) => console.log(error));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:3000/posts/" + id, data).then((res) => {
      // alert("Saved Successfully")
      navigate("/search-2");
    });
  }

  const handleChange = (e) => {
    if (data?.hobbies?.length) {
      console.log(data.hobbies);
      if (data?.hobbies?.includes(e.target.value)) {
        const filteredIndex = data?.hobbies?.indexOf(e.target.value);
        data?.hobbies?.splice(filteredIndex, 1);
      } else {
        data?.hobbies?.push(e.target.value);
      }
    } else {
      data?.hobbies?.unshift(e.target.value);
      console.log(data.hobbies);
    }
    setData((prev) => ({
      ...prev,
      [e.target.name]: data?.hobbies,
    }));
  };

  return (
    <>
      <section className="form-1">
        <div className="container mt-2 mb-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="text-start home-icon mt-2">
                <Link to="/search-2" style={{ color: "black" }}>
                  <AiFillHome />
                </Link>
              </div>
              <h1 className="registration-form text-center">
                Registration
                <h1 className="form-text text-center">Form</h1>
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mt-2">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <div className="mb-3 regis-text">
                    <span className="regis-text2">Re</span>
                    <span>gistration</span>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      class="form-control"
                      placeholder="Enter your name"
                      required="required"
                    />
                    {/* <span className="text-primary">Enter the name</span> */}
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      class="form-control"
                      placeholder="Enter your email"
                      required="required"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={data.mobile}
                      class="form-control"
                      placeholder="Enter your mobile"
                      onChange={(e) => setData({ ...data, mobile: e.target.value })}
                      required="required"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={data.address}
                      class="form-control"
                      placeholder="Enter your address"
                      onChange={(e) => setData({ ...data, address: e.target.value })}
                      required="required"
                    />
                  </div>
                  <div className="d-flex mb-3">
                    <label>Gender</label>
                    <div className="mx-5">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        defaultValue={data.male}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                        checked={data.gender == "Male" ? true : false}
                      />{" "}
                      Male
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        defaultValue={data.female}
                        checked={data.gender == "Female" ? true : false}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                      />{" "}
                      Female
                    </div>
                    <div className="mx-5">
                      <input
                        type="radio"
                        name="gender"
                        value="Others"
                        defaultValue={data.other}
                        onChange={(e) => setData({ ...data, gender: e.target.value })}
                        checked={data.gender == "Others" ? true : false}
                      />{" "}
                      Others
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <label>Hobbies</label>
                    <div className="mx-5">
                      <input
                        type="checkbox"
                        name="hobbies"
                        value="Photography"
                        onChange={handleChange}
                        // onChange={(e) => handleChange({ ...data, hobbies: e.target.value })}
                        checked={data.hobbies.includes("Photography")}
                      />{" "}
                      Photography
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="hobbies"
                        value="Blogging"
                        onChange={handleChange}
                        // onChange={(e) => handleChange({ ...data, hobbies: e.target.value })}
                        checked={data.hobbies.includes("Blogging")}
                      />{" "}
                      Blogging
                    </div>
                    <div className="mx-5">
                      <input
                        type="checkbox"
                        name="hobbies"
                        value="Yoga"
                        onChange={handleChange}
                        // onChange={(e) => handleChange({ ...data, hobbies: e.target.value })}
                        checked={data.hobbies.includes("Yoga")}
                      />{" "}
                      Yoga
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        name="hobbies"
                        value="Art"
                        onChange={handleChange}
                        // onChange={(e) => handleChange({ ...data, hobbies: e.target.value })}
                        checked={data.hobbies.includes("Art")}
                      />{" "}
                      Art
                    </div>
                  </div>

                  <div className="mb-3">
                    <label>Preferences</label>
                    <select className="mx-4 skills" name="preferences" onChange={(e) => setData({ ...data, preferences: e.target.value })}>
                      <option>Soft Skills</option>
                      <option name="preferences" value="Critical thinking" selected={data.preferences == "Critical Thinking" ? true : false}>
                        Critical thinking
                      </option>
                      <option name="preferences" value="Problem Solving" selected={data.preferences == "Problem Solving" ? true : false}>
                        Problem Solving
                      </option>
                      <option name="preferences" value="Creativity" selected={data.preferences == "Creativity" ? true : false}>
                        Creativity
                      </option>
                    </select>
                  </div>
                  <button type="submit" class="submit">
                    Submit
                  </button>

                  {/* <button type="button" class="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Submit
                  </button>

                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            Modal title
                          </h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">Saved Successfully</div>
                        <div class="modal-footer">
                          <Link to="/search-2">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                              Ok
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Edit_Crud;
