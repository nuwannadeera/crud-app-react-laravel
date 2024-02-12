import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EditCustomer() {

  let { id } = useParams();
  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);
  const [customer, setCustomer] = useState({});

  const changeInput = async (e) => {
    e.persist();
    setCustomer({
      ...customer, [e.target.name]: e.target.value
    });
  }

  const goBack = () => {
    navigate(`/`);
  }

  const editStudent = async () => {
    setLoader(true);
    axios.get(`http://127.0.0.1:8000/getOneStudentData/${id}`).then(
      resp => {
        if (resp.status === 200) {
          setCustomer(resp.data);
          setLoader(false);
        } else {
          setLoader(false);
          alert(resp.data);
        }
      });
  }

  const updateCustomer = async (e) => {
    setLoader(true);
    e.preventDefault();
    const data = {
      name: customer.name,
      email: customer.email,
      contact: customer.contact
    }
    axios.patch(`http://127.0.0.1:8000/updateStudentData/${id}`, data).then(
      resp => {
        if (resp.status === 200) {
          setCustomer(resp.data);
          setLoader(false);
          editStudent();
          alert('updated successfully');
        } else {
          setLoader(false);
          alert('update error');
        }
      });
  }

  useEffect(() => {
    editStudent();
  }, [])

  return (
    <>
      {
        (Object.keys(customer).length === 0) ?
          (<div className='container'>
            No such a id found...!
          </div>) :
          (loader ? (
            <Loader />
          ) :
            (<div className="container">
              <form onSubmit={updateCustomer}>
                <div className="form-group">
                  <div className="mb-3 mt-3">
                    <label>Name :</label>
                    <input type="text" className="form-control" name="name" onChange={changeInput}
                      value={customer.name} placeholder="Enter Name" required="required" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label>E-mail :</label>
                    <input type="email" className="form-control" name="email" onChange={changeInput}
                      value={customer.email} placeholder="Enter Email" required="required" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label>Contact :</label>
                    <input type="text" className="form-control" name="contact" onChange={changeInput}
                      value={customer.contact} placeholder="Enter Contact" required="required" />
                  </div>
                </div>
                <button className="btn btn-success" type='submit'>Update</button>
                <button className="btn btn-primary" onClick={() => goBack}>Back</button>
              </form>
            </div>))
      }
    </>
  )
}

export default EditCustomer