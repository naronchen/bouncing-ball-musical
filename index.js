
import Ball from './ball.js';
import Pool from './pool.js';
import BlueBall from './blueBall.js';

const ball_blue = new Ball(40, 2, 1, 1, 'lightblue');
const ball_green = new Ball(10, 20, 0.9, 1.1, 'lightgreen');
const ball_orange = new Ball(120, 12, 1.2, 0.8, 'orange');
const ball_pink = new Ball(80, 80, 1.1, 1.1, 'pink');
const ball_yellow = new Ball(70, 80, 1.2, 1.1, 'purple');
const ball_skyblue = new Ball(70, 80, 1.2, 1.1, 'skyblue');

// create a bunch of blue balls
const blueball1 = new BlueBall(40, 2, 1, 1);
const blueball2 = new BlueBall(60, 40, 0.9, 1.1);
const blueball3 = new BlueBall(120, 12, 1.2, 0.8);
const blueball4 = new BlueBall(80, 80, 1.1, 1.1);

// put all blueball in an array
const blueballs = [blueball1, blueball2, blueball3, blueball4];

ball_blue.test()

const pool = new Pool();
pool.add(ball_blue);
pool.add(ball_green);
pool.add(ball_orange);
pool.add(ball_pink);
pool.add(ball_yellow);
pool.add(ball_skyblue);

pool.add(blueball1);
pool.add(blueball2);


pool.run();





// Add a click event listener to start the Tone.js audio
document.addEventListener('click', () => {
  // Start the AudioContext from a user action
  Tone.start();

  const synth = new Tone.Synth({
    oscillator: {
      type: 'sine2'
    }
  }).toDestination();
  
  // Vibrato effect with a depth of 0.1 Hz and a frequency of 5 Hz
  const vibrato = new Tone.Vibrato({
    depth: 0.1,
    frequency: 5,
    decay: 2
  }).toDestination();
  
  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 100,
    Q: 10
  }).toDestination();
  
  synth.connect(vibrato);
  synth.connect(filter);
  synth.triggerAttackRelease("A4", "4n");

  // Create and play the synthesizer
  // const synth = new Tone.Synth().toDestination();
  // synth.triggerAttackRelease("C5", "8n");
});

const startAudioContextButton = document.createElement('button');
startAudioContextButton.textContent = 'Start Audio Context';
document.body.appendChild(startAudioContextButton);

startAudioContextButton.addEventListener('click', () => {
  // start audio content for each blue ball
  blueballs.forEach(blueball => {
    blueball.startAudioContext();
  }
  );
});

const closeAudioContextButton = document.createElement('button');
closeAudioContextButton.textContent = 'Close Audio Context';
document.body.appendChild(closeAudioContextButton);

// Add a click event listener to the close audio context button that triggers the closeAudioContext() method
closeAudioContextButton.addEventListener('click', () => {
  blueballs.forEach(blueball => {
    blueball.closeAudioContext();
  }
  );
});
