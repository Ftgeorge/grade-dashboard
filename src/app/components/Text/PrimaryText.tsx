import React from "react";

interface PrimaryTextProps {
    placeholder?: string;
    className?: string;
}

const PrimaryText: React.FC<PrimaryTextProps> = ({
    placeholder,
    className
}) => {
    return (
        <>
            <h1 className={`text-black font-medium text-base ${className}`}>{placeholder}</h1>
        </>
    )
}

export default PrimaryText;