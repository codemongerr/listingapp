import React from "react";

function Button(props) {
    return <button className="btn btn-primary btn-sm">{props.children}</button>;
}

export default Button;
