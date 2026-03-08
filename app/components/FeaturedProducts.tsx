import { Link } from "react-router";
import type { IProduct } from "~/model/Product";
import { Product } from "./Product/Product";

interface FeaturedProductsProps {
    products: IProduct[];
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    if (products.length === 0) return null;

    return (
        <section className="w-full py-16 bg-stone-50">
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-950 tracking-tight">
                            Featured picks
                        </h2>
                        <p className="mt-1 text-sm text-gray-400">
                            Hand-picked products across all categories
                        </p>
                    </div>
                    <Link
                        to="/featured"
                        className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-950 transition-colors hidden sm:block"
                    >
                        View all →
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {
                        products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};