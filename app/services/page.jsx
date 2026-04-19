'use client';

import PageSection from "../components/Utils/PageSection";

export default function BookPage() {
  return (
    <div className="services-page-container">
      <PageSection className="service-desc-sect" >
        <h2>With almost 30 years of music experience and training, cmap offers many ways to bring your music to life.</h2>
      </PageSection>
      <PageSection className="skill-list-sect">
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
    </div>
  );
}