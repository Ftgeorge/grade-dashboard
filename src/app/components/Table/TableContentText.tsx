import React from "react";

interface TableContentTextProps {
    placeholder: string;
    
}

const TableContentText: React.FC<TableContentTextProps> = ({ placeholder }) => {
    return (
        <>
            <th className="py-2 text-gray-400 font-medium text-xs">{placeholder}</th>
        </>
    )
}

export default TableContentText;