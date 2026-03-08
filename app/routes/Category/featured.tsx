import { useLoaderData } from "react-router";
import { getFeaturedProducts } from "~/actions/ProductsAction";
import { Product } from "~/components/Product/Product";
import type { IProduct } from "~/model/Product";

interface FeaturedRouteLoader {
    featured: IProduct[]
}

export async function loader(): Promise<FeaturedRouteLoader> {
    const response = await getFeaturedProducts();
    return {
        featured: response.success && response.data ? response.data : [],
    };
}

export default function FeaturedRoute() {
    const { featured } = useLoaderData<FeaturedRouteLoader>();

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {
                featured.map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
            {
                featured.length === 0 && (
                    <div className="col-span-full text-center text-gray-500">
                        No products found.
                    </div>
                )
            }
        </div>
    );
}