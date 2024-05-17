import Image from "next/image";
import user_icon from '../assets/user.svg'
import ButtonLay from "./buttonLay";
import readmore_vertical from '@/app/assets/readmore_vertical.svg'

export default function UserDataExcerpt({data}) {
    return (
        <div className="flex flex-row w-full">
            <Image src={user_icon} height={40} alt='Logo' className='me-6'/>
            <div className="flex flex-col me-auto">
                <span>Hi,</span>
                <h4 className="text-xl">{data.first_name}</h4>
            </div>
            <div className="ms-auto my-auto">
                <ButtonLay>
                    <Image src={readmore_vertical} height={20} alt='readmore_vertical'/>
                </ButtonLay>
            </div>
        </div>
    )
}