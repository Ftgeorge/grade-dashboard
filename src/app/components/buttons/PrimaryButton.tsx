import React from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <button
            className={`text-white font-normal rounded-lg text-sm ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;