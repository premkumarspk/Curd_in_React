import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
     axios.get("http://localhost:8000/api/getproducts")
      .then((res)=> 
      setData(res.data.productdata)
      // console.log (res.data.productdata)
       )
      .catch((err) => console.log(err));
   } , []);

const handleDelete = (id)=>{
  
  const confrim =window.confirm("delete this ?")
  if(confrim){
    axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then(res=>{
      window.location.reload()
      navigate('/')
    }).catch(err=>console.log(err))
  }
}
  return (
    <div className="d-flex flex-column bg-light justify-content-center align-items-center vh-100">
      <h1> List of User </h1>
      <div className="d-flex justify-content-end  my-2 ">
           
           <Link to="/create " className="btn btn-primary" > Add+</Link>
        </div>
      <div className="w-85 rounded bg-white border shadow p-3">
        <table className="table table-striped">
          <thead className="p-4">
            <th>First Name</th>
            <th>Last Name</th>
            <th> Email </th>
            <th> phone</th>
            <th>Address</th>
            
            <th>Action</th>
          </thead>
          <tbody>
            {
              data.map((r)=>{
                console.log(r._id)
                return(
                  <tr key={r.id}>
                    <td> {r.firstName}</td>
                    <td>  {r.lastName}</td>
                    <td> {r.email}</td>
                    <td> {r.phone}</td>
                    <td> {r.address}</td>
                   
                    <td>
                      <Link to={`/single/${r._id}`}   className="btn btn-info btn-sm mx-1">Read</Link>
                      <Link to={`/update/${r._id}`} className="btn btn-success btn-sm mx-1">Edit</Link>
                      <button onClick={ e => handleDelete(r._id)} className="btn btn-danger btn-sm mx-1">Delete</button>
                    </td>



                  </tr>
                ) 
              }
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
