import React, { useState } from "react";

interface SearchBarProps {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

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