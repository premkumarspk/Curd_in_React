import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mes, setMes] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/single/${id}`)
      .then((res) => setValue(res.data.product))
      .catch((err) => console.log(err));
  }, []);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/update/${id}`, value)
      .then((res) => {
        console.log(res);
        setMes(res.data.msg);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Add User</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label" htmlFor="firstName">
                {" "}
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className=" form-control"
                value={value.firstName}
                onChange={(e) =>
                  setValue({ ...value, firstName: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="secondName"> Second Name</label>
              <input
                type="text"
                id="secondName"
                name="secondName"
                className=" form-control"
                value={value.lastName}
                onChange={(e) =>
                  setValue({ ...value, lastName: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email"> Gmail</label>
              <input
                type="email"
                id="email"
                name="email"
                className=" form-control"
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone"> Phone</label>
              <input
                type="Number"
                id="phone"
                name="Phone"
                className=" form-control"
                value={value.phone}
                onChange={(e) => setValue({ ...value, phone: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Address"> Address</label>
              <input
                type="text"
                id="Address"
                name="AddrclassNameess"
                className=" form-control"
                value={value.address}
                onChange={(e) =>
                  setValue({ ...value, address: e.target.value })
                }
              />
            </div>
            <button className="btn  btn-success mt-3"> Update</button>
            <Link to="/" className="btn btn-info  mt-3 mx-2"> Back</Link>
          </form>
          <div className="d-flexw-100   bg-light m-3 justify-content-cemter align-items-center ">
            <h2 className="text-center text-info  rounded p-3 fs-4 "> {mes} </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
