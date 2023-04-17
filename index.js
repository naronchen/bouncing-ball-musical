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
const colors = ['blue', 'orange', 'yellow'];
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
  pool.balls.forEach(ball => {
    ball.set_vibrato(checkbox.checked)
  })
});

// Slider
const sliderContainer = document.querySelector(".slider-container");
const sliderTrack = document.querySelector(".slider-track");
const sliderThumb = document.querySelector(".slider-thumb");
const sliderValue = document.querySelector("#slider-value");

let isDragging = false;

sliderThumb.addEventListener("mousedown", () => {
  isDragging = true;
});

sliderContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

sliderContainer.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  
  let thumbPosition = event.clientX - sliderContainer.getBoundingClientRect().left;
  
  if (thumbPosition < 0) thumbPosition = 0;
  if (thumbPosition > sliderContainer.offsetWidth) thumbPosition = sliderContainer.offsetWidth;
  
  sliderTrack.style.width = `${thumbPosition}px`;
  sliderThumb.style.left = `${thumbPosition - (sliderThumb.offsetWidth / 2)}px`;
  
  // Calculate the value of the slider based on the position of the thumb
  let sliderValue = Math.round((thumbPosition / sliderContainer.offsetWidth) * 100);

  pool.balls.forEach(ball => {
    ball.set_filter(sliderValue*200)
  });

  // Update the text element with the slider value
  document.querySelector("#slider-value").textContent = sliderValue*200;
});
