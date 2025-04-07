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
import PriceFilteration from "../PriceFilteration/PriceFilteration";
import { Input } from "@/components/ui/input";

const HomePagfeContent = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [highPrice, setHighPrice] = useState<number>(0);
    const [fromPrice, setFromPrice] = useState<number>(0);
    const [toPrice, setToPrice] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>("");
    const router = useRouter();

    const getProducts = async () => {
        const products = await getAllProductsWithfilteration(category, fromPrice, toPrice, keyword);
        setProducts(products);
    }

    const getAllCategories = async () => {
        const products = await getAllProducts();
        const categories = products.map((product: IProduct) => product.category);
        setCategories(Array.from(new Set(categories)));
    }

    const getTheHighestPrice = async () => {
        const products = await getAllProducts();
        const prices = products.map((product: IProduct) => product.price);
        setHighPrice(Math.max(...prices));
    }

    useEffect(() => {
        getProducts();
    }, [category, fromPrice, toPrice, keyword]);

    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        getTheHighestPrice();
    }, []);
    return <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
            <Select value={category ? category : "all"} onValueChange={(value: string) => { router.push(`/${value !== "all" ? `?category=${value}` : ""}`) }}>
                <SelectTrigger className="w-full sm:w-[50%] py-6 rounded-sm px-4 bg-white dark:bg-gray-900 hover:dark:bg-gray-900 border border-gray-300 dark:border-gray-600 flex items-center justify-between gap-2 text-gray-900 dark:text-white">
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

            <PriceFilteration highPrice={highPrice} fromPrice={fromPrice} toPrice={toPrice} setFromPrice={setFromPrice} setToPrice={setToPrice} />
        </div>

        <div className="flex items-center justify-center pt-3 pb-12">
            <label htmlFor="search" className="w-full sm:w-[50%]">
                <Input
                    placeholder="Search by title..."
                    type="search"
                    id="search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="mt-0.5 px-2 w-full py-[26px] rounded border-gray-300 dark:border-gray-600 shadow-sm sm:text-sm dark:bg-gray-900 dark:text-white"
                />
            </label>
        </div>
        <ProductsTable products={products} />
    </div>;
};

export default HomePagfeContent;
