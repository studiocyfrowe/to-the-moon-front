"use client"
import React, { useEffect } from 'react'
import MainLayout from '../../components/mainLayout'
import DashboardLayout from '@/app/components/dashboardLayout'
import DropdownContent from '@/app/components/dropdownContent'
import UserFavoriteContent from '@/app/components/userFavoriteContent'
import UserProfileHeader from '@/app/components/userProfileHeader'
import useSWR from 'swr'
import axios from 'axios'
import PageHeader from '@/app/components/pageHeader'

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

const fetcher = (url, token) =>
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((res) => res.data);

export default function AboutMe() {
    const { data, error, isLoading } = useSWR('http://127.0.0.1:8000/api/user/dataProfile', fetcher)
 
    if (error) 
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
                    <PageHeader parent={`Profil użytkownika`} child={data.nickname}/>
                    <UserProfileHeader data={data}/>
                    {/* <div className="my-4"></div>
                    <DropdownContent name={`Ulubione`} count={10}>
                        <UserFavoriteContent/>
                    </DropdownContent> */}
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}