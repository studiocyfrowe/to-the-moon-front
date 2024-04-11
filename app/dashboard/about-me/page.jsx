import React from 'react'
import AuthRootLayout from '../../components/authRootLayout'
import MainLayout from '../../components/mainLayout'
import Link from 'next/link'

export default function AboutMe() {
    return (
        <MainLayout>
            <AuthRootLayout>
                <h4>about me</h4>
                <div className='flex flex-col mt-6 text-center'>
                    <Link href="/login"><small className='text-md hover:underline'>masz już konto? zaloguj się</small></Link>
                </div>
            </AuthRootLayout>
        </MainLayout>
    )
}