class Tank {
    constructor(currentPlayer,x,y,name) {
        this.currentPlayer = currentPlayer;
        this.speed = 3;
        this.health = 100;
        this.damage = 20;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.active = false;
        this.name = name;
        this.angle = 0;
        this.state = 'static';
        this.spriteStep = 0;

        if (this.currentPlayer === "secondPlayer") {
            this.angle = 135;
        } else {
            this.angle = 45;
        }
        
        this.power = 10;

        this.leftExplodeBlueSprite = new Image();
        this.leftExplodeBlueSprite.src = "../sprites/tank/bluetank/left_explode_blue-Sheet.png"

        this.staticBlueSprite = new Image();
        this.staticBlueSprite.src = "../sprites/tank/bluetank/tankblue.png";

        this.staticRedSprite = new Image();
        this.staticRedSprite.src = "../sprites/tank/redtank/tank_red_left.png"
        
        this.tankSelection(this.name);
    }

    drawTank(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillText(this.angle,this.x, this.y - 10);
        ctx.fillText(this.power,this.x, this.y - 20);

        if (this.currentPlayer === "firstPlayer" && this.state === "static") {
            ctx.drawImage(this.staticBlueSprite,this.x - 50,this.y - 50,this.width,this.height);
            // ctx.fillRect(this.x,this.y,this.width,this.height);
            // const sx = (64 * this.spriteStep) % 256;
            // const sy = Math.floor(this.spriteStep / 4) * 64;
            // ctx.drawImage(this.leftExplodeBlueSprite,sx,sy,64,64,this.x,this.y,100,100);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "static") {
            ctx.drawImage(this.staticRedSprite,this.x - 50,this.y - 50,this.width,this.height);
        } else if (this.currentPlayer === "firstPlayer" && this.state === "destroyed") {
            const sx = (64 * this.spriteStep) % 256;
            const sy = Math.floor(this.spriteStep / 4) * 64;
            ctx.drawImage(this.leftExplodeBlueSprite,sx,sy,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "destroyed") {
            const sx = (64 * this.spriteStep) % 256;
            const sy = Math.floor(this.spriteStep / 4) * 64;
            ctx.drawImage(this.leftExplodeBlueSprite,sx,sy,64,64,this.x - 50,this.y - 50,100,100);
        }
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

    destroy() {
        if (this.state !== "destroyed") {
            setInterval(() => {
                this.spriteStep = (this.spriteStep + 1) % 11;
            },100)
        }
        
        this.state = "destroyed";
    }
}

export default Tank;