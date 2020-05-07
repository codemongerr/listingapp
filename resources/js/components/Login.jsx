import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login(props) {
    return (
        <div className="login">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <Input type="email" id="email" />
                <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div>
                <Button onClick={console.log("test")}>{"Login"}</Button>
            </div>
        </div>
    );
}

export default Login;
