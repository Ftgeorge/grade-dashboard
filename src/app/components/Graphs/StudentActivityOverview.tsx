import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { PiStudentFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { ChartData, ChartOptions } from "chart.js";
import SectionHeader from "../constants/SectionHeader";

type StudentActivityProps = {
    barData: ChartData<"bar">;
    barOptions: ChartOptions<"bar">;
    doughnutData: ChartData<"doughnut">;
    doughnutOptions: ChartOptions<"doughnut">;
};

const StudentActivityOverview: React.FC<StudentActivityProps> = ({ barData, barOptions, doughnutData, doughnutOptions }) => {
    return (
        <div className='w-full min-h-fit bg-white border border-1 border-gray-200 rounded-xl p-6 flex-col'>
            <SectionHeader title="Student Activity Overview" Icon={PiStudentFill} />
            <div className='flex flex-row gap-8 items-center justify-between mb-5'>
                <div className='w-5/6 flex-grow h-72'>
                    <Bar data={barData} options={barOptions} />
                </div>
                <div className='w-96 h-72 relative'>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                    <HiUsers className='absolute inset-0 m-auto text-gray-400 text-3xl translate-y-[-50%] translate-x-[-20%]' />
                </div>
            </div>
        </div>
    );
};

export default StudentActivityOverview;