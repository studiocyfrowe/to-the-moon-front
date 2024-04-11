import React from 'react'
import AuthRootLayout from '../components/authRootLayout'
import LoginForm from '../components/loginForm'
import MainLayout from '../components/mainLayout'
import Link from 'next/link'

export default function Login() {
    return (
        <MainLayout>
            <AuthRootLayout>
                <LoginForm/>
                <div className='flex flex-col mt-6 text-center'>
                    <Link href="/"><small className='text-md hover:underline'>nie pamiętam hasła</small></Link>
                    <div className="mb-2"></div>
                    <Link href="/register"><small className='text-md hover:underline'>jesteś tu nowy? załóż konto</small></Link>
                </div>
            </AuthRootLayout>
        </MainLayout>
    )
}