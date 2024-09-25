"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthFooter from "@/app/components/constants/authFooter";

interface ForgetPasswordProps {
    // Add any props types here
}

const ForgetPassword: React.FC<ForgetPasswordProps> = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const submitEmail = () => {
        router.push('/auth/reset-password')
    }

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <div className="w-full">
                        <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-black font-custom font-semibold text-center text-xl">Forgot Password</h1>
                        <div className="gap-6 flex flex-col">
                            <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="email address or phone" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <PrimaryButton children="Submit" className="bg-[#1F3A93] h-10 w-full" onClick={submitEmail} />
                        </div>
                    </div>
                    <AuthFooter/>
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                </div>
            </div>
        </>
    )
}

export default ForgetPassword;