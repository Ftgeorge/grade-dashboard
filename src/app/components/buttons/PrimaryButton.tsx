import React from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
}

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