import Image from 'next/image'
import user_icon from '../assets/user.svg'
import uma from '../assets/uma.jpg'
import dustin from '../assets/dustin-hofman.jpg'
import ButtonsBox from './buttonsBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export default function UserProfileHeader({data}) {
    return (
        <div className="grid grid-cols-7 gap-8 border-b border-solid border-orange-600/30 pb-8">
            <div className="col-span-3 flex">
                <div className="flex flex-col w-full">
                    <div className="rounded-full border border-solid border-orange-600 bg-orange-600/30 p-3 flex me-auto mb-4">
                        <FontAwesomeIcon icon={faUser} className='h-4 m-auto' />
                    </div>
                    <small className='mb-6'>Trochę o Tobie:</small>
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
                    {data.fav_quote ? <p className='w-4/5 mt-8'>{data.fav_quote}</p> : <div className='mt-8 text-white/30 rounded-lg bg-zinc-300/10 px-3 py-3 min-h-36'><i>Click double to input your quote...</i></div>}
                    <div className="flex flex-col mt-6">
                        <ButtonsBox></ButtonsBox>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <Image src={uma} width={800} alt='user cover photo' className='ms-auto border-2 border-solid border-orange-600 rounded-lg'/>
            </div>
        </div>
    )
}