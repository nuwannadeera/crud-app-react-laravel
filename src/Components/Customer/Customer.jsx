import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Customer() {

    const [customers, setCustomers] = useState([]);
    const [loader, setLoader] = useState(true);
    const [saveCustomer, setSaveCustomer] = useState({
        name: '',
        email: '',
        contact: ''
    });

    const navigate = useNavigate();

    const getAllCustomers = async () => {
        const response = await fetch('http://127.0.0.1:8000/students');
        const data = await response.json();
        setCustomers(data);
        setLoader(false);
    }

    const changeInput = async (e) => {
        e.persist();
        setSaveCustomer({
            ...saveCustomer, [e.target.name]: e.target.value
        });
    }

    const saveStudentData = async (e) => {
        setLoader(true);
        e.preventDefault();
        const data = {
            name: saveCustomer.name,
            email: saveCustomer.email,
            contact: saveCustomer.contact
        }
        axios.post(`http://127.0.0.1:8000/saveStudent`, data).then(
            resp => {
                if (resp.status === 200) {
                    getAllCustomers();
                    setLoader(false);
                    alert(resp.data);
                } else {
                    setLoader(false);
                    alert(resp.data);
                }
            });
    }

    const editCustomer = async (id) => {
        navigate(`/edit/${id}`);
    }

    const deleteCustomer = async (e, id) => {
        e.preventDefault();
        const clicked = e.currentTarget;
        clicked.innerText = "Deleting...";

        axios.delete(`http://127.0.0.1:8000/deleteStudent/${id}`).then(
            resp => {
                if (resp.status === 200) {
                    getAllCustomers();
                    setLoader(false);
                    alert('deleted succssfully');
                } else {
                    setLoader(false);
                    alert('update error');
                }
            });
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
                                    <input type="text" className="form-control" name="name" onChange={changeInput} placeholder="Enter Name"
                                        required="required" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label>E-mail :</label>
                                    <input type="email" className="form-control" name="email" onChange={changeInput} placeholder="Enter Email"
                                        required="required" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label>Contact :</label>
                                    <input type="text" className="form-control" name="contact" onChange={changeInput} placeholder="Enter Contact"
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
                                                <button className="btn btn-danger" onClick={(e) => deleteCustomer(e, customer.id)}>Delete</button>
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