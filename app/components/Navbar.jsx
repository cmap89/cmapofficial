'use client'

import Link from "next/link";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';

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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar-container">
            <div className={`nav-link-container ${isMenuOpen ? 'nav-menu-open' : ''}`}>
                <ul className='nav-link-list'>
                    <li className="nav-item">
                        <Link onClick={closeMenu} href="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={closeMenu} href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={closeMenu} href="/band">Band</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={closeMenu} href="/videos">Videos</Link>
                    </li>
                </ul>
            </div>
            <div className="logo-container">
                <Link
                    onClick={closeMenu}
                    href="/">
                    <Image className='nav-logo' src={CmapLogo} alt="cmap logo" />
                </Link>
            </div>
            <div className="hamburger-container" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`all-socials-container ${isMenuOpen ? 'social-container-open' : ''}`}>
                <SocialsStrip exclude={['instagram-band', 'facebook-band', 'bandcamp', 'soundcloud', 'itunes']} menuStatus={isMenuOpen} clickEvent={closeMenu} />
            </div>
        </nav>
    )
}