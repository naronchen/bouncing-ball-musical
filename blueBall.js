import Ball from './ball.js';

class BlueBall extends Ball {
    constructor(x, y, vx, vy) {
        const color = 'darkblue';
        super(x, y, vx, vy, color);

        this.core = new Tone.PolySynth({}, Tone.Synth).toMaster();
        this.patch = {
            frequency: "B4",
            detune: 0,
            oscillator: {
                type: "square", // changed oscillator type to "sawtooth"
                spread: 30, // added spread parameter to create a detuned sound
            },
            filter: {
                Q: 2, // increased filter Q value for a resonant filter
                type: "bandpass", // changed filter type to "bandpass" for a more complex frequency response
                rolloff: -12, // changed filter rolloff to -12dB for a less steep slope
            },
        
            envelope: {
                attack: 0.1, // shortened attack time for a more percussive sound
                decay: 0.5, // shortened decay time for a more staccato sound
                release: 2.0, // increased release time for a longer sustain
            },
        
            filterEnvelope: {
                attack: 0.2, // increased filter envelope attack time for a more pronounced filter sweep
                decay: 0.8, // increased filter envelope decay time for a longer filter sweep
                release: 2.0,
                baseFrequency: 800, // increased base frequency of the filter sweep
                octaves: 2, // reduced the number of octaves for a narrower filter sweep
            }
        };
        this.core.set(this.patch);
        
    }

    playCollisonSound() {
        // Logic to play collision sound based on information in BlueBall class
        console.log('Playing collision sound for BlueBall');
        // ...
        this.core.triggerAttackRelease("A3", "8n");
    }

    checkCollisionWithBalls(balls) {
        balls.forEach(ball => {
          if (ball !== this && this.isCollidingWith(ball)) {
            // Perform collision handling logic here
            // console.log('rewrote!');
            this.bounce(ball);
            this.playCollisonSound();
          }
        });
      }

    startAudioContext() {
        Tone.start();
    }
    
    closeAudioContext() {
        Tone.context.close();
    }

}

export default BlueBall;
