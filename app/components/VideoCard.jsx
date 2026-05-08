'use client'
import Video from './Video'

export default function VideoCard({ title, youtubeId, description = "", vidTitleClass = "" }) {
    return (
        <div className={`vid-card-container`}>
            <div className='vid-card-vid' ><Video youtubeId={youtubeId} /></div>
            <div className="vid-text">
                <h2 className={`vid-card-title ${vidTitleClass}`} >{title}</h2>
                <p className="vid-card-description" >{description}</p>
            </div>
        </div>
    )
}