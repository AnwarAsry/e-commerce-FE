import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getCategoryProducts } from "~/actions/ProductsAction";
import type { Category } from "~/model/Category";
import type { IProduct } from "~/model/Product";
import { Product } from "../Product/Product";

interface CategoryPageProps {
    category: Category;
}

export const CategoryPage = ({ category }: CategoryPageProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [searchParams] = useSearchParams();

    const sort = searchParams.get("sort") ?? "relevance";
    const inStock = searchParams.get("inStock") === "true";

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getCategoryProducts(category, sort, inStock);
            if (response.success && response.data) {
                setProducts(response.data);
            } else {
                console.error("Failed to fetch products: ", response.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {
                products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
            {
                products.length === 0 && (
                    <div className="col-span-full text-center text-gray-500">
                        No products found.
                    </div>
                )
            }
        </div>
    );
};