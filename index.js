
import Ball from './ball.js';
import Pool from './pool.js';

const ball_blue = new Ball(40, 2, 1, 1, 'lightblue');
const ball_green = new Ball(10, 20, 0.9, 1.1, 'lightgreen');
const ball_orange = new Ball(120, 12, 1.2, 0.8, 'orange');
const ball_pink = new Ball(80, 80, 1.1, 1.1, 'pink');
const ball_yellow = new Ball(70, 80, 1.2, 1.1, 'purple');
const ball_skyblue = new Ball(70, 80, 1.2, 1.1, 'skyblue');


ball_blue.test()

const pool = new Pool();
pool.add(ball_blue);
pool.add(ball_green);
pool.add(ball_orange);
pool.add(ball_pink);
pool.add(ball_yellow);
pool.add(ball_skyblue);

pool.run();


// Add a click event listener to start the Tone.js audio
document.addEventListener('click', () => {
  // Start the AudioContext from a user action
  Tone.start();

  // Create and play the synthesizer
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C5", "8n");
});

