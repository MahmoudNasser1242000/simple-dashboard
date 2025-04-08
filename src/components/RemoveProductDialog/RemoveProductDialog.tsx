"use client";
import React, { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { RootState, useAppDispatch } from "@/redux/store";
import { removeProductwithId } from "@/redux/reducers/products/productsReducer";
import { useSelector } from "react-redux";

const RemoveProductDialog = ({productId, setLength}: {productId: string, setLength: React.Dispatch<React.SetStateAction<number>>}) => {
    const {loading, length} = useSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();
    
    const handleDelete = async () => {
        await dispatch(removeProductwithId({productId}));
    }

    useEffect(() => {
        if (length) {
            setLength(length);
        }
    }, [length]);
    
    return <>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"ghost"} size={"icon"} className="rounded-sm p-0 cursor-pointer">
                    <Trash2 className="size-5 text-red-500" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-red-500">Delete Product</DialogTitle>
                    <DialogDescription>
                        Are you absolutely sure? This action cannot be undone. This will permanently delete the product.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div>
                        <Button type="submit" className="text-white rounded-sm cursor-pointer" onClick={() => handleDelete()} disabled={loading}>
                            {loading ? "Deleting..." : "Delete"}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>;
};

export default RemoveProductDialog;
