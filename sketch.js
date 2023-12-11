/**
 * INSTRUCTIONS - DO NOT DELETE
 * Add your code for creating your character below (either a class or function). 
 * To avoid conflicting names, include your GitHub username (or your uni username) in the function or class name.
 * Your function or class should set all draw modes needed to draw your character (e.g. fill, stroke weight and colour, rectMode)
 * Finally, call your function / class in draw to add your character to the photo
 */

let newMushroom;

function setup() {
    createCanvas(1000, 600);
    newMushroom = new Mushroom_jb3027;
}

function draw() {
    newMushroom.draw();
}

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


