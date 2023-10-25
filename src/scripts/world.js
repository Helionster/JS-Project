import Tank from "./tank";
import Projectile from "./projectile";

class World {
    constructor(context,game) {
        this.game = game;
        this.context = context;
        this.firstPlayer = new Tank("firstPlayer",40,700,"Zeus");
        this.secondPlayer = new Tank("secondPlayer",950,700,"Hera");
        this.currentPlayer = this.firstPlayer;
        this.players = [this.firstPlayer,this.secondPlayer];

        this.leftMovingBlueSprite = new Image();
        this.leftMovingBlueSprite.src = "../sprites/tank/bluetank/left_move_blue-Sheet.png";
        this.rightMovingBlueSprite = new Image();
        this.rightMovingBlueSprite.src = "../sprites/tank/bluetank/right_move_blue-Sheet.png"

        this.leftMovingRedSprite = new Image();
        this.leftMovingRedSprite.src = "../sprites/tank/redtank/left_move_Red-Sheet.png"
        this.rightMovingRedSprite = new Image();
        this.rightMovingRedSprite.src = "../sprites/tank/redtank/right_move_red-Sheet.png"

        

        document.addEventListener('keydown', (event) => {
            if (event.key === " ") {
                this.projectile = new Projectile(this.currentPlayer.x, this.currentPlayer.y,this.currentPlayer.angle,this.currentPlayer.power)
                this.projectile.draw(context);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'a' || event.key === 'A') {
                this.currentPlayer.x -= this.currentPlayer.speed;
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'd' || event.key === 'D'){
                this.currentPlayer.x += this.currentPlayer.speed;
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'w' || event.key === 'W') {
                this.currentPlayer.angle += 1;
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 's' || event.key === 'S'){
                this.currentPlayer.angle -= 1; 
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'q' || event.key === 'Q') {
                this.currentPlayer.power += 1;
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'e' || event.key === 'E'){
                this.currentPlayer.power -= 1; 
            }
        });
    }

    draw() {
        this.context.clearRect(0,0,1000,750);

        this.firstPlayer.drawTank(this.context);
        this.secondPlayer.drawTank(this.context);

        if (this.projectile !== undefined) {
            this.projectile.draw(this.context);
        } 
    }

    move() {
       this.projectile?.move()
    }

    animate() {
        if (!this.gameOver()) {
            this.move();
            this.checkCollision();
            this.draw();
        
            let boundAnimate = this.animate.bind(this);
            window.requestAnimationFrame(boundAnimate);
        } else {
            if (this.currentPlayer.spriteStep === 10) {
                alert("Game Over! Restart?") 
                this.resetGame();
            } else {
                this.draw();

                let boundAnimate = this.animate.bind(this);
                window.requestAnimationFrame(boundAnimate);
            }
        }
    }

    checkCollision() {
        this.players.forEach((player) => {
            if ((Math.abs(this.projectile?.x - player.x - 5) <= 10 && this.currentPlayer !== player)
                && (Math.abs(this.projectile?.y - player.y - 5) <= 10 && this.currentPlayer !== player)) {
                console.log(`You hit ${player.name}`)
                player.health -= this.currentPlayer.damage;
                console.log(player.health);
                this.projectile = undefined;
                this.switchTurns();
            }
        });
    }

    createWorld() {
        
    }

    switchTurns() {
        if (this.currentPlayer === this.firstPlayer) {
            this.currentPlayer = this.secondPlayer;
        } else {
            this.currentPlayer = this.firstPlayer;
        }
    }

    resetGame() {
        this.game = {world: new World(this.context,this.game)};
        this.game.world.animate();
    }

    gameOver() {
        if ((this.currentPlayer !== this.firstPlayer) && (this.secondPlayer.health <= 0)) {
            console.log(`Game Over! ${this.firstPlayer.name} Wins!`);
            this.secondPlayer.destroy();
            return true;
        } else if ((this.currentPlayer !== this.firstPlayer) && ( this.firstPlayer.health <= 0)) {
            console.log(`Game Over! ${this.secondPlayer.name} Wins!`);
            this.firstPlayer.destroy();
            return true;
        } else {
            return false
        }
    }
}


export default World;