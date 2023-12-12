let newMushroom;
let robot;

function setup() {
    createCanvas(1000, 600);
    newMushroom = new Mushroom_jb3027();
    robot = new RobotAbi(100, 180, color(random(255), random(255), random(255)));
}

function draw() {
    background(255);
    robot.draw();
    newMushroom.draw();
    manJo ()
}

/**
 * INSTRUCTIONS - DO NOT DELETE
 * Add your code for creating your character below (either a class or function). 
 * To avoid conflicting names, include your GitHub username (or your uni username) in the function or class name.
 * Your function or class should set all draw modes needed to draw your character (e.g. fill, stroke weight and colour, rectMode)
 * Finally, call your function / class in draw to add your character to the photo
 */
class Mushroom_jb3027 {
    #centerX;
    #centerY;

    constructor() {
        this.#centerX = 400;
        this.#centerY = 300;
    }

    draw() {
        stroke(0);
        strokeWeight(3);
        rectMode(CENTER);
        fill(200);
        rect(this.#centerX, this.#centerY + 100, 25, 50, 20);

        //mushroom top, red
        fill(255, 0, 0);
        arc(this.#centerX, this.#centerY + 85, 100, 100, radians(180), 0, CHORD);

        //stripes
        fill(0, 0, 0, 20);
        stroke(10, 50);
        
        //arms
        line(this.#centerX, this.#centerY + 88, this.#centerX, this.#centerY + 122);
        line(this.#centerX - 5, this.#centerY + 88, this.#centerX - 5, this.#centerY + 122);
        line(this.#centerX + 5, this.#centerY + 88, this.#centerX + 5, this.#centerY + 122);
        line(this.#centerX + 10, this.#centerY + 88, this.#centerX + 10, this.#centerY + 115);

        //white dots
        noStroke();
        fill(255);
        circle(this.#centerX, this.#centerY + 50, 10);
        circle(this.#centerX + 20, this.#centerY + 50, 10);
        circle(this.#centerX - 20, this.#centerY + 50, 10);
        circle(this.#centerX + 35, this.#centerY + 70, 10);
        circle(this.#centerX - 35, this.#centerY + 70, 10);
        circle(this.#centerX - 12.5, this.#centerY + 72, 10);
        circle(this.#centerX + 12.5, this.#centerY + 72, 10);

        //black rectangle with white dots for pupils, black mouth made from arc
        fill(0);
        rect(this.#centerX - 5, this.#centerY + 100, 5, 15, 2);
        rect(this.#centerX + 5, this.#centerY + 100, 5, 15, 2);
        fill(255);
        rect(this.#centerX - 5, this.#centerY + 100, 2, 3, 2);
        rect(this.#centerX + 5, this.#centerY + 100, 2, 3,2);
        noFill();
        stroke(0);
        arc(this.#centerX, this.#centerY + 115, 5, 2.5, 0, PI, CHORD);

        //legs
        line(this.#centerX - 13, this.#centerY + 90, this.#centerX - 20, this.#centerY + 110);
        line(this.#centerX + 12.5, this.#centerY + 90, this.#centerX + 20, this.#centerY + 110);
        line(this.#centerX - 5, this.#centerY + 125, this.#centerX - 5, this.#centerY + 140);
        line(this.#centerX + 5, this.#centerY + 125, this.#centerX + 5, this.#centerY + 140);
    }
}

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
        strokeWeight(1);
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

function manJo () {
    rectMode(CENTER);
    strokeWeight (1)
    stroke(210)
    fill(240)
    rect(600, 220, 50, 80);
    noStroke()
    fill(181, 33, 52);
    rect(600, 220, 10, 80);
    rect(600, 175, 10, 10);
    stroke(210)
    fill(240);
    rect(600, 151, 45, 50);
    fill(235, 228, 188);
    rect(600, 151, 35, 34);
    fill(0);
    circle(590, 149, 7)
    circle(610, 149, 7)
    fill(240)
    rect(587, 280, 10, 40)
    rect(613, 280, 10, 40)
    rect(550, 190, 50, 10)
    rect(650, 190, 50, 10)
    fill(0)
    rect(587, 310, 13, 20)
    rect(613, 310, 13, 20)
    rect(617, 315, 20, 10)
    rect(590, 315, 20, 10)
    fill(435, 228, 188)
    rect(520, 190, 20, 13)
    rect(680, 190, 20, 13)
    fill(181, 33, 52);
    noStroke()
    rect(600, 200, 50, 10)
    stroke(150)
    fill (191, 191, 187)
    rect(520, 150, 5, 60)
    triangle(520, 110, 517.5, 120, 522.5, 120)
    fill(92, 68, 20)
    rect(520, 190, 5, 15)
    rect(520, 183, 15, 5)
    rect(600, 240, 50,7)
    rect(580, 261, 6, 50)
    fill (191, 191, 187)
    circle(520, 200, 8)
}