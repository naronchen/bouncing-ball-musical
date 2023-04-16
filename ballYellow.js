import Ball from './ball.js';

class YellowBall extends Ball {
    constructor(x, y, vx, vy, pool) {
        const color = 'lightgreen'; // I'm color blind
        super(x, y, vx, vy, color, pool);

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
        console.log('Playing collision sound for YellowBall');
        
        // Play a chord of four notes
        const notes = ["C4"];
        this.core.triggerAttackRelease(notes, "8n");
      
        // Add vibrato effect if enabled
        if (this.vibrato_check) {
          this.core.connect(this.vibrato);
        }
        else{
            this.core = new Tone.PolySynth().toMaster();
            this.core.set(this.patch);
        }
        // ...
        this.core.triggerAttackRelease(["G4", "B4"], "10n");
    }

    checkCollisionWithBalls(balls) {
        this.pool.forEach(ball => {
          if (ball !== this && this.isCollidingWith(ball)) {
            // Perform collision handling logic here
            // console.log('rewrote!');
            this.bounce(ball);
            this.playCollisonSound();
          }
        });
      }


}

export default YellowBall;
