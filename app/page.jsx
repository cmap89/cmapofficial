"use client";

import PageSection from "./components/Utils/PageSection";
import FormCard from "./components/FormCard";
import Link from "next/link";


export default function FrontPage() {
  return (
    <div className="front-page-container">
      <PageSection className="fp-main">
        <div className="fp-description">
          <div className="fp-headline">
            <h1>Charlie Sharp</h1>
            <h2 className="fp-name">
              <Link className="fp-service-link" href="/services" >
                Audio Engineer
              </Link>
              <br />
              <Link className="fp-service-link" href="/services" >
                Musician
              </Link>
              <br />
              <Link className="fp-service-link" href="/services" >
                Educator
              </Link>
            </h2>
          </div>
        </div>
      </PageSection>
      <PageSection className="fp-contact-section">
        <h2 className="fp-contact-heading" >I&apos;ll help you make the music you always wanted to make</h2>
        <FormCard
          title={"I believe when you find your passion, you find yourself"}
          description={"Need an engineer, musician, teacher, or just have a question? Feel free to reach out."}
          className="fp-contact-card"
        />
      </PageSection>
    </div>
  );
}
