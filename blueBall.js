import Ball from './ball.js';

class BlueBall extends Ball {
    constructor(x, y, vx, vy, pool) {
        const color = 'skyblue'; 
        super(x, y, vx, vy, color, pool);

        // Set up synth with low-pass filter and longer release time
        this.core = new Tone.PolySynth({
            oscillator: {
                type: "sawtooth"
            },
            envelope: {
                attack: 0.2,
                decay: 5,
                sustain: 0.6,
                release: 4.0 // increase the release time
            },            
            filter: {
                type: "lowpass",
                frequency: 800,
                Q: 1
            },
            filterEnvelope: {
                attack: 0.2,
                decay: 0.4,
                sustain: 0.6,
                release: 2.0,
                baseFrequency: 300,
                octaves: 1,
                exponent: 2
            }
        }).toDestination();
    }

    playCollisonSound() {
        // Play a random note from the note pool with reduced velocity
        this.core.triggerAttackRelease(["C4", "E4", "G4"], "8n", undefined, 0.3);

        // Add vibrato effect if enabled
        if (this.vibrato_check) {
            this.core.connect(this.vibrato);
        }
    }

    checkCollisionWithBalls() {
        this.pool.forEach(ball => {
            if (ball !== this && this.isCollidingWith(ball)) {
                // Perform collision handling logic here
                this.bounce(ball);
                this.playCollisonSound();
            }
        });
    }

}

export default BlueBall;
