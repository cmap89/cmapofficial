import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoStrip from './components/VideoStrip';
import '../styles/globals.css';

import { Reenie_Beanie, Cantarell } from 'next/font/google';
const reenie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
});

const cantarell = Cantarell({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'cmap - Personalized Private Guitar Lessons & Sessions',
  description: 'Personalized guitar lessons | Recording & music services about you.',
  keywords: 'music lessons, guitar lessons, recording, mixing',
  icons: {
    icon: [
      { url: '/Pics/CMAP_Logos_2022/PNG/500x500/CMAP_Logo_Tilted_With_Name_.png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={reenie.className} style={{ '--secondary-font': cantarell.style.fontFamily }}>
      <head>
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <VideoStrip />
        <Footer />
      </body>
    </html>
  )
}