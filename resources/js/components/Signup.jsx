import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Signup(props) {
    return (
        <div className="col-md-6">
            <div className="signup">
                <div className="form-group">
                    <label for="first-name">First Name</label>
                    <Input id="first-name" />
                </div>
                <div className="form-group">
                    <label for="last-name">Last Name</label>
                    <Input id="last-name" />
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <Input type="email" id="email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <Input type="password" id="password" />
                </div>
                <div className="form-group">
                    <Link to="/">Login here</Link>
                </div>
                <Button className="btn btn-primary">Create my account</Button>
            </div>
        </div>
    );
}

export default Signup;
