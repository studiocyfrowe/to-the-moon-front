import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import dustin from '@/app/assets/dustin-hofman.jpg'
import React from "react";

export default function FollowUserItem({user}) {
    return (
        <React.Fragment>
            <div className="flex flex-row my-12" key={user.id}>
                {dustin ? <div className='w-24 h-24 border-2 border-solid border-orange-600 rounded-full me-6' style={{
                    backgroundImage: `url(${dustin.src})`,
                    backgroundSize: `cover`
                }}></div> : <Image src={user_icon} height={90} alt='Logo' className='me-6'/>}
                <div className="flex flex-col my-auto">
                    <h4 className="text-2xl">{user.first_name} {user.last_name}</h4>
                    <small>{user.email}</small>
                </div>
                <div onClick={() => unFollowUser(user.id)} className="rounded-full flex border-2 border-solid border-green-600 bg-green-600/30 hover:border-red-600 hover:bg-red-600/30 w-12 h-12 my-auto ms-8 cursor-pointer">
                    <FontAwesomeIcon icon={faCheck} className="mx-auto my-auto"/>
                </div>
            </div>
        </React.Fragment>
    )
}