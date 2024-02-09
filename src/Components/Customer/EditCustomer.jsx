import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function EditCustomer() {
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <div className="mb-3 mt-3">
              <label>Name :</label>
              <input type="text" className="form-control" name="name" placeholder="Enter Name"
                required="required" />
            </div>
            <div className="mb-3 mt-3">
              <label>Address :</label>
              <input type="text" className="form-control" name="address" placeholder="Enter Address"
                required="required" />
            </div>
            <div className="mb-3 mt-3">
              <label>E-mail :</label>
              <input type="email" className="form-control" name="email" placeholder="Enter Email"
                required="required" />
            </div>
            <div className="mb-3 mt-3">
              <label>Contact :</label>
              <input type="text" className="form-control" name="contact" placeholder="Enter Contact"
                required="required" />
            </div>
          </div>
          <br />
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  )
}

export default EditCustomer