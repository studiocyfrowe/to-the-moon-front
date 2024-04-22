import React from 'react'
import MainLayout from '../components/mainLayout'
import DashboardLayout from '../components/dashboardLayout'
import MovieItem from '../components/movieItem'
import MoviesBox from '@/app/components/moviesBox'

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

export default function Dashboard() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <MoviesBox/>
                <div className="mt-16"></div>
                <MoviesBox/>
                <div className="mt-16"></div>
                <MoviesBox/>
            </DashboardLayout>
        </MainLayout>
    )
}