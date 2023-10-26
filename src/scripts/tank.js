class Tank {
    constructor(facing,currentPlayer,x,y,name) {
        this.facing = facing;
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
        this.state = "static";
        this.spriteStep = 0;
        this.power = 25;
        this.canShoot = true;
        this.canMove = true;
        this.canChangePower = true;
        this.canChangeAngle = true;
        this.originalHealth = 100;

        if (this.currentPlayer === "secondPlayer") {
            this.angle = 135;
        } else {
            this.angle = 45;
        }

        this.leftExplodeBlueSprite = new Image();
        this.leftExplodeBlueSprite.src = "../sprites/tank/bluetank/left_explode_blue-Sheet.png"
        this.rightExplodeBlueSprite = new Image();
        this.rightExplodeBlueSprite.src = "../sprites/tank/bluetank/right_explode_blue-Sheet.png"

        this.leftExplodeRedSprite = new Image();
        this.leftExplodeRedSprite.src = "../sprites/tank/redtank/left_explode_red-Sheet.png"
        this.rightExplodeRedSprite = new Image();
        this.rightExplodeRedSprite.src = "../sprites/tank/redtank/right_explode_red-Sheet.png"

        this.leftStaticBlueSprite = new Image();
        this.leftStaticBlueSprite.src = "../sprites/tank/bluetank/tank_left.png";
        this.rightStaticBlueSprite = new Image();
        this.rightStaticBlueSprite.src = "../sprites/tank/bluetank/tankblue.png";

        this.leftStaticRedSprite = new Image();
        this.leftStaticRedSprite.src = "../sprites/tank/redtank/tank_red_left.png"
        this.rightStaticRedSprite = new Image();
        this.rightStaticRedSprite.src = "../sprites/tank/redtank/tank_red_right.png"

        this.leftMovingBlueSprite = new Image();
        this.leftMovingBlueSprite.src = "../sprites/tank/bluetank/left_move_blue-Sheet.png";
        this.rightMovingBlueSprite = new Image();
        this.rightMovingBlueSprite.src = "../sprites/tank/bluetank/right_move_blue-Sheet.png"

        this.leftMovingRedSprite = new Image();
        this.leftMovingRedSprite.src = "../sprites/tank/redtank/left_move_Red-Sheet.png"
        this.rightMovingRedSprite = new Image();
        this.rightMovingRedSprite.src = "../sprites/tank/redtank/right_move_red-Sheet.png"
        
        this.tankSelection(this.name);
    }

    drawTank(ctx) {
        if (this.currentPlayer === "firstPlayer" && this.state === "static" && this.facing === "left") {
            ctx.drawImage(this.leftStaticBlueSprite,this.x - 50,this.y - 50,this.width,this.height);
        } else if (this.currentPlayer === "firstPlayer" && this.state === "static" && this.facing === "right") {
            ctx.drawImage(this.rightStaticBlueSprite,this.x - 50,this.y - 50,this.width,this.height);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "static" && this.facing === "left") {
            ctx.drawImage(this.leftStaticRedSprite,this.x - 50,this.y - 50,this.width,this.height);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "static" && this.facing === "right") {
            ctx.drawImage(this.rightStaticRedSprite,this.x - 50,this.y - 50,this.width,this.height);
        } else if (this.currentPlayer === "firstPlayer" && this.state === "destroyed" && this.facing === "left") {
            const sx = (64 * this.spriteStep) % 256;
            const sy = Math.floor(this.spriteStep / 4) * 64;
            ctx.drawImage(this.leftExplodeBlueSprite,sx,sy,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "firstPlayer" && this.state === "destroyed" && this.facing === "right") {
            const sx = (64 * this.spriteStep) % 256;
            const sy = Math.floor(this.spriteStep / 4) * 64;
            ctx.drawImage(this.rightExplodeBlueSprite,sx,sy,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "destroyed" && this.facing === "left") {
            const sx = (64 * this.spriteStep) % 256;
            const sy = Math.floor(this.spriteStep / 4) * 64;
            ctx.drawImage(this.leftExplodeRedSprite,sx,sy,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "destroyed" && this.facing === "right") {
            const sx = (64 * this.spriteStep) % 256;
            const sy = Math.floor(this.spriteStep / 4) * 64;
            ctx.drawImage(this.rightExplodeRedSprite,sx,sy,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "firstPlayer" && this.state === "moving" && this.facing === "right") {
            this.moving();
            ctx.drawImage(this.rightMovingBlueSprite,0,0,64,64,this.x - 50,this.y - 50,100,100);
            console.log("Bob")
        } else if (this.currentPlayer === "firstPlayer" && this.state === "moving" && this.facing === "left") {
            this.moving();
            ctx.drawImage(this.leftMovingBlueSprite,0,0,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "moving" && this.facing === "right") {
            this.moving();
            ctx.drawImage(this.rightMovingRedSprite,0,0,64,64,this.x - 50,this.y - 50,100,100);
        } else if (this.currentPlayer === "secondPlayer" && this.state === "moving" && this.facing === "left") {
            this.moving();
            ctx.drawImage(this.leftMovingRedSprite,0,0,64,64,this.x - 50,this.y - 50,100,100);
        }
    }

    drawHealth(ctx) {
        if (this.currentPlayer === "firstPlayer") {
            var x = 35;
        } else {
            var x = 855;
        }

        if (this.health <= 0) {
            ctx.fillStyle = "Black";
            ctx.fillRect(x - 22,30,154,34);
        } else {
            ctx.fillStyle = "Black";
            ctx.fillRect(x - 22,30,154,34);
            ctx.fillStyle = "Red";
            ctx.fillRect(x - 20,32,150 * this.health / this.originalHealth,30);
        }
    }

    tankSelection(tankName) {
        if (tankName === "Zeus") {
            this.damage = 35;
            this.health = 75;
            this.originalHealth = 75;
        } else if (tankName === "Artemis") {
            this.speed = 5;
            this.damage = 10;
        } else if (tankName === "Ares") {
            this.damage = 25;
            this.health = 110;
            this.speed = 2;
            this.originalHealth = 110;
        } else if (tankName === "Hera") {
            this.damage = 30;
            this.health = 90;
            this.speed = 2;
            this.originalHealth = 90;
        } else if (tankName === "Hades") {
            this.damage = 15;
            this.health = 130;
            this.speed = 1;
            this.originalHealth = 130;
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

    moving() {
        if (this.state !== "static") {
            setInterval(() => {
                this.spriteStep = (this.spriteStep + 1) % 2;
            },1000)
        }
    }
}

export default Tank;