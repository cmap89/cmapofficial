import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../../../styles/PlayerControls.css';

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onSkipNext: PropTypes.func.isRequired,
  onSkipPrev: PropTypes.func.isRequired
};

export default function PlayerControls({ isPlaying, onPlayPause, onSkipNext, onSkipPrev }) {
  return (
    <div className="player-controls">
      <button 
        className="control-button skip-back"
        onClick={onSkipPrev}
        aria-label="Previous track"
      >
        <FaStepBackward />
      </button>

      <button 
        className="control-button play-pause"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button 
        className="control-button skip-forward"
        onClick={onSkipNext}
        aria-label="Next track"
      >
        <FaStepForward />
      </button>
    </div>
  );
}