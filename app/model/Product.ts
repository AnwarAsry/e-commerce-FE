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

export const DUMMY_PRODUCTS: IProduct[] = [
    {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        description: "Premium sound with 30hr battery life.",
        price: 79.99,
        compareAtPrice: 129.99,
        sku: "ELEC-001",
        category: "ELECTRONICS",
        subCategory: "Audio",
        tags: ["sale", "featured"],
        stockQuantity: 14,
        inStock: true,
        thumbnailUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        imageUrls: [],
        averageRating: 4.5,
        reviewCount: 238,
        active: true,
        featured: true,
        createdAt: "2026-01-10T09:00:00",
        updatedAt: "2026-03-01T12:00:00",
    },
    {
        id: 2,
        name: "Classic Linen Overshirt",
        description: "Relaxed fit, 100% European linen.",
        price: 54.00,
        compareAtPrice: null,
        sku: "CLTH-042",
        category: "CLOTHING",
        subCategory: "Tops",
        tags: ["new-in"],
        stockQuantity: 31,
        inStock: true,
        thumbnailUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
        imageUrls: [],
        averageRating: 4.0,
        reviewCount: 57,
        active: true,
        featured: false,
        createdAt: "2026-02-14T10:00:00",
        updatedAt: "2026-02-14T10:00:00",
    },
    {
        id: 3,
        name: "Ceramic Pour-Over Coffee Set",
        description: "Hand-thrown ceramic dripper with matching carafe.",
        price: 42.50,
        compareAtPrice: null,
        sku: "HOME-017",
        category: "HOME",
        subCategory: "Kitchen",
        tags: ["featured"],
        stockQuantity: 0,
        inStock: false,
        thumbnailUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
        imageUrls: [],
        averageRating: 4.8,
        reviewCount: 412,
        active: true,
        featured: true,
        createdAt: "2025-11-20T08:00:00",
        updatedAt: "2026-01-05T14:00:00",
    },
    {
        id: 4,
        name: "The Pragmatic Programmer",
        description: "20th Anniversary Edition — a must-read for every developer.",
        price: 28.99,
        compareAtPrice: 49.99,
        sku: "BOOK-009",
        category: "BOOKS",
        subCategory: "Tech",
        tags: ["sale"],
        stockQuantity: 8,
        inStock: true,
        thumbnailUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
        imageUrls: [],
        averageRating: 5.0,
        reviewCount: 1024,
        active: true,
        featured: false,
        createdAt: "2025-09-01T08:00:00",
        updatedAt: "2026-02-20T09:00:00",
    },
];