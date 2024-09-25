"use client";

import React, { useState, useEffect } from "react";
import { BsBarChart } from "react-icons/bs";
import { LuLayoutDashboard, LuMailOpen } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import { MdErrorOutline, MdSettings, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AuthFooter from "@/app/components/constants/authFooter";
import { useRouter, usePathname } from "next/navigation";

interface MenuItem {
    label?: string;
    icon?: JSX.Element;
    path?: string;
    group?: string;
}

const menuItems: MenuItem[] = [
    { group: "Main" },
    { label: 'Home', icon: <LuLayoutDashboard />, path: '/dashboard/home' },
    { label: 'Review Malpractice', icon: <MdErrorOutline />, path: '/dashboard/review-malpractice' },
    { label: 'Student Management', icon: <FaUserGraduate />, path: '/dashboard/student-management' },
    { label: 'Reports', icon: <BsBarChart />, path: '/dashboard/reports' },
    { group: "Help" },
    { label: 'Settings', icon: <MdSettings />, path: '/dashboard/settings' },
    { label: 'Notifications', icon: <IoMdNotificationsOutline />, path: '/dashboard/notifications' },
    { label: 'Support', icon: <LuMailOpen />, path: '/dashboard/notifications' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode, }) {
    const router = useRouter();
    const pathname = usePathname();
    const [selected, setSelected] = useState<string>('');

    useEffect(() => {
        const activeMenuItem = menuItems.find((item) => item.path && pathname.startsWith(item.path));
        if (activeMenuItem && activeMenuItem.label) {
            setSelected(activeMenuItem.label);
        }
    }, [pathname]);

    const handleMenuItemClick = (label: string, path: string) => {
        setSelected(label);
        router.push(path);
    };

    const [today, setToday] = useState<string>('');

    useEffect(() => {
        const currentDate = new Date();
        const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
        const dayOfMonth = currentDate.getDate();
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
        setToday(`${dayOfWeek} ${dayOfMonth} ${month}`);
    }, []);

    return (
        <div className="bg-gray-50 w-full h-screen flex flex-row justify-start items-center">
            <div className="bg-white w-72 h-screen p-4 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-black text-2xl font-normal"><span className="text-[#1F3A93]">G</span>rade</h1>
                    <MdOutlineSpaceDashboard className="text-gray-400 text-xl" />
                </div>
                <div className="py-2 gap-2 flex flex-col">
                    {menuItems.map((item, index) => {
                        if (!item.label) {
                            return (
                                <div key={`group-${index}`} className="pt-2 pb-1">
                                    <h2 className="text-gray-500 text-xs font-medium">{item.group}</h2>
                                </div>
                            );
                        }
                        return (
                            <div key={item.label}>
                                <div
                                    className={`py-2 gap-2 flex items-center justify-start cursor-pointer ${selected === item.label ? 'border border-1 px-2 rounded-lg border-[#1F3A93] bg-primary-80' : 'border border-1 px-2 rounded-lg border-white bg-white'
                                        }`}
                                    onClick={() => handleMenuItemClick(item.label ?? '', item.path ?? '')}
                                >
                                    {React.cloneElement(item.icon!, {
                                        className: `text-lg ${selected === item.label ? 'text-[#1F3A93]' : 'text-gray-500'}`,
                                    })}
                                    <h1
                                        className={`text-sm ${selected === item.label ? 'font-medium text-[#1F3A93]' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full mt-auto mb-5 flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-black"></div>
                        <div className="flex-col flex justify-center items-center">
                            <h1 className="text-black font-normal text-sm">Fabunmi George</h1>
                            <h1 className="text-gray-500 text-xs">ftgeorgean@gmail.com</h1>
                        </div>
                    </div>
                    <AuthFooter />
                </div>
            </div>
            <div className="h-screen w-full">
                <div className="w-full h-20 bg-white px-4 rounded-lg flex flex-row items-center justify-between">
                    <h1 className="font-medium text-base text-black">{today}</h1>
                    <div className="flex flex-row h-10 gap-3 justify-center items-center">
                        <input className="rounded-3xl px-4 h-12 w-96 bg-gray-100" placeholder="search" />
                    </div>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
