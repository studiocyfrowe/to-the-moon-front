import Image from "next/image";
import user_icon from '../assets/user.svg'
import readmore_horizontal from '@/app/assets/readmore_horizontal.svg'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading";

export default function UserDataExcerpt() {
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    async function getAuthUserData() {
        setIsLoading(true)
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/dataProfile`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => (res.data))
        .then((data) => {
            setIsLoading(false)
            setUserData(data)
        })
        .catch((e) => {
            console.log(e)
            setIsError(true)
        })
    }

    useEffect(() => {
        getAuthUserData()
    }, {})

    if (isError)
    return (
        <div className="flex flex-row w-full">
            <h4>Error</h4>
        </div>
    )

    if (isLoading)
    return (
        <div className="flex flex-row w-full">
            <Loading/>
        </div>
    )

    return (
        <div className="flex flex-row w-full">
            <Image src={user_icon} height={40} alt='Logo' className='me-3'/>
            <div className="flex flex-col me-auto">
                <span>Hi,</span>
                <h4 className="text-lg">{userData.first_name}</h4>
            </div>
            <div className="ms-auto my-auto">
                <Link href={`/dashboard/user/${userData.nickname}`}>
                    <Image src={readmore_horizontal} width={20} alt='readmore_horizontal'/>
                </Link>
            </div>
        </div>
    )
}