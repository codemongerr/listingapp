import React from "react";
import PropTypes from "prop-types";

// Table head component
const Thead = props => <thead className="thead-dark">{props.children}</thead>;

// Table body component
const Tbody = props => <tbody>{props.children}</tbody>;

// Table row component
const Tr = props => <tr>{props.children}</tr>;

// Table head cell component
const Th = props => <th colSpan={props.colspan}>{props.children}</th>;

// Table cell component
const Td = props => <td colSpan={props.colspan}>{props.children}</td>;

// Table component
function Table(props) {
    const { children } = props;
    return <table className="table table-striped">{children}</table>;
}

Table.propTypes = {
    children: PropTypes.node.isRequired
};

export { Table, Tr, Th, Td, Thead, Tbody };
