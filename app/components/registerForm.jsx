"use client"
import { useState } from "react";
import GlobalButton from "./globalButton";
import GlobalInput from "./globalInput";
import ValidationAlert from "./validationAlert";
import SectionHeader from "./sectionHeader";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')

    const [status, setStatus] = useState('')

    async function registerUser(firstName, lastName, email, password, passwordConf) {
        await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email, 
                password: password,
                password_confirmation: passwordConf
            })
        }).then((res) => res.json())
        .then((data) => {
            setStatus(data.status)
            // setTimeout(() => router.push('/'), 5000)
        })
        .catch((error) => console.error("Error:", error.message))
    }

    return (
        <div className="flex flex-col p-8 border bg-white rounded-md mx-auto my-auto">
            <SectionHeader label={`Rejestracja`}></SectionHeader>
            {status ? 
                <>
                    <ValidationAlert status={`Success`} msg={status} color={`bg-green-600/30 border-green-600`}/> 
                    <div className="mb-8"></div>
                </>
            : null}
            <div className="flex flex-col">
                <small className='mb-2'>adres email</small>
                <input type={`email`} name={`email`} id="" placeholder={`wprowadź swój adres email`} 
                    className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="my-3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <small className='mb-2'>hasło</small>
                    <input type={`password`} name={`password`} id="" placeholder={`podaj hasło`} 
                        className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <small className='mb-2'>potwierdź hasło</small>
                    <input type={`password`} name={`password`} id="" placeholder={`potwierdź hasło`} 
                        className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                        onChange={(e) => setPasswordConf(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <small className='mb-2'>imię</small>
                    <input type={`text`} name={`text`} id="" placeholder={`podaj imię`} 
                        className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                        onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <small className='mb-2'>nazwisko</small>
                    <input type={`text`} name={`text`} id="" placeholder={`podaj nazwisko`} 
                        className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'
                        onChange={(e) => setLastName(e.target.value)}/>
                </div>
            </div>
            <div className="my-4"></div>
            <div onClick={() => (
                registerUser(firstName, lastName, email, password, passwordConf)
            )}><GlobalButton label={`Wyślij`}/></div>
        </div>
    )
}