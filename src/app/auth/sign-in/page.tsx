"use client";

import OauthButton from "@/app/components/buttons/OauthButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import Link from "next/link";
import AuthFooter from "@/app/components/constants/authFooter";

interface SignInProps {
}

const SignIn: React.FC<SignInProps> = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    
    const handleLogin = () => {
        router.push('/auth/sign-up')
        console.log(`Email: ${email}, Password: ${password}`);
    }

    const handleOAuthLogin = (platform: string) => {
        console.log(`OAuth login with ${platform}`);
    }

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    <div className="gap-1 flex-col flex">
                        <h1 className="text-black font-custom font-semibold text-center text-xl">Log in to your account</h1>
                        <h1 className="text-black font-custom font-normal text-center text-xs">Access your dashboard and start exploring</h1>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="email address or phone" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Link href={"/auth/forgot-password"}>
                            <h1 className="text-[#1F3A93] font-medium text-xs">Forgot password?</h1>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton children="Login" className="bg-[#1F3A93] h-10 w-full" onClick={handleLogin} />
                        <div className="flex flex-row w-full justify-evenly items-center gap-3">
                            <div className="h-0.5 w-full bg-gray-100" />
                            <h1 className="text-gray-400 text-xs">OR</h1>
                            <div className="h-0.5 w-full bg-gray-100" />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-5">
                            <OauthButton ImageSource={google} imageClassname="h-4 w-4" onClick={() => handleOAuthLogin('google')} />
                            <OauthButton ImageSource={facebook} imageClassname="h-8 w-8" onClick={() => handleOAuthLogin('facebook')} />
                            <OauthButton ImageSource={twitter} imageClassname="h-4 w-4" onClick={() => handleOAuthLogin('twitter')} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-end gap-5">
                        <h1 className="text-black font-custom font-normal text-center text-xs">Don't have an account yet?<Link href="/auth/sign-up"><span className="text-[#1F3A93] font-medium" > Sign up</span></Link></h1>
                        <div className="items-center justify-center w-full flex flex-col">
                            <div className="w-full justify-center items-center flex flex-col gap-8">
                                <div className="flex flex-col w-full items-center justify-end">
                                    <h1 className="text-gray-400 text-xs text-center">By signing up, you agree to our</h1>
                                    <h1 className="text-[#1F3A93] text-xs text-center font-normal">Terms and Conditions <span className="text-gray-400"> and</span> Privacy Policy</h1>
                                </div>
                                <AuthFooter />
                            </div>
                        </div>
                    </div>
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                </div>
            </div>
        </>
    )
}

export default SignIn;