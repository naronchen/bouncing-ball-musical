import Ball from './ball.js';

class BlueBall extends Ball {
    constructor(x, y, vx, vy) {
        const color = 'darkblue';
        super(x, y, vx, vy, color);

        this.core = new Tone.PolySynth({}, Tone.Synth).toMaster();
        this.patch = {
            frequency: "A4",
            detune: 0,
            oscillator: {
                type: "square"
            },
            filter: {
                Q: 1,
                type: "lowpass",
                rolloff: -24
            },
    
            envelope: {
                attack: 0.7,
                decay: 1.0,
                release: 3.0
            },
    
            filterEnvelope: {
                attack: 0.7,
                decay: 1.0,
                release: 3.0,
                baseFrequency: 600,
                octaves: 4
            }
        }
        this.core.set(this.patch);
    }

    playCollisonSound() {
        // Logic to play collision sound based on information in BlueBall class
        console.log('Playing collision sound for BlueBall');
        // ...
        this.core.triggerAttackRelease("A4", "4n");
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
