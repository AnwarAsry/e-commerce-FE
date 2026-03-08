import { get } from "~/lib/ServiceBase";
import { type IProduct } from "~/model/Product";
import type { ServerActionResponse } from "~/model/responses/ServerActionResponse";

export const getCategoryProducts = async (category: string, sort: string, inStock: boolean): Promise<ServerActionResponse<IProduct[] | null>> => {
    try {
        const response = await get<ServerActionResponse<IProduct[]>>(`/${category}?sort=${sort}&inStock=${sort}`);

        if (!response.success) {
            return { data: null, message: "Server Error", success: false }
        }

        return response;
    } catch (error) {
        return { data: null, message: JSON.stringify(error), success: false };
    }
};

export const getProduct = async (id: string, category: string): Promise<ServerActionResponse<IProduct | null>> => {
    try {
        const response = await get<ServerActionResponse<IProduct>>(`/product/${category}/${id}`);

        if (!response.success) {
            return { data: null, message: "Server Error", success: false }
        }

        return response;
    } catch (error) {
        return { data: null, message: JSON.stringify(error), success: false };
    }
}

export const getFeaturedProducts = async (): Promise<ServerActionResponse<IProduct[] | null>> => {
    return { data: null, message: "Not implemented", success: true };
}