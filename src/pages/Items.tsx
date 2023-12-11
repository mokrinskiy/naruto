import { useState } from "react";
import { useData } from "../hooks/useData";
import ListItems from "../components/ListItems";

const Items = () => {
    const [urlParams, setUrlParams] = useState<string>("characters");
    const { data, loading } = useData("characters");

    return (
        <div className="m-auto flex justify-center max-w-[1300px]">
            {loading ? <>Loading...</> : <ListItems items={data[urlParams]} />}
        </div>
    );
};

export default Items;
