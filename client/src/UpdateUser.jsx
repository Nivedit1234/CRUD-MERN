import React from 'react'

const UpdateUser = () => {
  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className='w-50 bg-dark rounded p-3'>
         <form>
            <h2 className='text-light'>Update User</h2>
            <div class="mb-2">
               <label for="" class="form-label">Name</label>
               <input type="text" className="form-control" placeholder="Enter Name"/>
            </div>
            <div class="mb-2">
               <label for="" class="form-label">Email</label>
               <input type="text" className="form-control" placeholder="Enter Email"/>
            </div>
            <div class="mb-2">
               <label for="" class="form-label">Age</label>
               <input type="text" className="form-control" placeholder="Enter Age"/>
            </div>
            <button type="submit" className="btn btn-secondary mt-4">Submit</button>
         </form>
       </div>    
    
     </div>
  )
}

export default UpdateUser