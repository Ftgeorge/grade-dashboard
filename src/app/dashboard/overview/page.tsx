"use client";
import React, { useState, useEffect, useMemo } from 'react';
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
import { FaClock } from 'react-icons/fa6';
import RecentActivityLog from '@/app/components/card/recent-activity.card';
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
    const barData = useMemo(() => ({
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // X-axis labels
        datasets: [
            {
                label: 'Active Students',
                data: [50, 60, 55, 60, 53], // Data for the first dataset
                backgroundColor: 'rgba(31, 58, 147, 0.8)',
                borderColor: 'white',
                borderWidth: 3,
                borderRadius: { topLeft: 20, topRight: 20 }, // Add top border radius to the bars
                barThickness: 25, // Make the bars thinner
            },
            {
                label: 'Inactive Students',
                data: [20, 15, 30, 25, 23], // Data for the second dataset
                backgroundColor: 'rgba(31, 58, 147, 0.4)', // Color for the second dataset
                borderColor: 'white',
                borderWidth: 3,
                borderRadius: { topLeft: 20, topRight: 20 }, // Add top border radius to the bars
                barThickness: 25, // Make the bars thinner
            },
        ],
    }), []);

    const barOptions = useMemo(() => ({
        responsive: true,
        plugins: {
            legend: { display: false }, // Show legend
            title: { display: false, text: 'Student Activity Overview' }, // Title of the chart
            datalabels: {
                display: false, // Disable the display of data labels
            },
        },
        scales: {
            x: {
                title: { display: false, text: 'Weeks' }, // Title for X-axis
            },
            y: {
                beginAtZero: true, // Start Y-axis at zero
                title: { display: false, text: 'Number of Students' }, // Title for Y-axis
                grid: {
                    display: false, // Remove grid lines
                },
            },
        },
        interaction: {
            intersect: false, // Change this to false
        },
        barThickness: 20, // Set the width of the bars
        barSpacing: 10, // Set the spacing between the bars
    }), []);



    // Calculate Averages for Doughnut Chart
    const totalActiveStudents = barData.datasets[0].data.reduce((a, b) => a + b, 0);
    const totalInactiveStudents = barData.datasets[1].data.reduce((a, b) => a + b, 0);
    const numberOfWeeks = barData.labels.length;

    // Averages of Active and Inactive Students
    const averageActiveStudents = totalActiveStudents / numberOfWeeks;
    const averageInactiveStudents = totalInactiveStudents / numberOfWeeks;

    // Doughnut Chart Data
    const doughnutData = useMemo(() => ({
        labels: ['Currently Enrolled', 'Inactive Students'],
        datasets: [
            {
                data: [averageActiveStudents, averageInactiveStudents],
                backgroundColor: ['rgba(31, 58, 147, 0.8)', 'rgba(31, 58, 147, 0.4)'],
                hoverBackgroundColor: ['rgba(31, 58, 147, 0.8)', 'rgba(31, 58, 147, 0.4)'],
                borderColor: ['white', 'white'],
                borderWidth: 2, // No border width to avoid gaps
            },
        ],
    }), []);

    // Doughnut Chart Options
    const doughnutOptions = useMemo(() => ({
        responsive: true,
        cutout: '80%',
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        plugins: {
            legend: {
                position: 'bottom' as 'bottom',
                align: 'end' as 'end', // Add this line
                // padding: 40, // Add this line
                labels: {
                    usePointStyle: true, // Use circular legend icons
                    pointStyle: 'circle', // Specify point style as circle
                    padding: 10, // Adjust padding between legend items
                    boxWidth: 8, // Adjust legend circle size
                },
            },
            datalabels: {
                display: false, // Disable the display of data labels
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'doughnut'>) => {
                        // Cast tooltipItem.raw to number
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw; // This gets the value of the segment
                        return `${label}: ${value} students`; // Custom tooltip text
                    },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                usePointStyle: true,  // <-- Use circles instead of rectangles
            },
        },
    }), []);

    const [count, setCount] = useState(0);
    const totalExams = 260;

    useEffect(() => {
        let intervalId: any;
        const countUp = () => {
            setCount(prevCount => {
                if (prevCount < totalExams) {
                    return prevCount + 1;
                } else {
                    clearTimeout(intervalId);
                    return prevCount;
                }
            });
        };

        intervalId = setInterval(countUp, 10);
        return () => clearInterval(intervalId);
    }, []);

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
        "Student Jane Smith logged in.",
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
                <div className="flex flex-col gap-5 h-[calc(100vh-105px)] overflow-y-auto">
                    <div className="w-full flex-row flex justify-evenly gap-5">
                        <div className='flex flex-col w-full gap-5'>
                            <div className='flex flex-row gap-5 justify-between w-full'>
                                <div className='gap-5 flex-grow w-full bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5'>
                                    <div className='rounded-xl border border-1 border-primary-80 bg-primary-20 flex justify-center items-center w-12 h-12'>
                                        <FaBook className="text-primary-80 text-2xl" />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-black font-medium text-2xl'>{count}</h1>
                                        <h1 className='text-gray-700 font-normal text-base'>Total Exams monitored</h1>
                                    </div>
                                </div>
                                <div className='gap-5 w-full flex-grow bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5'>
                                    <div className='rounded-xl border border-1 border-primary-yellow bg-primary-yellow-20 flex justify-center items-center w-12 h-12'>
                                        <IoMdWarning className="text-primary-yellow text-2xl" />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-black font-medium text-2xl'>15</h1>
                                        <h1 className='text-gray-700 font-normal text-base'>Flagged offences</h1>
                                    </div>
                                </div>
                                <div className='gap-5 w-full flex-grow bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5'>
                                    <div className='rounded-xl border border-1 border-primary-green bg-primary-green-20 flex justify-center items-center w-12 h-12'>
                                        <FaBook className="text-primary-green text-2xl" />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-black font-medium text-2xl'>170</h1>
                                        <h1 className='text-gray-700 font-normal text-base'>Active Students</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full min-h-fit bg-white border border-1 border-gray-200 rounded-xl p-6 flex-col'>
                                <div className='w-full flex flex-row justify-between items-center'>
                                    <h1 className='text-black font-semibold text-base'>Student Activity Overview</h1>
                                    <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                                        <PiStudentFill className='text-black text-2xl text-primary-80' />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-8 items-center justify-between mb-5'>
                                    <div className='w-5/6 flex-grow h-72'>
                                        <Bar data={barData} options={barOptions} /> {/* Render the bar chart */}
                                    </div>
                                    <div className='w-96 h-72 relative'>
                                        <Doughnut data={doughnutData} options={doughnutOptions} />
                                        <HiUsers className='absolute inset-0 m-auto text-gray-400 text-3xl translate-y-[-50%] translate-x-[-20%]' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full min-h-fit bg-white border border-1 border-gray-200 rounded-xl p-6 flex-col'>
                                <div className='w-full flex flex-row justify-between items-center'>
                                    <h1 className='text-black font-semibold text-base'>Recent Activity Log</h1>
                                    <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-[#1F3A93]'>
                                        <FaClock className='text-black text-2xl text-primary-80' />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col'>
                                    {activityLog.map((log, index) => (
                                        <RecentActivityLog
                                            key={index}
                                            message={log}
                                            time="Just now"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='bg-white min-h-fit w-full border border-1 border-gray-200 rounded-xl p-6 flex flex-col'>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <h1 className='text-black text-base font-semibold'>Alerts/Notifications</h1>
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
                            <div className='w-full py-4 overflow-y-auto max-h-[calc(100vh-260px)]'> {/* Keep the scrollable area within the limits */}
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