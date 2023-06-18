import React from 'react'
import { useAsync } from '../hooks';
import { SearchResultDto } from '../dtos';
import { searchRegistries } from '../services/ApiService';
import { RegistryListItem } from '../components';

interface ISearchParams {
    firstName:string;
    lastName:string;
    registryId:string;
}

interface IProps {
    params: ISearchParams;
    setRegistryId: (id: string) => void;
}

export default function SearchResultModule({ params, setRegistryId }: IProps) {
    const { data, isLoading, error } = useAsync<SearchResultDto[]>(searchRegistries, params.firstName, params.lastName, params.registryId);

    if (isLoading) return <p>Loading...</p>;
    if (error || !data) return <p>Error {error?.message}</p>;

    return (
        <div>
            {data.map((registry, index) => {
                    return (
                        <div key={registry.grid}>
                            <RegistryListItem registry={registry} onClick={setRegistryId} />
                        </div>
                    )
                })}
        </div>
    );
}
