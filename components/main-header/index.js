import Link from "next/link"
import styles from "./main-header.module.css"
import Image from "next/image"
import { useState } from "react"
export default function MaindHeader() {
    const [isHasLogo, setIsHasLogo] = useState(true)
    return (
        <div className="bg-base-100 sticky top-0 z-50 drop-shadow-lg">
            <div className="navbar  w-4/5 mx-auto">
                <div className="flex-1">
                    <Link href={`/`} className="btn btn-ghost normal-case text-xl">
                        {
                            isHasLogo ?
                                <div className="flex items-center gap-1.5">
                                    <Image src="/cravings-logo.svg" alt="Cravings: Cafe & Bistro" width={50} height={50} />
                                    <h2 className="font-sans text-xl">Cravings: Cafe & Bistro</h2>
                                </div> :
                                <div>
                                    <h2 className="font-sans text-xl">Cravings</h2>
                                    <h5 className="font-sans text-sm">Cafe & Bistro</h5>
                                </div>
                        }
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <ul className="menu lg:menu-horizontal rounded-box">
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    Inbox
                                </a>
                            </li>
                            <li>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Updates
                                </a>
                            </li>
                            <li>
                                <a>
                                    <Image
                                        src="/user-regular.svg"
                                        alt="User"
                                        width={15}
                                        height={15}
                                    ></Image>
                                    About
                                    <span className="badge badge-xs badge-info"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src="/nirob.jpg" alt="Saifur Rahman Nirob" width={150} height={150} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
