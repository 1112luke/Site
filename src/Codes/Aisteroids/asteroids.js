export class Game {
    constructor() {
        this.player = new Player(this);
        this.asteroids = [];
        this.lasers = [];
        this.state = "playing";
    }

    pressed(key) {
        if (key == " ") {
            this.player.shoot();
        }
        if (key == "ArrowUp") {
            this.player.boosting = true;
        }
        if (key == "ArrowLeft") {
            this.player.turn[0] = 1;
        }
        if (key == "ArrowRight") {
            this.player.turn[1] = 1;
        }
    }

    unpressed(key) {
        if (key == "ArrowUp") {
            this.player.boosting = false;
        }
        if (key == "ArrowLeft") {
            this.player.turn[0] = 0;
        }
        if (key == "ArrowRight") {
            this.player.turn[1] = 0;
        }
    }

    frame(dt) {
        this.player.update(dt);

        //handle laser
        this.lasers.forEach((laser) => {
            laser.update();

            if (laser.duration < 0) {
                //remove laser from array if its duration is no longer
                this.lasers.splice(this.lasers.indexOf(laser), 1);
            }
        });
    }
}

class Player {
    constructor(game) {
        this.xpos = 0;
        this.ypos = 0;
        this.xvel = 0;
        this.yvel = 0;
        this.xacc = 0;
        this.yacc = 0;
        this.boostforce = 1.3;
        this.angle = 0;
        this.boosting = false;
        this.game = game;
        this.turn = [0, 0];
        this.turnspeed = 20;
        this.width = 10;
        this.height = 10;
    }

    shoot() {
        this.game.lasers.push(new Laser(this.xpos, this.ypos, this.angle));
    }

    update(dt) {
        this.angle += this.turn[1] * this.turnspeed * dt;
        this.angle -= this.turn[0] * this.turnspeed * dt;

        if (this.boosting) {
            this.xacc =
                Math.cos((this.angle * Math.PI) / 180) * this.boostforce;
            this.yacc =
                Math.sin((this.angle * Math.PI) / 180) * this.boostforce;
        } else {
            this.xacc = 0;
            this.yacc = 0;
        }

        this.xpos += this.xvel * dt;
        this.ypos += this.yvel * dt;
        this.xvel += this.xacc * dt;
        this.yvel += this.yacc * dt;

        //damping
        this.xvel *= 0.98;
        this.yvel *= 0.98;

        //wrapping
        if (this.xpos > 100) {
            this.xpos = 0;
        }
        if (this.xpos < 0) {
            this.xpos = 100;
        }
        if (this.ypos > 100) {
            this.ypos = 0;
        }
        if (this.ypos < 0) {
            this.ypos = 100;
        }
    }
}

class Laser {
    constructor(xpos, ypos, angle) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.speed = 2;
        this.width = 0.7;
        this.height = 0.7;
        this.xvel = Math.cos((angle * Math.PI) / 180);
        this.yvel = Math.sin((angle * Math.PI) / 180);
        this.angle = angle;
        this.duration = 100;
    }

    update() {
        this.duration -= 1;

        this.xpos += this.xvel * this.speed;
        this.ypos += this.yvel * this.speed;

        //wrapping
        if (this.xpos > 100) {
            this.xpos = 0;
        }
        if (this.xpos < 0) {
            this.xpos = 100;
        }
        if (this.ypos > 100) {
            this.ypos = 0;
        }
        if (this.ypos < 0) {
            this.ypos = 100;
        }
    }
}
