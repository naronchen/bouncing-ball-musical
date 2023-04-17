import Ball from './ball.js';
import BlueBall from './blueBall.js';
import OrangeBall from './orangeBall.js';
import YellowBall from './ballYellow.js';
import * as Tone from 'https://cdn.skypack.dev/tone@14.7.77';

class Pool{
    constructor(){
        this.balls = [];
    }

    add(ball){
        this.balls.push(ball);
    }

    addBall(color) {
        const min = 30;
        const x = Math.floor(Math.random() * (window.innerWidth - min + 1) + min);
        const y = Math.floor(Math.random() * (window.innerHeight - 2* min + 1) + min);
        const velX = Math.random() + 0.5;
        const velY = Math.random() + 0.5;
        // console.log("x", x, "y", y, "velX", velX, "velY", velY)
        
        let ball;
        switch (color) {
          case 'blue':
            ball = new BlueBall(x, y, velX, velY, this.balls);
            break;
          case 'orange':
            ball = new OrangeBall(x, y, velX, velY, this.balls);
            break;
          case 'lightgreen':
            ball = new YellowBall(x, y, velX, velY, this.balls);
            break;
          // add cases for other colors here
          default:
            ball = new Ball(x, y, velX, velY, color, this.balls);
        }
        // console.log("hi")
        this.updatePool(ball);
        this.balls.push(ball);
        ball.startAnimation();
      }
    
    updatePool(newball){
        this.balls.forEach(ball => {
            ball.add_to_pool(newball);
        });
    }


    closeAudioContext(){
        // Tone.context.close();
    }

    detectCollision(){
        // this.balls.forEach(ball => {
        //     ball.checkCollisionWithBalls(this.balls);
        // });
    }

    clear() {
        this.balls.forEach(ball => {
            ball.stopAnimation();
            ball.ballElement.remove(); // Remove the ball element from the DOM
        });
        this.balls = [];
    }

    run(){
        // setInterval(() => {
        //   this.detectCollision();
        // }, 100);

      }

}

export default Pool;
