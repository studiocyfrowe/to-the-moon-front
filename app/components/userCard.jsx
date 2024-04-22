import Image from 'next/image'
import dustin from '../assets/dustin-hofman.jpg'

export default function UserCard({data}) {
    return (
        <div className="flex flex-row">
            {dustin ? <div className='w-24 h-24 border-2 border-solid border-orange-600 rounded-full me-6' style={{
                backgroundImage: `url(${dustin.src})`,
                backgroundSize: `cover`
            }}></div> : <Image src={user_icon} height={90} alt='Logo' className='me-6'/>}
            <div className="flex flex-col my-auto">
                <h4 className="text-2xl">{data.first_name} {data.last_name}</h4>
                <small>{data.email}</small>
                <small>od: {data.created_at}</small>
            </div>
        </div>
    )
}