import RemoveProductDialog from "@/components/RemoveProductDialog/RemoveProductDialog";
import { urlFor } from "@/sanity/lib/image";
import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";
import { ProductRowSkeleton } from "../ProductRowSkeleton/ProductRowSkeleton";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const ProductsTable = ({
    products,
    loading,
    error,
    setLength,
}: {
    products: IProduct[];
    loading: boolean;
    error: string | null;
    setLength: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <>
            <div className="overflow-x-auto rounded border border-gray-300 shadow-sm dark:border-gray-600 dark:shadow-sm-dark">
                <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900 dark:*:text-white uppercase">
                            <th className="px-3 py-2 whitespace-nowrap">#id</th>
                            <th className="px-3 py-2 whitespace-nowrap">Cover</th>
                            <th className="px-3 py-2 whitespace-nowrap">title</th>
                            <th className="px-3 py-2 whitespace-nowrap">description</th>
                            <th className="px-3 py-2 whitespace-nowrap">price</th>
                            <th className="px-3 py-2 whitespace-nowrap">category</th>
                            <th className="px-3 py-2 whitespace-nowrap">actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 *:even:bg-gray-50 dark:divide-gray-700 dark:*:even:bg-gray-800">
                        {
                            error ? (
                                <tr className="text-center text-red-500 font-bold text-lg">
                                    <td colSpan={7} className="p-4"> {error} </td>
                                </tr>
                            ) : (
                                loading ? (
                                    Array.from({ length: 5 }, (_, index) => <ProductRowSkeleton key={index} />)
                                ) : (
                                    products.map((product, index) => (
                                        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white" key={product._id}>
                                            <td className="px-3 py-2 whitespace-nowrap">{index + 1}</td>
                                            <td className="px-3 py-2 whitespace-nowrap">
                                                <Image
                                                    src={urlFor(product.image).url()}
                                                    alt={product.title}
                                                    width={50}
                                                    height={50}
                                                    className="rounded-full object-cover w-10 h-10"
                                                />
                                            </td>
                                            <td className="px-3 py-2 whitespace-nowrap">{product.title}</td>
                                            <td className="px-3 py-2 whitespace-nowrap">
                                                {
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                {product.description.split(" ").slice(0, 5).join(" ")}...
                                                            </TooltipTrigger>
                                                            <TooltipContent className="w-[20%] sm:w-[45%] text-center">
                                                                <p className="text-white w-full">{product.description}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                }
                                            </td>
                                            <td className="px-3 py-2 whitespace-nowrap">${product.price}</td>
                                            <td className="px-3 py-2 whitespace-nowrap">${product.category}</td>
                                            <td className="px-3 py-3 whitespace-nowrap flex items-center gap-2">
                                                <RemoveProductDialog productId={product._id} setLength={setLength} />
                                            </td>
                                        </tr>
                                    ))
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductsTable;
