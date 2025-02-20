"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Loader from "@/app/components/loader";
import PoweredByLogo from "@/app/constants/PoweredByLogo";
import FooterText from "@/app/components/Text/FooterText";
import LogoText from "@/app/components/Text/LogoText";
import HeaderText from "@/app/components/Text/HeaderText";
import SubHeaderText from "@/app/components/Text/SubHeaderText";
import { OtpProps } from "@/app/data/list";


const Otp: React.FC<OtpProps> = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [otp, setOtp] = useState<string>("");
    const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
    const [otpInput, setOtpInput] = useState<string[]>(new Array(6).fill(""));
    const [resendOtpCountdown, setResendOtpCountdown] = useState<number>(30);
    const [loading, setIsLoading] = useState<boolean>(false);
    const [otpError, setOtpError] = useState<string | null>(null);

    // Create refs for each OTP input field
    const inputRefs = useRef<Array<HTMLInputElement | null>>(new Array(6).fill(null));

    const sendOtp = async () => {
        setIsLoading(true);
        try {
            setTimeout(() => {
                console.log("OTP sent successfully!");
                setIsOtpSent(true);
                setResendOtpCountdown(30);
                countdown();
                setIsLoading(false);
            }, 2000);
        } catch (error) {
            setError("Failed to send OTP");
            setIsLoading(false);
        }
    };

    const verifyOtp = async () => {
        if (otp.length < 6) {
            setOtpError("Please enter a valid 6-digit OTP");
            return;
        }

        setIsLoading(true);
        try {
            setTimeout(() => {
                console.log("OTP verified successfully!");
                router.push("/auth/sign-in");
                setIsLoading(false);
            }, 3000);
        } catch (error) {
            setError("Invalid OTP");
            setIsLoading(false); 
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (/^[0-9]$/.test(value)) {
            const newOtpInput = [...otpInput];
            newOtpInput[index] = value;
            setOtpInput(newOtpInput);
            setOtp(newOtpInput.join(""));
            setOtpError(null);

            // Focus on the next input field
            if (index < 5 && value !== "") {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleBackspace = (index: number, value: string) => {
        if (value === "" && index > 0) {
            inputRefs.current[index - 1]?.focus(); // Focus on the previous input field
        }
    };

    const countdown = () => {
        if (resendOtpCountdown > 0) {
            setTimeout(() => {
                setResendOtpCountdown(resendOtpCountdown - 1);
                countdown();
            }, 1000);
        }
    };

    useEffect(() => {
        countdown();
    }, []);

    const handleResendOtp = async () => {
        if (resendOtpCountdown <= 0) {
            await sendOtp();
        }
    };

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <LogoText />
                    <div className="gap-1 flex-col flex">
                        <HeaderText placeholder="Enter verification code" />
                        <SubHeaderText placeholder={
                            <>
                                We've sent a code to  <span className="font-normal">grade@gmail.com</span>
                            </>
                        } />
                    </div>
                    <div className="flex justify-between items-center gap-2 w-full">
                        {otpInput.map((input, index) => (
                            <input
                                key={index}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={input}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => e.key === "Backspace" && handleBackspace(index, e.currentTarget.value)}
                                className="w-10 h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50"
                            />
                        ))}
                    </div>
                    {otpError && (
                        <p className="text-red-500 text-xs mt-2 text-center">{otpError}</p>
                    )}
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-row gap-4 justify-between items-center">
                            <FooterText placeholder="Didn't get a code?" className="text-xs text-primary" />
                            {resendOtpCountdown > 0 ? (
                                <h1 className="text-gray-400 text-xs">
                                    {`Resend in ${String(Math.floor(resendOtpCountdown / 60)).padStart(2, "0")}:${String(
                                        resendOtpCountdown % 60
                                    ).padStart(2, "0")}`}
                                </h1>
                            ) : (
                                <FooterText placeholder="Click to resend" className="text-gray-400 underline" onClick={handleResendOtp} />
                            )}
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-center">
                            <PrimaryButton
                                className="bg-primary h-10 w-full flex justify-center items-center"
                                onClick={verifyOtp}
                                disabled={loading}
                            >
                                {loading ? <Loader loading={loading} /> : "Verify"}
                            </PrimaryButton>
                        </div>
                        <PoweredByLogo />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Otp;
