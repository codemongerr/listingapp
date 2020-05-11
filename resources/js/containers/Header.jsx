import React from "react";
import { Link, useHistory } from "react-router-dom";
import Message from "../components/Message";
import { setLocalStorageItem } from "../helper";

function Header(props) {
    const { username, handleUserData } = props;
    const history = useHistory();
    const logout = e => {
        e.preventDefault();
        handleUserData(null);
        setLocalStorageItem("user", null);
        history.push("/");
    };
    return (
        <header className="header">
            <Message>Hi {username}</Message>
            <Link to="#" onClick={logout}>
                Logout
            </Link>
        </header>
    );
}

export default Header;
