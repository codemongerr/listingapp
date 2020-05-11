import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import FormGroup from "../components/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import Message from "../components/Message";

function Signup() {
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    let history = useHistory();
    const handleChange = e => {
        const userData = { ...data, ...{ [e.target.name]: e.target.value } };
        setData(userData);
    };
    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`http://127.0.0.1:8000/api/register`, data)
            .then(response => {
                const resData = response.data;
                if (resData.success) {
                    setSuccessMessage(
                        "Your account is created successfully. You can login using your credentials."
                    );
                    const interval = setTimeout(() => {
                        setSuccessMessage("");
                        clearInterval(interval);
                        history.push("/");
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
            <div className="user-edit">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">
                            <strong>Create new account</strong>
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
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                defaultValue={data && data.password}
                                onBlur={handleChange}
                            />
                            {(errors && errors.password && (
                                <Message variant="danger">
                                    <small>{errors.password[0]}</small>
                                    <br />
                                </Message>
                            )) || (
                                <Message>
                                    <small>Minimum 5 characters</small>
                                </Message>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Link to="/">
                                <u>Login</u>
                            </Link>
                        </FormGroup>
                        <Button onClick={handleSubmit}>Create account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
