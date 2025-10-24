'use client'

import Video from "./Video";
import { displayVids } from "../../data/videos";
import { usePathname } from "next/navigation";

export default function VideoStrip() {
    const path = usePathname();
    const isVideosPage = path === "/videos";
    if (!isVideosPage) {
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
}