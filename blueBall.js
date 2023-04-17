import Ball from './ball.js';
import * as Tone from 'https://cdn.skypack.dev/tone@14.7.77';

class BlueBall extends Ball {
    constructor(x, y, vx, vy, pool) {
        const color = 'skyblue'; 
        super(x, y, vx, vy, color, pool);

        // Set up synth with low-pass filter and longer release time
        this.core = new Tone.PolySynth().toMaster();
        this.patch = {

            oscillator: {
                type: "triangle"
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
        };
        this.core.set(this.patch);
    }

    playCollisonSound() {
        // Play a random note from the note pool with reduced velocity

        // Add vibrato effect if enabled
        if (this.vibrato_check) {
            this.core.connect(this.vibrato);
        }
        else{
            this.core = new Tone.PolySynth().toMaster();
            this.core.set(this.patch);
        }

        this.core.triggerAttackRelease(["C4"], "8n");


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
