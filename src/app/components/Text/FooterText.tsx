import React from "react";

interface FooterTextProps {
    className?: string;
    placeholder: string | React.ReactNode;
    onClick?: () => void
}

const FooterText: React.FC<FooterTextProps> = (
    {
        className,
        placeholder
    }
) => {
    return (
        <>
            <h1 className={`text-center text-gray-400 text-xs ${className}`}>{placeholder}</h1>
        </>
    )
}

export default FooterText;