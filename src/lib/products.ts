import { IProduct } from "@/types";
import { client } from "./../sanity/lib/client";

export const getAllProducts = async (
    category: string = "",
    fromPrice: number = 0,
    toPrice: number = 0,
    keyword: string = "",
) => {
    const query = `*[_type == "products"
            ${category ? `&& category == "${category}"` : ""} && 
            ${!toPrice ? `price >= ${fromPrice}` : `price >= ${fromPrice} && price <= ${toPrice}`} 
            ${keyword ? `&& title match "*${keyword}*"` : ""}]{
        _id,title,description,image,price,category,
        "imageUrl": image.asset->url,
    }[]`;

    const products = await client.fetch(query, {category, fromPrice, toPrice, keyword});
    return products as IProduct[];
};

export const getAllProductsWithfilteration = async (
    category: string,
    fromPrice: number,
    toPrice: number,
    keyword: string,
    sortBy: string,
    page: number = 1,
    limit: number = 5
) => {
    if (keyword) page = 1;
    const start = (page - 1) * limit;
    const end = start + limit;

    const query = `*[_type == "products" 
            ${category ? `&& category == "${category}"` : ""} && 
            ${!toPrice ? `price >= ${fromPrice}` : `price >= ${fromPrice} && price <= ${toPrice}`} 
            ${keyword ? `&& title match "*${keyword}*"` : ""}] | order(${sortBy ? sortBy : "createdAt desc"}) [${start}...${end}]{
        _id,title,description,image,price,category,
        "imageUrl": image.asset->url,
    }[]`;

    const products = await client.fetch(query, {
        category,
        fromPrice,
        toPrice,
        keyword,
        sortBy,
        page,
        limit,
    });
    return products as IProduct[];
};

export const removeProduct = async (productId: string) => {
    await client.delete(productId);
};