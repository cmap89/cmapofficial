import VideoCard from "../components/VideoCard";
import { videos } from "../../data/videos";
import PageSection from "../components/Utils/PageSection";
import IGFeed from "../components/IGFeed";


export default function VideosPage() {
    return (
        <div className="video-page-container">
            <PageSection className="ig-feed-section" >
                <IGFeed />
            </PageSection>
            {videos.map(vid => (
                <PageSection className="vp-vid-section" key={vid.id}>
                    <VideoCard id={vid.id} title={vid.title} youtubeId={vid.youtubeId} description={vid.description} />
                </PageSection>
            ))}
        </div>
    )
}