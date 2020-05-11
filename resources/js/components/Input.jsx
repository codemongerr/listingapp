import React from "react";
import PropTypes from "prop-types";

function Input(props) {
    const { ...rest } = props;
    return <input className="form-control" {...rest} />;
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(["email", "text", "number", "password", "tel"])
};

Input.defaultProps = {
    autoComplete: "off",
    readOnly: false,
    type: "text"
};

export default Input;
