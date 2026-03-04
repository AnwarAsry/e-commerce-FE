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