"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Preloader from "@/app/components/animation/preloader.animation";

export default function Splashscreen() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/auth/sign-in');
        }, 3000);
    }, [router]);

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <Preloader />
            </div>
        </>
    );
}