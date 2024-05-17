import React from "react";

export default function GlobalButton({label}) {
    return (
        <button className='text-black text-center border border-solid border-orange-600 bg-orange-600/30 hover:bg-orange-600 hover:text-zinc-950 hover:border-white transition-all rounded-md px-4 py-2'>{label}</button>
    )
}