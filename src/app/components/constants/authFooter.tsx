import Image from "next/image"
import Heuvera from "../../images/heuvera.png";
const AuthFooter = () => {
    return (
        <div className="w-full justify-center items-center flex">
            <div className="w-full flex flex-row gap-1 justify-center items-center">
                <h1 className="text-black text-xs">Powered by</h1>
                <div className="flex flex-row justify-center items-center gap-0.5">
                    <div className="w-3">
                    <Image src={Heuvera} alt="" className="" />
                    </div>
                    <h1 className="text-xs text-black">Heuvera</h1>
                </div>
            </div>
        </div>
    )
}
export default AuthFooter