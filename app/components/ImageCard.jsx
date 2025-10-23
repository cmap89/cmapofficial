'use client'
import Image from 'next/image'

// Props: {src: string}
export default function ImageCard(props) {
    const { src, className, msg } = props;
    return ( 
    <div className="img-container">
        <Image
        className='card-img'
        src={src} 
        alt="[description]"
         />
        <span className={className || ""}>{msg}</span>
    </div> 
    );
}