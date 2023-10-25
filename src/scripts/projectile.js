class Projectile { 
    constructor(x,y,degrees,power) {
        this.x = x + 20; 
        this.y = y + 10; 
        this.angle = (degrees * Math.PI) / 180;
        this.power = power;
        this.gravity = 0.2;
        this.velocity = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x,this.y,3,0, 2 * Math.PI);
        ctx.fillStyle = "Black";
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