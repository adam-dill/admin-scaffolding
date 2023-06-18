
const searchRegistries = async(signal: AbortSignal, firstName: string, lastName: string, grid: string):Promise<Response> => {
    const url = `/api/search?firstname=${firstName}&lastname=${lastName}&grid=${grid}`;
    return await fetch(url, { signal });
}

const getRegistryById = async(signal: AbortSignal, grid: string):Promise<Response> => {
    const url = `/api/getRegistry?grid=${grid}`;
    return await fetch(url, { signal });
}

const updateWantsHas = async(signal: AbortSignal, grid: number, productId: number, wants: number, has:number):Promise<Response> => {
    const url = `/api/updateWantsHas`;
    const options = {
        method: 'POST',
        body: JSON.stringify({ grid, productId, wants, has }),
        signal
    };
    return await fetch(url, options)
};

export {
    searchRegistries,
    getRegistryById,
    updateWantsHas,
}