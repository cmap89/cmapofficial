import '../../../styles/TrackInfo.css';

export default function TrackInfo({ track }) {
  return (
    <div className="track-info">
      <h2 className="song-title">{track.title.toUpperCase()}</h2>
      <h3 className="artist-name">{track.artist || 'cmap'}</h3>
    </div>
  );
}