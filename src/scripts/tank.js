class Tank {
    constructor(speed,health,damage) {
        this.speed = speed;
        this.health = health;
        this.damage = damage;
        this.x = 0;
        this.y = 750;
        this.width = 5;
        this.health = 5;
    }

    drawTank(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'A' || e.key === 'a') {
              this.x -= 1;
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'D' || e.key === 'd') {
              this.x += 1;
            }
        });
    }
}