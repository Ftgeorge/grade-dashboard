"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import PoweredByLogo from "@/app/constants/PoweredByLogo";
import InputField from "@/app/components/inputs/AuthInput";
import HeaderText from "@/app/components/Text/HeaderText";
import LogoText from "@/app/components/Text/LogoText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
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
                    <LogoText />
                    <div className="gap-1 flex-col flex">
                        <HeaderText placeholder="Create a new password" />
                        <SubHeaderText placeholder="Please enter a new password to continue." />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <InputField placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} error={error} errorMessage="Enter your new password"/>
                        <InputField placeholder="re-enter password" value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} error={error} errorMessage="Re-enter your password"/>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton children="Submit" className="bg-primary h-10 w-full" onClick={handleSubmit} />
                    </div>
                    <PoweredByLogo />
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                </div>
            </div>
        </>
    )
}

export default NewPassword;