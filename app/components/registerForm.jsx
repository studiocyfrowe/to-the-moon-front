"use client"
import { useState } from "react";
import GlobalButton from "./globalButton";
import GlobalInput from "./globalInput";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordOonf] = useState('')

    return (
        <div className="flex flex-col p-8 border border-solid border-orange-600 bg-orange-600/30 rounded-lg mx-auto my-auto" style={{
            width: `70vh`
        }}>
            <h3 className="mb-12 text-4xl">
                Rejestracja
            </h3>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <small className='mb-2'>imię</small>
                        <GlobalInput name={`first_name`} type={`text`} placeholder={`np. Jan`}/>
                    </div>
                    <div className="my-3"></div>
                    <div className="flex flex-col">
                        <small className='mb-2'>adres email</small>
                        <GlobalInput name={`email`} type={`email`} placeholder={`wprowadź swój adres email`}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <small className='mb-2'>nazwisko</small>
                        <GlobalInput name={`password`} type={`text`} placeholder={`np. Kowal`}/>
                    </div>
                    <div className="my-3"></div>
                    <div className="flex flex-col">
                        <small className='mb-2'>hasło</small>
                        <GlobalInput name={`password`} type={`password`} placeholder={`podaj hasło`}/>
                    </div>
                </div>
            </div>
            <div className="my-4"></div>
            <GlobalButton label={`Zaloguj`}/>
        </div>
    )
}