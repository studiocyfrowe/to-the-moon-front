"use client"
import DashboardLayout from "@/app/components/dashboardLayout";
import MainLayout from "@/app/components/mainLayout";
import PageHeader from "@/app/components/pageHeader";
import axios from "axios";
import dustin from '@/app/assets/dustin-hofman.jpg'
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

// const fetcher = (url, token) =>
//     axios
//       .get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
//       .then((res) => res.data);

export default function Following() {
    // const { data: followings, error, isLoading } = useSWR('http://127.0.0.1:8000/api/user/following', fetcher)
    const [following, setIsFollowing] = useState([])
    const [isError, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getFollowingUsers() {
            setIsLoading(true)
            await axios.get('http://127.0.0.1:8000/api/user/following', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then((res) => (res.data))
            .then((data) => {
                setIsFollowing(data.users)
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setError(true)
            })
        }
        getFollowingUsers()
    }, [])

    if (isError) 
    return <MainLayout>
                <DashboardLayout user={userData}>
                    <h2>Error</h2>
                </DashboardLayout>
            </MainLayout>

    if (isLoading) 
    return <MainLayout>
                <DashboardLayout user={userData}>
                    <h2>Loading</h2>
                </DashboardLayout>
            </MainLayout>

    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <PageHeader parent={`Profil użytkownika`} child={`Obserwujący`}/>
                <div className="grid grid-cols-3 gap-8">
                    {following.map((user) => (
                        <div className="flex flex-row my-12">
                            {dustin ? <div className='w-24 h-24 border-2 border-solid border-orange-600 rounded-full me-6' style={{
                                backgroundImage: `url(${dustin.src})`,
                                backgroundSize: `cover`
                            }}></div> : <Image src={user_icon} height={90} alt='Logo' className='me-6'/>}
                            <div className="flex flex-col my-auto">
                                <h4 className="text-2xl">{user.following_belongs.first_name} {user.following_belongs.last_name}</h4>
                                <small>{user.following_belongs.email}</small>
                            </div>
                            <div onClick={() => unFollowUser(user.id)} className="rounded-full flex border-2 border-solid border-green-600 bg-green-600/30 hover:border-red-600 hover:bg-red-600/30 w-12 h-12 my-auto ms-8 cursor-pointer">
                                <FontAwesomeIcon icon={faCheck} className="mx-auto my-auto"/>
                            </div>
                        </div>
                    ))}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}