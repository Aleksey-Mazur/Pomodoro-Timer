import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import { SettingsContext } from '../helpers/SettingsContext';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`${60}%`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: red,
          trailColor: 'rgba(255,255,255,.2)',
        })}
      />
      <div style={{ marginTop: '1.25rem' }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: '1.25rem' }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
