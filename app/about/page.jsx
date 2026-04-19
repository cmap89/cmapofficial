"use client";

import PageSection from "../components/Utils/PageSection";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <PageSection className="ap-bio-sect">
        <div className="ap-background">
          <h2 className="ap-bio">
            hello world
          </h2>
        </div>
      </PageSection>
      <PageSection className="ap-playlist-sect">
        <iframe className="ap-spotify-player" data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/0vJvjq8YJonp5FglcgA9Qu?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </PageSection>
    </div >
  );
}
