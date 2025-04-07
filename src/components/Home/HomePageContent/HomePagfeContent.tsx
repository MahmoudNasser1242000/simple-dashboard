"use client";
import React, { useEffect, useState } from "react";
import ProductsTable from "../ProductsTable/ProductsTable";
import { IProduct } from "@/types";
import { getAllProducts } from "@/lib/products";
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDownWideNarrow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { getProductsWithFilteration } from "@/redux/reducers/products/productsReducer";

const HomePagfeContent = ({ category }: { category: string }) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [highPrice, setHighPrice] = useState<number>(0);
    const [fromPrice, setFromPrice] = useState<number>(0);
    const [toPrice, setToPrice] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");
    const router = useRouter();

    const { products } = useSelector((state: RootState) => state.products)
    const dispatch = useAppDispatch();

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
        dispatch(getProductsWithFilteration({category, fromPrice, toPrice, keyword, sortBy}));
    }, [category, fromPrice, toPrice, keyword, sortBy]);

    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        getTheHighestPrice();
    }, []);
    return <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
            <Select value={category ? category : "all"} onValueChange={(value: string) => { router.push(`/${value !== "all" ? `?category=${value}` : ""}`) }}>
                <SelectTrigger className="w-full sm:w-[50%] cursor-pointer py-6 rounded-sm px-4 bg-white dark:bg-gray-900 hover:dark:bg-gray-900 border border-gray-300 dark:border-gray-600 flex items-center justify-between gap-2 text-gray-900 dark:text-white">
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

        <div className="flex items-center justify-center pt-3 pb-8">
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

        <div className="flex items-center justify-between mt-8 mb-5">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant={"outline"} size={"icon"} className="rounded-sm focus:ring-none cursor-pointer p-5">
                        <ArrowDownWideNarrow className="size-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => { setSortBy("") }}>Default</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setSortBy("title asc") }}>Title</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setSortBy("price desc") }}>High Price</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setSortBy("price asc") }}>Low Price</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <ProductsTable products={products} />
    </div>;
};

export default HomePagfeContent;
