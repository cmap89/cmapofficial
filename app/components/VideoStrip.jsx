import Video from "./Video"
import { displayVids } from "../../data/videos"

export default function VideoStrip() {

    return (
        <div className="video-footer-section">
            <h2 className='vid-footer-text' >Check out More videos</h2>
            <div className='footer-video-display'>
                {displayVids.map(vid => (
                    <Video key={vid.id} videoClass="footer-vid" youtubeId={vid.youtubeId} />
                ))}
            </div>
        </div>
    )
}