import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return <>
        <div className="flex items-center justify-center pt-42 pb-10">
            <SignIn />
        </div>
    </>
}