
import Ball from './ball.js';

const ball_blue = new Ball(0, 0, 2, 1, 'lightblue');
const ball_green = new Ball(0, 0, 2, 2.5, 'lightgreen');
const ball_red = new Ball(0, 0, 2, 2, 'orange');

ball_blue.startAnimation();
ball_green.startAnimation();
ball_red.startAnimation();

// Add a click event listener to start the Tone.js audio
document.addEventListener('click', () => {
  // Start the AudioContext from a user action
  Tone.start();

  // Create and play the synthesizer
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
});
