import { OffenseDetailFormProps } from "@/app/data/list";
import React, { ReactElement } from "react";



const OffenseDetailForm: React.FC<OffenseDetailFormProps> = ({
    index,
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
            <div key={index} className="w-full flex flex-row gap-5 mb-4">
                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt={studentName}
                    className="rounded-lg h-40 w-40 object-cover"
                />
                {/* Offense Details */}
                <div className="flex flex-col justify-start gap-2">
                    <h1 className="text-gray-900 font-medium text-base">{studentName}</h1>
                    <h1 className="text-gray-700 font-medium text-sm">ID: {studentId}</h1>
                    <h1 className="text-gray-600 font-medium text-sm">Offense: {offenseType}</h1>
                    <h1 className={`font-medium text-sm ${color}`}><span className="text-gray-600">Status:</span> {status}</h1>
                    <h1 className="text-gray-500 font-medium text-sm">
                        {new Date(timestamp).toLocaleString()}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default OffenseDetailForm;