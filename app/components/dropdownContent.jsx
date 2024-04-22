import React from "react";
import dropdown_icon from '@/app/assets/circle-chevron-down-solid.svg'
import Image from "next/image";

export default function DropdownContent({name, count, children}) {
    return (
        <React.Fragment>
            <div className="flex flex-col my-8 py-8">
                <div className="flex flex-row">
                    <h4 className="text-xl">{name} <span>({count})</span></h4>
                    <Image src={dropdown_icon} height={25} className="ms-auto my-auto invert"/>
                </div>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}