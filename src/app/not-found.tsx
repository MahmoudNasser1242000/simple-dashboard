import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const notFound = () => {
    return <>
        <section className="bg-white dark:bg-gray-900 pt-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                        {`Something's missing.`}
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        {`Sorry, we can't find that page. You'll find lots to explore on the home page.`}
                    </p>
                    <div className="flex items-center justify-center my-16">
                        <Link href={"/"} className={cn(buttonVariants({ variant: "default" }), "flex items-center rounded-sm cursor-pointer px-10 py-5 text-white")}>
                            <span>Go Back Home</span>
                            <MoveRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default notFound;
