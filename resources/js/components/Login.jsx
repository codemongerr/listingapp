import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Login(props) {
    return (
        <div className="col-md-6">
            <div className="login">
                <div className="form-group">
                    <label for="email">Email address</label>
                    <Input type="email" id="email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <Input type="password" id="password" />
                </div>
                <div className="form-group">
                    <Link to="/signup">Don't have an account? Signup here</Link>
                </div>
                <Button className="btn btn-primary">Login</Button>
            </div>
        </div>
    );
}

export default Login;
