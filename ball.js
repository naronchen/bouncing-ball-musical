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


    updateBallPosition() {
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
      }
    
    startAnimation() {
        // Append the ball element to the DOM
        document.body.appendChild(this.ballElement);
    
        const animateBall = () => {
          this.updateBallPosition();
          requestAnimationFrame(animateBall);
        };
        animateBall();
      }
}

export default Ball;
