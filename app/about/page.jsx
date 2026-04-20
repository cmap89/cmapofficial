"use client";

import PageSection from "../components/Utils/PageSection";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <PageSection className="ap-bio-sect">
        <div className="ap-bio-container">
          <h1 className="ap-heading">
            Why Charlie?
          </h1>
          <div className="ap-bio-content">
            I&apos;m a multi-instrumentalist, audio engineer, musician, and music educator with over two decades of experience in songwriting, performance, and production. I graduated from Berklee College of Music where I honed my skills while contributing to a wide range of projects as a guitarist, singer, drummer, audio engineer, and producer.
            <br />
            Through my work, I combine technical expertise with creative intuition to help bring ideas to life. As an educator, I&apos;m passionate about sharing knowledge in a way that&apos;s clear, practical, and inspiring. I&apos;m actively working on new music and collaborations, and I&apos;m always looking to connect with artists and projects where I can contribute as an engineer, performer, songwriter, and producer.
          </div>
        </div>
      </PageSection>
      <PageSection className="ap-playlist-sect">
        <div className="playlist-card-container">
          <h2 className="playlist-heading">A few songs I&apos;ve worked on</h2>
          <iframe className="ap-spotify-player" data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/0vJvjq8YJonp5FglcgA9Qu?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </PageSection>
    </div >
  );
}
