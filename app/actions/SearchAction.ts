import { get } from "~/lib/ServiceBase";
import type { ServerActionResponse } from "~/model/responses/ServerActionResponse";

export const getSearchResults = async (query: string): Promise<ServerActionResponse<any[] | null>> => {
    try {
        const response = await get<ServerActionResponse<any[] | null>>(`/search?searchQuery=${query}`);

        if (!response.success) {
            return { success: false, data: null, message: "Server Error" };
        }

        return response;
    } catch (error) {
        console.error("Error fetching search results: ", error);
        return { success: false, data: null, message: "Failed to fetch search results" };
    }
}