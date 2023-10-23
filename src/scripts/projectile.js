class Projectile { 
    constructor(x,y,degrees,power) {
        this.x = x; 
        this.y = y; 
        this.angle = (degrees * Math.PI) / 180;
        this.power = power;
        this.active = true;
        this.gravity = 0.2;
        this.velocity = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x,this.y,1,0, 2 * Math.PI);
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

    checkCollision(tank) {
        if (
            this.x < tank.x + tank.width &&
            this.x + 5 > tank.x &&
            this.y < tank.y + tank.height &&
            this.y + 5 > tank.y
        ) {
            this.active = false; 
            return true;
        }
        return false;
    }
}

export default Projectile;