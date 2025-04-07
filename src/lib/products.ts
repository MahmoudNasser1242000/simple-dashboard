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