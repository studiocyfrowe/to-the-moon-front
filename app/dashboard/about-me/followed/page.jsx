"use client"
import DashboardLayout from "@/app/components/dashboardLayout";
import FollowUserItem from "@/app/components/followUser";
import MainLayout from "@/app/components/mainLayout";
import PageHeader from "@/app/components/pageHeader";
import axios from "axios";
import { useEffect, useState } from "react";

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

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
                <PageHeader parent={`Profil użytkownika`} child={`Obserwowani`}/>
                <div className="grid grid-cols-3 gap-8">
                    {followed.map((user) => (
                        <FollowUserItem user={user}/>
                    ))}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}