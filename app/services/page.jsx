'use client';

import PageSection from "../components/Utils/PageSection";
import FormCard from "../components/FormCard";

export default function BookPage() {
  return (
    <div className="services-page-container">
      <PageSection className="skill-list-sect" >
        <h2>With almost 30 years of music experience and training, cmap offers many ways to bring your music to life.</h2>
        <ul className="skill-list">
          <li className="skill-item">
            <h2>Audio Engineering</h2>
            <p>Editing, Mixing, and Mastering from the comfort of your home</p>
          </li>
          <li className="skill-item">
            <h2>Musician</h2>
            <p>I am a multi-instrumentalist with a full studio setup. I&apos;m ready, willing, and able to perform on your next hit. </p>
          </li>
          <li className="skill-item">
            <h2>Music Lessons</h2>
            <p>One-on-one instruction for all skill levels</p>
          </li>
        </ul>
      </PageSection>
      <PageSection className="sp-contact-sect" >
        <h2 className="sp-contact-heading">Contact me today</h2>
        <FormCard scriptSrc={"https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9QenBKViIsIldlYnNpdGVJRCI6Indic19WMDRKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnZzdESm4ifQ=="} title={'text 1'} description={'txt2'} ></FormCard>
      </PageSection>
    </div>
  );
}