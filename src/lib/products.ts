import { IProduct } from '@/types';
import { client } from './../sanity/lib/client';

export const getAllProducts = async () => {
    const query = `*[_type == "products"]{
        _id,title,description,image,price,category,
        "imageUrl": image.asset->url,
    }[]`;

    const products = await client.fetch(query);
    return products as IProduct[];
}

export const getAllProductsWithfilteration = async (category: string, fromPrice: number, toPrice: number) => {
    const query = `*[_type == "products" ${category ? `&& category == "${category}"` : ''} && ${!toPrice ? `price >= ${fromPrice}` : `price >= ${fromPrice} && price <= ${toPrice}`} ]{
        _id,title,description,image,price,category,
        "imageUrl": image.asset->url,
    }[]`;

    const products = await client.fetch(query, { category, fromPrice, toPrice });
    return products as IProduct[];
}