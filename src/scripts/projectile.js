class Projectile { 
    constructor(x,y,degrees,power,owner,currentPlayer) {
        this.angle = (degrees * Math.PI) / 180;
        this.power = power / 3;
        this.gravity = 0.2;
        this.velocity = 0;
        this.owner = owner;
        this.currentPlayer = currentPlayer;

        if (currentPlayer === "firstPlayer") {
            this.x = x + 20; 
            this.y = y + 5; 
        } else {
            this.x = x - 20;
            this.y = y + 5;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x,this.y,3,0, 2 * Math.PI);
        ctx.fillStyle = "White";
        ctx.fill();
        ctx.closePath();
    }

    move() {
        this.x += Math.cos(this.angle) * this.power;
        this.y -= Math.sin(this.angle) * this.power;

        this.velocity += this.gravity;
        this.y += this.velocity;
    }
}

export default Projectile;