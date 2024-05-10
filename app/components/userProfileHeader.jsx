import Image from 'next/image'
import user_icon from '../assets/user.svg'
import uma from '../assets/uma.jpg'
import dustin from '../assets/dustin-hofman.jpg'
import ButtonsBox from './buttonsBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function UserProfileHeader({data, following, followers}) {
    return (
        <div className="grid grid-cols-7 gap-8 border-b border-solid border-orange-600/30 py-8">
            <div className="col-span-3 flex">
                <div className="flex flex-col w-full my-auto">
                    {/* <div className="rounded-full border border-solid border-orange-600 bg-orange-600/30 p-3 flex me-auto mb-4">
                        <FontAwesomeIcon icon={faUser} className='h-4 m-auto' />
                    </div>
                    <small className='mb-6'>Trochę o Tobie:</small> */}
                    <div className="flex flex-row">
                        {dustin ? <div className='w-24 h-24 border-2 border-solid border-orange-600 rounded-full me-6' style={{
                            backgroundImage: `url(${dustin.src})`,
                            backgroundSize: `cover`
                        }}></div> : <Image src={user_icon} height={90} alt='Logo' className='me-6'/>}
                        <div className="flex flex-col my-auto">
                            <h4 className="text-2xl">{data.first_name} {data.last_name}</h4>
                            <small>{data.email}</small>
                            <small>od: {data.created_at}</small>
                            <div className="flex flex-row mt-4">
                                <Link href={`/dashboard/about-me/following`}>
                                    <div className="text-xs px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg me-4">
                                        <FontAwesomeIcon icon={faUser} className='h-4 me-2' />{`Obserwujący`} <span>({following})</span>
                                    </div>
                                </Link>
                                <Link href={`/dashboard/about-me/followed`}>
                                    <div className="text-xs px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg">
                                        <FontAwesomeIcon icon={faUser} className='h-4 me-2' />{`Oberwowani`} <span>({followers})</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {data.fav_quote ? <i className='w-4/5 mt-12 text-2xl'>"{data.fav_quote}"</i> : <div className='mt-12 text-white/30 rounded-lg bg-zinc-300/10 px-3 py-3 min-h-36'><i>Click double to input your quote...</i></div>}
                    <small className='mt-12'>Ulubione gatunki</small>
                    <div className="flex flex-col text-xs">
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