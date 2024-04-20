"use client"
import React, { useState } from 'react'
import GlobalInput from './globalInput'
import GlobalButton from './globalButton'
import ValidationAlert from './validationAlert'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { data } from 'autoprefixer'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    async function authUser(email, password) {
        await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        }).then((res) => res.json())
        .then((data) => {
            // console.log(data['token'])
            if (data['token']) {
                router.push('/dashboard')
            }
        })
        .catch((error) => console.error("Error:", error.message))
    }

    return (
        <div className="flex flex-col p-8 border border-solid border-orange-600 bg-orange-600/30 rounded-lg mx-auto my-auto">
            {/* <ValidationAlert status={`Alert`} msg={`Failed :(`} color={`border-red-600`}/>
            <div className="mb-8"></div> */}
            <h3 className="mb-12 text-4xl">
                Witaj <br/>w świecie kina!
            </h3>
            <div className="flex flex-col">
                <small className='mb-2'>adres email</small>
                <input type={`email`} name={`email`} id="" placeholder={`wprowadź swój adres email`} 
                    className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="my-3"></div>
            <div className="flex flex-col">
                <small className='mb-2'>hasło</small>
                <input type={`password`} name={`password`} id="" placeholder={`podaj hasło`} 
                    className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="my-4"></div>
            <div onClick={() => (
                authUser(email, password)
            )}><GlobalButton label={`Zaloguj`}/></div>
        </div>
    )
}