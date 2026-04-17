"use client";

import Link from "next/link";
import Button from "../components/Utils/Button";
import downDayPic from "../../public/Pics/down day artwork.jpg";
import ImageCard from "../components/ImageCard";
import PageSection from "../components/Utils/PageSection";
import SocialsStrip from "../components/SocialsStrip";

export default function AboutPage() {
  return (
    <div className="band-page-container">
      <PageSection className="bpg-section">
        <div className="bpg-background">
          <h2 className="bpg-bio">
            From the sun-soaked city of Belize to the foggy streets of San
            Francisco, cmap’s journey echoes in every riff and rhythm, igniting
            listeners with an electrifying arsenal of musical prowess. The
            experience seamlessly blends rock, punk, and Caribbean influences into
            an explosive sonic cocktail. Get ready to ride the wave of sound that
            defines the new era of modern Belizean rock.
          </h2>
        </div>
      </PageSection>
      <PageSection className="bpg-featured-image">
        <ImageCard
          src={downDayPic}
          className="bpg-msg"
          msg="The new single Down Day is out now!"
        />
        <Link
          href="https://distrokid.com/hyperfollow/cmap/down-day"
          target="_blank"
        >
          <Button className="bpg-btn" msg="Stream The Song" />
        </Link>
      </PageSection>
      <PageSection className="bpg-socials-section" >
        <h2>Follow cmap on all platforms</h2>
        <SocialsStrip className="bpg-socials" exclude={['instagram-services', 'facebook-services']} />
      </PageSection>
    </div>
  );
}
