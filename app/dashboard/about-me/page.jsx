import React from 'react'
import MainLayout from '../../components/mainLayout'
import DashboardLayout from '@/app/components/dashboardLayout'
import Image from 'next/image'
import user_icon from '../../assets/user.svg'
import uma from '../../assets/uma.jpg'
import MoviesBox from '@/app/components/moviesBox'
import dustin from '../../assets/dustin-hofman.jpg'
import DropdownContent from '@/app/components/dropdownContent'
import ButtonsBox from '@/app/components/buttonsBox'
import UserFavoriteContent from '@/app/components/userFavoriteContent'

const userData = {
    name: 'Dominik',
    email: 'email@test.pl'
}

export default function AboutMe() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <div className="flex flex-col">
                    <h4 className="mb-16 text-2xl">Profil użytkownika</h4>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-3">
                            <Image src={uma} width={800} alt='user cover photo' className='border-2 border-solid border-orange-600 rounded-lg'/>
                        </div>
                        <div className="col-span-2 flex">
                            <div className="flex flex-col">
                                <small className='mb-6'>Trochę o Tobie:</small>
                                <div className="flex flex-row">
                                    {dustin ? <div className='w-24 h-24 border-2 border-solid border-orange-600 rounded-full me-6' style={{
                                        backgroundImage: `url(${dustin.src})`,
                                        backgroundSize: `cover`
                                    }}></div> : <Image src={user_icon} height={90} alt='Logo' className='me-6'/>}
                                    <div className="flex flex-col my-auto">
                                        <h4 className="text-2xl">Dominik Hofman</h4>
                                        <small>test@test.pl</small>
                                        <small>od: 22-04-2024</small>
                                    </div>
                                </div>
                                <p className='w-4/5 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in feugiat magna. Nunc a pretium magna. Integer volutpat, risus at luctus placerat, quam libero blandit tellus, quis euismod metus elit quis sem. Praesent iaculis justo vitae egestas feugiat. Pellentesque et consequat ligula. Curabitur velit ligula, rhoncus a suscipit eu, iaculis id elit. </p>
                            </div>
                        </div>
                    </div>
                    <DropdownContent name={`Ulubione`} count={10}>
                        <UserFavoriteContent/>
                    </DropdownContent>
                </div>
            </DashboardLayout>
        </MainLayout>
    )
}