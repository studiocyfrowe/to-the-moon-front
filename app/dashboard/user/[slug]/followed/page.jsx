"use client"
import ButtonLay from "@/app/components/buttonLay";
import DashboardLayout from "@/app/components/dashboardLayout";
import FollowUserItem from "@/app/components/followUser";
import MainLayout from "@/app/components/mainLayout";
import PageHeader from "@/app/components/pageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import user_icon from '@/app/assets/user.svg'
import Link from "next/link";

export default function Followed() {
    const [followed, setIsFollowed] = useState([])
    const [isError, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getFollowedUsers() {
            setIsLoading(true)
            await axios.get('http://127.0.0.1:8000/api/user/followed', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then((res) => (res.data))
            .then((data) => {
                setIsFollowed(data.users)
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setError(true)
            })
        }
        getFollowedUsers()
    }, [])

    if (isError) 
    return <MainLayout>
                <DashboardLayout>
                    <h2>Error</h2>
                </DashboardLayout>
            </MainLayout>

    if (isLoading) 
    return <MainLayout>
                <DashboardLayout>
                    <h2>Loading</h2>
                </DashboardLayout>
            </MainLayout>

    return (
        <MainLayout>
            <DashboardLayout>
                <PageHeader parent={`Profil użytkownika`} child={`Obserwowani`}/>
                <div className="mt-6"></div>
                <div className="grid grid-cols-3 gap-8">
                    {followed.map((user) => (
                        <Link href={`/dashboard/user/${user.followed_belongs.nickname}`} className="my-auto" key={user.id}>
                            <ButtonLay>
                                <FollowUserItem user={user.followed_belongs}/>
                            </ButtonLay>
                        </Link>
                    ))}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}