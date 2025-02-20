import { HeaderTextProps } from "@/app/data/list";
import React from "react";


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