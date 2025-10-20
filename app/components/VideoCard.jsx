'use client'
import Video from './Video'

// Props: {id: number, title:string, youtubeId: string, description: string}
export default function VideoCard({title, youtubeId, description = "", vidTitleClass=""}) {
        return (
        <div className={`vid-card-container`}>
            <div className='vid-card-vid' ><Video youtubeId={youtubeId} /></div>
            <div className="vid-text">
                <span className={`vid-card-title ${vidTitleClass}`} >{title}</span>
                <p className="vid-card-description" >{description}</p>
            </div>
        </div>
    )
}