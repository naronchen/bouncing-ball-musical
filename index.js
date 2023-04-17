
import Ball from './ball.js';
import Pool from './pool.js';


const pool = new Pool();


const startAudioContextButton = document.createElement('button');
startAudioContextButton.textContent = 'Start';
document.body.appendChild(startAudioContextButton);
startAudioContextButton.addEventListener('click', () => {
  Tone.start();
});

const addBallButton = document.createElement('button');
addBallButton.textContent = 'Add Ball';
document.body.appendChild(addBallButton);

// Add class names to the buttons


const colorSelect = document.createElement('select');
const colors = ['blue', 'orange', 'lightgreen'];
colors.forEach(color => {
  const option = document.createElement('option');
  option.value = color;
  option.text = color;
  colorSelect.appendChild(option);
});
document.body.appendChild(colorSelect);


addBallButton.addEventListener('click', () => {
  const color = colorSelect.value;
  console.log("ball color: ", color);
  pool.addBall(color);
});


const clearbtn = document.createElement('button');
clearbtn.textContent = 'Clear';
document.body.appendChild(clearbtn);

clearbtn.addEventListener('click', () => {
  pool.clear();
});

startAudioContextButton.className = 'btn';
addBallButton.className = 'btn';
clearbtn.className = 'btn';




// create a checkbox element
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
const label = document.createElement('label');
label.textContent = 'Vibrato On/Off';
const container = document.querySelector('#myCheckboxContainer');
container.appendChild(checkbox);
container.appendChild(label);

checkbox.addEventListener('click', () => {
  orangeballs.forEach(ball => {
    ball.set_vibrato(checkbox.checked)
  }),
  blueballs.forEach(ball => {
    ball.set_vibrato(checkbox.checked)
  }),
  yellowballs.forEach(ball => {
    ball.set_vibrato(checkbox.checked)
  }
  );
});
