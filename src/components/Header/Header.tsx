"use client";
import Image from "next/image"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { UserButton, useUser } from "@clerk/nextjs"

const Header = () => {
    const user = useUser();
    return (
        <header className="fixed left-0 right-0 top-0 z-[1000] w-full px-4 py-4 flex justify-between items-center border-b dark:border-gray-700 bg-background/30 backdrop-blur-md backdrop-saturate-150 shadow-lg">
            <div className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                <Image
                    src={"/images/logo.svg"}
                    alt="logo"
                    width={37}
                    height={37}
                />
                <span className="font-mono">My Dashbord</span>
            </div>

            <div className="flex items-center gap-4">
                <ModeToggle />
                {user ? <UserButton afterSwitchSessionUrl="/" /> : (
                    <>
                        <Link href={`/sign-in`} className={cn(buttonVariants({ variant: "default", className: "px-5 py-2 rounded-sm text-white" }))}>
                            Sign In
                        </Link>
                        <Link href={`/sign-up`} className={cn(buttonVariants({ variant: "outline", className: "px-5 py-2 rounded-sm" }))}>
                            Sign Up
                        </Link>
                    </>
                )}
            </div>

        </header>
    )
}

export default Header
