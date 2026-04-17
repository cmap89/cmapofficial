"use client";

import PageSection from "./components/Utils/PageSection";
import FormCard from "./components/FormCard";

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
      <PageSection className="fp-contact-section">
        <h1>I&apos;ll help you make the music you always wanted to make</h1>
        <FormCard
          scriptSrc={"https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9QenBKViIsIldlYnNpdGVJRCI6Indic19WMDRKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnZzdESm4ifQ=="}
          title={"I believe when you find your passion, you find yourself"}
          description={"Need an engineer, musician, teacher, or just have a question? Feel free to reach out."}
        />
      </PageSection>
    </div>
  );
}
