import Image from "next/image";
import React from "react";
import axios from "axios";
import user_icon from '@/app/assets/user.svg'

export default function FollowUserItem({user}) {
    return (
        <React.Fragment>
            <div className="flex flex-row m-3 text-white text-start" key={user.id}>
                <Image src={user_icon} height={45} alt='Logo' className='me-6'/>
                <div className="flex flex-col my-auto">
                    <h4 className="text-2xl">{user.first_name} {user.last_name}</h4>
                    <small>@{user.nickname}</small>
                </div>
            </div>
        </React.Fragment>
    )
}