import ProductList from "@/components/ProductList";
import { getProductByQuery, getProducts } from "@/services/ProductService";

export default async function ProductListPage ({ searchParams }){
    const query = searchParams?.q;
    const limit = Number(searchParams.limit) || 4;

    let products;

    if (query) {
        products = await getProductByQuery(query, limit) ?? [];
    } else {
        products = await getProducts();
    }

    return (
        <>
            {products.length > 0 ? (
                <ProductList products={products} />
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </>
  );
}