import Projectile from "./scripts/projectile.js";

window.Projectile = Projectile;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById("game-canvas");
    myCanvas.width = 1000;
    myCanvas.height = 750;
    const context = myCanvas.getContext("2d");
    const projectile = new Projectile(30,20);

    // for (let i = 0; i < 100; i++) {
    //     context.clearRect(0,0,500,500);
    //     projectile.draw(context);
    //     projectile.move();
    // }

    setInterval(function(){
        // context.clearRect(0,0,500,500);
        projectile.draw(context);
        projectile.move();
    }, 100);

});
