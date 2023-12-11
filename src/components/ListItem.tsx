import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export interface ListItemProps {
    name: String;
    images: [string];
}

const ListItem: React.FC<ListItemProps> = ({ name, images }) => {
    return (
        <Card isPressable className="py-4 w-[300px]">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={images[0]}
                    width={270}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{name}</h4>
            </CardHeader>
        </Card>
    );
};

export default ListItem;
