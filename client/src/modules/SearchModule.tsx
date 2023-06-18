import React, { useState } from "react";

interface IProps {
    onSearch: Function
}

export default function SearchModule({onSearch}: IProps) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [registryId, setRegistryId] = useState("");


    const handleSearchClick = () => {
        onSearch(firstName, lastName, registryId);
    };

    return (
        <div className="border-bottom">
            <div className="container">
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="container">
                <label>Registry ID:</label>
                <input type="text" value={registryId} onChange={e => setRegistryId(e.target.value)} />
            </div>
            <button className="button" onClick={handleSearchClick}>Search</button>
        </div>
    );
}
