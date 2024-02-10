import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

function Customer() {

    const [customers, setCustomers] = useState([]);
    const [loader, setLoader] = useState(true);

    const getAllCustomers = async () => {
        const response = await fetch('http://127.0.0.1:8000/students');
        const data = await response.json();
        setCustomers(data);
        setLoader(false);
    }

    const saveStudentData = async (e) => {
        e.preventDefault();
    }

    const editCustomer = async (id) => {
        alert(id);
    }

    const deleteCustomer = async (id) => {
        alert(id);
    }

    useEffect(() => {
        getAllCustomers();
    }, [])

    return (
        <>
            {
                loader ? (
                    <Loader />
                ) :
                    (<div className="container">
                        <form onSubmit={saveStudentData}>
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
                                                <button className="btn btn-success mx-2" onClick={() => editCustomer(customer.id)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>)
            }
        </>
    )
}

export default Customer