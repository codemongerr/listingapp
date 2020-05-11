import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Tr, Th, Td, Thead, Tbody } from "../components/Table";

function UserList(props) {
    const [list, setList] = useState([]);
    const { token, isAdmin } = props;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        const getUsers = token => {
            axios
                .get("http://127.0.0.1:8000/api/users", config)
                .then(response => {
                    setList(response.data.data);
                });
        };
        getUsers(token);
    }, []);

    const deleteUser = (e, id) => {
        e.preventDefault();
        if (id && confirm("Are you sure you want to delete this user?")) {
            axios
                .delete(`http://127.0.0.1:8000/api/user/${id}`, config)
                .then(response => {
                    console.log(response.data);
                });
        }
        return false;
    };

    const tableHeadCols = [
        "#ID",
        "Name",
        "Email",
        "Last updated at",
        "Admin",
        " "
    ];

    return (
        <Table>
            <Thead>
                <Tr>
                    {tableHeadCols.map(colHeading => {
                        return <Th key={colHeading}>{colHeading}</Th>;
                    })}
                </Tr>
            </Thead>
            <Tbody>
                {list.map(row => {
                    return (
                        <Tr key={`row-${row.id}`}>
                            <Td>{row.id}</Td>
                            <Td>
                                {isAdmin ? (
                                    <Link to={`/user/${row.id}`}>
                                        {row.name}
                                    </Link>
                                ) : (
                                    row.name
                                )}
                            </Td>
                            <Td>{row.email}</Td>
                            <Td>{row.updated_at}</Td>
                            <Td>{row.is_admin ? "Yes" : "No"}</Td>
                            <Td>
                                {isAdmin ? (
                                    <a
                                        href="#"
                                        onClick={event =>
                                            deleteUser(event, row.id)
                                        }
                                    >
                                        Delete
                                    </a>
                                ) : (
                                    ""
                                )}
                            </Td>
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
}

export default UserList;
