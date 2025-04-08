import Image from "next/image"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
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

            <ModeToggle />
        </header>
    )
}

export default Header
