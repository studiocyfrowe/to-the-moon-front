"use client"
import React, { useEffect, useMemo, useState } from 'react'
import MainLayout from '../../components/mainLayout'
import DashboardLayout from '../../components/dashboardLayout'
import PageHeader from '@/app/components/pageHeader'
import dynamic from 'next/dynamic'
import axios from 'axios'

export default function Cinemas() {
    const [cinemas, setCinemas] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    async function getCinemas() {
        setIsLoading(true)
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cinemas/getAll`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => (res.data))
        .then((data) => {
            setIsLoading(false)
            setCinemas(data)
        })
        .catch((e) => {
            console.log(e)
            setIsError(true)
        })
    }

    useEffect(() => {
        getCinemas()
    }, [])

    const Map = useMemo(() => dynamic(
    () => import('@/app/components/mainMap'),
        { 
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <MainLayout>
            <DashboardLayout>
                <PageHeader parent={`Miasta`} child={`Mapa kin`}/>
                <Map items={cinemas}/>
            </DashboardLayout>
        </MainLayout>
    )
}