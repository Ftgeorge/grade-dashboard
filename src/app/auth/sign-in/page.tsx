"use client";

import OauthButton from "@/app/components/buttons/OauthButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // For visibility toggle
import Loader from "@/app/components/loader";
import { IoAlertCircleOutline } from "react-icons/io5";
import LogoText from "@/app/components/Text/LogoText";
import PrimaryText from "@/app/components/Text/SubHeaderText";
import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import FooterText from "@/app/components/Text/FooterText";
import InputField from "@/app/components/inputs/AuthInput";
import PoweredByLogo from "@/app/constants/PoweredByLogo";

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
    const LoginInputFieldArrays = [
        {
            id: 1,
            placeholder: "Email",
            value: email,
            onChange: (e: any) => setEmail(e.target.value),
            error: emailError,
            errorMessage: "Please enter a valid email.",
        },
        {
            id: 2,
            placeholder: "Password",
            value: password,
            type: showPassword ? "text" : "password",
            onChange: (e: any) => setPassword(e.target.value),
            error: passwordError,
            errorMessage: "password is not correct.",
            showIcon: true,
            showPassword: true,
            onClick: () => setShowPassword(!showPassword),
        },
    ];
    const OauthSignInButtons = [
        {
            id: 1,
            ImageSource: google,
            imageClassname: "h-4 w-4",
            onClick: () => handleOAuthLogin('google')
        },
        {
            id: 2,
            ImageSource: facebook,
            imageClassname: "h-8 w-8",
            onClick: () => handleOAuthLogin('facebook')
        },
        {
            id: 3,
            ImageSource: twitter,
            imageClassname: "h-4 w-4",
            onClick: () => handleOAuthLogin('twitter')
        },
    ];

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <div className="gap-1 flex-col flex">
                        <LogoText />
                        <HeaderText placeholder="Log in to your account" />
                        <SubHeaderText placeholder="Access your dashboard and start exploring" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            {LoginInputFieldArrays.map((input) => (
                                <InputField key={input.id} {...input} />
                            ))}
                        </div>
                    </div>

                        <Link href={"/auth/forgot-password"}>
                            <FooterText placeholder="Forgot password?" className="text-primary font-medium text-right" />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <PrimaryButton
                            className="bg-primary h-10 w-full flex justify-center items-center"
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
                            {OauthSignInButtons.map((input) => (
                                <OauthButton key={input.id} {...input} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-end gap-5">
                        <FooterText
                            placeholder={
                                <>
                                    Don't have an account yet? <Link href="/auth/sign-up">
                                        <span className="text-primary font-medium"> Sign up</span>
                                    </Link>
                                </>
                            }
                        />
                        <div className="items-center justify-center w-full flex flex-col">
                            <div className="w-full justify-center items-center flex flex-col gap-8">
                                <div className="flex flex-col w-full items-center justify-end">
                                    <FooterText placeholder="By signing up, you agree to our" />
                                    <FooterText placeholder={<> Terms and Conditions <span className="text-gray-400"> and</span> Privacy Policy </>} className="text-primary font-medium" />
                                </div>
                                <PoweredByLogo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
