import Projectile from "./scripts/projectile.js";
import Tank from "./scripts/tank.js";
import World from "./scripts/world.js";

window.Projectile = Projectile;
window.Tank = Tank;
window.World = World;

document.addEventListener("DOMContentLoaded", () => {
    const myCanvas = document.getElementById("game-canvas");
    const context = myCanvas.getContext("2d");
    const game = {"world": null};
    game.world = new World(context, game)

    myCanvas.width = 1000;
    myCanvas.height = 750;

    myCanvas.style.border = "3px solid black"

    game.world.animate();
});
