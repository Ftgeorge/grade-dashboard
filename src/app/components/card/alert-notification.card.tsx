import { AlertNotificationCardProps } from '@/app/data/list';
import React from 'react';



const AlertNotificationCard: React.FC<AlertNotificationCardProps> = ({
    type,
    message,
    username,
    studentId,
    profileImage,
    time,
}) => {
    return (
        <div className='w-full'>
            <div className={`flex items-center p-3 mb-2 rounded-lg ${type === 'alert' ? 'bg-white' : 'bg-white'}`}>
                {profileImage && (
                    <div className='w-14 h-14 rounded-full overflow-hidden flex-shrink-0'> {/* Added flex-shrink-0 */}
                        <img 
                            src={profileImage} 
                            alt={`${username}'s profile`} 
                            className="w-full h-full object-cover" 
                            style={{ maxHeight: '56px', maxWidth: '56px' }} // Fix the image size directly
                        />
                    </div>
                )}
                <div className="flex-grow ml-3"> {/* Added margin to separate text from the image */}
                    {type === 'alert' ? (
                        <h3 className="font-medium text-red-600">{message}</h3>
                    ) : (
                        <h3 className="font-medium text-black">{message}</h3>
                    )}
                    <div className='flex-row flex justify-between items-center'>
                        {username && studentId && (
                            <p className="text-gray-600 font-normal text-sm">Mat no: {studentId}</p>
                        )}
                        <p className="text-gray-500 font-normal text-xs">{time}</p>
                    </div>
                </div>
            </div>
            <div className='h-0.5 w-full bg-gray-100' />
        </div>
    );
};

export default AlertNotificationCard;
