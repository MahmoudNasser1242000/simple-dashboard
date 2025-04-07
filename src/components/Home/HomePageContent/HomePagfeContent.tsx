"use client";
import React, { useEffect, useState } from "react";
import ProductsTable from "../ProductsTable/ProductsTable";
import { IProduct } from "@/types";
import { getAllProducts } from "@/lib/products";

const HomePagfeContent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    
    const getProducts = async () => {
        const products = await getAllProducts();
        setProducts(products);
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    return <div className="container mx-auto px-4 py-8">
        <ProductsTable products={products} />
    </div>;
};

export default HomePagfeContent;
