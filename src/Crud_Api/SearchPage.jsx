import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const[items,setItems] = useState("")
  const[deleteItem,setDeleteItem]=useState("")
  const navigate = useNavigate();

  const postData = (id, name, email, mobile, address, gender, hobbies, preferences) => {
    navigate(
      "/form-page",
      {
        state: {
          id: id,
          name: name,
          email: email,
          mobile: mobile,
          address: address,
          gender: gender,
          hobbies: hobbies,
          preferences: preferences,
        },
      }
    );
  };

  let Data = [
    {
      id: 1,
      row: "1",
      name: "Mamta Dx",
      email: "mamta@b.com",
      mobile: "876449988",
      address: "Sirhind,punjab",
      gender: "Female",
      hobbies: "Blogging",
      preferences: "Critical thinking",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 2,
      row: "2",
      name: "Asham",
      email: "ashm23@gmail.com",
      mobile: "6977342893",
      address: "Sirhind,Punjab",
      gender: "Male",
      hobbies: "Photography",
      preferences: "Problem Solving",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 3,
      row: "3",
      name: "Akash",
      email: "akm54@gmail.com",
      mobile: "6722980587",
      address: "Sirhind,India",
      gender: "Female",
      hobbies: "Yoga,Art",
      preferences: "Creativity",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 4,
      row: "4",
      name: "Aashiq Khan",
      email: "aashiq1223@gmail.com",
      mobile: "6623110787",
      address: "Bareilly,India",
      gender: "Male",
      hobbies: "Yoga,Art",
      preferences: "Critical Thinking",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 5,
      row: "5",
      name: "Dimple",
      email: "dimple54@gmil.com",
      mobile: "096466787",
      address: "Sirhind,Punjab",
      gender: "Female",
      hobbies: "Yoga,Art",
      preferences: "Critical Thinking",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 6,
      row: "6",
      name: "Rahul",
      email: "rks98@gmail.com.com",
      mobile: "096466787",
      address: "Sirhind,Punjab",
      gender: "Male",
      hobbies: "Yoga,Art",
      preferences: "Creativity",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 7,
      row: "7",
      name: "Sonia",
      email: "sonia98@gmail.com.com",
      mobile: "096466787",
      address: "Sirhind,Punjab",
      gender: "Female",
      hobbies: "Yoga,Art",
      preferences: "Problem Solving",
      edit: "Edit",
      delete: "Delete",
    },
  ];

  const [user, setUser] = useState(Data);

  const handleDelete = (index,e) => {
    //I can save an ID in <tr> through datasets (data-) 
    //to get it by traversing the DOM when the user clicks and delete it
    //also in my database (API), that's Ok?
    e.target.parentNode.parentNode.parentNode.deleteRow(index)
    
}
  return (
    <div>
      <section className="search-1">
        <div className="container">
          <div className="row d-flex mt-4 mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6 text-start">
              <h5 className="head-text">
                <span className="all-text1">All</span>
                <span className="all-text2">Users</span>
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-end">
             <Link to="/form-page"> <button type="button" className="user-btn">
                Add New User
              </button></Link>
            </div>
          </div>
        </div>
        <div>
          <table class=" table table-striped">
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
              {Data.map((item,index) => (
                <tr>
                  <th scope="row">{item.row}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.address}</td>
                  <td>{item.gender}</td>
                  <td>{item.hobbies}</td>
                  <td>{item.preferences}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => postData(item.id, item.name, item.email, item.mobile, item.address, item.gender, item.hobbies, item.preferences)}
                      className="edit-btn"
                    >
                      {item.edit}
                    </button>
                  </td>
                  <td>
                    <button type="button" className="dlt-btn" onClick={e => handleDelete(index,e)}>
                      {item.delete}
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <th scope="row">2</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
                <td>{item.preferences}</td>
                <td>
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="dlt-btn">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
                <td>{item.preferences}</td>
                <td>
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="dlt-btn">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
                <td>{item.preferences}</td>
                <td>
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="dlt-btn">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
                <td>{item.preferences}</td>
                <td>
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="dlt-btn">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
                <td>{item.preferences}</td>
                <td>
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="dlt-btn">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>{item.hobbies}</td>
                <td>{item.preferences}</td>
                <td>
                  <button type="button" className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="dlt-btn">
                    Delete
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
