let robot;
function setup() {
    createCanvas(1000, 600);
    robot = new RobotAbi(100, 100, color(0, 0, 255));
}

function draw() {
    background(255); 
    robot.draw();
}

/**
 * INSTRUCTIONS - DO NOT DELETE
 * Add your code for creating your character below (either a class or function). 
 * To avoid conflicting names, include your GitHub username (or your uni username) in the function or class name.
 * Your function or class should set all draw modes needed to draw your character (e.g. fill, stroke weight and colour, rectMode)
 * Finally, call your function / class in draw to add your character to the photo
 */

class RobotAbi {
    x;
    y;
    fillColour;

    /**
     * Creates a new robot
     * @param {number} x The x coordinate of the robot.
     * @param {number} y The y coordinate of the robot
     * @param {Color} fillColour The robot's fill colour
     */
    constructor(x, y, fillColour) {
        this.x = x;
        this.y = y;
        this.fillColour = fillColour;
    }

    /**
     * Draws the robot
     */
    draw() {
        rectMode(CENTER);
        this.#head();
        this.#body();
        this.#legs();
    }

    /**
     * Update's the robot's location
     * @param {number} x The new x coordinate
     * @param {number} y The new y coordinate
     */
    updateLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * A private "helper" method that draws just the robot's head.
     */
    #head() {
        fill(this.fillColour);
        // Head
        rect(this.x, this.y - 115, 60, 70);
        // Next
        rect(this.x, this.y - 65, 10, 30);
        // Mouth
        arc(this.x, this.y - 80, 40, 20, 0, PI, CHORD);
        // Eyes
        fill(207, 250, 23);
        arc(this.x - 15, this.y - 100, 20, 30, PI, TWO_PI, CHORD);
        arc(this.x + 15, this.y - 100, 20, 30, PI, TWO_PI, CHORD);
        // Antennae
        line(this.x + 30, this.y - 120, this.x + 50, this.y - 130);
        line(this.x - 30, this.y - 120, this.x - 50, this.y - 130);
        fill(255, 0, 0);
        circle(this.x + 50, this.y - 130, 10);
        circle(this.x - 50, this.y - 130, 10);
    }

    /**
     * A private "helper" method that draws just the robot's body.
     */
    #body() {
        fill(this.fillColour);
        // Torso
        square(this.x, this.y, 100);
        // Left arm
        rect(this.x + 65, this.y - 25, 30, 10);
        circle(this.x + 85, this.y - 25, 10);
        rect(this.x + 85, this.y + 20, 10, 80);
        circle(this.x + 85, this.y + 70, 20);
        // Right arm
        rect(this.x - 65, this.y - 25, 30, 10);
        circle(this.x - 85, this.y - 25, 10);
        rect(this.x - 85, this.y + 20, 10, 80);
        circle(this.x - 85, this.y + 70, 20);
    }
    
    /**
     * A private "helper" method that draws just the robot's legs.
     */
    #legs() {
        fill(this.fillColour);
        // Left leg
        rect(this.x + 20, this.y + 65, 10, 30);
        circle(this.x + 20, this.y + 85, 10);
        rect(this.x + 20, this.y + 130, 10, 80);
        arc(this.x + 20, this.y + 170, 30, 20, PI, TWO_PI, CHORD);
        // Right leg
        rect(this.x - 20, this.y + 65, 10, 30);
        circle(this.x - 20, this.y + 85, 10);
        rect(this.x - 20, this.y + 130, 10, 80);
        arc(this.x - 20, this.y + 170, 30, 20, PI, TWO_PI, CHORD);
    }
}