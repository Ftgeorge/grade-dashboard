"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoText from "@/app/components/Text/LogoText";
import HeaderText from "@/app/components/Text/HeaderText";
import PoweredByLogo from "@/app/constants/PoweredByLogo";
import InputField from "@/app/components/inputs/AuthInput";
import { ForgetPasswordProps } from "@/app/data/list";

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
                        <LogoText />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <HeaderText placeholder="Forgot Password" />
                        <div className="gap-6 flex flex-col">
                            <InputField
                                placeholder="email address or phone"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <PrimaryButton children="Submit" className="bg-primary h-10 w-full" onClick={submitEmail} />
                        </div>
                    </div>
                    <PoweredByLogo />
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                </div>
            </div>
        </>
    )
}

export default ForgetPassword;