import React from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface AuthInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string | null;
    errorMessage?: string;
    type?: string;
    onClick?: () => void;
    showIcon?: boolean;
    showPassword?: boolean;
}

const InputField: React.FC<AuthInputProps> = ({
    value,
    onChange,
    placeholder,
    error,
    errorMessage,
    type = "text",
    onClick,
    showIcon = false,
    showPassword = false
}) => {
    return (
        <div className="relative w-full">
            <input
                className={`w-full h-10 rounded-lg text-xs px-4 border border-1 bg-gray-50 ${error === errorMessage ? 'border-red-500' : ''} ${showIcon ? 'pr-10' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {showIcon && (
                <div className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                    onClick={onClick}
                >
                    {showPassword ? <FaEyeSlash className="text-gray-300" /> : <FaEye className="text-gray-300" />}
                </div>
            )}
            {error === errorMessage && (
                <div className="text-red-500 text-xs flex items-center gap-1 mt-1">
                    <IoAlertCircleOutline className="text-red-500" />
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default InputField;
