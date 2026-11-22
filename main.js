function preload() {
    world_start = loadSound("world_start.wav");
    jump = loadSound("jump.wav");
    mariocoin = loadSound("coin.wav");
    mariogameover = loadSound("gameover.wav");
    mariokick = loadSound("kick.wav");
    mariodie = loadSound("mariodie.wav");
}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent('canvas');

    frameRate(60);
    setSprites();
    MarioAnimation();
    instializeInSetup(mario);

    video = createCapture(VIDEO);
    video.size(600, 300);
    video.parent('game_console');

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        var noseRaised = noseY > 0 && noseY < 200;
        if (noseRaised && !noseWasRaised) {
            noseJumpPressed = true;
        }
        noseWasRaised = noseRaised;
    } else {
        noseX = 0;
        noseY = 0;
        noseWasRaised = false;
    }
}

function draw() {
    game();
}

function mousePressed() {
    if (gameConfig.status === 'play') {
        mouseJumpPressed = true;
    }
}
