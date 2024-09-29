"use client";

import React, { useState } from "react";
import DashboardLayout from "../page";
import { FaBook } from "react-icons/fa6";
import { BiBlock, BiCheck, BiDownload } from "react-icons/bi";
import { mockData, Student } from "@/app/components/mockData";





const getStatusColor = (status: "blocked") => {
    return status === "blocked" ? "text-green-500" : "text-red-500";
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

    return (
        <DashboardLayout>
            <div className="p-4 rounded-xl bg-white border border-1 border-gray-200">
                <div className='w-full flex flex-row justify-between items-center mb-4'>
                    <h2 className="text-black font-semibold text-base">Student Records</h2>
                    <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                        <FaBook className='text-black text-2xl text-primary-80' />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center gap-4 mb-4">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 px-4 flex-grow border border-gray-300 rounded-lg h-12"
                    />

                    {/* Bulk Actions */}
                    <div className="flex-row flex gap-4">
                        <button
                            className="bg-primary-red-20 border border-1 border-primary-red text-primary-red h-12 px-3 rounded-lg flex flex-row gap-2 items-center justify-center"
                            onClick={() => setStudents(students.map((student) => selectedStudents.includes(student.id) ? { ...student, status: 'blocked' } : student))}
                        >
                            Block Selected
                            <BiBlock className="text-xl" />
                        </button>
                        <button
                            className="bg-primary-green-20 border border-1 border-primary-green text-primary-green h-12 px-3 rounded-lg flex flex-row gap-2 items-center justify-center"
                            onClick={() => setStudents(students.map((student) => selectedStudents.includes(student.id) ? { ...student, status: 'active' } : student))}
                        >
                            Unblock Selected
                            <BiCheck className="text-xl" />
                        </button>
                        <button
                            className="bg-primary-20 border border-1 border-primary text-primary h-12 px-3 rounded-lg flex flex-row gap-2 items-center justify-center"
                            onClick={handleDownloadCSV}
                        >
                            Download CSV
                            <BiDownload className="text-xl" />
                        </button>
                    </div>
                </div>

                {/* Student Table */}
                <table className="min-w-full table-auto overflow-y-auto">
                    <thead>
                        <tr className="text-left bg-white">
                            <th className="py-2 text-gray-400 font-medium text-xs">Select</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Profile</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Student Name</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Student ID</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Email</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Timestamp</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Type of Offense</th>
                            <th className="py-2 text-gray-400 font-medium text-xs">Status</th>
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
                                    <td className="px-4 py-2">
                                        <img
                                            src={student.profileImage}
                                            alt={`${student.studentName} profile`}
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </td>
                                    <td className="py-2 text-gray-700 text-sm">{student.studentName}</td>
                                    <td className="py-2 text-gray-700 text-sm">{student.studentId}</td>
                                    <td className="py-2 text-gray-700 text-sm">{student.email}</td>
                                    <td className="py-2 text-gray-700 text-sm">{student.timestamp}</td>
                                    <td className="py-2 text-gray-700 text-sm">{student.offenseType}</td>
                                    <td className={`py-2 text-sm`}>
                                        {student.status}
                                    </td>
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
