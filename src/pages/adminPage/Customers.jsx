import React, { useEffect, useState } from "react";
import Table from "../../components/AdminLayout/table/Table";
import _ from "lodash";

const customerTableHead = ["", "name", "email", "phone", "location"];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
    <tr
        key={index}
        onClick={() => {
            window.location.assign("../editUser");
        }}
    >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
    </tr>
);

const getUsersData = async () => {
    const body = {
        paging: {
            limit: 1000,
            offset: 0,
        },
        sorting: [
            {
                direction: "DESC",
                field: "createdAt",
            },
        ],
        filter: {},
    };

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJkZmJkZjRlNDAwYTJkNjBlNDU1ZDciLCJhY2NvdW50VHlwZSI6ImFkbWluIiwiYWNjb3VudFN0YXR1cyI6ImFjdGl2ZSIsImxhbmd1YWdlQ29kZSI6ImVuX1VTIiwiZmlyc3ROYW1lIjoiQWRtaW4iLCJsYXN0TmFtZSI6IkFkbWluIiwiaWF0IjoxNjM5ODQxMTUwLCJleHAiOjE2Mzk4NDQ3NTB9.vqnmOxcZyDOx5kVD1t1Zn2qUHPirsHv5JfH9ewxdSAM",
    };

    const response = await fetch(
        "https://taskeeperv2.herokuapp.com/users/searchUsers",
        {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }
    );

    const users = await response.json();

    return users.data;
};

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getUsersData().then((data) => {
            const mappedData = _.map(data, (customer) => {
                let data = {};
                data.id = customer._id;
                data.name = customer.firstName + " " + customer.lastName;
                data.email = customer.email;
                data.phone =
                    customer.phoneNumber.ISD_CodeId +
                    " " +
                    customer.phoneNumber.phoneNumber;

                return data;
            });

            setCustomers(mappedData);
        });
    }, []);

    return (
        <div>
            <h2 className="page-header">customers</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item, index) =>
                                    renderHead(item, index)
                                }
                                bodyData={customers}
                                renderBody={(item, index) =>
                                    renderBody(item, index)
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
