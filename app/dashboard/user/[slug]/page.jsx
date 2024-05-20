"use client"
import React, { useEffect, useState } from 'react'
import MainLayout from '@/app/components/mainLayout'
import DashboardLayout from '@/app/components/dashboardLayout'
import UserProfileHeader from '@/app/components/userProfileHeader'
import axios from 'axios'
import PageHeader from '@/app/components/pageHeader'
import LoadingPosts from '@/app/components/loadingPosts'

export default function User({params}) {
    const [following, setIsFollowing] = useState(0)
    const [followers, setIsFollowers] = useState(0)
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    console.log(params)

    async function getUserData(user) {
        setIsLoading(true)
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/search?nickname=${user.slug}`, {
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

    async function getFollowingUsersCount() {
        setIsLoading(true)
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/following`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then((res) => (res.data))
        .then((data) => {
            setIsFollowing(data.count)
            setIsLoading(false)
        })
        .catch((e) => {
            console.log(e)
            setIsError(true)
        })
    }

    async function getFollowersUsersCount() {
        setIsLoading(true)
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/followed`, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then((res) => (res.data))
        .then((data) => {
            setIsFollowers(data.count)
            setIsLoading(false)
        })
        .catch((e) => {
            console.log(e)
            setIsError(true)
        })
    }

    useEffect(() => {
        getFollowersUsersCount()
        getFollowingUsersCount()
        getUserData(params)
    }, {})
 
    if (isError) 
    return <MainLayout>
                <DashboardLayout>
                    <div className="flex flex-col">
                        <PageHeader parent={`Profil użytkownika`} child={params.slug}/>
                        <div className="mt-4"></div>
                        <h4>Nie znaleziono</h4>
                    </div>
                </DashboardLayout>
            </MainLayout>
    if (isLoading) 
    return <MainLayout>
                <DashboardLayout>
                    <div className="flex flex-col">
                        <PageHeader parent={`Profil użytkownika`} child={params.slug}/>
                        <div className="mt-4"></div>
                        <LoadingPosts/>
                    </div>
                </DashboardLayout>
            </MainLayout>

    return (
        <MainLayout>
            <DashboardLayout>
                <div className="flex flex-col">
                    <PageHeader parent={`Profil użytkownika`} child={params.slug}/>
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