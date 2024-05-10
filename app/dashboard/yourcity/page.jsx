import React from 'react'
import MainLayout from '../../components/mainLayout'
import DashboardLayout from '../../components/dashboardLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const userData = {
    first_name: 'Dominik',
    email: 'email@test.pl'
}

export default function Cities() {
    return (
        <MainLayout>
            <DashboardLayout user={userData}>
                <h4>Twoje miasto</h4>
            </DashboardLayout>
        </MainLayout>
    )
}