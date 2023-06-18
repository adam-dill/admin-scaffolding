import React, { useState } from 'react';
import './App.css';
import { 
    RegistryDetailsModule, 
    SearchModule, 
    SearchResultModule 
} from './modules';


function App() {
    const [searchParams, setSearchParams] = useState<any>();
    const [registryId, setRegistryId] = useState<string>();

    const handleSearch = (firstName: string, lastName: string, registryId: string) => {
        setSearchParams({firstName, lastName, registryId});
    };

    if (registryId) return (
        <RegistryDetailsModule grid={registryId} goBack={() => setRegistryId(undefined)} />
    );

    return (
        <div className="container">
            <SearchModule onSearch={handleSearch} />
            {searchParams && <SearchResultModule params={searchParams} setRegistryId={setRegistryId} />}
        </div>
    );
}

export default App;
