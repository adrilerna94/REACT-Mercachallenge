
const API_URL = 'https://dummyjson.com/products';

/*

-- products
-- products/:id
-- products/search?q=phone
 
*/

async function getProducts() {
    try {
        const response = await fetch(API_URL, { next: { revalidate: 3600 }});
        if (!response.ok) {
            throw new Error("Error: Products couldn't be found");
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error fetching products");
        return null;
    }
}

async function getProductById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`Error: Product with ID ${id} could not be found`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching product with ID: ${id}`);
        return null;
    }
}

async function getProductByQuery(query, limit = 4) {
    try {
        const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}&limit=${limit}`);
        if (!response.ok) {
            throw new Error(`Error: Product with query ${query} could not be found`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error(`Error fetching product with QUERY: ${query}`);
        return null;
    }
}

export { getProductById, getProducts, getProductByQuery };

// 🔐 encodeURIComponent(query)
// -----------------------------------------------------------------------------
// ✅ ¿Qué hace?
// Codifica una cadena para que sea segura al incluirla en una URL.
// Escapa caracteres especiales como: espacio, &, ?, =, etc.

// 🔧 ¿Para qué se usa?
// Evita errores cuando pasás textos dinámicos como parámetros en URLs.