"use client";

import OauthButton from "@/app/components/buttons/OauthButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import Link from "next/link";
import Loader from "@/app/components/loader";
import LogoText from "@/app/components/Text/LogoText";
import HeaderText from "@/app/components/Text/HeaderText";
import InputField from "@/app/components/inputs/AuthInput";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import FooterText from "@/app/components/Text/FooterText";
import PoweredByLogo from "@/app/constants/PoweredByLogo";

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

    const SignupInputFieldArrays = [
        {
            id: 1,
            placeholder: "Full Name",
            value: fullName,
            onChange: (e: any) => setFullName(e.target.value),
            error: error,
            errorMessage: "Please enter your full name."
        },
        {
            id: 2,
            placeholder: "Email Address",
            value: email,
            onChange: (e: any) => setEmail(e.target.value),
            error: error,
            errorMessage: "Please enter a valid email."
        },
        {
            id: 3,
            placeholder: "Phone Number",
            value: phoneNumber,
            onChange: (e: any) => setPhoneNumber(e.target.value),
            error: error,
            errorMessage: "Please enter your phone number."
        },
        {
            id: 4,
            placeholder: "Password",
            value: password,
            type: showPassword ? "text" : "password",
            onChange: (e: any) => setPassword(e.target.value),
            error: error,
            errorMessage: "Please enter a password.",
            showIcon: true,
            showPassword: true,
            onClick: () => setShowPassword(!showPassword),
        },
        {
            id: 5,
            placeholder: "Re-enter Password",
            value: reEnterPassword,
            type: showRePassword ? "text" : "password",
            onChange: (e: any) => setReEnterPassword(e.target.value),
            error: error,
            errorMessage: "Re-enter a password.",
            showIcon: true,
            showPassword: true,
            onClick: () => setShowRePassword(!showRePassword),
        }
    ];

    const OauthSignupButtons = [
        {
            id: 1,
            ImageSource: google,
            imageClassname: "h-4 w-4",
            onClick: () => handleOAuthSignup('google')
        },
        {
            id: 2,
            ImageSource: facebook,
            imageClassname: "h-8 w-8",
            onClick: () => handleOAuthSignup('facebook')
        },
        {
            id: 3,
            ImageSource: twitter,
            imageClassname: "h-4 w-4",
            onClick: () => handleOAuthSignup('twitter')
        },
    ];


    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <LogoText />
                    <div className="gap-1 flex-col flex">
                        <HeaderText placeholder="Create an account" />
                        <SubHeaderText placeholder="Get started with Grade and access exclusive features and content." />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            {SignupInputFieldArrays.map((input) => (
                                <InputField key={input.id} {...input} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton
                            className="bg-primary h-10 w-full flex justify-center items-center"
                            onClick={handleSignup}
                            disabled={loading}
                        >
                            {loading ? <Loader loading={loading} /> : "Signup"}
                        </PrimaryButton>
                        <div className="flex flex-row w-full justify-evenly items-center gap-3">
                            <div className="h-0.5 w-full bg-gray-100" />
                            <h1 className="text-gray-400 text-xs">OR</h1>
                            <div className="h-0.5 w-full bg-gray-100" />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-5">
                            {OauthSignupButtons.map((input) => (
                                <OauthButton key={input.id} {...input} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-end gap-5">
                        <FooterText
                            placeholder={
                                <>
                                    Have an account? <Link href="/auth/sign-in">
                                        <span className="text-primary font-medium"> Sign in</span>
                                    </Link>
                                </>
                            }
                        />
                        <div className="items-center justify-center w-full flex flex-col">
                            <div className="w-full justify-center items-center flex flex-col gap-8">
                                <div className="flex flex-col w-full items-center justify-end">
                                    <FooterText placeholder="By signing in, you agree to our" />
                                    <FooterText placeholder={<> Terms and Conditions <span className="text-gray-400"> and</span> Privacy Policy </>} className="text-primary font-medium" />
                                </div>
                                <PoweredByLogo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
