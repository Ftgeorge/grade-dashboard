import React from 'react';

interface ActionButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

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