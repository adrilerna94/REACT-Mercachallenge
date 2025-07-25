import ProductDetail from "@/components/ProductDetail";
import { getProductById, getProducts } from "@/services/ProductService";

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((p) => ({ id: p.id.toString()}));
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await getProductById(id);

    return (
        <ProductDetail product={product}/>
    )
}