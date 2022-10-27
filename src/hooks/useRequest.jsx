import { useEffect } from "react";
import { useState } from "react";

export default function useRequest(request) {
    const [data, setData] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true)
        request()
            .then(responce => setData(responce.data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [])

    return [
        data,
        loading,
        error
    ]
}