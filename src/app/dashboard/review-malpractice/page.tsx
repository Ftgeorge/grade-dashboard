"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../page";
import { PiStudentFill } from "react-icons/pi";
import { BsFillFileTextFill } from 'react-icons/bs';
import { AiOutlineExclamationCircle, AiOutlineFileText } from 'react-icons/ai';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaRegClipboard, FaVideo } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";


const offenses = [
    {
        id: 1,
        studentId: 'S12345',
        studentName: 'John Doe',
        timestamp: '2023-09-15 10:30:45',
        offenseType: 'Talking During Exam',
        status: 'Pending Review',
        profileImage: 'https://images.unsplash.com/photo-1551692703-f4941f2f0f6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 2,
        studentId: 'S12346',
        studentName: 'Jane Smith',
        timestamp: '2023-09-15 11:00:22',
        offenseType: 'Head Movement Detected',
        status: 'Resolved',
        profileImage: 'https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 3,
        studentId: 'S12347',
        studentName: 'Michael Johnson',
        timestamp: '2023-09-15 12:45:18',
        offenseType: 'Using Phone',
        status: 'Terminated',
        profileImage: 'https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 4,
        studentId: 'S12348',
        studentName: 'Emily Davis',
        timestamp: '2023-09-16 09:20:10',
        offenseType: 'Disruption During Exam',
        status: 'Pending Review',
        profileImage: 'https://images.unsplash.com/photo-1529663557617-39f3243b531a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 5,
        studentId: 'S12349',
        studentName: 'Daniel Lee',
        timestamp: '2023-09-16 10:15:00',
        offenseType: 'Looking Around Frequently',
        status: 'Resolved',
        profileImage: 'https://images.unsplash.com/photo-1552493450-2b5ce80ed13f?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 6,
        studentId: 'S12350',
        studentName: 'Sophia Brown',
        timestamp: '2023-09-17 11:05:30',
        offenseType: 'Unauthorized Materials',
        status: 'Terminated',
        profileImage: 'https://images.unsplash.com/photo-1531558297330-791932f4f398?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 7,
        studentId: 'S12351',
        studentName: 'Matthew Wilson',
        timestamp: '2023-09-17 12:50:25',
        offenseType: 'Inappropriate Behavior',
        status: 'Pending Review',
        profileImage: 'https://images.unsplash.com/photo-1532332248682-206cc786359f?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 8,
        studentId: 'S12352',
        studentName: 'Olivia Martinez',
        timestamp: '2023-09-18 08:40:12',
        offenseType: 'Vandalism of Exam Materials',
        status: 'Resolved',
        profileImage: 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 9,
        studentId: 'S12353',
        studentName: 'James Anderson',
        timestamp: '2023-09-18 09:30:45',
        offenseType: 'Cheating',
        status: 'Terminated',
        profileImage: 'https://images.unsplash.com/photo-1440451185281-11ff5853ce0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 10,
        studentId: 'S12354',
        studentName: 'Isabella Taylor',
        timestamp: '2023-09-19 11:25:30',
        offenseType: 'Skipping Exam',
        status: 'Pending Review',
        profileImage: 'https://images.unsplash.com/photo-1617244145995-f79f45448c5c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 11,
        studentId: 'S12355',
        studentName: 'Alexander Thompson',
        timestamp: '2023-09-19 13:10:15',
        offenseType: 'Bullying During Exam',
        status: 'Resolved',
        profileImage: 'https://images.unsplash.com/photo-1536139414673-1b479272ea38?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 12,
        studentId: 'S12356',
        studentName: 'Mia Jackson',
        timestamp: '2023-09-20 14:05:20',
        offenseType: 'Disruptive Behavior',
        status: 'Terminated',
        profileImage: 'https://images.unsplash.com/photo-1551692702-edf4a1d740bf?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },

];

export default function ReviewMalpractice() {
    const [selectedOffense, setSelectedOffense] = useState<number | null>(null);
    const [videoUrl, setVideoUrl] = useState<string>(''); // Change from null to empty string

    const [isAnimating, setIsAnimating] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending Review':
                return isAnimating ? 'text-primary-dark-yellow' : 'text-primary-yellow'; // Use the darker shade when animating
            case 'Resolved':
                return 'text-primary-green'; // Green for reviewed
            case 'Terminated':
                return 'text-primary-red'; // Red for terminated
            default:
                return '';
        }
    };

    useEffect(() => {
        const animateColorChange = () => {
            setIsAnimating(true);
            const interval = setInterval(() => {
                setIsAnimating(prev => !prev);
            }, 500);

            return () => clearInterval(interval); // Cleanup on unmount
        };

        // Trigger the animation if any offense is pending review
        const hasPendingReview = offenses.some(offense => offense.status === 'Pending Review');
        if (hasPendingReview) {
            animateColorChange();
        } else {
            setIsAnimating(false); // Reset animation if no pending reviews
        }
    }, [offenses]);

    const handleRowClick = (offense: { id: number; videoUrl: string }) => {
        // Toggle the selected row
        if (selectedOffense === offense.id) {
            setSelectedOffense(null);
            setVideoUrl(''); // Clear the video when deselecting
        } else {
            setSelectedOffense(offense.id);
            setVideoUrl(offense.videoUrl); // Set the video URL on selection
        }
    };

    // Action handlers
    const handleEscalate = () => {
        alert('Escalate issued to the student.');
        // Implement the logic for warning here
    };

    const handleMarkAsViewed = () => {
        alert('Student marked as viewed.');
        // Implement the logic for marking for review here
    };

    const handleBlockStudent = () => {
        alert('Student blocked from the exam.');
        // Implement the logic for termination here
    };

    return (
        <DashboardLayout>
            <div className="w-full flex flex-row gap-5 h-[calc(100vh-105px)] overflow-y-auto">
                {/* Table Section */}
                <div className="bg-white border border-1 border-gray-200 rounded-xl w-3/4 p-5">
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h2 className="text-black font-semibold text-base mb-4">Offense Records</h2>
                        <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                            <LiaClipboardListSolid className='text-black text-2xl text-primary-80' />
                        </div>
                    </div>

                    <table className="min-w-full table-auto overflow-y-auto">
                        <thead>
                            <tr className="text-left bg-white">
                                <th className="py-2 text-gray-400 font-medium text-xs">Profile</th>
                                <th className="py-2 text-gray-400 font-medium text-xs">Student Name</th>
                                <th className="py-2 text-gray-400 font-medium text-xs">Student ID</th>
                                <th className="py-2 text-gray-400 font-medium text-xs">Timestamp</th>
                                <th className="py-2 text-gray-400 font-medium text-xs">Type of Offense</th>
                                <th className="py-2 text-gray-400 font-medium text-xs">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offenses.map((offense) => (
                                <tr
                                    key={offense.id}
                                    className={`cursor-pointer p-5 ${selectedOffense === offense.id ? 'shadow-lg' : ''
                                        } hover:bg-gray-100`}
                                    onClick={() => handleRowClick(offense)}
                                >
                                    <td className="px-4 py-2">
                                        <img
                                            src={offense.profileImage}
                                            alt={`${offense.studentName} profile`}
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </td>
                                    <td className="py-2 text-gray-700 text-sm">{offense.studentName}</td>
                                    <td className="py-2 text-gray-700 text-sm">{offense.studentId}</td>
                                    <td className="py-2 text-gray-700 text-sm">{offense.timestamp}</td>
                                    <td className="py-2 text-gray-700 text-sm">{offense.offenseType}</td>
                                    <td className={`py-2 text-sm ${getStatusColor(offense.status)}`}>
                                        {offense.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Selected Offense Details Section */}
                <div className="flex flex-col gap-5">
                    {/* Selected Offense Video Playback */}
                    <div className="w-full flex flex-col min-h-fit bg-white border border-1 border-gray-200 rounded-xl p-4">
                        <div className='w-full flex flex-row justify-between items-center'>
                            <h2 className="text-black font-semibold text-base mb-4">Recorded Violations</h2>
                            <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                                <FaVideo className='text-black text-2xl text-primary-80' />
                            </div>
                        </div>

                        {/* Video Player with proper fit */}
                        <div className="w-full h-60 mt-4 rounded-xl overflow-hidden flex justify-center items-center">
                            {selectedOffense ? (
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    src={videoUrl}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <p className="text-gray-500 font-medium">Select an offense to view details.</p>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons Section */}
                    <div className="w-full flex-grow bg-white border border-1 border-gray-200 rounded-xl p-4 flex flex-col">
                        <div className='w-full flex flex-row justify-between items-center'>
                            <h2 className="text-black font-semibold text-base mb-4">Incident Decision</h2>
                            <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                                <AiOutlineExclamationCircle className='text-black text-2xl text-primary-80' />
                            </div>
                        </div>

                        <div className="flex justify-between flex-col mt-4 flex-grow">
                            {offenses.filter((offense) => offense.id === selectedOffense).map((offense, index) => (
                                <div key={index} className="w-full flex flex-row gap-5 mb-4">
                                    {/* Profile Image */}
                                    <img
                                        src={offense.profileImage}
                                        alt={offense.studentName}
                                        className="rounded-lg h-40 w-40 object-cover"
                                    />

                                    {/* Offense Details */}
                                    <div className="flex flex-col justify-start gap-2">
                                        <h1 className="text-gray-900 font-medium text-base">{offense.studentName}</h1>
                                        <h1 className="text-gray-700 font-medium text-sm">ID: {offense.studentId}</h1>
                                        <h1 className="text-gray-600 font-medium text-sm">Offense: {offense.offenseType}</h1>
                                        <h1 className={`font-medium text-sm ${getStatusColor(offense.status)}`}><span className="text-gray-600">Status:</span> {offense.status}</h1>
                                        <h1 className="text-gray-500 font-medium text-sm">
                                            {new Date(offense.timestamp).toLocaleString()}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons with new names and RGBA color styling */}
                        {offenses.filter((offense) => offense.id === selectedOffense).map((offense, index) => (
                            offense.status === 'Pending Review' && (
                                <div key={index} className="flex flex-col w-full space-y-3">
                                    <button
                                        onClick={handleMarkAsViewed}
                                        className="h-14 rounded-lg border border-1 bg-primary-green-20 text-primary-green border-primary-green"
                                    >
                                        Mark as Reviewed
                                    </button>
                                    <button
                                        onClick={handleBlockStudent}
                                        className="text-white h-14 rounded-lg border border-1 border-primary-red bg-primary-red-20 text-primary-red"
                                    >
                                        Block Student
                                    </button>
                                    <button
                                        onClick={handleEscalate}
                                        className="h-14 rounded-lg border border-1 bg-primary-yellow-20 text-primary-yellow border-primary-yellow"
                                    >
                                        Escalate to Further Action
                                    </button>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout >
    );
}
