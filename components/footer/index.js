import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg-neutral-800'>
                <div className='divide-y divide-neutral-50 w-4/5 mx-auto'>
                    <footer className="footer py-10 text-neutral-50 justify-between">
                        <aside>
                            <Image src="/cravings-white-logo.svg" alt='Cravings: Cafe & Bistro' width={80} height={80} />
                            <p className='text-lg font-medium'>Cravings: Cafe & Bistro</p>

                        </aside>
                        <nav>
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Legal</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </footer>
                    <div className='bg-neutral-800 text-neutral-50 text-center py-7'>
                        <p>Copyright © 2023 - All right reserved by Cravings: Cafe & Bistro</p>
                    </div>
                </div>
            </div>
        </>
    )
}
