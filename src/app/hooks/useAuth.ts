// useAuth.ts
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuthProps { }

const useAuth = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null); 
    const [passwordError, setPasswordError] = useState<string | null>(null); 
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [pageLoading, setPageLoading] = useState<boolean>(false); 
    const [error, setError] = useState<string | null>(null);
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [reEnterPassword, setReEnterPassword] = useState<string>("");
    const [showRePassword, setShowRePassword] = useState<boolean>(false);


    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        setEmailError(null);
        setPasswordError(null);

        if (!email) {
            setEmailError("Please enter an email or a phone number.");
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
        }

        if (!password) {
            setPasswordError("Please enter a password.");
        }

        if (email && validateEmail(email) && password) {
            setLoading(true);

            setTimeout(() => {
                console.log('button clicked');
                setPageLoading(true); 

                setTimeout(() => {
                    setPageLoading(false); 
                    router.push("/dashboard/overview");
                }, 1000); 

                console.log(`Email: ${email}, Password: ${password}`);
            }, 3000);
        }
    };

    const handleSignup = () => {
        router.push('/auth/otp');

        // setError(null);
    
        // if (!fullName) {
        //     setError("Please enter your full name.");
        //     return;
        // }
        // if (!email || !validateEmail(email)) {
        //     setError("Please enter a valid email.");
        //     return;
        // }
        // if (!phoneNumber) {
        //     setError("Please enter your phone number.");
        //     return;
        // }
        // if (!password) {
        //     setError("Please enter a password.");
        //     return;
        // }
        // if (password !== reEnterPassword) {
        //     setError("Passwords do not match.");
        //     return;
        // }
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     if (!error) {
        //         router.push('/auth/otp');
        //     }
        //     console.log(`Full Name: ${fullName}, Email: ${email}, Phone: ${phoneNumber}, Password: ${password}`);
        // }, 3000);
    };

    const handleOAuthLogin = (platform: string) => {
        console.log(`OAuth login with ${platform}`);
    };

    const handleOAuthSignup = (platform: string) => {
        console.log(`OAuth Signup with ${platform}`);
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        loading,
        setLoading,
        showPassword,
        setShowPassword,
        pageLoading,
        setPageLoading,
        handleLogin,
        handleOAuthLogin,
        validateEmail,
        reEnterPassword,
        setReEnterPassword,
        phoneNumber,
        setPhoneNumber,
        setError,
        error,
        fullName,
        setFullName,
        setShowRePassword,
        showRePassword,
        handleOAuthSignup,
        handleSignup
    };
};

export default useAuth;
