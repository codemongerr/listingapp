import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import FormGroup from "../components/FormGroup";
import Input from "../components/Input";
import Label from "../components/Label";
import Message from "../components/Message";
import { setLocalStorageItem } from "../helper";

function Login(props) {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState(null);
    const { handleUserData } = props;
    const handleChange = e => {
        const newData = { ...data, [e.target.name]: e.target.value };
        setData(newData);
    };
    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("http://127.0.0.1:8000/api/login", data)
            .then(response => {
                const resData = response.data;
                if (resData.success) {
                    handleUserData(resData.success);
                    setLocalStorageItem("user", resData.success);
                }
            })
            .catch(error => {
                const errorData = error.response.data;
                setErrors(errorData.errors);
            });
    };
    return (
        <div className="col-md-6">
            <div className="login">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">
                            <strong>Login</strong>
                        </h2>
                        <hr />
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                defaultValue={data.email}
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
                                defaultValue={data.password}
                                onBlur={handleChange}
                            />
                            {errors && errors.password && (
                                <Message variant="danger">
                                    <small>{errors.password[0]}</small>
                                </Message>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Link to="/signup">
                                <u>Don't have an account? Signup here</u>
                            </Link>
                        </FormGroup>
                        <Button onClick={handleSubmit}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
