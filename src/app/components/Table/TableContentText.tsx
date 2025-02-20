import { TableContentTextProps } from "@/app/data/list";
import React from "react";

const TableContentText: React.FC<TableContentTextProps> = ({ placeholder }) => {
    return (
        <>
            <th className="py-2 text-gray-400 font-medium text-xs">{placeholder}</th>
        </>
    )
}

export default TableContentText;