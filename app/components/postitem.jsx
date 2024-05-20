"use client"
import Image from "next/image";
import post_photo from '@/app/assets/post.jpg'
import like from '@/app/assets/like.svg'
import ButtonLay from "./buttonLay";
import readmore_horizontal from '@/app/assets/readmore_horizontal.svg'
import { useState } from "react";

export default function PostItem({data}) {
    const [options, setOptions] = useState(false)
    return (
        <div className="flex flex-col p-4 rounded-md bg-white mx-auto">
            <div className="w-full mb-4 relative flex">
                <ButtonLay>
                    {/* <Image src={user_icon} height={40} alt='Logo' className='me-3'/> */}
                    <div className="flex flex-col me-auto text-start">
                        <h4 className="text-md">{data.user.nickname}</h4>
                        <small>2 minuty temu</small>
                    </div>
                </ButtonLay>
                <div className="ms-auto my-auto" onClick={() => setOptions(true)}><Image src={readmore_horizontal} width={20} alt='readmore_horizontal' className="invert"/></div>
                {options ? <div className="grid grid-cols-1 gap-4 w-24 drop-shadow-lg rounded-md bg-white divide-x text-black text-md p-3 absolute top-10 right-0 transition-all">
                    <small className="hover:font-bold cursor-pointer transition-all">Edytuj</small>
                    <small>Usuń</small>
                </div> : null}
            </div>
            <p className='text-zinc-800'>{data.body_text}</p>
            <Image src={post_photo} alt='post photo' width={`100%`} className='rounded-md my-4'/>
            <div className="flex flex-row">
                <ButtonLay>
                    <div className="flex flex-col text-start">
                        <small>Dotyczy filmu:</small>
                        <h6 className="text-md">{data.movie.title}</h6>
                    </div>
                </ButtonLay>
                <div className="flex flex-row ms-auto">
                    <ButtonLay>
                        <div className="flex flex-row text-start">
                            <Image src={like} alt='like' height={20} className='me-1'/>
                            <h6 className="text-md">123</h6>
                        </div>
                    </ButtonLay>
                    <div className="mx-2"></div>
                    <ButtonLay>
                        <div className="flex flex-row text-start">
                            <Image src={like} alt='like' height={20} className='me-1'/>
                            <h6 className="text-md">123</h6>
                        </div>
                    </ButtonLay>
                </div>
            </div>
        </div>
    )
}