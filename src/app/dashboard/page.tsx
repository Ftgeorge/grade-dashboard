"use client";

import React, { useState, useEffect } from "react";
import { BsBarChart } from "react-icons/bs";
import { LuLayoutDashboard, LuMailOpen, LuSearch } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import { MdErrorOutline, MdSettings, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AuthFooter from "@/app/components/constants/authFooter";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
    label?: string;
    icon?: JSX.Element;
    path?: string;
    group?: string;
}

const menuItems: MenuItem[] = [
    { group: "Main" },
    { label: 'Overview', icon: <LuLayoutDashboard />, path: '/dashboard/overview' },
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
            <div className="bg-white w-80 h-screen py-6 px-8 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-black text-3xl font-montserrat font-normal"><span className="text-[#1F3A93]">G</span>rade</h1>
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
                                    className={`py-2 gap-2 flex items-center justify-start cursor-pointer ${selected === item.label ? 'border border-1 px-2 rounded-lg border-[#1F3A93] bg-primary-main' : 'border border-1 px-2 rounded-lg border-white bg-white'
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
                        <div className="w-10 h-10 rounded-full bg-black">
                            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full rounded-full" alt=""/>
                        </div>
                        <div className="flex-col flex justify-center items-center">
                            <h1 className="text-black font-normal text-sm">Fabunmi George</h1>
                            <h1 className="text-gray-500 text-xs">ftgeorgean@gmail.com</h1>
                        </div>
                    </div>
                    <AuthFooter />
                </div>
            </div>
            <div className="h-full w-full">
                <div className="w-full h-14 bg-white px-16 rounded-lg flex flex-row items-center justify-between">
                    <h1 className="font-medium text-base text-black">{today}</h1>
                    <div className="flex flex-row h-10 gap-3 justify-center items-center">
                        <LuSearch className="text-xl text-[#2D3748]" />
                        <input
                            className="rounded-xl px-4 h-10 w-96 bg-white text-[#2D3748]"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="p-5 px-16">
                    {children}
                </div>
            </div>
        </div>
    );
}
