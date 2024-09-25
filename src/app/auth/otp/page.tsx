"use client";

import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import AuthFooter from "@/app/components/constants/authFooter";

interface OtpProps {
}

const Otp: React.FC<OtpProps> = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [otp, setOtp] = useState<string>("");
    const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
    const [otpInput, setOtpInput] = useState<string[]>(new Array(6).fill(""));
    const [resendOtpCountdown, setResendOtpCountdown] = useState<number>(30);

    const sendOtp = async () => {
        try {
            setTimeout(() => {
                console.log("OTP sent successfully!");
                setIsOtpSent(true);
                setResendOtpCountdown(30);
                countdown();
            }, 2000);
        } catch (error) {
            setError("Failed to send OTP");
        }
    }

    const verifyOtp = async () => {
        try {
            setTimeout(() => {
                console.log("OTP verified successfully!");
                router.push('/auth/sign-in');
            }, 2000);
        } catch (error) {
            setError("Invalid OTP");
        }
    }

    const handleOtpChange = (index: number, value: string) => {
        const newOtpInput = [...otpInput];
        newOtpInput[index] = value;
        setOtpInput(newOtpInput);
        setOtp(newOtpInput.join(""));
    };

    const countdown = () => {
        if (resendOtpCountdown > 0) {
            setTimeout(() => {
                setResendOtpCountdown(resendOtpCountdown - 1);
                countdown();
            }, 1000);
        }
    }
    useEffect(() => {
        countdown();
    }, []);

    const handleResendOtp = async () => {
        if (resendOtpCountdown <= 0) {
            await sendOtp();
        }
    }

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="border border-1 border-gray-200 rounded-lg p-8 py-10 gap-6 flex w-1/5 flex-col justify-start items-center">
                    <h1 className="text-[#1F3A93] font-normal text-center text-2xl">G<span className="text-black">rade</span></h1>
                    <div className="gap-1 flex-col flex">
                        <h1 className="text-black font-custom font-semibold text-center text-xl">Enter verification code</h1>
                        <h1 className="text-black font-custom font-light text-center text-xs">We've sent a code to <span className="font-normal">grade@gmail.com</span></h1>
                    </div>
                    <div className="flex justify-between items-center gap-2 w-full">
                        {otpInput.map((input, index) => (
                            <input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={input}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                className="w-10 h-10 bg-black rounded-lg text-xs px-4 border border-1 bg-gray-50"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-row gap-4 justify-between items-center">
                            <h1 className="text-xs">Didn't get a code?</h1>
                            {resendOtpCountdown > 0 ? (
                                <h1 className="text-gray-400 text-xs">
                                    {`Resend in ${String(Math.floor(resendOtpCountdown / 60)).padStart(2, '0')}:${String(resendOtpCountdown % 60).padStart(2, '0')}`}
                                </h1>
                            ) : (
                                <h1 className="text-gray-400 underline text-xs" onClick={handleResendOtp}>
                                    Click to resend
                                </h1>
                            )}
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-center">
                            <PrimaryButton children="Verify" className="bg-[#1F3A93] h-10 w-full" onClick={verifyOtp} />
                        </div>
                        <AuthFooter />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Otp;