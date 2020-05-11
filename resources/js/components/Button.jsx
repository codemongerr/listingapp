import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const {
        children,
        ...rest
    } = props;
    return <button className="btn btn-primary" {...rest}>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    type: 'button'
}

export default Button;
