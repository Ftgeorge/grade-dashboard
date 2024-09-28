"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Splashscreen() {
    const router = useRouter();
    const [fade, setFade] = useState('opacity-0');

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade('opacity-100');
        }, 500);
        const timer2 = setTimeout(() => {
            setFade('opacity-0');
            setTimeout(() => {
                router.push('/auth/sign-in');
            }, 1000);
        }, 2500);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, [router]);

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className={`flex flex-col gap-5 transition-opacity duration-1000 ease-in-out ${fade}`}>
                    <h1
                        className={`text-2xl font-normal text-center font-medium transition-opacity duration-1000 ease-in-out ${fade}`}
                        style={{ color: 'rgba(0, 0, 0)' }}
                    >
                        <span className="text-[#1F3A93]">G</span>rade
                    </h1>
                </div>
            </div>
        </>
    );
}