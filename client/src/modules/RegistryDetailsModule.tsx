import React from "react";
import { useAsync } from '../hooks';
import { RegistryDto } from "../dtos";
import { getRegistryById } from '../services/ApiService';
import { ProductListItem } from "../components";
import { RegistryStatus } from "../enums";

interface IProps {
    grid: String;
    goBack: Function;
}

export default function RegistryDetailsModule({grid, goBack}:IProps) {
    const { data, isLoading, error } = useAsync<RegistryDto>(getRegistryById, grid);

    if (isLoading) return <p>Loading...</p>;
    if (error || !data) return <p>Error {error?.message}</p>;

    const handleEditClick = () => {
        console.log(`editing ${data.id}`);
    };

    const statusButton = data.status.toLowerCase() === RegistryStatus.ACTIVE
        ? <button className="button bg-red">Deactivate</button>
        : <button className="button bg-green">Activate</button>;

    return (
        <div className="container">
            <button className="button" onClick={() => goBack()}>Back to Search</button>
            <p>{data.firstName} {data.lastName}</p>
            <p>{data.eventType}</p>
            {statusButton}
            <hr />
            {data.items.map((item, index) => (
                <div key={index}>
                    <ProductListItem product={item} onClick={handleEditClick} />
                </div>
            ))}
        </div>
    );
}
