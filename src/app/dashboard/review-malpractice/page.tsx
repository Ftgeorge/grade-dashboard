"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../page";
import { PiStudentFill } from "react-icons/pi";
import { BsFillFileTextFill } from 'react-icons/bs';
import { AiOutlineExclamationCircle, AiOutlineFileText } from 'react-icons/ai';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaRegClipboard, FaVideo } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";
import SectionHeader from "@/app/constants/SectionHeader";
import TableHeaderText from "@/app/components/Table/TableHeaderText";
import TableContentForm from "@/app/components/Table/TableContentForm";
import OffenseDetailForm from "@/app/components/Forms/OffenseDetailForm";
import ActionButton from "@/app/components/buttons/ActionButton";
import { offenses } from "@/app/data/review-malprtactice/arrays";


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

    const ReviewMalpracticeHeaders = [
        {
            headerText: "Profile"
        },
        {

            headerText: "Student Name"
        },
        {

            headerText: "Student ID"
        },
        {

            headerText: "Timestamp"
        },
        {

            headerText: "Type of Offense"
        },
        {

            headerText: "Status"
        },
    ];

    const IncidentDecisionButtons = [
        {
            placeholder: 'Mark as Reviewed',
            color: "bg-primary-green-20 text-primary-green border-primary-green",
            onClick: { handleMarkAsViewed }
        },
        {
            placeholder: 'Block Student',
            color: "border-primary-red bg-primary-red-20 text-primary-red",
            onClick: { handleBlockStudent }
        },
        {
            placeholder: 'Escalate to Further Action',
            color: "bg-primary-yellow-20 text-primary-yellow border-primary-yellow",
            onClick: { handleEscalate }
        }
    ]

    return (
        <DashboardLayout>
            <div className="w-full flex flex-row gap-5 h-[calc(100vh-105px)] overflow-y-auto">
                {/* Table Section */}
                <div className="bg-white border border-1 border-gray-200 rounded-xl w-3/4 p-5">
                    <SectionHeader title="Offense Records" Icon={LiaClipboardListSolid} />
                    <table className="min-w-full table-auto overflow-y-auto">
                        <thead>
                            <tr className="text-left bg-white">
                                {ReviewMalpracticeHeaders.map((headerText) => (
                                    <TableHeaderText placeholder={headerText.headerText} />
                                ))}
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
                                    <TableContentForm
                                        profileImage={offense.profileImage}
                                        studentName={offense.studentName}
                                        studentId={offense.studentId}
                                        timestamp={offense.timestamp}
                                        offenseType={offense.offenseType}
                                        color={getStatusColor(offense.status)}
                                        status={offense.status}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Selected Offense Details Section */}
                <div className="flex flex-col gap-5 flex-1">
                    {/* Selected Offense Video Playback */}
                    <div className="w-full flex flex-col min-h-fit bg-white border border-1 border-gray-200 rounded-xl p-4">

                        <SectionHeader title="Recorded Violations" Icon={FaVideo} />

                        {/* Video Player with proper fit */}
                        <div className="w-full h-52 mt-4 rounded-xl overflow-hidden flex justify-center items-center">
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
                        <SectionHeader title="Incident Decision" Icon={AiOutlineExclamationCircle} />
                        <div className="flex justify-between flex-col mt-4 flex-grow">
                            {offenses.filter((offense) => offense.id === selectedOffense).map((offense, index) => (
                                <OffenseDetailForm
                                    offenseType={offense.offenseType}
                                    profileImage={offense.profileImage}
                                    color={getStatusColor(offense.status)}
                                    timestamp={offense.timestamp}
                                    studentId={offense.studentId}
                                    studentName={offense.studentName}
                                    status={offense.status}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Buttons with new names and RGBA color styling */}
                        {offenses.filter((offense) => offense.id === selectedOffense).map((offense, index) => (
                            offense.status === 'Pending Review' && (
                                <div key={index} className="flex flex-col w-full space-y-3">
                                    {IncidentDecisionButtons.map((buttons) => (
                                        <ActionButton
                                            onClick={() => { }}
                                            className={`${buttons.color}`}
                                        >
                                            {buttons.placeholder}
                                        </ActionButton>
                                    ))}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout >
    );
}
