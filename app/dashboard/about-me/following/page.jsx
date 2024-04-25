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
import FollowUserItem from "@/app/components/followUser";

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

export default function Following() {
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
                        <FollowUserItem user={user.following_belongs}/>
                    ))}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}