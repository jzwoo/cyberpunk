import {axiosProducts} from "./api";
import APIv1 from "./types";

export async function getAllProducts(options?: Record<string, any>): Promise<APIv1.APIv1Response<APIv1.Product[]>> {
    return axiosProducts.request({
        url: "/api/v1/products",
        method: "GET",
        headers: {"Content-Type": "application/json"},
        ...(options || {})
    });
}