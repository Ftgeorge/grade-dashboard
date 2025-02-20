import { SearchBarProps } from "@/app/data/list";
import React, { useState } from "react";



const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange
}) => {

    return (
        <>
            <input
                type="text"
                placeholder="Search students..."
                value={value}
                onChange={onChange}
                className="p-2 px-4 flex-grow border border-gray-300 rounded-lg h-12"
            />
        </>
    )
}

export default SearchBar;