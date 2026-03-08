import { get } from "~/lib/ServiceBase";
import { type IProduct } from "~/model/Product";
import type { ServerActionResponse } from "~/model/responses/ServerActionResponse";

const serializeError = (error: unknown): string =>
    error instanceof Error ? error.message : String(error);

export const getCategoryProducts = async (category: string, sort: string, inStock: boolean): Promise<ServerActionResponse<IProduct[] | null>> => {
    try {
        const response = await get<ServerActionResponse<IProduct[]>>(`/products/${category}?sort=${sort}&inStock=${inStock}`);

        if (!response.success) {
            return { data: null, message: "Server Error", success: false }
        }

        return response;
    } catch (error) {
        return { data: null, message: serializeError(error), success: false };
    }
};

export const getProduct = async (id: string, category: string): Promise<ServerActionResponse<IProduct | null>> => {
    try {
        const response = await get<ServerActionResponse<IProduct>>(`/products/${category}/${id}`);

        if (!response.success) {
            return { data: null, message: "Server Error", success: false }
        }

        return response;
    } catch (error) {
        return { data: null, message: serializeError(error), success: false };
    }
}

export const getFeaturedProducts = async (): Promise<ServerActionResponse<IProduct[] | null>> => {
    try {
        const response = await get<ServerActionResponse<IProduct[]>>(`/products/featured`);

        if (!response.success) {
            return { data: null, message: "Server Error", success: false }
        }

        return response;
    } catch (error) {
        return { data: null, message: serializeError(error), success: false };
    }
}