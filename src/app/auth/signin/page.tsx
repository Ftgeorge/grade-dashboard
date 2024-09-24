"use client";

import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();
    const navigatenext = () => {
        router.push('/auth/signup')
    }
    return (
        <>
            <div className="bg-white w-full h-screen flex justify-center items-center">
                <div className="">
                    <h1 className="text-black">Signin</h1>
                    <button onClick={navigatenext}>
                        signup
                    </button>
                </div>
            </div>
        </>
    )
}