import VideoCard from "../components/VideoCard";
import { videos } from "../../data/videos";


export default function VideosPage() {
    return (
        <div className="video-page">
            {videos.map(vid => (
                <VideoCard key={vid.id} id={vid.id} title={vid.title} youtubeId={vid.youtubeId} description={vid.description} />
            ))}
        </div>
    )
}