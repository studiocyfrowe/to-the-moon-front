import React from "react";
import dropdown_icon from '@/app/assets/circle-chevron-down-solid.svg'
import Image from "next/image";

export default function DropdownContent({name, count, children}) {
    return (
        <React.Fragment>
            <div className="flex flex-col px-4 border border-solid border-orange-600 bg-orange-600/20 rounded-lg p-4">
                <div className="flex flex-row">
                    <h4 className="text-lg px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-lg">{name} <span>({count})</span></h4>
                    <div className="ms-auto px-2 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-full flex">
                        <Image src={dropdown_icon} height={25} className="my-auto invert"/>
                    </div>
                </div>
                <div className="flex flex-row overflow-x-scroll no-scrollbar pt-4">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}