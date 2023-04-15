import Ball from './ball.js';

class BlueBall extends Ball {
    constructor(x, y, vx, vy) {
        const color = 'skyblue'; 
        super(x, y, vx, vy, color);
        
        this.vibrato = new Tone.Vibrato({
            depth: 0.1,
            frequency: 2,
            decay: 4
          }).toDestination();
        this.core = new Tone.PolySynth().toMaster();
        this.patch = {
            frequency: "C4",
            detune: 12,
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
        if(this.vibrato_check){
            this.core.connect(this.vibrato);
        }
        // ...
        this.core.triggerAttackRelease(["F4"], "12n");
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
