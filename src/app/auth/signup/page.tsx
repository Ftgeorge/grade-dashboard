"use client";

import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();
    const navigatenext = () => {
        router.push('/dashboard/home')
    }
    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="">
                    <h1 className="text-black font-normal">Signup</h1>
                    <button onClick={navigatenext}>
                        signup
                    </button>
                </div>
            </div>
        </>
    )
}