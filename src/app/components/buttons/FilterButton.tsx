import React from 'react';

interface FilterButtonProps extends React.ComponentProps<'button'> {
    label: string;
    count: number;
    active: boolean;
}

const FilterButton = ({ label, count, active, ...props }: FilterButtonProps) => {
    return (
        <button
            className={`text-gray-700 px-4 font-normal text-sm h-full rounded-lg ${active ? 'bg-white text-primary-80 shadow shadow-base' : 'bg-white'}`}
            {...props}
        >
            {label} <span className={`p-1 px-2 rounded-md text-primary-80 font-medium text-sm ${active ? 'text-primary-80 bg-primary-20' : 'text-gray-800 bg-gray-100'}`}>{count}</span>
        </button>
    );
};
export default FilterButton;