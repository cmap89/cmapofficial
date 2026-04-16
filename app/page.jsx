"use client";

import Link from "next/link";
import Button from "./components/Utils/Button";
import downDayPic from "../public/Pics/down day artwork.jpg";
import VideoCard from "./components/VideoCard";
import ImageCard from "./components/ImageCard";
import PageSection from "./components/Utils/PageSection";

export default function FrontPage() {
  return (
    <div className="front-page-container">
      <PageSection className="fp-main">
        <div className="fp-description">
          <div className="fp-headline">
            <h1>Charlie Sharp</h1>
            <h2 className="fp-name">
              Audio Engineer
              <br />
              Musician
              <br />
              Educator
            </h2>
          </div>
        </div>
      </PageSection>
      <PageSection className="fp-featured-image">
        <ImageCard
          src={downDayPic}
          className="fp-msg"
          msg="The new single Down Day is out now!"
        />
        <Link
          href="https://distrokid.com/hyperfollow/cmap/down-day"
          target="_blank"
        >
          <Button className="fp-btn" msg="Stream Here" />
        </Link>
      </PageSection>
      <PageSection className="fp-featured-video">
        <VideoCard
          youtubeId={"mzmf3YeukF0"}
          title="Down Day Official Audio"
          vidTitleClass="fp-vid-title"
        />
      </PageSection>
    </div>
  );
}
