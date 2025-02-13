import React from "react";

interface HeaderTextProps {
    placeholder?: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({
    placeholder
}) => {
    return (
        <>
            <h1 className={`text-black text-center font-bold text-xl`}>{placeholder}</h1>
        </>
    )
}

export default HeaderText;