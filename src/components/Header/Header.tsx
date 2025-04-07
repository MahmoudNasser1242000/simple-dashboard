import Image from "next/image"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
    return (
        <header className="w-full px-4 py-4 flex justify-between items-center border-b shadow-sm dark:border-gray-700">
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
