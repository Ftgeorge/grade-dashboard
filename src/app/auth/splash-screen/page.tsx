"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Splashscreen() {
    const router = useRouter();
    const [fade, setFade] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true); 
            setTimeout(() => {
                router.push('/auth/signin');
            }, 1000);
        }, 3000); 

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className={`flex flex-col gap-5 transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 
                        className={`text-xl font-semibold text-center font-montserrat transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
                        style={{ color: 'rgba(0, 0, 0)' }}
                    >
                        Grade
                    </h1>
                </div>
            </div>
        </>
    );
}
