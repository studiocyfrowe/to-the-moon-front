import React from 'react'
import AuthRootLayout from '../components/authRootLayout'
import MainLayout from '../components/mainLayout'
import Link from 'next/link'
import ResetPassForm from '../components/resetPassForm'

export default function ResetPassword() {
    return (
        <MainLayout>
            <AuthRootLayout>
                <ResetPassForm/>
                <div className='flex flex-col mt-6 text-center'>
                    <Link href="/login"><small className='text-md hover:underline'>masz już konto? zaloguj się</small></Link>
                </div>
            </AuthRootLayout>
        </MainLayout>
    )
}