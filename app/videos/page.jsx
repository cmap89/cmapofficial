import VideoCard from "../components/VideoCard";
import { videos } from "../../data/videos";
import PageSection from "../components/Utils/PageSection";


export default function VideosPage() {
    return (
        <div className="video-page">
            {videos.map(vid => (
                <PageSection key={vid.id}>
                    <VideoCard id={vid.id} title={vid.title} youtubeId={vid.youtubeId} description={vid.description} />
                </PageSection>
            ))}
        </div>
    )
}