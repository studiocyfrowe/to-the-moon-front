import React from 'react'
import MainLayout from '../components/mainLayout'
import DashboardLayout from '../components/dashboardLayout'
import MovieItem from '../components/singleItem'
import MoviesBox from '@/app/components/itemsBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const userData = {
    first_name: 'Dominik',
    email: 'email@test.pl'
}

export default function Dashboard() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <div className="flex flex-row px-4 border border-solid border-orange-600 bg-orange-600/30 rounded-lg text-md w-3/5 mb-8 mt-12">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='me-4 my-auto' />
                    <input type="text" name="" id="" className='bg-transparent w-full py-2' placeholder='wpisz coś'/>
                </div>
                <MoviesBox/>
                <div className="mt-16"></div>
                <MoviesBox/>
                <div className="mt-16"></div>
                <MoviesBox/>
            </DashboardLayout>
        </MainLayout>
    )
}