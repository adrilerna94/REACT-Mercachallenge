import { Card, CardBody, Typography } from "@/styles/ui";
import Image from 'next/image';

export default function ProductDetail({ product }) {
    return (
        <Card>
            <CardBody>
                <Image
                    src={product.images[0]}
                    width={500}
                    height={500}
                    alt={product.title}
                />
                <article className="flex flex-col">
                    <Typography variant= "h3"> {product.title}</Typography>
                    <Typography variant= "h3" className ="font-bold"> {product.price}</Typography>
                    <Typography variant= "paragraph"> {product.description}</Typography>
                </article>
            </CardBody>
        </Card>
    )
}