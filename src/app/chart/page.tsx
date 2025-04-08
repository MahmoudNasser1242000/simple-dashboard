import ProductChart from "@/components/ProductChart/ProductChart";
import { buttonVariants } from "@/components/ui/button";
import { getAllProducts } from "@/lib/products";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Chart = async () => {
    const products = await getAllProducts();
    return <div>
        <ProductChart products={products} />

        <div className="flex items-center justify-center my-24">
            <Link href={"/"} className={cn(buttonVariants({ variant: "default" }), "flex items-center rounded-sm cursor-pointer px-10 py-5 text-white")}>
                <span>Go Back Home</span>
                <MoveRight />
            </Link>
        </div>
    </div>;
};

export default Chart;
