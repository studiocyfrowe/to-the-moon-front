"use client"
import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/mainLayout'
import DashboardLayout from '@/app/components/dashboardLayout'
import UserProfileHeader from '@/app/components/userProfileHeader'
import axios from 'axios'
import PageHeader from '@/app/components/pageHeader'

export default function AboutMe() {
    const [following, setIsFollowing] = useState(0)
    const [followers, setIsFollowers] = useState(0)
    const [userData, setUserData] = useState({})
    const [isError, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getUserData() {
            setIsLoading(true)
            await axios.get('http://127.0.0.1:8000/api/user/dataProfile', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then((res) => (res.data))
            .then((data) => {
                setIsLoading(false)
                setUserData(data)
            })
            .catch((e) => {
                console.log(e)
                setError(true)
            })
        }

        async function getFollowingUsersCount() {
            setIsLoading(true)
            await axios.get('http://127.0.0.1:8000/api/user/following', {
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
            })
            .then((res) => (res.data))
            .then((data) => {
                setIsFollowing(data.count)
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setError(true)
            })
        }

        async function getFollowersUsersCount() {
            setIsLoading(true)
            await axios.get('http://127.0.0.1:8000/api/user/followed', {
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
            })
            .then((res) => (res.data))
            .then((data) => {
                setIsFollowers(data.count)
                setIsLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setError(true)
            })
        }

        getFollowersUsersCount()
        getFollowingUsersCount()
        getUserData()
    }, {})
 
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
                <div className="flex flex-col">
                    <PageHeader parent={`Profil użytkownika`} child={userData.nickname}/>
                    <UserProfileHeader data={userData} followers={followers} following={following}/>
                    {/* <div className="my-4"></div>
                    <DropdownContent name={`Ulubione`} count={10}>
                        <UserFavoriteContent/>
                    </DropdownContent> */}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}