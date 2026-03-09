import { useState } from "react";
import { isRouteErrorResponse, Link, useLoaderData, useParams, useRouteError } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { BsCart4 } from "react-icons/bs";

import { getProduct } from "~/actions/ProductsAction";
import type { IProduct } from "~/model/Product";
import { calcDiscount } from "~/lib/ProductMethods";

import { Stars } from "~/components/Product/Stars";
import { WishButton } from "~/components/Buttons/WishButton";
import { PrimaryButton } from "~/components/Buttons/PrimaryButton";
import { QuantitySelector } from "~/components/Buttons/QuantitySelector";
import { Badge } from "~/components/Product/Badge";
import { ImgBox } from "~/components/Buttons/ImgBox";

export async function loader({ params }: LoaderFunctionArgs): Promise<IProduct> {
    const { id, category } = params;

    const response = await getProduct(id!, category!);

    if (!response.success || !response.data) {
        throw new Response("Product not found", { status: 404 });
    }

    return response.data;
}

export function ErrorBoundary() {
    const error = useRouteError();
    const is404 = isRouteErrorResponse(error) && error.status === 404;

    return (
        <div className="w-full max-w-[1170px] mx-auto px-6 py-24 flex flex-col items-center text-center gap-5">

            <span className="text-8xl font-black text-gray-400 leading-none select-none">
                {is404 ? "404" : "500"}
            </span>

            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-gray-950">
                    {is404 ? "Product not found" : "Something went wrong"}
                </h1>
                <p className="max-w-xs text-sm text-gray-400 leading-relaxed">
                    {is404
                        ? "This product may have been removed or the link is incorrect."
                        : "We couldn't load this product. Please try again in a moment."
                    }
                </p>
            </div>

            <div className="mt-2 flex items-center gap-3">
                {!is404 && (
                    <button
                        onClick={() => window.location.reload()}
                        className="px-5 py-2.5 border rounded-xl border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Try again
                    </button>
                )}
                <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gray-950 hover:bg-gray-700 transition-colors"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}

export default function ProductDetail() {
    const product = useLoaderData<IProduct>();
    const { category } = useParams();

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [wished, setWished] = useState(false);
    const [added, setAdded] = useState(false);

    const allImages = [
        ...(product.thumbnailUrl ? [product.thumbnailUrl] : []),
        ...product.imageUrls,
    ];

    const discount = product.compareAtPrice ? calcDiscount(product.compareAtPrice, product.price) : null;

    const categoryLabel = category
        ?.replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div className="w-full max-w-[1170px] mx-auto px-6 py-8">
            <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex gap-3">
                    {allImages.length > 1 && (
                        <div className="w-16 flex flex-col gap-2 shrink-0">
                            {
                                allImages.map((url, i) => (
                                    <ImgBox key={i} imgUrl={url} selectedImage={selectedImage === i} onClick={() => setSelectedImage(i)} />
                                ))
                            }
                        </div>
                    )}
                    <div className="flex-1 rounded-2xl overflow-hidden bg-stone-50 aspect-square">
                        <img
                            src={allImages[selectedImage] ?? product.thumbnailUrl ?? ""}
                            alt={product.name}
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col">

                    <div className="mb-3 flex items-center gap-2">
                        <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            {categoryLabel}
                        </span>
                        {
                            discount && <Badge type={"discount"} content={discount.toString()} />
                        }
                        {
                            !product.inStock && <Badge type="sold-out" />
                        }
                        {
                            product.tags.includes("new-in") && <Badge type="new" />
                        }
                    </div>

                    <h1 className="mb-3 text-2xl font-bold text-gray-950 leading-snug">
                        {product.name}
                    </h1>

                    <div className="mb-5 flex items-center gap-2">
                        <Stars rating={product.averageRating} />
                        <span className="text-sm text-gray-400">
                            {product.averageRating} ({product.reviewCount} reviews)
                        </span>
                    </div>

                    <div className="mb-6 flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-gray-950">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.compareAtPrice && (
                            <span className="text-lg text-gray-400 line-through">
                                ${product.compareAtPrice.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <p className="mb-8 pt-6 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                        <QuantitySelector quantity={quantity}
                            onIncrement={() => setQuantity((q) => Math.min(product.stockQuantity, q + 1))}
                            onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                        />

                        <PrimaryButton
                            text={added ? "Added to cart!" : product.inStock ? "Add to Cart" : "Out of Stock"}
                            disabled={!product.inStock}
                            icon={<BsCart4 className="size-4" />}
                            onClick={() => { }}
                            className={`${added ? "bg-green-500! text-white" : ""} h-11 flex-1 gap-2!`}
                        />

                        <WishButton
                            onToggle={() => setWished((w) => !w)}
                            wished={wished}
                        />
                    </div>

                    {product.inStock && product.stockQuantity <= 10 && (
                        <p className="mt-3 text-xs text-amber-600 font-medium">
                            Only {product.stockQuantity} left in stock
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};