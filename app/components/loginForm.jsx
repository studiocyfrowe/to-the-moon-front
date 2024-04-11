"use client"
import React, { useState } from 'react'
import GlobalInput from './globalInput'
import GlobalButton from './globalButton'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function authUser(email, password) {
        // await fetch()
        console.log(email)
    }

    return (
        <div className="flex flex-col p-8 border border-solid border-orange-600 bg-orange-600/30 rounded-lg mx-auto my-auto" style={{
            width: `20vw`
        }}>
            <h3 className="mb-12 text-4xl">
                Witaj <br/>w świecie kina!
            </h3>
            <div className="flex flex-col">
                <small className='mb-2'>adres email</small>
                <GlobalInput 
                    name={`email`} 
                    type={`email`} 
                    placeholder={`wprowadź swój adres email`}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="my-3"></div>
            <div className="flex flex-col">
                <small className='mb-2'>hasło</small>
                <GlobalInput 
                    name={`password`} 
                    type={`password`} 
                    placeholder={`podaj hasło`}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="my-4"></div>
            <GlobalButton label={`Zaloguj`} onClick={() => authUser(email, password)}/>
        </div>
    )
}