"use client"
import Image from "next/image";
import UserDataExcerpt from "./UserDataExcerpt";
import Breadcrumb from "./breadcrumb";
import DashboardUser from "./dashboardUser";
import MainNavigation from "./mainNavigation";
import NavItem from "./navItem";
import logoNEW from '@/app/assets/logo_new.svg'
import logout from '@/app/assets/logout.svg'
import ButtonLay from "./buttonLay";
import NavHeader from "./navHeader";

export default function DashboardLayout({user, children}) {
    return (
        <>
            <div className="flex flex-col px-16 py-8">
                <div className="flex flex-row mb-4">
                    <Image src={logoNEW} height={75} alt="Logo" className="me-auto"/>
                    <div className="my-auto">
                        <ButtonLay>
                            <Image src={logout} height={20} alt="Logout"/>
                        </ButtonLay>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 h-28">
                    <div className="col-span-2 flex flex-col">
                        <DashboardUser>
                            <UserDataExcerpt data={user}/>
                        </DashboardUser>
                        <MainNavigation>
                            <div className="flex flex-col">
                                <NavItem label={`Aktualności`}/>
                            </div>
                            <div className="flex flex-col">
                                <NavItem label={`Repertuar kin`}/>
                            </div>
                            <div className="flex flex-col">
                                <NavItem label={`Baza filmów`}/>
                            </div>
                            <div className="flex flex-col">
                                <NavItem label={`Miasta`}/>
                            </div>
                        </MainNavigation>
                        <MainNavigation>
                            <NavHeader label={`Ulubione kina`}></NavHeader>
                            <div className="flex flex-col">
                                <NavItem label={`Kino Piast`}/>
                            </div>
                            <div className="flex flex-col">
                                <NavItem label={`Kino Ognisko`}/>
                            </div>
                            <div className="flex flex-col">
                                <NavItem label={`Kino DCF Wrocław`}/>
                            </div>
                        </MainNavigation>
                        <div className="flex flex-row flex-wrap mt-24 mb-2">
                            <small className="me-4">Prywatność</small>
                            <small className="me-4">Regulamin</small>
                            <small className="me-4">O nas</small>
                        </div>
                        <small>2024 | wielki format | by studio_cyfrowe</small>
                    </div>
                    <div className="col-span-10 border border-solid border-orange-600 bg-orange-600/30 rounded-lg p-6 overflow-y-scroll h-full">
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
            </div>
        </>
    )
}