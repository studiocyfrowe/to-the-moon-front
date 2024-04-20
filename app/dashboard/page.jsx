import React from 'react'
import MainLayout from '../components/mainLayout'
import DashboardLayout from '../components/dashboardLayout'
import MovieItem from '../components/movieItem'

export default function Dashboard() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <div className="flex flex-col">
                    <h4 className="mb-16 text-4xl">Nowości w kinach</h4>
                    <div className="grid grid-cols-4 gap-8 w-full divide-x divide-orange-600/30 justify-center">
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </div>
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}