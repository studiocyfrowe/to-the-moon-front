import React from 'react'
import AuthRootLayout from '../../components/authRootLayout'
import MainLayout from '../../components/mainLayout'
import Link from 'next/link'
import DashboardLayout from '@/app/components/dashboardLayout'

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

export default function AboutMe() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <div className="flex flex-col">
                    <h4 className="mb-16 text-4xl">Profil użytkownika</h4>
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}