"use client";

import OauthButton from "@/app/components/buttons/OauthButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import AuthFooter from "@/app/components/constants/authFooter";
import Link from "next/link";

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleSignup = () => {
        router.push('/auth/otp')
        console.log(`Email: ${email}, Password: ${password}`);
    }

    const handleOAuthSignup = (platform: string) => {
        console.log(`OAuth Signup with ${platform}`);
    }
    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    <div className="gap-1 flex-col flex">
                        <h1 className="text-black  font-semibold text-center text-xl">Create an account</h1>
                        <p className="text-gray-400 text-xs text-center">Get started with Grade and access exclusive features and content.</p>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="Full Name" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="Phone Number" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="Password" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="Re-enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton children="Signup" className="bg-[#1F3A93] h-10 w-full" onClick={handleSignup} />
                        <div className="flex flex-row w-full justify-evenly items-center gap-3">
                            <div className="h-0.5 w-full bg-gray-100" />
                            <h1 className="text-gray-400 text-xs">OR</h1>
                            <div className="h-0.5 w-full bg-gray-100" />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-5">
                            <OauthButton ImageSource={google} imageClassname="h-4 w-4" onClick={() => handleOAuthSignup('google')} />
                            <OauthButton ImageSource={facebook} imageClassname="h-8 w-8" onClick={() => handleOAuthSignup('facebook')} />
                            <OauthButton ImageSource={twitter} imageClassname="h-4 w-4" onClick={() => handleOAuthSignup('twitter')} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-end gap-5">
                        <h1 className="text-black  font-normal text-center text-xs">Have an account?<Link href="/auth/sign-in"><span className="text-[#1F3A93] font-medium" > Sign in</span></Link></h1>
                        <div className="items-center justify-center w-full flex flex-col">
                            <div className="w-full justify-center items-center flex flex-col gap-8">
                                <div className="flex flex-col w-full items-center justify-end">
                                    <h1 className="text-gray-400 text-xs text-center">By signing in, you agree to our</h1>
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