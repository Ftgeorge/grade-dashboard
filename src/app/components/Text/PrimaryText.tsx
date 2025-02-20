import { PrimaryTextProps } from "@/app/data/list";
import React from "react";


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