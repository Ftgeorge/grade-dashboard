import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface OauthButtonProps {
    imageClassname?: string;
    onClick: () => void;
    className?: string;
    ImageSource: StaticImageData | string;
}

const OauthButton: React.FC<OauthButtonProps> = ({
    imageClassname,
    onClick,
    className,
    ImageSource
}) => {
    return (
        <div
            className={`text-white h-10 font-normal rounded-lg bg-gray-50 w-full items-center justify-center flex ${className}`}
            onClick={onClick}
        >
            <Image src={ImageSource} className={imageClassname} alt={''}/>
        </div>
    );
};

export default OauthButton;