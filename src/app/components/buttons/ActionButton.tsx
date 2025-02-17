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
            className={`font-normal rounded-lg h-14 rounded-lg border border-1 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ActionButton;