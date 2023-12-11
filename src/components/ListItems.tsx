import React from "react";
import ListItem from "./ListItem";

interface ListItemsProps {
    items: [any[]];
}

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {items &&
                items.map((item: any) => (
                    <ListItem
                        key={item.id}
                        name={item.name}
                        images={item.images}
                    />
                ))}
        </div>
    );
};

export default ListItems;
