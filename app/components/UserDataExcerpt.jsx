import Image from "next/image";
import user_icon from '../assets/user.svg'
import ButtonLay from "./buttonLay";
import readmore_horizontal from '@/app/assets/readmore_horizontal.svg'

export default function UserDataExcerpt({data}) {
    return (
        <div className="flex flex-row w-full">
            <Image src={user_icon} height={40} alt='Logo' className='me-3'/>
            <div className="flex flex-col me-auto">
                <span>Hi,</span>
                <h4 className="text-lg">{data.first_name}</h4>
            </div>
            <div className="ms-auto my-auto">
                <Image src={readmore_horizontal} width={20} alt='readmore_horizontal'/>
            </div>
        </div>
    )
}