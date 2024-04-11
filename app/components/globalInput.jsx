import React from "react";

export default function GlobalInput({type, name, placeholder}) {
    return (
        <>
            <input type={type} name={name} id="" placeholder={placeholder} className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md'/>
        </>
    )
}