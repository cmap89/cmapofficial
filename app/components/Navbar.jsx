'use client'

import Link from "next/link";
import { useState } from "react"
import Image from "next/image";

import SocialsStrip from "./SocialsStrip";
import CmapLogo from "../../public/Pics/CMAP_Logos_2022/PNG/500x500/CMAP_Logo_Tilted_With_Name_.png"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
            <nav className="navbar-container">
                <div className={`nav-link-container ${isMenuOpen ? 'nav-menu-open':''}`}>
                    <ul className='nav-link-list'>
                        <li className="nav-item">
                            <Link onClick={closeMenu} href="https://linktr.ee/cmapmusicofficial" target="_blank" >Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={closeMenu} href="/videos">Videos</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={closeMenu} href="/book">Book</Link>
                        </li>
                        {/* <li className="nav-item">
                        Merch
                        </li> */}
                    </ul>
                </div>
                <div className="logo-container">
                    <Link 
                    href="/">
                    <Image className='nav-logo' src={CmapLogo} alt="cmap logo" />
                    </Link>
                </div>
                <div className="hamburger-container" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <div className="all-socials-container">
                    <SocialsStrip/>
                </div>
            </nav>
    )
}