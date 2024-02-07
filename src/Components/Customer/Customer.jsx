import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Customer() {
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
                    <button class="btn btn-primary">Save</button>
                </form>
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Contact No</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button class="btn btn-danger">Delete</button>
                                <button class="btn btn-success mx-2">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Customer