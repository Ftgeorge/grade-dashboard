import Image, { StaticImageData } from 'next/image';

import heuvera from "../images/heuvera.png";


const PoweredByLogo = () => {
    return (
        <div className="w-full justify-center items-center flex">
            <div className="w-full flex flex-col gap-1 justify-center items-center">
                <h1 className="text-gray-600 text-xs">from</h1>
                <div className="flex flex-row justify-center items-center gap-0.5">
                    <div className="w-3">
                        <Image src={heuvera} alt="" className='w-full h-full' width={5} height={5} />
                    </div>
                    <h1 className="text-xs text-black">Heuvera</h1>
                </div>
            </div>
        </div>
    );
};

export default PoweredByLogo;