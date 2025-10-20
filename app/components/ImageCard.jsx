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
        width={375} 
        height={375} />
        <span className={className || ""}>{msg}</span>
    </div> 
    );
}