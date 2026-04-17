"use client";

import Link from "next/link";
import Button from "../components/Utils/Button";
import downDayPic from "../../public/Pics/down day artwork.jpg";
import ImageCard from "../components/ImageCard";
import PageSection from "../components/Utils/PageSection";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <PageSection className="ap-section">
        <div className="ap-background">
          <h2 className="ap-bio">
            From the sun-soaked city of Belize to the foggy streets of San
            Francisco, cmap’s journey echoes in every riff and rhythm, igniting
            listeners with an electrifying arsenal of musical prowess. The
            experience seamlessly blends rock, punk, and Caribbean influences into
            an explosive sonic cocktail. Get ready to ride the wave of sound that
            defines the new era of modern Belizean rock.
          </h2>
        </div>
      </PageSection>
      <PageSection className="fp-featured-image">
        <ImageCard
          src={downDayPic}
          className="fp-msg"
          msg="Check out the new single today!"
        />
        <Link
          href="https://distrokid.com/hyperfollow/cmap/down-day"
          target="_blank"
        >
          <Button className="fp-btn" msg="Stream Here" />
        </Link>
      </PageSection>
    </div>
  );
}
