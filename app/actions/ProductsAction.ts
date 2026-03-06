import type { IProduct } from "~/model/Product";
import type { ServerActionResponse } from "~/model/responses/ServerActionResponse";

export const getCategoryProducts = async (category: string, sort: string, inStock: boolean): Promise<ServerActionResponse<IProduct[] | null>> => {
    return { data: null, message: "Not implemented", success: false };
};