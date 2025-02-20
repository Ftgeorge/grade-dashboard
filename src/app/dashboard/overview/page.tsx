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
import DashboardCard from '@/app/components/card/overview.card';
import StudentActivityOverview from '@/app/components/Graphs/StudentActivityOverview';
import SectionHeader from '@/app/constants/SectionHeader';
import { notifications, alerts, dashboardComponents, activityLog, filterOptions } from '@/app/data/overview/arrays';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, CategoryScale, LinearScale, BarElement, Title, LineElement, PointElement);



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
    
    const shuffleArray = (array: any[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };
    const [filter, setFilter] = useState('all');
    
    return (
        <>
            <DashboardLayout>
                <div className="flex flex-col gap-5 h-[calc(100vh-105px)] overflow-y-auto">
                    <div className="w-full flex-row flex justify-evenly gap-5">
                        <div className='flex flex-col w-full gap-5'>
                            <div className='flex flex-row gap-5 justify-between w-full'>
                                {dashboardComponents.map((item, index) => (
                                    <DashboardCard key={index} {...item} />
                                ))}
                            </div>
                            <StudentActivityOverview
                                barData={barData}
                                barOptions={barOptions}
                                doughnutData={doughnutData}
                                doughnutOptions={doughnutOptions}
                            />
                            <div className='w-full flex-1 bg-white border border-1 border-gray-200 rounded-xl p-6 flex-col'>
                                <SectionHeader title='Recent Activity Log' Icon={FaClock} />
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
                            <SectionHeader title='Alerts/Notifications' Icon={BiErrorCircle} />
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
                            <div className='w-full py-4 overflow-y-auto max-h-[calc(100vh-260px)]'>
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