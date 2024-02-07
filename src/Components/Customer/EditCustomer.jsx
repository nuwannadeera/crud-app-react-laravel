import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function EditCustomer() {
  return (
    <>
      <div class="container">
        <form>
          <div class="form-group">
            <div class="mb-3 mt-3">
              <label>Name :</label>
              <input type="text" class="form-control" name="name" placeholder="Enter Name"
                required="required" />
            </div>
            <div class="mb-3 mt-3">
              <label>Address :</label>
              <input type="text" class="form-control" name="address" placeholder="Enter Address"
                required="required" />
            </div>
            <div class="mb-3 mt-3">
              <label>E-mail :</label>
              <input type="email" class="form-control" name="email" placeholder="Enter Email"
                required="required" />
            </div>
            <div class="mb-3 mt-3">
              <label>Contact :</label>
              <input type="text" class="form-control" name="contact" placeholder="Enter Contact"
                required="required" />
            </div>
          </div>
          <br />
          <button class="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  )
}

export default EditCustomer