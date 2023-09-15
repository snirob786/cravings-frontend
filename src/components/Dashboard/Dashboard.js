import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import ResponsiveDrawer from '../../shared/CustomDrawer'

export const Dashboard = () => {
    return (
        <>
            <ResponsiveDrawer></ResponsiveDrawer>
        </>
    )
}
