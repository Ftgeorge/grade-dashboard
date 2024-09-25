"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import AuthFooter from "@/app/components/constants/authFooter";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface NewPasswordProps {
    // Add any props types here
}

const NewPassword: React.FC<NewPasswordProps> = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [password, setPassword] = useState<string>("");
    const [reEnterPassword, setReEnterPassword] = useState<string>("");


    const handleSubmit = () => {
        router.push('/auth/sign-in')
    }

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    <div className="gap-1 flex-col flex">
                        <h1 className="text-black font-custom font-semibold text-center text-xl">Create a new password</h1>
                        <h1 className="text-black font-custom font-normal text-center text-xs">Please enter a new password to continue.</h1>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="re-enter password" value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton children="Submit" className="bg-[#1F3A93] h-10 w-full" onClick={handleSubmit} />
                    </div>
                    <AuthFooter />
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                </div>
            </div>
        </>
    )
}

export default NewPassword;