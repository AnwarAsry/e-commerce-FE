import { DUMMY_PRODUCTS, type IProduct } from "~/model/Product";
import type { ServerActionResponse } from "~/model/responses/ServerActionResponse";

export const getCategoryProducts = async (category: string, sort: string, inStock: boolean): Promise<ServerActionResponse<IProduct[] | null>> => {
    return { data: null, message: "Not implemented", success: false };
};

export const getProduct = async (id: string): Promise<ServerActionResponse<IProduct | null>> => {
    return { data: null, message: "Not implemented", success: true };
}

export const getFeaturedProducts = async (): Promise<ServerActionResponse<IProduct[] | null>> => {
    return { data: null, message: "Not implemented", success: true };
}