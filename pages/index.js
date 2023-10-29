import React from 'react'
import MaindHeader from '@/components/main-header';
import ThemeConfigure from '@/components/theme-configure';
import HeroImage from '@/components/hero-image';
import FoodList from '@/components/food-list';
import Footer from '@/components/footer';

export default function index() {
    return (
        <>
            <ThemeConfigure />
            <MaindHeader />
            <HeroImage />
            <FoodList />
            <Footer />
        </>
    )
}
