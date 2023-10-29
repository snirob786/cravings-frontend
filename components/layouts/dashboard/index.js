import Footer from '@/components/footer'
import MaindHeader from '@/components/main-header'
import ThemeConfigure from '@/components/theme-configure'
import React from 'react'

export default function DashboardLayout({ children }) {

    console.log("rendering");
    return (
        <>
            <ThemeConfigure />
            <MaindHeader />
            {children}
            <Footer />
        </>
    )
}
