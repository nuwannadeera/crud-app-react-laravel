import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Customer({ customers }) {
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
                    <button className="btn btn-primary">Save</button>
                </form>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Contact No</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.contact}</td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                        <button className="btn btn-success mx-2">Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Customer