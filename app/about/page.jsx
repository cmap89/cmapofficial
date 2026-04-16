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
      <PageSection className="fp-description">
        <p className="fp-paragraph">
          From the sun-soaked city of Belize to the foggy streets of San
          Francisco, cmap’s journey echoes in every riff and rhythm, igniting
          listeners with an electrifying arsenal of musical prowess. The
          experience seamlessly blends rock, punk, and Caribbean influences into
          an explosive sonic cocktail. Get ready to ride the wave of sound that
          defines the new era of modern Belizean rock.
        </p>
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
      <PageSection>
        <form action=""></form>
      </PageSection>
    </div>
  );
}
