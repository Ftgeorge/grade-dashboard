import React from "react";

interface TableContentFormProps {
    profileImage: string;
    studentName: string;
    studentId: string;
    timestamp: string;
    offenseType: string;
    color: string;
    status: string;

}

const TableContentForm: React.FC<TableContentFormProps> = ({
    profileImage,
    studentName,
    studentId,
    timestamp,
    offenseType,
    color,
    status
}) => {
    return (
        <>
            <td className="px-4 py-2">
                <img
                    src={profileImage}
                    alt={`${studentName} profile`}
                    className="w-10 h-10 rounded-full"
                />
            </td>
            <td className="py-2 text-gray-700 text-sm">{studentName}</td>
            <td className="py-2 text-gray-700 text-sm">{studentId}</td>
            <td className="py-2 text-gray-700 text-sm">{timestamp}</td>
            <td className="py-2 text-gray-700 text-sm">{offenseType}</td>
            <td className={`py-2 text-sm ${color}`}>
                {status}
            </td>
        </>
    )
}

export default TableContentForm;