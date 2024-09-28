"use client";
import React, { useState, useEffect } from 'react';
import DashboardLayout from "../page";
import { IoPieChartOutline } from "react-icons/io5";
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, CategoryScale, LinearScale, BarElement, Title, LineElement, PointElement } from 'chart.js';
import { TooltipItem } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { IoMdNotificationsOutline, IoMdWarning } from 'react-icons/io';
import { FaBook, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';
import FilterButton from '@/app/components/buttons/FilterButton';
import AlertNotificationCard from '@/app/components/card/alert-notification.card';
import { HiUsers } from 'react-icons/hi2';
import { PiStudentFill } from 'react-icons/pi';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, CategoryScale, LinearScale, BarElement, Title, LineElement, PointElement);

interface AlertNotificationCardProps {
    type: 'alert' | 'notification';
    message: string;
    username?: string; // optional for notifications
    studentId?: string; // optional for notifications
    profileImage?: string; // optional for alerts
    time: string;
}

export default function DashHome() {
    const multiLineData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Active Students',
                data: [50, 60, 55, 70],
                borderColor: 'rgba(40, 167, 69, 0.8)', // Green for active students
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderWidth: 2,
                fill: true,
            },
            {
                label: 'Inactive Students',
                data: [20, 15, 30, 25],
                borderColor: 'rgba(255, 0, 0, 0.8)', // Red for inactive students
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };
    const multiLineOptions = {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: 'Student Activity Overview' },
        },
        scales: {
            x: { beginAtZero: true },
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Number of Students' },
            },
        },
    };
    // Calculate Averages for Doughnut Chart
    const totalActiveStudents = multiLineData.datasets[0].data.reduce((a, b) => a + b, 0);
    const totalInactiveStudents = multiLineData.datasets[1].data.reduce((a, b) => a + b, 0);
    const numberOfWeeks = multiLineData.labels.length;

    // Averages of Active and Inactive Students
    const averageActiveStudents = totalActiveStudents / numberOfWeeks;
    const averageInactiveStudents = totalInactiveStudents / numberOfWeeks;

    // Doughnut Chart Data
    const doughnutData = {
        labels: ['Average Active Students', 'Average Inactive Students'],
        datasets: [
            {
                data: [averageActiveStudents, averageInactiveStudents],
                backgroundColor: ['rgba(40, 167, 69, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                hoverBackgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(255, 99, 132, 0.8)'],
                borderColor: ['rgba(40, 167, 69, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 2,
            },
        ],
    };

    // Doughnut Chart Options
    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                // Explicitly specify the valid legend position
                position: 'bottom' as 'bottom',
                labels: {
                    usePointStyle: true,  // This makes the legend items circular
                    pointStyle: 'circle', // Ensures the point style is a circle
                    cutout: '20%',
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'doughnut'>) => {
                        // Cast tooltipItem.raw to number
                        const value = tooltipItem.raw as number;
                        return `${tooltipItem.label}: ${value.toFixed(2)}`;
                    },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                usePointStyle: true,  // <-- Use circles instead of rectangles
            },
        },
    };

    const [count, setCount] = useState(0);
    const totalExams = 260;

    useEffect(() => {
        let intervalId: any;
        const countUp = () => {
            if (count < totalExams) {
                setCount(count + 1);
                intervalId = setTimeout(countUp, 10);
            }
        };
        countUp();
        return () => clearTimeout(intervalId);
    }, [totalExams, count]);

    // Dummy Alerts/Notifications Content
    const notifications = [
        { message: "Account creation successful for Admin user", time: "10 minutes ago", username: "Admin", studentId: "STU001234" },
        { message: "New login detected from Admin account", time: "1 hour ago", username: "Admin", studentId: "STU001234" },
        { message: "Password recovery initiated for Admin account", time: "30 minutes ago", username: "Admin", studentId: "STU005678" },
        { message: "Dashboard updated with new statistics", time: "2 hours ago" },
        { message: "New flagged offense recorded: Student talking during exam", time: "3 hours ago", username: "Dr. Brown", studentId: "STU009876" },
        { message: "Active students count updated: 120 active students", time: "4 hours ago" },
        { message: "New exam event scheduled: Mathematics exam", time: "5 hours ago", username: "Mark Johnson", studentId: "STU012345" },
        { message: "Feedback received for exam proctoring system", time: "6 hours ago" },
        { message: "Exam results posted for latest Biology exam", time: "7 hours ago", username: "Admin", studentId: "STU001234" },
        { message: "System maintenance completed successfully", time: "8 hours ago", username: "Exam Team", studentId: "STU001234" },
        { message: "New exam resources uploaded for students", time: "9 hours ago" },
        { message: "Alerts system updated with new parameters", time: "10 hours ago", username: "Exam Team", studentId: "STU001234" },
    ];

    const alerts = [
        { message: "Malpractice detected: Student ID STU015678 - Talking during exam", time: "5 minutes ago", username: "John Doe", studentId: "STU015678" },
        { message: "Security alert: Unusual login activity from Student ID STU005678", time: "15 minutes ago", username: "Jane Smith", studentId: "STU005678" },
        { message: "Urgent: Unauthorized access attempt detected", time: "20 minutes ago", username: "Security Team", studentId: "STU999999" },
        { message: "Important: Exam schedule has been updated", time: "1 hour ago", username: "Admin", studentId: "STU001234" },
        { message: "Reminder: Exam proctoring system active during exams", time: "2 hours ago", username: "Admin", studentId: "STU001234" },
        { message: "Warning: Irregular behavior detected in exam attempt by STU001234", time: "3 hours ago", username: "Admin", studentId: "STU001234" },
        { message: "Action required: Verify identity for exam ID STU001234", time: "4 hours ago", username: "Admin", studentId: "STU001234" },
        { message: "New violation reported: Late submission by STU012345", time: "5 hours ago", username: "Admin", studentId: "STU001234" },
    ];


    const shuffleArray = (array: any[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };
    const [filter, setFilter] = useState('all');

    // Dummy Activity Log Content
    const activityLog = [
        "Student John Doe flagged for talking.",
        "Student Jane Smith logged in.",
        "Cheating detected in Mathematics exam.",
        "Device tampering detected in History exam.",
    ];
    const filterOptions = [
        { label: 'All', count: notifications.length + alerts.length, value: 'all' },
        { label: 'Alerts', count: alerts.length, value: 'alerts' },
        { label: 'Notifications', count: notifications.length, value: 'notifications' },
    ];

    return (
        <>
            <DashboardLayout>
                <div className="flex flex-col gap-5">
                    <div className="w-full flex-row flex justify-evenly gap-10">
                        <div className='flex flex-col w-full gap-10'>
                            <div className='flex flex-row gap-10 justify-between w-full'>
                                <div className='gap-10 w-80 bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5'>
                                    <div className='rounded-xl border border-1 border-primary-80 bg-primary-20 flex justify-center items-center w-12 h-12'>
                                        <FaBook className="text-primary-80 text-2xl" />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-black font-medium text-2xl'>{count}</h1>
                                        <h1 className='text-gray-700 font-normal text-base'>Total Exams monitored</h1>
                                    </div>
                                </div>
                                <div className='gap-10 w-80 bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5'>
                                    <div className='rounded-xl border border-1 border-primary-yellow bg-primary-yellow-20 flex justify-center items-center w-12 h-12'>
                                        <IoMdWarning className="text-primary-yellow text-2xl" />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-black font-medium text-2xl'>15</h1>
                                        <h1 className='text-gray-700 font-normal text-base'>Flagged offences</h1>
                                    </div>
                                </div>
                                <div className='gap-10 w-80 bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5'>
                                    <div className='rounded-xl border border-1 border-primary-green bg-primary-green-20 flex justify-center items-center w-12 h-12'>
                                        <FaBook className="text-primary-green text-2xl" />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-black font-medium text-2xl'>170</h1>
                                        <h1 className='text-gray-700 font-normal text-base'>Active Students</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex-grow h-full bg-white border border-1 border-gray-200 rounded-xl p-6'>
                                <div className='w-full flex flex-row justify-between items-center'>
                                    <h1 className='text-black font-medium text-xl'>Student Activity Overview</h1>
                                    <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                                        <PiStudentFill className='text-black text-2xl text-primary-80' />
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                    <div className='W-full flex-grow'>
                                        <Line data={multiLineData} options={multiLineOptions} />
                                    </div>
                                    <div className='relative w-80'>
                                        <Doughnut data={doughnutData} options={doughnutOptions} />
                                        <HiUsers className='absolute inset-0 m-auto text-gray-400 text-3xl' />
                                    </div>                               </div>
                            </div>
                        </div>
                        <div className='bg-white flex-grow w-full border border-1 border-gray-200 rounded-xl p-6 flex flex-col h-5/6'>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <h1 className='text-black text-xl font-medium'>Alerts/Notifications</h1>
                                <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                                    <BiErrorCircle className='text-black text-2xl text-primary-80' />
                                </div>
                            </div>
                            <div className='flex flex-row justify-evenly items-center mt-4 border border-1 border-gray-100 rounded-lg py-1 h-10'>
                                {filterOptions.map((option, index) => (
                                    <FilterButton
                                        key={index}
                                        label={option.label}
                                        count={option.count}
                                        active={filter === option.value}
                                        onClick={() => setFilter(option.value)}
                                    />
                                ))}
                            </div>
                            <div className='w-full py-4 flex-grow h-full overflow-y-auto'> {/* Keep the scrollable area within the limits */}
                                {filter === 'all' && (
                                    <>
                                        {/* Combine notifications and alerts */}
                                        {shuffleArray([...notifications, ...alerts]).map((item, index) => (
                                            <AlertNotificationCard
                                                key={index}
                                                type={item.profileImage ? 'alert' : 'notification'}
                                                message={item.message}
                                                username={item.username}
                                                studentId={item.studentId}
                                                profileImage={item.profileImage}
                                                time={item.time}
                                            />
                                        ))}
                                    </>
                                )}
                                {filter === 'alerts' && alerts.map((alert, index) => (
                                    <AlertNotificationCard
                                        key={index}
                                        type='alert'
                                        message={alert.message}
                                        username={alert.username}
                                        studentId={alert.studentId}
                                        time={alert.time}
                                    />
                                ))}
                                {filter === 'notifications' && notifications.map((notification, index) => (
                                    <AlertNotificationCard
                                        key={index}
                                        type='notification'
                                        message={notification.message}
                                        time="Just now"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}