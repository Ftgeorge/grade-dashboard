"use client";

import OauthButton from "@/app/components/buttons/OauthButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";

import { useState } from "react";

interface SignInProps {
    // Add any props types here
}

const SignIn: React.FC<SignInProps> = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const navigatenext = () => {
        router.push('/auth/signup')
    }

    const handleLogin = () => {
        // TO DO: Implement login logic here
        // For now, just log the email and password to the console
        console.log(`Email: ${email}, Password: ${password}`);
    }

    const handleForgotPassword = () => {
        router.push('/auth/forgot-password');
    }

    const handleOAuthLogin = (platform: string) => {
        // TO DO: Implement OAuth login logic here
        // For now, just log the platform to the console
        console.log(`OAuth login with ${platform}`);
    }

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    <div className="gap-1 flex-col flex">
                        <h1 className="text-black font-custom font-semibold text-center text-xl">Welcome Back</h1>
                        <h1 className="text-black font-custom font-normal text-center text-xs">Don't have an account yet?<span className="text-[#1F3A93] font-medium" onClick={navigatenext}> Sign up</span></h1>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="email address or phone" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <h1 className="text-[#1F3A93] font-medium text-xs" onClick={handleForgotPassword}>Forgot password?</h1>
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
                    <div className="flex flex-col w-full items-center justify-end">
                        <h1 className="text-gray-400 text-xs">By signing up, you agree to our</h1>
                        <h1 className="text-[#1F3A93] text-xs">Terms and Conditions</h1>
                    </div>
                    {error && <div className="text-red-500 text-xs">{error}</div>}
                </div>
            </div>
        </>
    )
}

export default SignIn;