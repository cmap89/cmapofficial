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

const {imgOne, imgTwo} = imgs;

export const metadata = {
  title: 'cmap',
  description: 'Music & More',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
