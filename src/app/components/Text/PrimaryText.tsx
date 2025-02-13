import React from "react";

interface PrimaryTextProps {
    className: string;
    placeholder?: string;
}

const PrimaryText: React.FC<PrimaryTextProps> = (
    {
        className,
        placeholder
    }
) => {
    return (
        <>
            <h1 className={`text-black text-center ${className}`}>{placeholder}</h1>
        </>
    )
}

export default PrimaryText;