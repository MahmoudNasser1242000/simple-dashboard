"use client";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationDemo({ total, page, category }: { total: number, page: number, category: string }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={`/?page=${(page - 1 <= 0 ? 1 : page - 1)}${category && `&category=${category}`}`} />
                </PaginationItem>
                {
                    Array.from({ length: Math.ceil(total) }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink href={`/?page=${index + 1}${category && `&category=${category}`}`}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href={`/?page=${(page + 1 >= Math.ceil(total) ? Math.ceil(total) : page + 1)}${category && `&category=${category}`}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
