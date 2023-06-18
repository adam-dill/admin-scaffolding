import React, { useState, useEffect } from 'react';
import { ResponseErrorDto } from '../dtos';
import { ResponseType } from '../Types';

const controller = new AbortController();
const signal = controller.signal;

const useAsync = <T,>(fn: ResponseType<any>, ...args: any) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<ResponseErrorDto>();
    const [isLoading, setIsLoading] = useState(true);

    const abort = () => controller.abort();

    useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true);
                    const response = await fn(signal, ...args)
                        .then(result => result.json());
                    setData(response);
                } catch(err: any) {
                    console.log(err);
                    setError(err);
                } finally {
                    setIsLoading(false);
                }
            }
        )();
    }, [fn, ...args]);

    return { data, error, isLoading, abort };
};

export default useAsync;