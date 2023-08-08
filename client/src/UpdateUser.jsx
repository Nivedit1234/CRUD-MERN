import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';
const UpdateUser = () => {

const {id}=useParams()

const [name,setName]=useState();
const [age,setAge]=useState();
const [email,setEmail]=useState();

const navigate=useNavigate();



    useEffect(() => 
    {

         axios.get("http://localhost:3001/getUsers/"+id)
            .then((result)=>{
               console.log(result)
            
               setName(result.data.name);
               setAge(result.data.age);
               setEmail(result.data.email);
            })
            .catch((err)=>{
               console.log("upper catch");
               console.log(err)
            
            }
            )
    
    }, [])

   //let data={name,email,age}
    const Update=(e)=>{
       
      e.preventDefault();

      axios.put("http://localhost:3001/updateUser"+id,{name,email,age})  
      .then(
         (result)=>{console.log(result)
             navigate('/')
            // window.location.reload();
         })  
      .catch(
        
         (err)=>{
            console.log("lower catch");
            console.log(err);
            // err.msg(err);
         })

         

   }

  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className='w-50 bg-dark rounded p-3'>
         <form onSubmit={Update}>
            <h2 className='text-light'>Update User</h2>
            <div class="mb-2">
               <label for="" class="form-label">Name</label>
               <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div class="mb-2">
               <label for="" class="form-label">Email</label>
               <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div class="mb-2">
               <label for="" class="form-label">Age</label>
               <input type="text" className="form-control" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-secondary mt-4">Submit</button>
         </form>
       </div>    
    
     </div>
  )
}

export default UpdateUser