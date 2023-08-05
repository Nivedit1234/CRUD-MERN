import React,{useState} from 'react'
//import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const CreateUser = () => {
  
   const [name,setName]=useState();
  const [age,setAge]=useState();
  const [email,setEmail]=useState();
  
  const navigate=useNavigate();
//   let axiosConfig = {
//    headers: {
//        'Content-Type': 'application/json;charset=UTF-8',
//        "Access-Control-Allow-Origin": "*",
//    }
  
   let data={name,email,age};
  

  const  Submit=(e)=>{
   
   
//    try {
//       let response=await axios.post("http://localhost:3001/createUser",data)
//   } catch (error) {
//       console.log(error)
//   }
   
   
   //e.prevenDefault(); 
   //data is getting saved to db without e.preventDefault()
  
   const response=axios.post("http://localhost:3001/createUser",data)
   .then(
      (result)=>{console.log(result)})

      navigate('/')
   .catch(
      (err)=>{console.log(err)})
   
      //console.log(response.data); 
   

  }  
  
  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className='w-50 bg-dark rounded p-3'>
         <form onSubmit={Submit}>
            <h2 className='text-light'>Add User</h2>
            <div className="mb-2">
               <label for="" className="form-label">Name</label>
               <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            </div>
            <div className="mb-2">
               <label for="" className="form-label">Email</label>
               <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            </div>
            <div className="mb-2">
               <label for="" className="form-label">Age</label>
               <input type="text" className="form-control" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/>
            </div>
            <button type="submit" className="btn btn-secondary mt-4">Submit</button>
         </form>
       </div>    
    
     </div>
  )
}

export default CreateUser