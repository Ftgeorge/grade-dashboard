import React from "react";

interface TableHeaderTextProps {
    placeholder: string;
    
}

const TableHeaderText: React.FC<TableHeaderTextProps> = ({ placeholder }) => {
    return (
        <>
            <th className="py-2 text-gray-400 font-medium text-xs">{placeholder}</th>
        </>
    )
}

export default TableHeaderText;