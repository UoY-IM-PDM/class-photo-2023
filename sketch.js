let ae1001;
function setup() {
    createCanvas(1000, 600);
    ae1001 = new RobotPDMTestStudent(100, 160, 0.8, color(0, 150, 150));
}

function draw() {
    background(255); 
    ae1001.draw();
}

/**
 * INSTRUCTIONS - DO NOT DELETE
 * Add your code for creating your character below (either a class or function). 
 * To avoid conflicting names, include your GitHub username (or your uni username) in the function or class name.
 * Your function or class should set all draw modes needed to draw your character (e.g. fill, stroke weight and colour, rectMode)
 * Finally, call your function / class in draw to add your character to the photo
 */

class RobotPDMTestStudent {
    x;
    y;
    fillColour;
    #scale;

    /**
     * Creates a new robot
     * @param {number} x The x coordinate of the robot.
     * @param {number} y The y coordinate of the robot
     * @param {number} scale The scale of the robot
     * @param {p5.color} fillColour The robot's fill colour
     */
    constructor(x, y, scale, fillColour) {
        this.x = x;
        this.y = y;
        this.#scale = scale;
        this.fillColour = fillColour;
    }

    /**
     * Draws the robot
     */
    draw() {
        rectMode(CENTER);
        strokeWeight(1);
        stroke(0);
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
        rect(this.x, this.y - 115 * this.#scale, 60 * this.#scale, 70 * this.#scale);
        // Next
        rect(this.x, this.y - 65 * this.#scale, 10 * this.#scale, 30 * this.#scale);
        // Mouth
        arc(this.x, this.y - 80 * this.#scale, 40 * this.#scale, 20 * this.#scale, 0, PI, CHORD);
        // Eyes
        fill(207, 250, 23);
        arc(this.x - 15 * this.#scale, this.y - 100 * this.#scale, 20 * this.#scale, 30 * this.#scale, PI, TWO_PI, CHORD);
        arc(this.x + 15 * this.#scale, this.y - 100 * this.#scale, 20 * this.#scale, 30 * this.#scale, PI, TWO_PI, CHORD);
        // Antennae
        line(this.x + 30 * this.#scale, this.y - 120 * this.#scale, this.x + 50 * this.#scale, this.y - 130 * this.#scale);
        line(this.x - 30 * this.#scale, this.y - 120 * this.#scale, this.x - 50 * this.#scale, this.y - 130 * this.#scale);
        fill(255, 0, 0);
        circle(this.x + 50 * this.#scale, this.y - 130 * this.#scale, 10 * this.#scale);
        circle(this.x - 50 * this.#scale, this.y - 130 * this.#scale, 10 * this.#scale);
    }

    /**
     * A private "helper" method that draws just the robot's body.
     */
    #body() {
        fill(this.fillColour);
        // Torso
        square(this.x, this.y, 100 * this.#scale);
        // Left arm
        rect(this.x + 65 * this.#scale, this.y - 25 * this.#scale, 30 * this.#scale, 10 * this.#scale);
        circle(this.x + 85 * this.#scale, this.y - 25 * this.#scale, 10 * this.#scale);
        rect(this.x + 85 * this.#scale, this.y + 20 * this.#scale, 10 * this.#scale, 80 * this.#scale);
        circle(this.x + 85 * this.#scale, this.y + 70 * this.#scale, 20 * this.#scale);
        // Right arm
        rect(this.x - 65 * this.#scale, this.y - 25 * this.#scale, 30 * this.#scale, 10 * this.#scale);
        circle(this.x - 85 * this.#scale, this.y - 25 * this.#scale, 10 * this.#scale);
        rect(this.x - 85 * this.#scale, this.y + 20 * this.#scale, 10 * this.#scale, 80 * this.#scale);
        circle(this.x - 85 * this.#scale, this.y + 70 * this.#scale, 20 * this.#scale);
    }
    
    /**
     * A private "helper" method that draws just the robot's legs.
     */
    #legs() {
        fill(this.fillColour);
        // Left leg
        rect(this.x + 20 * this.#scale, this.y + 65 * this.#scale, 10 * this.#scale, 30 * this.#scale);
        circle(this.x + 20 * this.#scale, this.y + 85 * this.#scale, 10 * this.#scale);
        rect(this.x + 20 * this.#scale, this.y + 130 * this.#scale, 10 * this.#scale, 80 * this.#scale);
        arc(this.x + 20 * this.#scale, this.y + 170 * this.#scale, 30 * this.#scale, 20 * this.#scale, PI, TWO_PI, CHORD);
        // Right leg
        rect(this.x - 20 * this.#scale, this.y + 65 * this.#scale, 10 * this.#scale, 30 * this.#scale);
        circle(this.x - 20 * this.#scale, this.y + 85 * this.#scale, 10 * this.#scale);
        rect(this.x - 20 * this.#scale, this.y + 130 * this.#scale, 10 * this.#scale, 80 * this.#scale);
        arc(this.x - 20 * this.#scale, this.y + 170 * this.#scale, 30 * this.#scale, 20 * this.#scale, PI, TWO_PI, CHORD);
    }
}