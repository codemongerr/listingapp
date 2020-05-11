import React from "react";
import { Link, useHistory } from "react-router-dom";
import Message from "../components/Message";
import { setLocalStorageItem } from "../helper";

/**
 * Container component to create header and logout button
 *
 * @param {object} props
 */
function Header(props) {
    const { username, handleUserData } = props;
    const history = useHistory();
    // @TODO: Move logout component to dedicated file
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
