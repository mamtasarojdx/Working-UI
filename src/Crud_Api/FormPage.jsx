import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import "./Form.css";
import SearchPage from "./SearchPage";
import { Link, useLocation } from "react-router-dom";

function FormPage(item) {
  const location = useLocation();

  console.log(location.state);

  return (
    <div>
      { location.state ? 
    (<section className="form-1" >
    <div className="container mt-2 mb-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="text-start home-icon mt-2">
            <Link to="/search-page" style={{ color: "black" }}>
              <AiFillHome />
            </Link>
          </div>
          <h1 className="registration-form text-center">
            Registration
            <h1 className="form-text text-center">Form</h1>
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mt-2">
          <form>
            <fieldset>
              <div className="mb-3 regis-text">
                <span className="regis-text2">Re</span>
                <span>gistration</span>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  defaultValue={location.state.name}
                  class="form-control"
                  placeholder="Enter your name"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  defaultValue={location.state.email}
                  class="form-control"
                  placeholder="Enter your email"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  defaultValue={location.state.mobile}
                  class="form-control"
                  placeholder="Enter your mobile"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  defaultValue={location.state.address}
                  class="form-control"
                  placeholder="Enter your address"
                  required="required"
                />
              </div>
              <div className="d-flex mb-3">
                <label>Gender</label>
                <div className="mx-5">
                  <input type="radio" defaultValue={location.state.gender} required="required" /> Male
                </div>
                <div>
                  <input type="radio" defaultValue={location.state.gender} required="required" /> Female
                </div>
                <div className="mx-5">
                  <input type="radio" defaultValue={location.state.gender} required="required" /> Others
                </div>
              </div>

              <div className="d-flex mb-3">
                <label>Hobbies</label>
                <div className="mx-5">
                  <input type="checkbox" defaultValue={location.state.hobbies} /> Photography
                </div>
                <div>
                  <input type="checkbox" defaultValue={location.state.hobbies} /> Blogging
                </div>
                <div className="mx-5">
                  <input type="checkbox" defaultValue={location.state.hobbies} /> Yoga
                </div>

                <div>
                  <input type="checkbox" defaultValue={location.state.hobbies} /> Art
                </div>
              </div>
              <div className="mb-3">
                <label>Preferences</label>
                <select className="mx-4 skills">
                  <option defaultValue={location.state.preferences}>Top Soft Skills</option>
                  <option defaultValue={location.state.preferences}>Critical thinking</option>
                  <option defaultValue={location.state.preferences}>Problem Solving</option>
                  <option defaultValue={location.state.preferences}>Creativity</option>
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
  </section>)
  :
  (<section className="form-1" >
        <div className="container mt-2 mb-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="text-start home-icon mt-2">
                <Link to="/search-page" style={{ color: "black" }}>
                  <AiFillHome />
                </Link>
              </div>
              <h1 className="registration-form text-center">
                Registration
                <h1 className="form-text text-center">Form</h1>
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mt-2">
              <form>
                <fieldset>
                  <div className="mb-3 regis-text">
                    <span className="regis-text2">Re</span>
                    <span>gistration</span>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                     
                      class="form-control"
                      placeholder="Enter your name"
                      required="required"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                     
                      class="form-control"
                      placeholder="Enter your email"
                      required="required"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      
                      class="form-control"
                      placeholder="Enter your mobile"
                      required="required"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      id="disabledTextInput"
                      
                      class="form-control"
                      placeholder="Enter your address"
                      required="required"
                    />
                  </div>
                  <div className="d-flex mb-3">
                    <label>Gender</label>
                    <div className="mx-5">
                      <input type="radio" required="required" /> Male
                    </div>
                    <div>
                      <input type="radio"  required="required" /> Female
                    </div>
                    <div className="mx-5">
                      <input type="radio"  required="required" /> Others
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <label>Hobbies</label>
                    <div className="mx-5">
                      <input type="checkbox"  /> Photography
                    </div>
                    <div>
                      <input type="checkbox"  /> Blogging
                    </div>
                    <div className="mx-5">
                      <input type="checkbox"  /> Yoga
                    </div>

                    <div>
                      <input type="checkbox"  /> Art
                    </div>
                  </div>
                  <div className="mb-3">
                    <label>Preferences</label>
                    <select className="mx-4 skills">
                      <option >Top Soft Skills</option>
                      <option >Critical thinking</option>
                      <option >Problem Solving</option>
                      <option >Creativity</option>
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
      </section>)}
      
     
    </div>
  );
}

export default FormPage;
