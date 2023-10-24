import Projectile from "./scripts/projectile.js";
import Tank from "./scripts/tank.js";
import World from "./scripts/world.js";

window.Projectile = Projectile;
window.Tank = Tank;
window.World = World;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById("game-canvas");
    const context = myCanvas.getContext("2d");
    const world = new World(context);

    myCanvas.width = 800;
    myCanvas.height = 500;

    myCanvas.style.border = "3px solid black"
    
    world.animate();
});
