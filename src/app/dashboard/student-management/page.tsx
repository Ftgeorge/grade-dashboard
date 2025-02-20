"use client";

import React, { useState } from "react";
import DashboardLayout from "../page";
import { FaBook, FaRegFileLines } from "react-icons/fa6";
import { BiBlock, BiCheck, BiDownload } from "react-icons/bi";
import { mockData } from "@/app/components/mockData";
import SectionHeader from "@/app/constants/SectionHeader";
import SearchBar from "@/app/components/Search/searchBar";
import ActionButton from "@/app/components/buttons/ActionButton";
import TableHeaderText from "@/app/components/Table/TableHeaderText";
import TableContentForm from "@/app/components/Table/TableContentForm";
import { StudentManagementHeaders } from "@/app/data/student-management/arrays";
import { Student } from "@/app/data/list";

const getStatusColor = (status: "Pending Review" | "Terminated" | "blocked" | "active" | "suspended" | "Resolved" | "Under Investigation" | "Under Review") => {
    switch (status) {
        case "Pending Review":
            return "text-primary-yellow";
        case "Terminated":
            return "text-primary-red";
        case "blocked":
            return "text-primary-red";
        case "active":
            return "text-primary-green";
        case "suspended":
            return "text-primary-yellow";
        case "Under Investigation":
            return "text-primary-yellow";
        case "Resolved":
            return "text-primary-green";
        case "Under Review":
            return "text-primary-yellow"
        default:
            return "text-black";
    }
};


export default function StudentManagement() {
    const [students, setStudents] = useState<Student[]>(mockData); // List of students
    const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
    const [selectedOffense, setSelectedOffense] = useState<number | null>(null); // State for selected row
    const [selectedStudents, setSelectedStudents] = useState<number[]>([]); // State for selected students

    const handleRowClick = (studentId: number) => {
        setSelectedOffense(selectedOffense === studentId ? null : studentId); // Toggle row expand
    };

    const handleCheckboxChange = (studentId: number) => {
        if (selectedStudents.includes(studentId)) {
            setSelectedStudents(selectedStudents.filter((id) => id !== studentId)); // Deselect student
        } else {
            setSelectedStudents([...selectedStudents, studentId]); // Select student
        }
    };
    const handleDownloadCSV = () => {
        //Download CSV
    }

    const filteredStudents = students.filter((student) =>
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const BulkActionsButtons = [
        {
            placeholder: 'Block Selected',
            color: "border-primary-red bg-primary-red-20 text-primary-red",
            onClick: () => setStudents(students.map((student) => selectedStudents.includes(student.id) ? { ...student, status: 'blocked' } : student)),
            icon: BiBlock
        },
        {
            placeholder: 'Unblock Selected',
            color: "bg-primary-green-20 text-primary-green border-primary-green",
            onClick: () => setStudents(students.map((student) => selectedStudents.includes(student.id) ? { ...student, status: 'active' } : student)),
            icon: BiCheck
        },
        {
            placeholder: 'Download CSV',
            color: "bg-primary-20 text-primary border-primary",
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                handleDownloadCSV();
            },
            icon: BiDownload
        }
    ];


    return (
        <DashboardLayout>
            <div className="p-4 rounded-xl bg-white border border-1 h-[calc(100vh-105px)] overflow-y-auto border-gray-200">
                <SectionHeader
                    title="Student Records"
                    Icon={FaRegFileLines}
                />
                <div className="flex flex-row justify-between items-center gap-4 my-4">
                    {/* Search Bar */}
                    <SearchBar
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* Bulk Actions */}
                    <div className="flex-row flex gap-4">
                        {BulkActionsButtons.map((buttons, index) => (
                            <ActionButton
                                key={index}
                                className={`${buttons.color}`}
                                onClick={buttons.onClick}
                            >
                                {buttons.placeholder}
                                {buttons.icon && <buttons.icon className="text-xl" />}
                            </ActionButton>
                        ))}
                    </div>
                </div>

                {/* Student Table */}
                <table className="min-w-full table-auto overflow-y-auto">
                    <thead>
                        <tr className="text-left bg-white">
                            {StudentManagementHeaders.map((HeaderText, index) => (
                                <TableHeaderText key={index} placeholder={HeaderText.headerText} />
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <React.Fragment key={student.id}>
                                <tr
                                    className={`cursor-pointer p-5 ${selectedOffense === student.id ? "bg-gray-100" : ""
                                        }`}
                                    onClick={() => handleRowClick(student.id)}
                                >
                                    {/* Checkbox for bulk actions */}
                                    <td className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedStudents.includes(student.id)}
                                            onChange={() => handleCheckboxChange(student.id)}
                                        />
                                    </td>
                                    <TableContentForm
                                        profileImage={student.profileImage}
                                        studentName={student.studentName}
                                        studentId={student.studentId}
                                        email={student.email}
                                        timestamp={student.timestamp}
                                        offenseType={student.offenseType}
                                        color={getStatusColor(student.status)}
                                        status={student.status}
                                    />
                                </tr>

                                {/* Expanded Row Details */}
                                {selectedOffense === student.id && (
                                    <>
                                        {/* Expanded details row */}
                                        <tr className="bg-gray-50 shadow-md border border-1 border-t-white">
                                            <td className="" colSpan={1} valign="top" />
                                            {/* Personal Information (aligned with Profile and Student Name) */}
                                            <td className="py-4 gap-2" colSpan={2} valign="top">
                                                <h4 className="text-gray-600 font-medium">Personal Information</h4>
                                                <ul className="text-sm text-gray-600">
                                                    <h1><strong>Date of Birth:</strong> {student.dateOfBirth || "N/A"}</h1>
                                                    <h1><strong>Email:</strong> {student.email}</h1>
                                                    <h1><strong>Phone Number:</strong> {student.phoneNumber || "N/A"}</h1>
                                                </ul>
                                            </td>

                                            {/* Exam History (aligned with Student ID) */}
                                            <td className="py-4 items-start gap-2" colSpan={1} valign="top">
                                                <h4 className="text-gray-600 font-medium">Exam History</h4>
                                                {student.subjectHistory.length > 0 ? (
                                                    <div className="text-sm text-gray-600">
                                                        {student.subjectHistory.map((exam, index) => (
                                                            <div key={index} className="flex flex-col">
                                                                <div className="flex flex-row gap-2">
                                                                    <h1 className="font-bold text-sm">{exam.subject} -</h1>
                                                                    <h1 className="font-normal text-gray-600 text-sm">{exam.score}</h1>
                                                                </div>
                                                                <h1 className="font-normal text-sm text-gray-600">Recorded on: {exam.date}</h1>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p className="text-base text-black font-normal">No exam history available</p>
                                                )}
                                            </td>

                                            {/* Disciplinary Record (aligned with Email) */}
                                            <td className="py-4 gap-2" colSpan={1} valign="top">
                                                <h4 className="text-gray-600 font-medium">Disciplinary Record</h4>
                                                <div className="text-sm text-gray-600 ">
                                                    <h1 className="font-bold">{student.offenseType}</h1>
                                                    <h1 className="">Recorded on: {student.timestamp}</h1>
                                                </div>
                                            </td>

                                            {/* Disciplinary Record (aligned with Email) */}
                                            <td className="py-4" colSpan={1} valign="top" />

                                            {/* Actions Section (aligned with Offense Type and Status) */}
                                            <td className="py-4 gap-2" colSpan={2} valign="top">
                                                {/* Action History */}
                                                <h4 className="text-gray-600 font-medium">Action History</h4>
                                                <div className="text-sm text-gray-600">
                                                    {student.actionHistory.map((action, index) => (
                                                        <div className="text-sm text-gray-600 my-0.5" key={index}>
                                                            <h1 className="font-bold">{action.description}</h1>
                                                            <h1 className="">Recorded on: {action.date}</h1>
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>

                                        </tr>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
