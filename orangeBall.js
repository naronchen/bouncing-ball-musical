import Ball from './ball.js';

class OrangeBall extends Ball {
    constructor(x, y, vx, vy) {
        const color = 'orange';
        super(x, y, vx, vy, color);
    
        this.core = new Tone.PolySynth().toMaster();
        this.patch = {
            frequency: "G4",
            detune: 10,
            oscillator: {
                type: "triangle"
            },
            filter: {
                Q: 2,
                type: "lowpass",
                rolloff: -24
            },
            envelope: {
                attack:  0.8,
                decay:   0.1,
                release: 1.2
            },
            filterEnvelope: {
                attack:  0.6,
                decay:   0.1,
                release: 1.2,
                baseFrequency: 400,
                octaves: 2
            }
        }
        this.core.set(this.patch);
        
    }
    

    playCollisonSound() {
        // Logic to play collision sound based on information in BlueBall class
        console.log('Playing collision sound for Orange Ball');
        // ...
        this.core.triggerAttackRelease(["C5", "E5","G4"], "8n");
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

export default OrangeBall;