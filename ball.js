class Ball {
    constructor(x, y,vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.ballElement = document.createElement('div');
        
        this.ballElement.style.width = '30px';
        this.ballElement.style.height = '30px';
        this.ballElement.style.borderRadius = '25px';
        this.ballElement.style.backgroundColor = color;
        this.ballElement.style.position = 'absolute';
        this.ballElement.style.top = `${y}px`;
        this.ballElement.style.left = `${x}px`;
    }

    color(){
        return this.color;
    }
    width(){
        return parseInt(this.ballElement.style.width, 10);
    }
    updateBallPosition(balls) {
      // Update the ball's position
      this.x += this.vx;
      this.y += this.vy;
  
      // Check for horizontal bounce
      if (this.x <= 0 || this.x >= window.innerWidth - this.ballElement.clientWidth) {
          this.vx = -this.vx;
      }
  
      // Check for vertical bounce
      if (this.y <= 0 || this.y >= window.innerHeight - this.ballElement.clientHeight) {
          this.vy = -this.vy;
      }
  
      // Update the position of the ball element
      this.ballElement.style.top = `${this.y}px`;
      this.ballElement.style.left = `${this.x}px`;
  
      // Check for collision with other balls
      this.checkCollisionWithBalls(balls);
  }
    
    startAnimation(balls) {
        // Append the ball element to the DOM
        document.body.appendChild(this.ballElement);
    
        const animateBall = () => {
          this.updateBallPosition(balls);
          requestAnimationFrame(animateBall);
        };
        animateBall();
      }

    isCollidingWith(otherBall) {
      const dx = this.x - otherBall.x;
      // console.log("dx", otherBall.x)
      const dy = this.y - otherBall.y;
      // console.log("dy", otherBall.y)
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radiusSum = this.width() / 2 + otherBall.width() / 2;
      // console.log(distance, radiusSum)
      return distance <= radiusSum;
    }

    playCollisonSound(){
    }


    bounce(ball){
      // Update the velocities of colliding balls for bounce effect
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      // Swap velocities for bounce effect
      const thisVx = this.vx * cos + this.vy * sin;
      const thisVy = this.vy * cos - this.vx * sin;
      const ballVx = ball.vx * cos + ball.vy * sin;
      const ballVy = ball.vy * cos - ball.vx * sin;

      // Update velocities of colliding balls
      this.vx = thisVx;
      this.vy = thisVy;
      ball.vx = ballVx;
      ball.vy = ballVy;

      // Add a small separation between colliding balls to prevent sticking
      const separation = (this.width() / 2 + ball.width() / 2) - distance;
      const separationX = separation * cos * 0.7;
      const separationY = separation * sin * 0.7;
      this.x += separationX;
      this.y += separationY;
      ball.x -= separationX;
      ball.y -= separationY;

      // Play collision sound
    }

    
    checkCollisionWithBalls(balls) {
      balls.forEach(ball => {
        if (ball !== this && this.isCollidingWith(ball)) {
          // Perform collision handling logic here
          // console.log('Collision detected!');
          this.bounce(ball);
          this.playCollisonSound();
        }
      });
    }
    

    test(){
      // run test for 10 seconds
        console.log('dx', this.x);
        console.log('dy', this.y);
        console.log('clientWidth', this.width());
    }




  
}

export default Ball;
