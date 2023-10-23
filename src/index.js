import Projectile from "./scripts/projectile.js";

window.Projectile = Projectile;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById("game-canvas");
    myCanvas.width = 1000;
    myCanvas.height = 750;
    const context = myCanvas.getContext("2d");
    const projectile = new Projectile(0,750,45,10);

    setInterval(function(){
        // context.clearRect();
        projectile.draw(context);
        projectile.move();
    }, 100);

});
