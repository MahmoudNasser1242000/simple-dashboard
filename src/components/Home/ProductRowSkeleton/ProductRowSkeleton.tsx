import { Skeleton } from "@/components/ui/skeleton";

export const ProductRowSkeleton = () => {
    return (
        <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
            <td className="px-3 py-2 whitespace-nowrap">
                <Skeleton className="w-6 h-4" />
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
                <Skeleton className="w-10 h-10 rounded-full" />
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
                <Skeleton className="w-24 h-4" />
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
                <Skeleton className="w-32 h-4" />
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
                <Skeleton className="w-16 h-4" />
            </td>
            <td className="px-3 py-2 whitespace-nowrap">
                <Skeleton className="w-20 h-4" />
            </td>
            <td className="px-3 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <Skeleton className="w-6 h-6 rounded" />
                </div>
            </td>
        </tr>
    );
};
