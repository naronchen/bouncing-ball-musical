
import Ball from './ball.js';
import Pool from './pool.js';
import BlueBall from './blueBall.js';
import OrangeBall from './orangeBall.js';
import YellowBall from './ballYellow.js';

// const ball_blue = new Ball(40, 2, 1, 1, 'lightblue');
// const ball_green = new Ball(10, 20, 0.9, 1.1, 'lightgreen');
// const ball_orange = new Ball(120, 12, 1.2, 0.8, 'orange');
// const ball_pink = new Ball(80, 80, 1.1, 1.1, 'pink');
// const ball_yellow = new Ball(70, 80, 1.2, 1.1, 'purple');
// const ball_skyblue = new Ball(70, 80, 1.2, 1.1, 'skyblue');

// create a bunch of blue balls
const blueball1 = new BlueBall(100, 120, 1, 1);
const blueball2 = new BlueBall(40, 400, 0.9, 1.1);
const blueball3 = new BlueBall(200, 200, 5, 0.8);
const blueball4 = new BlueBall(90, 70, 2, 4.1);

// create a bunch of orange balls, different position
const orangeball1 = new OrangeBall(140, 120, 1, 1);
const orangeball2 = new OrangeBall(80, 400, 0.9, 1.1);
const orangeball3 = new OrangeBall(140, 200, 5, 0.8);
const orangeball4 = new OrangeBall(130, 70, 2, 4.1);
// put all blueball in an array

// create a bunch of yellow balls
const yellowball1 = new YellowBall(40, 120, 1, 1);
const yellowball2 = new YellowBall(60, 200, 0.9, 1.1);
const yellowball3 = new YellowBall(90, 150, 5, 0.8);
const yellowball4 = new YellowBall(88, 70, 2, 4.1);


const blueballs = [blueball1, blueball2, blueball3, blueball4];
const orangeballs = [orangeball1, orangeball2, orangeball3, orangeball4];
const yellowballs = [yellowball1, yellowball2, yellowball3, yellowball4];
// ball_blue.test()

const pool = new Pool();
// pool.add(ball_blue);
// pool.add(ball_green);
// pool.add(ball_orange);
// pool.add(ball_pink);
// pool.add(ball_yellow);
// pool.add(ball_skyblue);

// add all blue balls to the pool

blueballs.forEach(blueball => {
  pool.add(blueball);
});
orangeballs.forEach( orangeball => {
  pool.add(orangeball);
});
yellowballs.forEach( yellowball => {
  pool.add(yellowball);
});



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
  vibrato = new Tone.Vibrato({
    depth: 0.1,
    frequency: 5,
    decay: 2
  }).toDestination();
  
  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 100,
    Q: 10
  }).toDestination();
  
  synth.connect(this.vibrato);
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
