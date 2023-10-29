import DashboardLayout from '@/components/layouts/dashboard';
import React from 'react'

function Dashboard() {

    console.log("rendering");
    return (
        <>
            <div>Dashboard</div>
        </>
    )
}


Dashboard.layout = DashboardLayout
export default Dashboard