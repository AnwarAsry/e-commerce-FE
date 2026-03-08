import { get } from "~/lib/ServiceBase";
import type { IProduct } from "~/model/Product";
import type { ServerActionResponse } from "~/model/responses/ServerActionResponse";

export const getSearchResults = async (query: string): Promise<ServerActionResponse<IProduct[] | null>> => {
    try {
        const response = await get<ServerActionResponse<IProduct[] | null>>(`/search?searchQuery=${query}`);

        if (!response.success) {
            return { success: false, data: null, message: "Server Error" };
        }

        return response;
    } catch (error) {
        return { success: false, data: null, message: "Failed to fetch search results" };
    }
}