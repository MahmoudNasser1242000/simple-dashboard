import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return <>
        <footer className="border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src={"/images/logo.svg"}
                            alt="logo"
                            width={37}
                            height={37}
                        />
                        <span className="font-mono text-2xl">My Dashbord</span>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
                        Copyright &copy; 2025, Created By <Link className="text-gray-800 dark:text-gray-200" href={"https://github.com/MahmoudNasser1242000"}>Mahmoud Nasser</Link>.
                    </p>
                </div>
            </div>
        </footer>
    </>;
};

export default Footer;
