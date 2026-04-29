'use client';

import PageSection from "../components/Utils/PageSection";
import FormCard from "../components/FormCard";
import Link from "next/link";
import Button from "../components/Utils/Button";
import AccordionUsage from "../components/Utils/Accordion";

export default function BookPage() {
  return (
    <div className="services-page-container">
      <PageSection className="skill-accordion-section">
        <h1>Services</h1>
        <h2>With over two decades of music experience and training, cmap Music offers many ways to bring your music to life.
        </h2>
        <AccordionUsage
          className="audio-engineering-panel"
          title="Audio Engineering"
          content={<>
            <p>It&apos;s a technological world. Today, producing a hit record can be as easy as opening your laptop. At cmap Music, Charlie can guide you through that very process of production, using industry-leading DAWs such as Logic Pro.
            </p>
            <p>Together, we can analyze your songs, arrangements, instrumentation plus more, and improve key factors that will give your music the impact and presence that it truly deserves when it hits the airwaves.
            </p>
            <p>
              At cmap Music, we discuss your motivations and the intent that you want to convey to your audience with your music. We then implement strategies to help you achieve a successful finished product: a well-produced song.
            </p>
            <p>
              You want to get your music out there and I want your music to be heard.
            </p>
            <Link href="#sp-contact-form" >
              <Button className="bpg-btn" msg="Book Now" />
            </Link>
          </>}
        />
        <AccordionUsage
          className="musician-panel"
          title="Musician"
          content={<>
            <p>So, you wrote the perfect song. You&apos;re ready to record your next hit. Now, you just need the perfect guitar solo, some smooth rhythm guitar, bass guitar, keys, or even background vocals to bring it all together.
            </p>
            <p>
              I will collaborate with you to record the perfect parts that enhance your songs and bring your vision to life. All tracks will be professionally recorded using state-of-the-art software and delivered to you the way you always envisioned, to make your next song the best it can be.
            </p>
            <Link href="#sp-contact-form" >
              <Button className="bpg-btn" msg="Book Now" />
            </Link>
          </>}
        />
        <AccordionUsage
          className="music-lessons-panel"
          title="Music Lessons"
          content={<>
            <p>You&apos;ve always wanted to learn to play the guitar, how to record your tracks, or just understand music. Let&apos;s take the first step! cmap Music gives you a tailor-made experience that will help you to achieve your goals. You will be getting one-on-one coaching by Charlie, a musician with over 20 years of experience, principally in the guitar.
            </p>
            <p>
              Within each lesson, you can expect to learn a wide array of topics including music theory, guitar technique, performance coaching, ear training, recording techniques, and songwriting, among many others. With special focus on where you are in the process, you will be getting undivided attention that will help you grow in areas of special interest.
            </p>
            <p>
              Whether you&apos;d like to learn more about performing, specific technique, or you simply want to learn a catalogue of songs, cmap Music has you covered. Just fire up the guitars and let&apos;s get moving!
            </p>
            <Link href="#sp-contact-form" >
              <Button className="bpg-btn" msg="Book Now" />
            </Link>
          </>}
        />
      </PageSection>
      <PageSection id="sp-contact-form" className="sp-contact-sect" >
        <h2 className="sp-contact-heading">Contact me today</h2>
        <FormCard scriptSrc={"https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9QenBKViIsIldlYnNpdGVJRCI6Indic19WMDRKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnZzdESm4ifQ=="} title={`Let's start your musical journey`} description={``} ></FormCard>
      </PageSection>
    </div >
  );
}