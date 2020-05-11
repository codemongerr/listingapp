import React from "react";
import PropTypes from "prop-types";

function Message(props) {
    const { children, variant, ...rest } = props;
    return (
        <span className={`text-${variant}`} {...rest}>
            {children}
        </span>
    );
}

Message.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["default", "success", "danger", "info"])
};

Message.defaultProps = {
    variant: "default"
};

export default Message;
