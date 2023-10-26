import Tank from "./tank";
import Projectile from "./projectile";

class World {
    constructor(context,game) { 
        this.game = game;
        this.context = context;
        this.firstPlayerFacing = "right";
        this.secondPlayerFacing = "left";
        this.firstPlayer = new Tank(this.firstPlayerFacing,"firstPlayer",40,600,"Zeus");
        this.secondPlayer = new Tank(this.secondPlayerFacing,"secondPlayer",960,600,"Hera");

        this.canvas = document.getElementById("game-canvas")

        this.currentPlayer = this.firstPlayer;
        this.players = [this.firstPlayer,this.secondPlayer];

        document.addEventListener('keydown', (event) => {
            if (event.key === " " && this.currentPlayer.canShoot) {
                this.projectile = new Projectile(this.currentPlayer.x, this.currentPlayer.y,this.currentPlayer.angle,this.currentPlayer.power,this.currentPlayer,this.currentPlayer.currentPlayer)
                this.projectile.draw(context);
                this.currentPlayer.canShoot = false;
                this.currentPlayer.canMove = false;
                this.currentPlayer.canChangePower = false;
                this.currentPlayer.canChangeAngle = false;
            }
        });

        document.addEventListener('keydown', (event) => {
            if ((event.key === 'a' || event.key === 'A') && this.currentPlayer.canMove) {
                this.currentPlayer.x -= this.currentPlayer.speed;
                this.currentPlayer.state = "moving";
                console.log(this.currentPlayer.state)
            } 

            if (this.currentPlayer === this.firstPlayer) {
                this.firstPlayerFacing = "left";
            } else if (this.currentPlayer === this.secondPlayer) {
                this.secondPlayerFacing = "left";
            }
        });

        document.addEventListener('keyup',(event) => {
            if ((event.key === 'a' || event.key === 'A')) {
                this.currentPlayer.state = "static";
                console.log(this.currentPlayer.state)
            } 
        })

        document.addEventListener('keydown', (event) => {
            if ((event.key === 'd' || event.key === 'D') && this.currentPlayer.canMove){
                this.currentPlayer.x += this.currentPlayer.speed;
                this.currentPlayer.state = "moving";
                console.log(this.currentPlayer.state)
            }

            if (this.currentPlayer === this.firstPlayer) {
                this.firstPlayerFacing = "right";
            } else if (this.currentPlayer === this.secondPlayer) {
                this.secondPlayerFacing = "right";
            }
        });

        document.addEventListener('keyup',(event) => {
            if ((event.key === 'd' || event.key === 'D')) {
                this.currentPlayer.state = "static";
                console.log(this.currentPlayer.state)
            } 
        })

        document.addEventListener('keydown', (event) => {
            if ((event.key === 'w' || event.key === 'W') && this.currentPlayer.canChangeAngle) {
                this.currentPlayer.angle += 1;
                let arrow = document.getElementById('arrow')
                arrow.style.transform = `rotate(${-this.currentPlayer.angle + 'deg'})`
            }
        });

        document.addEventListener('keydown', (event) => {
            if ((event.key === 's' || event.key === 'S') && this.currentPlayer.canChangeAngle){
                this.currentPlayer.angle -= 1; 
                let arrow = document.getElementById('arrow')
                arrow.style.transform = `rotate(${-this.currentPlayer.angle + 'deg'})`
            }
        });

        document.addEventListener('keydown', (event) => {
            if ((event.key === 'q' || event.key === 'Q') && this.currentPlayer.canChangePower) {
                this.currentPlayer.power += 1;
                let power = document.getElementById('actualpower')
                power.innerText = `${this.currentPlayer.power}`
            }
        });

        document.addEventListener('keydown', (event) => {
            if ((event.key === 'e' || event.key === 'E') && this.currentPlayer.canChangePower){
                this.currentPlayer.power -= 1; 
                let power = document.getElementById('actualpower')
                power.innerText = `${this.currentPlayer.power}`
            }
        });
    }

    draw() {
        this.context.clearRect(0,0,1000,750);

        this.firstPlayer.drawHealth(this.context);
        this.secondPlayer.drawHealth(this.context);
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

            if ((this.projectile?.x > this.canvas.width || this.projectile?.x < 0) || (this.projectile?.y > this.canvas.height)) {
                this.projectile = undefined;
                this.switchTurns();
            }
        
            let boundAnimate = this.animate.bind(this);
            window.requestAnimationFrame(boundAnimate);
        } else {
            if (this.firstPlayer.spriteStep === 10 || this.secondPlayer.spriteStep === 10) {
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
            if ((Math.abs(this.projectile?.x - player.x - 5) <= 15 && this.projectile.owner !== player)
                && (Math.abs(this.projectile?.y - player.y - 5) <= 15 && this.projectile.owner !== player)) {
                console.log(`You hit ${player.name}`)
                player.health -= this.currentPlayer.damage;
                console.log(player.health);
                this.projectile = undefined;
                this.switchTurns();
            }
        });
    }

    switchTurns() {
        if (this.currentPlayer === this.firstPlayer) {
            this.currentPlayer = this.secondPlayer;
            this.currentPlayer.canShoot = true;
            this.currentPlayer.canMove = true;
            this.currentPlayer.canChangeAngle = true;
            this.currentPlayer.canChangePower = true;
        } else {
            this.currentPlayer = this.firstPlayer;
            this.currentPlayer.canShoot = true;
            this.currentPlayer.canMove = true;
            this.currentPlayer.canChangeAngle = true;
            this.currentPlayer.canChangePower = true;
        }
    }

    resetGame() {
        this.game = {world: new World(this.context,this.game)};
        this.game.world.animate();
    }

    gameOver() {
        if (this.secondPlayer.health <= 0) {
            console.log(`Game Over! ${this.firstPlayer.name} Wins!`);
            this.secondPlayer.destroy();
            return true;
        } else if (this.firstPlayer.health <= 0) {
            console.log(`Game Over! ${this.secondPlayer.name} Wins!`);
            this.firstPlayer.destroy();
            return true;
        } else {
            return false
        }
    }
}


export default World;