import type { Category } from "./Category";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    compareAtPrice: number | null;
    sku: string;
    category: Category;
    subCategory: string | null;
    tags: string[];
    stockQuantity: number;
    inStock: boolean;
    thumbnailUrl: string | null;
    imageUrls: string[];
    averageRating: number;
    reviewCount: number;
    active: boolean;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
}

export const defaultProduct: IProduct = {
    id: 1,
    name: "Macbook Neo",
    description: "The latest Macbook Neo with M2 chip and stunning design.",
    price: 599,
    compareAtPrice: null,
    sku: "MBN-2026",
    category: "ELECTRONICS",
    subCategory: "Laptops",
    tags: ["laptop", "macbook", "electronics"],
    stockQuantity: 100,
    inStock: true,
    thumbnailUrl: "@public/images/placeholder.jpg",
    imageUrls: ["@public/images/placeholder.jpg"],
    averageRating: 4.5,
    reviewCount: 120,
    active: true,
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};