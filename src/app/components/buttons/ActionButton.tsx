import { ActionButtonProps } from '@/app/data/list';
import React from 'react';


const ActionButton: React.FC<ActionButtonProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <button
            className={`font-normal rounded-lg h-12 rounded-lg border border-1 px-4 flex flex-row gap-2 items-center justify-center ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ActionButton;