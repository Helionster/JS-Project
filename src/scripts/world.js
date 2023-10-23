import Tank from "./tank";
import Projectile from "./projectile";

class World {
    constructor(context) {
        this.context = context;
        this.firstPlayer = new Tank(0,250,"Zeus");
        this.secondPlayer = new Tank(480,250,"Hera");
        this.currentPlayer = this.firstPlayer;
        this.players = [this.firstPlayer,this.secondPlayer];

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
    }

    draw() {
        this.context.clearRect(0,0,1000,750);

        this.firstPlayer.drawTank(this.context);
        this.secondPlayer.drawTank(this.context);

        if (this.projectile !== undefined ) {
            this.projectile.draw(this.context);
        }
    }

    move() {
        this.projectile?.move();
    }

    animate() {
        this.move();
        this.checkCollision();
        this.draw();
    
        let boundAnimate = this.animate.bind(this);
        window.requestAnimationFrame(boundAnimate);
    }

    checkCollision() {
        this.players.forEach((player) => {
            if ((Math.abs(this.projectile?.x - player.x) <= 10 && this.currentPlayer !== player)
                && (Math.abs(this.projectile?.y - player.y) <= 10 && this.currentPlayer !== player)) {
                console.log(`You hit ${player.name}`)
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
            this.currentPlayer = this.firstPlayer
        }
    }

    gameOver() {
        if ((this.currentPlayer !== this.firstPlayer) && ( this.secondPlayer.health === 0)) {
            console.log(`Game Over! ${this.firstPlayer.name} Wins!`)
        } else if ((this.currentPlayer !== this.firstPlayer) && ( this.firstPlayer.health === 0)) {
            console.log(`Game Over! ${this.secondPlayer.name} Wins!`)
        }
    }
}


export default World;