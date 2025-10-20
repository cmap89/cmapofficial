export default function VolumeControl({ volume, onVolumeChange }) {
  return (
   <div className="volume-control">
     <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={(e) => onVolumeChange(Number(e.target.value))}
      style={{ width: '100%' }}
    />
   </div>
  );
}
