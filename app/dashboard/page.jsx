"use client"
import React, { useState } from 'react'
import MainLayout from '../components/mainLayout'
import DashboardLayout from '../components/dashboardLayout'
import Posts from '../components/posts'
import PageHeader from '../components/pageHeader'


export default function Dashboard() {
    return (
        <MainLayout>
            <DashboardLayout>
                <PageHeader parent={`Strona główna`} child={`Aktualności`}/>
                <Posts/>
            </DashboardLayout>
        </MainLayout>
    )
}