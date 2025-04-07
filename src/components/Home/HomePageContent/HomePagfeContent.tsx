"use client";
import React, { useEffect, useState } from "react";
import ProductsTable from "../ProductsTable/ProductsTable";
import { IProduct } from "@/types";
import { getAllProducts, getAllProductsWithfilteration } from "@/lib/products";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation";

const HomePagfeContent = ({category}: {category: string}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();

    const getProducts = async () => {
        const products = await getAllProductsWithfilteration(category);
        setProducts(products);
    }

    const getAllCategories = async () => {
        const products = await getAllProducts();
        const categories = products.map((product: IProduct) => product.category);        
        setCategories(Array.from(new Set(categories)));
    }

    useEffect(() => {
        getProducts();
    }, [category]);

    useEffect(() => {
        getAllCategories();;
    }, []);
    return <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
            <Select value={category ? category : "all"} onValueChange={(value: string) => { router.push(`/${value !== "all"? `?category=${value}` : ""}`) }}>
                <SelectTrigger className="w-[50%] py-6 rounded-sm">
                    <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {
                        categories.map((category: string) => (
                            <SelectItem value={category} key={category}>{category}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>

        <ProductsTable products={products} />
    </div>;
};

export default HomePagfeContent;
