
import Ball from './ball.js';
import Pool from './pool.js';

const ball_blue = new Ball(200, 2, 1, 1, 'lightblue');
const ball_green = new Ball(8, 5, 0.9, 1.5, 'lightgreen');
const ball_orange = new Ball(7, 9, 1.2, 1.5, 'orange');

ball_blue.test()

const pool = new Pool();
pool.add(ball_blue);
pool.add(ball_green);
pool.add(ball_orange);

pool.run();


// Add a click event listener to start the Tone.js audio
document.addEventListener('click', () => {
  // Start the AudioContext from a user action
  Tone.start();

  // Create and play the synthesizer
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C5", "8n");
});

