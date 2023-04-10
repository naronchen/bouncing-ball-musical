import Ball from './ball.js';

class Pool{
    constructor(){
        this.balls = [];
    }

    add(ball){
        ball.startAnimation(this.balls);
        this.balls.push(ball);
    }

    detectCollision(){
        // this.balls.forEach(ball => {
        //     ball.checkCollisionWithBalls(this.balls);
        // });
    }


      run(){
        // setInterval(() => {
        //   this.detectCollision();
        // }, 100);
      }

}

export default Pool;
