import axios from "axios";
import { useEffect, useState } from "react";

export function useData(url: string) {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://dattebayo-api.onrender.com/${url}`
            );
            setData(response.data);
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading };
}
