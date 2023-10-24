class Tank {
    constructor(x,y,name) {
        this.speed = 3;
        this.health = 100;
        this.damage = 20;
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.active = false;
        this.name = name;
        this.angle = 45; 
        this.power = 10;
        
        this.tankSelection(this.name);
    }

    drawTank(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillText(this.angle,this.x, this.y - 10);
        ctx.fillText(this.power,this.x, this.y - 20);
    }

    tankSelection(tankName) {
        if (tankName === "Zeus") {
            this.damage = 35;
            this.health = 75;
            this.color = "blue";
        } else if (tankName === "Artemis") {
            this.speed = 5;
            this.damage = 10;
            this.color = "green";
        } else if (tankName === "Ares") {
            this.damage = 25;
            this.health = 110;
            this.speed = 2;
            this.color = "red";
        } else if (tankName === "Hera") {
            this.damage = 30;
            this.health = 90;
            this.speed = 2;
            this.color = "purple";
        } else if (tankName === "Hades") {
            this.damage = 15;
            this.health = 130;
            this.speed = 1;
            this.color = "black";
        }
    }
}

export default Tank;