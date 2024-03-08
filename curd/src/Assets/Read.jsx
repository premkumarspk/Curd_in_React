import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Read() {
  
const  {id} = useParams();
const [data, setData] = useState([]);
  useEffect(() => {
    console.log(id)
     axios.get(`http://localhost:8000/api/single/${id}`)
      .then((res)=> 
      setData(res.data.product), console.log(setData) 
       )
      .catch((err) => console.log(err));
   } , []);
  return (
    <div>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
        <div className='w-50  bg-white border shadow p-5 rounded '>
          <h3> Detail of user</h3>
          <div className='mb-2'>
            <strong > First Name  :&nbsp; {data.firstName} </strong>
          </div>
          <div className='mb-2'>
            <strong> Second Name  : &nbsp;{data.secondName}  </strong>
          </div>
          <div className='mb-2'>
            <strong> E-mail  :&nbsp;{data.email} </strong>
          </div>
          <div className='mb-2' > 
            <strong > Phone  :&nbsp;{data.phone} </strong>
          </div>
          <div className='mb-2'>
            <strong >  Address   : &nbsp;{data.address}</strong>
          </div>

        <Link to={'/'} className="btn btn-primary mt-4 btn-lg   rounded" > Back</Link>
        <Link to={`/update/${id}`} className='btn btn-success mt-4 btn-lg mx-4 rounded'> Edit</Link>
        </div>
      </div>
    </div>
  )
}

export default Read
