class Projectile { 
    constructor(power,initialAngle) {
        this.angleInRadians = (initialAngle * Math.PI) / 180;
        this.initialHorizontalVelocity = power * Math.cos(this.angleInRadians)
        this.initialVerticalVelocity = power * Math.sin(this.angleInRadians)
        this.color = "Black";
        this.pos = [500,500]
        this.gravity = 9.81;
        this.radius = 1;
        this.horizontalPosition = initialHorizontalVelocity * time;
        
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.radius,0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.stroke();
    }

    move() {

        if (this.initialAngle === 0) {
            this.pos[0] += this.vel[0]
        } else if(this.initialAngle === 90) {
            this.pos[1] -= this.vel[1]
        } else if (this.initialAngle === 180) {
            this.pos[0] -= this.vel[0]
        } else if (this.initialAngle === 270) {
            this.pos[1] += this.vel[1]
        } else if (this.initialAngle === 360) {
            this.pos[0] += this.vel[0]
        } else {
            this.pos[0] += this.vel[0]
            this.pos[1] -= this.vel[1]
        }

        this.vel[1] += this.gravity;
    }
}

export default Projectile;