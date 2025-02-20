import { FooterTextProps } from "@/app/data/list";
import React from "react";

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