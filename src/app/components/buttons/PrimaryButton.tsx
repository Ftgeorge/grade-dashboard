import { PrimaryButtonProps } from '@/app/data/list';
import React from 'react';



const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    className,
    disabled, 
}) => {
    return (
        <button
            className={`text-white font-normal rounded-lg text-xs ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;