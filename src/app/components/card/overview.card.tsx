import { DashboardCardProps } from "@/app/data/list";
import React from "react";
import { IconType } from "react-icons";



const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, count, label, borderColor, bgColor, textColor }) => {
    return (
        <div className="gap-5 flex-grow w-full bg-white h-32 flex flex-row items-center justify-center border border-1 border-gray-200 rounded-xl p-5">
            <div className={`rounded-xl border border-1 ${borderColor} ${bgColor} flex justify-center items-center w-12 h-12`}>
                <Icon className={`${textColor} text-2xl`} />
            </div>
            <div className="flex flex-col gap-0">
                <h1 className="text-black font-medium text-2xl">{count}</h1>
                <h1 className="text-gray-700 font-normal text-base">{label}</h1>
            </div>
        </div>
    );
};
export default DashboardCard;
