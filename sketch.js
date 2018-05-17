var maxBound;
var points;

//correlated points variables
var correlatedNoise;

//mouseclicked variables
var correlated = false;

//textures shit
// var imgs = [];

// function preload() {
//     imgs.push(loadImage("assets/image.jpg"));
// }

function setup() {
    createCanvas(windowWidth,windowHeight,WEBGL);
    colorMode(HSB);
    if (height <= width) {
        maxBound = height/2;
    } else {
        maxBound = width/2;
    }
    correlatedNoise = maxBound/20;
    points = pointGenerator(500);
}

function mouseClicked() {
    if (correlated === false) {
        correlated = true;
        points = correlatedPointGenerator(300);
    } else {
        correlated = false;
        points = pointGenerator(500);
    }
}

function draw() {
    background(51);

    push();
    rotateX(mouseY/100+height/2);
    rotateY(mouseX/100+width/2);


    for (var i = 0; i < points.length; i++) {
        points[i].show();
    }
    // randomly connecting points -- useless, broken
    // for (var i = 0; i < 10; i++) {
    //     rand1 = random(points);
    //     rand2 = random(points);
    //     beginShape(LINES);
    //     strokeWeight(5);
    //     stroke(0,255,255);
    //     vertex(rand1.x,rand1.y,rand1.z);
    //     vertex(rand2.x,rand2.y,rand2.z);
    //     endShape();
    // }
    pop();
}

function Point(x,y,z) {
    this.x = x;
    this.y = y
    this.z = z;

    this.show = function() {
        push();
        translate(this.x,this.y,this.z);
        //set texture
        // texture(imgs[0]);
        fill(distFromOrigin(this.x,this.y,this.z)*(255/maxBound),255,255);
        sphere(2.5);
        pop();
    }
}

function correlatedPointGenerator(n) {
    generated = [];
    for (var i = 0; i < n; i++) {
        xCoord = random(-maxBound,maxBound);
        yCoord = random(-maxBound,maxBound);
        zCoord = (.5 * xCoord) + (.5 * yCoord);
        generated.push(new Point(constrain(xCoord + random(-correlatedNoise,correlatedNoise),-maxBound,maxBound), constrain(zCoord + random(-correlatedNoise,correlatedNoise),-maxBound,maxBound), constrain(zCoord + random(-correlatedNoise,correlatedNoise),-maxBound,maxBound)));
        }
    return generated;
}

function pointGenerator(n){
    generated = [];
    for (var i = 0; i < n; i++) {
        generated.push(new Point(random(-maxBound,maxBound),random(-maxBound,maxBound),random(-maxBound,maxBound)));
    }
    return generated;
}

function outlierGenerator(n) {
    generated = [];
    for (var i = 0; i < n; i++) {
        
    }
}

function distFromOrigin(x,y,z) {
    x2 = Math.pow(x,2);
    y2 = Math.pow(y,2);
    z2 = Math.pow(z,2);
    return Math.sqrt(x2+y2+z2);
}

// old 3d code
// var boxes = [];
// count = 0;
// var imgs = [];
// var angle = 0;
// 
// function preload() {
    // imgs.push(loadImage("assets/Cobble cube.jpg"));
    // imgs.push(loadImage("assets/gold.jpg"));
// }

// function setup() {
//     createCanvas(windowWidth,windowHeight,WEBGL);
// }

// function draw() {
//     background(51);
//     rotateY(angle);
//     rotateX(angle*.6);
//     if (count < 7) {
//         boxes.push(new Box(random(-150,150),random(-150,150),random(-150,150)));
//         count += 1;
//     }
//     for (var i = 0; i < boxes.length; i++) {
//         boxes[i].show();
//     }
//     push();
//     translate(width/2,0);
//     sphere();
//     directionalLight(51,width/2);
//     pop();
//     angle += .01;
// }

// function Box(x,y,z) {
//     // this.x = mouseX-width/2;
//     // this.y = mouseY-height/2;
//     this.x = x;
//     this.y = y
//     this.z = z;
//     this.xrotator = random(.01,.05);
//     this.yrotator = random(.01,.05);
//     this.rotatex = this.xrotator;
//     this.rotatey = this.yrotator;

//     this.show = function() {
//         // this.x += random(-1,1);
//         // this.y += random(-1,1);
//         // this.x += random(-1,1);
//         push();
//         translate(this.x,this.y,this.z);
//         rotateX(this.rotatex);
//         rotateY(this.rotatey);
//         texture(imgs[1]);
//         torus();
//         pop();
//         this.rotatex += this.xrotator;
//         this.rotatey += this.yrotator;
//     }
// }
