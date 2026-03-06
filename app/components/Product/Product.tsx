import { useState } from "react";

import type { IProduct } from "~/model/Product";
import { Stars } from "./Stars";

import imageplaceholder from "@public/placeholder.jpg";
import { BsHeart, BsHeartFill, BsCart4 } from "react-icons/bs";
import { Badge } from "./Badge";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { calcDiscount } from "~/lib/ProductMethods";
import { Link } from "react-router";
import { WishButton } from "../Buttons/WishButton";

interface ProductProps {
    product: IProduct
}

export const Product = ({ product }: ProductProps) => {
    const [wished, setWished] = useState(false);
    const [added, setAdded] = useState(false);

    const discount = product.compareAtPrice ? calcDiscount(product.compareAtPrice, product.price) : null;

    const handleAddToCart = () => {
        if (!product.inStock) return;
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <Link to={`/product/${product.category}/${product.id}`} className="productCard group">
            <div className="relative overflow-hidden">
                <img
                    src={product.thumbnailUrl || imageplaceholder}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="flex flex-col gap-1.5 absolute top-3 left-3">
                    {
                        discount && <Badge type="discount" content={discount.toString()} />
                    }
                    {
                        product.tags.includes("new-in") && <Badge type="new" />
                    }
                    {
                        !product.inStock && <Badge type="sold-out" />
                    }
                </div>

                <WishButton
                    className={"size-9! absolute top-3 right-3"}
                    onToggle={() => setWished((w) => !w)}
                    wished={wished}
                />
            </div>
            <div className="p-4 flex flex-col flex-1 gap-3">
                <span className="text-[0.65rem] uppercase tracking-widest font-medium text-gray-400">
                    {product.subCategory ?? product.category.replace("_", " ")}
                </span>

                <p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                    {product.name}
                </p>

                <div className="flex items-center gap-2">
                    <Stars rating={product.averageRating} />
                    <span className="text-[0.7rem] text-gray-400">({product.reviewCount})</span>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-gray-950">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.compareAtPrice && (
                            <span className="text-xs text-gray-400 line-through">
                                ${product.compareAtPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};