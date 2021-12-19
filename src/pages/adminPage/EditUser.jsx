import React, { useEffect, useState } from "react";

const EditUser = () => {
    const [users, setUsers] = useState({});

    return (
        <form>
            <h1>Edit User</h1>
            <div className="form-row">
                <div className="form-group col">
                    <label>Title</label>
                    <select name="title">
                        <option value=""></option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                    </select>
                </div>
                <div className="form-group col-5">
                    <label>First Name</label>
                    <input name="firstName" type="text" />
                </div>
                <div className="form-group col-5">
                    <label>Last Name</label>
                    <input
                        name="firstName"
                        type="text"
                        className="m-t-0 m-b-0"
                    />
                </div>
            </div>
        </form>
    );
};

export default EditUser;
