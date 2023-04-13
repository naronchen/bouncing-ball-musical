import Ball from './ball.js';

class YellowBall extends Ball {
    constructor(x, y, vx, vy) {
        const color = 'lightgreen'; // I'm color blind
        super(x, y, vx, vy, color);
    
        this.core = new Tone.PolySynth().toMaster();
        this.patch = {
            frequency: "C4",
            detune: 20,
            oscillator: {
                type: "triangle"
            },
            filter: {
                Q: 2,
                type: "lowpass",
                rolloff: -24
            },
            envelope: {
                attack:  0.6,
                decay:   0.1,
                release: 1.2
            },
            filterEnvelope: {
                attack:  0.6,
                decay:   0.1,
                release: 1.2,
                baseFrequency: 520,
                octaves: 2
            }
        }
        this.core.set(this.patch);
        
    }
    

    playCollisonSound() {
        // Logic to play collision sound based on information in BlueBall class
        console.log('Playing collision sound for BlueBall');
        // ...
        this.core.triggerAttackRelease(["G4", "B4"], "8n");
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

export default YellowBall;
