import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import FormGroup from "../components/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import Message from "../components/Message";

function UserEdit(props) {
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const { id } = useParams();
    const { token, isAdmin } = props;
    useEffect(() => {
        const getUserData = id => {
            if (id && isAdmin) {
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                axios
                    .get(`http://127.0.0.1:8000/api/user/${id}`, config)
                    .then(response => {
                        setData(response.data);
                    });
            }
            return false;
        };
        getUserData(id);
    }, []);

    const handleChange = e => {
        const userData = { ...data, ...{ [e.target.name]: e.target.value } };
        setData(userData);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios
            .put(`http://127.0.0.1:8000/api/user/${id}`, data, config)
            .then(response => {
                const resData = response.data;
                if (resData.success === true) {
                    setSuccessMessage("Details are updated successfully");
                    const interval = setTimeout(() => {
                        setSuccessMessage("");
                        clearInterval(interval);
                    }, 5000);
                }
                setErrors(null);
            })
            .catch(error => {
                const errorData = error.response.data;
                setErrors(errorData.errors);
            });
    };

    return (
        <div className="col-md-6">
            {isAdmin ? (
                <div className="user-edit">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">
                                <strong>Edit user details</strong>
                            </h2>
                            <hr />
                            {successMessage && (
                                <FormGroup>
                                    <Message variant="success">
                                        {successMessage}
                                    </Message>
                                </FormGroup>
                            )}
                            <FormGroup>
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    id="first_name"
                                    name="first_name"
                                    defaultValue={data && data.first_name}
                                    onBlur={handleChange}
                                />
                                {errors && errors.first_name && (
                                    <Message variant="danger">
                                        <small>{errors.first_name[0]}</small>
                                    </Message>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    id="last_name"
                                    name="last_name"
                                    defaultValue={data && data.last_name}
                                    onBlur={handleChange}
                                />
                                {errors && errors.last_name && (
                                    <Message variant="danger">
                                        <small>{errors.last_name[0]}</small>
                                    </Message>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue={data && data.email}
                                    onBlur={handleChange}
                                />
                                {errors && errors.email && (
                                    <Message variant="danger">
                                        <small>{errors.email[0]}</small>
                                    </Message>
                                )}
                            </FormGroup>
                            <Button onClick={handleSubmit}>Save Changes</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/users">&lt; Go back</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>Sorry, you don't have access to view this page.</h3>
                    <div>
                        <Link to="/">&lt; Go back</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserEdit;
