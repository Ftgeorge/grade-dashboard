import { IconType } from "react-icons";

interface HeaderProps {
    title: string;
    Icon: IconType;
};


const SectionHeader: React.FC<HeaderProps> = ({ title, Icon }) => {
    return (
        <div className='w-full flex flex-row justify-between items-center'>
            <h1 className='text-black font-semibold text-base'>{title}</h1>
            <div className='rounded-xl bg-primary-20 flex justify-center items-center w-12 h-12 border border-1 border-primary'>
                <Icon className='text-black text-2xl text-primary-80' />
            </div>
        </div>
    );
};

export default SectionHeader;