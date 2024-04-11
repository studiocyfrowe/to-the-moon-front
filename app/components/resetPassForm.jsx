"use client"
import { useState } from "react";
import GlobalButton from "./globalButton";
import GlobalInput from "./globalInput";

export default function ResetPassForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordOonf] = useState('')

    return (
        <div className="flex flex-col p-8 border border-solid border-orange-600 bg-orange-600/30 rounded-lg mx-auto my-auto">
            <h3 className="mb-12 text-4xl">
                Reset hasła
            </h3>
            <div className="flex flex-col">
                <small className='mb-2'>adres email</small>
                <GlobalInput name={`email`} type={`email`} placeholder={`wprowadź swój adres email`}/>
            </div>
            <div className="my-4"></div>
            <GlobalButton label={`Wyślij`}/>
        </div>
    )
}