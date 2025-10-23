'use client'

import DownDayCover from '../../public/Pics/down day artwork.jpg'
import WholeAgainCover from '../../public/Pics/Whole Again Artwork.jpg'

const imgs = {
  imgOne: DownDayCover.src,
  imgTwo: WholeAgainCover.src,
};

// import SocialStrip from "../components/SocialsStrip"


import styles from './page.module.css';



export default function Practice() {
  return (
    <div className={styles.practiceContainer}>
      <h1>Sandbox</h1>

    </div>
  );
}
