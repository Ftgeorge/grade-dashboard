import { SubHeaderTextProps } from "@/app/data/list";
import React from "react";


const SubHeaderText: React.FC<SubHeaderTextProps> = (
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

export default SubHeaderText;