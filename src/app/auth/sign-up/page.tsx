"use client";

import OauthButton from "@/app/components/buttons/OauthButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthFooter from "@/app/components/constants/authFooter";
import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";
import Loader from "@/app/components/loader";
import LogoText from "@/app/components/Text/LogoText";
import HeaderText from "@/app/components/Text/HeaderText";
import PrimaryText from "@/app/components/Text/PrimaryText";

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [reEnterPassword, setReEnterPassword] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRePassword, setShowRePassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignup = () => {
        setError(null);

        // Validation logic
        if (!fullName) {
            setError("Please enter your full name.");
            return;
        }
        if (!email || !validateEmail(email)) {
            setError("Please enter a valid email.");
            return;
        }
        if (!phoneNumber) {
            setError("Please enter your phone number.");
            return;
        }
        if (!password) {
            setError("Please enter a password.");
            return;
        }
        if (password !== reEnterPassword) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push('/auth/otp');
            console.log(`Full Name: ${fullName}, Email: ${email}, Phone: ${phoneNumber}, Password: ${password}`);
        }, 3000);
    };

    const handleOAuthSignup = (platform: string) => {
        console.log(`OAuth Signup with ${platform}`);
    }

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <LogoText />
                    <div className="gap-1 flex-col flex">
                        <HeaderText placeholder="Create an account" />
                        <PrimaryText placeholder="Get started with Grade and access exclusive features and content." className="text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <input
                            className={`w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50 ${error === 'Please enter your full name.' ? 'border-red-500' : ''}`}
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        {error === 'Please enter your full name.' && <div className="text-red-500 text-xs flex items-center gap-1"><IoAlertCircleOutline className="text-red-500" />{error}</div>}

                        <input
                            className={`w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50 ${error === 'Please enter a valid email.' ? 'border-red-500' : ''}`}
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error === 'Please enter a valid email.' && <div className="text-red-500 text-xs flex items-center gap-1"><IoAlertCircleOutline className="text-red-500" />{error}</div>}

                        <input
                            className={`w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50 ${error === 'Please enter your phone number.' ? 'border-red-500' : ''}`}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {error === 'Please enter your phone number.' && <div className="text-red-500 text-xs flex items-center gap-1"><IoAlertCircleOutline className="text-red-500" />{error}</div>}

                        <div className="relative w-full">
                            <input
                                className={`w-full h-10 bg-black rounded-lg text-xs px-4 pr-10 border border-1 bg-gray-50 ${error === 'Please enter a password.' ? 'border-red-500' : ''}`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-300" /> : <FaEye className="text-gray-300" />}
                            </div>
                            {error === 'Please enter a password.' && <div className="text-red-500 text-xs flex items-center gap-1"><IoAlertCircleOutline className="text-red-500" />{error}</div>}
                        </div>

                        <div className="relative w-full">
                            <input
                                className={`w-full h-10 bg-black rounded-lg text-xs px-4 pr-10 border border-1 bg-gray-50 ${error === 'Passwords do not match.' ? 'border-red-500' : ''}`}
                                type={showRePassword ? "text" : "password"}
                                placeholder="Re-enter Password"
                                value={reEnterPassword}
                                onChange={(e) => setReEnterPassword(e.target.value)}
                            />
                            <div
                                className="absolute inset-y-0 right-0 h-10 flex items-center px-3 cursor-pointer"
                                onClick={() => setShowRePassword(!showRePassword)}
                            >
                                {showRePassword ? <FaEyeSlash className="text-gray-300" /> : <FaEye className="text-gray-300" />}
                            </div>
                            {error === 'Passwords do not match.' && <div className="text-red-500 text-xs flex items-center gap-1"><IoAlertCircleOutline className="text-red-500" />{error}</div>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton
                            className="bg-[#1F3A93] h-10 w-full flex justify-center items-center"
                            onClick={handleSignup}
                            disabled={loading}
                        >
                            {loading ? <Loader loading={loading} /> : "Login"}
                        </PrimaryButton>
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
                        <h1 className="text-black  font-normal text-center text-xs">Have an account?<Link href="/auth/sign-in"><span className="text-[#1F3A93] font-medium"> Sign in</span></Link></h1>
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
                </div>
            </div>
        </>
    )
}
