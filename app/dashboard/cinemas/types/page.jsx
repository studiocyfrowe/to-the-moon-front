"use client"
import React, { useEffect, useState } from 'react'
import MainLayout from '../../../components/mainLayout'
import DashboardLayout from '../../../components/dashboardLayout'
import TableLayout from '@/app/components/tableLayout'
import axios from 'axios'

const userData = {
    first_name: 'Dominik',
    email: 'email@test.pl'
}

export default function CinemaTypes() {
    const [cinemaTypes, setCinemaTypes] = useState([])
    const [isError, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function getCinemaTypes() {
        setIsLoading(true)
        await axios.get('http://127.0.0.1:8000/api/cinema/types/getAll', {
            // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => (res.data))
        .then((data) => {
            setIsLoading(false)
            setCinemaTypes(data)
        })
        .catch((e) => {
            console.log(e)
            setError(true)
        })
    }

    useEffect(() => {
        getCinemaTypes()
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
                <h4>Kategorie Kin</h4>
                <h3 className="text-4xl mt-2 mb-8">Legnica</h3>
                <TableLayout data={cinemaTypes}></TableLayout>
            </DashboardLayout>
        </MainLayout>
    )
}