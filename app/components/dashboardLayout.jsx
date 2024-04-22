"use client"
import useSWR from "swr";
import UserDataExcerpt from "./UserDataExcerpt";
import Breadcrumb from "./breadcrumb";
import DashboardUser from "./dashboardUser";
import MainNavigation from "./mainNavigation";

export default function DashboardLayout({user, children}) {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 p-16 h-screen">
                <div className="col-span-2 flex flex-col">
                    <DashboardUser>
                        <UserDataExcerpt data={user}/>
                    </DashboardUser>
                    <MainNavigation></MainNavigation>
                </div>
                <div className="col-span-10 border border-solid border-orange-600 bg-orange-600/30 rounded-lg p-8 overflow-y-scroll">
                    <Breadcrumb
                        homeElement={'Home'}
                        separator={<span> \</span>}
                        activeClasses='border-b border-solid border-white'
                        containerClasses='flex text-xs mb-4' 
                        listClasses='hover:bg-orange-600/50 me-4 font-bold my-auto'
                        capitalizeLinks
                    />
                    {children}
                </div>
            </div>
        </>
    )
}