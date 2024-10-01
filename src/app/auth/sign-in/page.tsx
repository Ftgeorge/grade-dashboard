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
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // For visibility toggle
import Loader from "@/app/components/loader";
import { IoAlertCircleOutline } from "react-icons/io5";

interface SignInProps { }

const SignIn: React.FC<SignInProps> = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null); // Email specific error
    const [passwordError, setPasswordError] = useState<string | null>(null); // Password specific error
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false); // For password visibility
    const [pageLoading, setPageLoading] = useState<boolean>(false); // New state for page loading

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        setEmailError(null);
        setPasswordError(null);

        // Validation for email
        if (!email) {
            setEmailError("Please enter an email or a phone number.");
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
        }

        // Validation for password
        if (!password) {
            setPasswordError("Please enter a password.");
        }

        if (email && validateEmail(email) && password) {
            setLoading(true);

            setTimeout(() => {
                console.log('button clicked');
                setPageLoading(true); // Set the page loading state

                // Simulate page readiness
                setTimeout(() => {
                    setPageLoading(false); // Reset the page loading state
                    router.push("/dashboard/overview");
                }, 1000); // Adjust the timeout duration as needed

                console.log(`Email: ${email}, Password: ${password}`);
            }, 3000);
        }
    };

    const handleOAuthLogin = (platform: string) => {
        console.log(`OAuth login with ${platform}`);
    };

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    <div className="gap-1 flex-col flex">
                        <h1 className="text-black font-bold text-center text-xl">Log in to your account</h1>
                        <h1 className="text-black font-normal text-center text-xs">Access your dashboard and start exploring</h1>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col w-full">
                            <input
                                className={`w-full h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50 ${emailError ? 'border-red-500' : ''}`}
                                placeholder="Email address or phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && (
                                <div className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <IoAlertCircleOutline className="text-red-500" />
                                    {emailError}
                                </div>
                            )}
                        </div>
                        <div className="relative w-full flex flex-col">
                            <input
                                className={`w-full h-10 bg-black rounded-lg text-xs px-4 pr-10 border border-1 bg-gray-50 ${passwordError ? 'border-red-500' : ''}`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="absolute right-0 flex items-center justify-center h-10 px-3 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-300" /> : <FaEye className="text-gray-300" />}
                            </div>
                            {passwordError && (
                                <div className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <IoAlertCircleOutline className="text-red-500" />
                                    {passwordError}
                                </div>
                            )}
                        </div>

                        <Link href={"/auth/forgot-password"}>
                            <h1 className="text-[#1F3A93] font-medium text-xs">Forgot password?</h1>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton
                            className="bg-[#1F3A93] h-10 w-full flex justify-center items-center"
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading || pageLoading ? <Loader loading={loading || pageLoading} /> : "Login"}
                        </PrimaryButton>
                        <div className="flex flex-row w-full justify-evenly items-center gap-3">
                            <div className="h-0.5 w-full bg-gray-100" />
                            <h1 className="text-gray-400 text-xs">OR</h1>
                            <div className="h-0.5 w-full bg-gray-100" />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-5">
                            <OauthButton
                                ImageSource={google}
                                imageClassname="h-4 w-4"
                                onClick={() => handleOAuthLogin("google")}
                            />
                            <OauthButton
                                ImageSource={facebook}
                                imageClassname="h-8 w-8"
                                onClick={() => handleOAuthLogin("facebook")}
                            />
                            <OauthButton
                                ImageSource={twitter}
                                imageClassname="h-4 w-4"
                                onClick={() => handleOAuthLogin("twitter")}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-end gap-5">
                        <h1 className="text-black font-montserrat font-normal text-center text-xs">
                            Don't have an account yet?
                            <Link href="/auth/sign-up">
                                <span className="text-[#1F3A93] font-medium"> Sign up</span>
                            </Link>
                        </h1>
                        <div className="items-center justify-center w-full flex flex-col">
                            <div className="w-full justify-center items-center flex flex-col gap-8">
                                <div className="flex flex-col w-full items-center justify-end">
                                    <h1 className="text-gray-400 text-xs text-center">By signing up, you agree to our</h1>
                                    <h1 className="text-[#1F3A93] text-xs text-center font-normal">
                                        Terms and Conditions <span className="text-gray-400"> and</span> Privacy Policy
                                    </h1>
                                </div>
                                <AuthFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
