import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import "./Form.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Crud_Form() {
  const [inputData, setInputData] = useState({ name: "", email: "", mobile: "", address: "", gender: "", hobbies: [], preferences: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/posts", inputData)
      .then((res) => {
        alert("Data Saved Successfully");
        navigate("/search-2");
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    if (inputData?.hobbies?.length) {
      console.log(inputData.hobbies);
      if (inputData?.hobbies?.includes(e.target.value)) {
        const filteredIndex = inputData?.hobbies?.indexOf(e.target.value);
        inputData?.hobbies?.splice(filteredIndex, 1);
      } else {
        inputData?.hobbies?.push(e.target.value);
      }
    } else {
      inputData?.hobbies?.unshift(e.target.value);
      console.log(inputData.hobbies);
    }
  };
  return (
    <div>
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
                      defaultValue={inputData.name}
                      id="disabledTextInput"
                      onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                      class="form-control"
                      placeholder="Enter your name"
                      required="required"
                    />
                    {inputData.name.length == 0 && <span className="text-primary">Enter the Name</span>}
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={inputData.email}
                      onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                      class="form-control"
                      placeholder="Enter your email"
                      required="required"
                    />
                    {inputData.email.length == 0 && <span className="text-primary">Enter the Email</span>}
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={inputData.mobile}
                      onChange={(e) => setInputData({ ...inputData, mobile: e.target.value })}
                      class="form-control"
                      placeholder="Enter your mobile"
                      required="required"
                    />{" "}
                    {inputData.mobile.length == 0 && <span className="text-primary">Enter the Mobile</span>}
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      defaultValue={inputData.address}
                      onChange={(e) => setInputData({ ...inputData, address: e.target.value })}
                      class="form-control"
                      placeholder="Enter your address"
                      required="required"
                    />
                    {inputData.address.length == 0 && <span className="text-primary">Enter the Address</span>}
                  </div>
                  <div className="d-flex mb-3">
                    <label>Gender</label>
                    <div className="mx-5">
                      <input type="radio" name="gender" value="Male" onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} /> Male
                    </div>
                    <div>
                      <input type="radio" name="gender" value="Female" onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} /> Female
                    </div>
                    <div className="mx-5">
                      <input type="radio" name="gender" value="Others" onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} /> Others
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <label>Hobbies</label>
                    <div className="mx-5">
                      <input type="checkbox" name="hobbies" value="Photography" onChange={handleChange} /> Photography
                    </div>
                    <div>
                      <input type="checkbox" name="hobbies" value="Blogging" onChange={handleChange} /> Blogging
                    </div>
                    <div className="mx-5">
                      <input type="checkbox" name="hobbies" value="Yoga" onChange={handleChange} /> Yoga
                    </div>

                    <div>
                      <input type="checkbox" name="hobbies" value="Art" onChange={handleChange} /> Art
                    </div>
                  </div>

                  <div className="mb-3">
                    <label>Preferences</label>
                    <select className="mx-4 skills" onChange={(e) => setInputData({ ...inputData, preferences: e.target.value })}>
                      <option>Soft Skills</option>
                      <option>Critical thinking</option>
                      <option>Problem Solving</option>
                      <option>Creativity</option>
                    </select>
                  </div>

                  <button type="submit" class="submit">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Crud_Form;
