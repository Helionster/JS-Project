import Projectile from "./scripts/projectile.js";
import Tank from "./scripts/tank.js";
import World from "./scripts/world.js";

window.Projectile = Projectile;
window.Tank = Tank;
window.World = World;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById("game-canvas");

    myCanvas.width = 500;
    myCanvas.height = 500;

    myCanvas.style.border = "1px solid red"

    const context = myCanvas.getContext("2d");
    const world = new World(context);

    world.animate();
});
