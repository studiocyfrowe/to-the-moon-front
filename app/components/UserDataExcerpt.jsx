import Image from "next/image";
import user_icon from '../assets/user.svg'

export default function UserDataExcerpt({data}) {
    return (
        <div className="flex flex-row my-auto mx-auto">
            <Image src={user_icon} height={60} alt='Logo' className='me-6'/>
            <div className="flex flex-col">
                <span>Hi,</span>
                <h4 className="text-xl">{data.name}</h4>
                <small>{data.email}</small>
                <u className='mt-4 text-sm'>check details</u>
            </div>
        </div>
    )
}