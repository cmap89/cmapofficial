import PropTypes from 'prop-types';
import '../../../styles/ProgressBar.css';

ProgressBar.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onScrub: PropTypes.func.isRequired
};

function formatTime(seconds) {
  if (!seconds) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function ProgressBar({ currentTime, duration, progress, onScrub }) {
  return (
    <div className="progress-container">
      <span className="time-display">{formatTime(currentTime)}</span>
      
      <div className="progress-bar">
        <div className="progress-bar-background" />
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }} 
        />
        <div 
          className="progress-handle" 
          style={{ left: `${progress}%` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => onScrub(Number(e.target.value))}
          aria-label="Progress bar"
        />
      </div>

      <span className="time-display">{formatTime(duration)}</span>
    </div>
  );
}
