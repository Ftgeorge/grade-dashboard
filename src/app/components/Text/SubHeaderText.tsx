import React from "react";

interface SubHeaderTextProps {
    className?: string;
    placeholder: string | React.ReactNode;

}

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