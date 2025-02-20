import { TableHeaderTextProps } from "@/app/data/list";
import React from "react";

const TableHeaderText: React.FC<TableHeaderTextProps> = ({ placeholder }) => {
    return (
        <>
            <th className="py-2 text-gray-400 font-medium text-xs">{placeholder}</th>
        </>
    )
}

export default TableHeaderText;