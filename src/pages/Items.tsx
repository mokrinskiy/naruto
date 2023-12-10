import { useState } from "react";
import { useData } from "../hooks/useData";

const Items = () => {
    const [urlParams, setUrlParams] = useState<string>("characters");
    const { data, loading } = useData("characters");
    return (
        <div>
            {loading ? (
                <>Loading...</>
            ) : (
                data[urlParams] &&
                data[urlParams].map((item: any) => <div key={item.id}>{item.name}</div>)
            )}
        </div>
    );
};

export default Items;
