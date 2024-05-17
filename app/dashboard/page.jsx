import React from 'react'
import MainLayout from '../components/mainLayout'
import DashboardLayout from '../components/dashboardLayout'
import MovieItem from '../components/singleItem'
import MoviesBox from '@/app/components/itemsBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import GlobalButton from '../components/globalButton'
import Posts from '../components/posts'


const userData = {
    first_name: 'Dominik',
    email: 'email@test.pl'
}

export default function Dashboard() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <Posts/>
            </DashboardLayout>
        </MainLayout>
    )
}