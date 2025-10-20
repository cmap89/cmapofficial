import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import Link from "next/link";

export default function SocialsStrip() {
    return ( 
        <>
        <div className="social-strip-container" >
        <Link href="https://www.instagram.com/cmapofficial/" target="_blank" rel='noopener noreferrer' >
            <FaInstagram  className='fa-link'/>
        </Link>
        <Link href="https://www.youtube.com/channel/UCFzsykg43-jnI8d0wskbG2g" target="_blank" rel='noopener noreferrer' >
            <FaYoutube  className='fa-link' />
        </Link>
        <Link href="https://www.facebook.com/cmapofficial/" target="_blank" rel='noopener noreferrer' >
            <FaFacebook  className='fa-link' />
        </Link>
        <Link href="https://open.spotify.com/artist/37on1XCkqvII4RtyEBit8q?si=lUt8OrQsSIinL3Yx0g9wAw" target="_blank" rel='noopener noreferrer' >
            <FaSpotify  className='fa-link' />
        </Link>
        </div>
        </>
     );
}