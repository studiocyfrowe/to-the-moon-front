import React from 'react'
import logo from '../assets/logo.svg'
import Image from 'next/image'

export default function AuthRootLayout({children}) {
    return (
        <>
            <div className="flex flex-col mx-auto my-auto h-max">
                <Image src={logo} height={120} alt='Logo' className='mx-auto mb-12'/>
                {children}
            </div>
        </>
    )
}