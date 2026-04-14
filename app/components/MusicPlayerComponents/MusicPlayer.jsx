// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import TrackInfo from './TrackInfo';
// import PlayerControls from './PlayerControls';
// import ProgressBar from './ProgressBar';
// import WaPic from '../../../public/Pics/Whole Again Artwork.jpg';
// import '../../../styles/MusicPlayer.css';

// const tracks = [
//   {
//     title: 'Whole Again',
//     artist: 'cmap',
//     src: '/music/song1.mp3',
//     cover: WaPic,
//   },
//   {
//     title: 'Down Day',
//     artist: 'cmap',
//     src: '/music/song2.mp3',
//     cover: '/covers/cover2.jpg',
//   },
// ];

// export default function MusicPlayer() {
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.8);
//   const [progress, setProgress] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const audioRef = useRef(null);
//   const currentTrack = tracks[currentTrackIndex];

//   useEffect(() => {
//     if (audioRef.current) {
//       isPlaying ? audioRef.current.play() : audioRef.current.pause();
//       audioRef.current.volume = volume;
//     }
//   }, [isPlaying, currentTrackIndex, volume]);

//   const handleTimeUpdate = () => {
//     const current = audioRef.current.currentTime;
//     const total = audioRef.current.duration;
//     const progress = (current / total) * 100;
    
//     setCurrentTime(current);
//     setProgress(progress || 0);
//   };

//   const handleLoadedMetadata = () => {
//     setDuration(audioRef.current.duration);
//   };

//   const handleScrub = (value) => {
//     const scrubTime = (value / 100) * audioRef.current.duration;
//     audioRef.current.currentTime = scrubTime;
//     setProgress(value);
//   };

//   const skipTrack = (direction) => {
//     setCurrentTrackIndex((prevIndex) => {
//       const nextIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
//       return (nextIndex + tracks.length) % tracks.length;
//     });
//   };

//   return (
//     <>
//     <div className='player'>
//       <TrackInfo track={currentTrack} />
//       <audio
//         ref={audioRef}
//         src={currentTrack.src}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onEnded={() => skipTrack('next')}
//         />
//       <PlayerControls
//         isPlaying={isPlaying}
//         onPlayPause={() => setIsPlaying(!isPlaying)}
//         onSkipNext={() => skipTrack('next')}
//         onSkipPrev={() => skipTrack('prev')}
//         />
//       <ProgressBar 
//         currentTime={currentTime}
//         duration={duration}
//         progress={progress} 
//         onScrub={handleScrub}
//       />
//     </div>
//     </>
//   );
// }