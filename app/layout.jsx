import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Video from './components/Video';

import DownDayCover from '../public/Pics/down day artwork.jpg'
import WholeAgainCover from '../public/Pics/Whole Again Artwork.jpg'

import '../styles/globals.css';

import { displayVids } from "../data/videos"
const [vidId1, vidId2, vidId3] = displayVids;


const imgs = {
imgOne : DownDayCover.src,
imgTwo : WholeAgainCover.src,
};

// const {imgOne, imgTwo} = imgs;

export const metadata = {
  title: 'cmap',
  description: 'Official website for the band cmap featuring music and videos.',
  keywords: 'CMAP, music, artist, booking, videos',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://kit.fontawesome.com/984ea53b98.js" crossOrigin="anonymous" async></script>
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className='hero-grid'>
        {/* <Sidebar img={imgOne} /> */}
        <section className="main-sect">
        {children}
        </section>
        {/* <Sidebar img={imgTwo}/> */}
        </main>
        <section className="video-footer-section">
          <span className='vid-footer-text' >Check out More videos</span>
          <div className='footer-video-display'>
          <Video youtubeId={vidId1} /> 
          <Video youtubeId={vidId2} />
          <Video youtubeId={vidId3} />
          </div>
        </section>
        <Footer />
      </body>
    </html>
  )
}
