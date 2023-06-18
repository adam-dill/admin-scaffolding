import React from "react";
import { useAsync } from '../hooks';
import { RegistryDto } from "../dtos";
import { getRegistryById } from '../services/ApiService';
import { ProductListItem } from "../components";

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

    return (
        <div className="container">
            <button className="button" onClick={() => goBack()}>Back to Search</button>
            <p>{data.firstName} {data.lastName}</p>
            <p>{data.eventType}</p>
            <button className="button bg-red">Deactivate</button>
            <hr />
            {data.items.map((item, index) => (
                <div key={index}>
                    <ProductListItem product={item} onClick={handleEditClick} />
                </div>
            ))}
        </div>
    );
}
