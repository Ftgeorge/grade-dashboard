import React from 'react';
import AlertNotificationCard from './alert-notification.card';

interface RecentActivityLogProps {
    message: string;
    time: string;
}

const RecentActivityLog: React.FC<RecentActivityLogProps> = ({ message, time }) => {
    return (
        <div className='w-full'>
            <div className={`flex items-center py-3 mb-2 rounded-lg`}>
                <div className="flex-grow"> 
                        <h3 className="font-medium text-black">{message}</h3>
                    <div className='flex-row flex justify-between items-center'>
                        <p className="text-gray-500 text-xs">{time}</p>
                    </div>
                </div>
            </div>
            <div className='h-0.5 w-full bg-gray-100' />
        </div>
    );
};

export default RecentActivityLog;