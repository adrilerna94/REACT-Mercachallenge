import Link from "next/link";
import Image from "next/image";
import { Typography, Card } from "@/styles/ui";

export default function ProductList({ products }) {
    return (
        // necesitamos contenedor padre para usar map
        <section className="flex flex-col gap-6">
            {products.map((p) => (
                <Card key={p.id} className="flex gap-2 mx-auto text-blue-400">
                    <Link href={`/products/${p.id}`} className="flex gap-3">
                        <Image
                            src={p.images[0]}
                            width={500}
                            height={500}
                            alt={p.title}
                            priority
                        />
                        <div className="flex flex-col justify-center">
                            <Typography variant="h3" className="text-gray font-bold">
                                {p.title}
                            </Typography>
                            <Typography className="text-gray font-bold">
                                {p.price.toLocaleString('es-ES', {
                                    style: 'currency',
                                    currency: 'EUR'
                                })}
                            </Typography>
                        </div>
                    </Link>
                </Card>
            ))}
        </section>
    );
}
