import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3001/users")
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))


        //   (async()=>{
        //     let response=await axios.get('http://localhost:3001')
        //     setUsers(response.data);
        //   })()  

    }, [])

   const handleClick=(id)=>{

         axios.delete('http://localhost:3001/deleteUser/'+id)
         .then(result=>
            {
                
                console.log(result)
                window.location.reload();
            })
         .catch(err=>(console.log(err)))     
   }

    return (
        <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
            <div className='w-50 bg-dark rounded p-3 '>
                <Link to='/create' className="btn btn-danger "> Add +</Link>

                <table className='table bg-dark mt-2'>
                    <thead className='bg-dark'>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th>Age</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {

                                return <tr>
                                    <td>{user.name} </td>
                                    <td>{user.email}</td>
                                    <td>{user.age} </td>
                                    <td>
                                        <Link to={`/update/${user._id}`}>
                                            <button className='btn btn-success'>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                     <button className='btn btn-danger' onClick={(e)=>{handleClick(user._id)}}>Delete</button>
                                    </td>
                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users