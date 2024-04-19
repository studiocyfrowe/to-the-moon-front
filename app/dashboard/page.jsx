import React from 'react'
import AuthRootLayout from '../components/authRootLayout'
import RegisterForm from '../components/registerForm'
import MainLayout from '../components/mainLayout'
import Link from 'next/link'
import DashboardUser from '../components/dashboardUser'
import user_icon from '../assets/user.svg'
import Image from 'next/image'

export default function Dashboard() {
    return (
        <MainLayout>
            <div className="grid grid-cols-12 gap-4 p-16 h-screen">
                <div className="col-span-2 flex flex-col">
                    <DashboardUser>
                        <div className="flex flex-row my-auto mx-auto">
                            <Image src={user_icon} height={40} alt='Logo' className='me-4'/>
                            <div className="flex flex-col">
                                <span>Hi,</span>
                                <h4 className="text-xl">Dominik!</h4>
                            </div>
                        </div>
                    </DashboardUser>
                    <div className="border border-solid border-orange-600 bg-orange-600/30 rounded-lg h-full mt-4"></div>
                </div>
                <div className="col-span-10 border border-solid border-orange-600 bg-orange-600/30 rounded-lg"></div>
            </div>
        </MainLayout>
    )
}