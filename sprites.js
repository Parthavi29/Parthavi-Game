function setSprites() {
    mario = createSprite(500, 0, 40, 56);

    bricks = new Group();
    platforms = new Group();
    clouds = new Group();
    mountains = new Group();
    pipes = new Group();
    coins = new Group();
    enemyMushrooms = new Group();

    addSprites(platforms, [
        [0, 320, 420, 32],
        [420, 320, 420, 32],
        [840, 320, 420, 32],
        [1260, 320, 420, 32],
        [740, 235, 110, 22],
        [1010, 185, 110, 22],
        [1160, 260, 100, 22]
    ], color(153, 102, 51));
    addSprites(bricks, [
        [690, 180, 42, 30],
        [870, 240, 42, 30],
        [920, 240, 42, 30],
        [1080, 215, 42, 30],
        [1260, 175, 42, 30],
        [1320, 175, 42, 30]
    ], color(191, 91, 38));
    addSprites(pipes, [
        [820, 285, 54, 70],
        [1390, 270, 58, 100]
    ], color(38, 165, 54));
    addSprites(clouds, [
        [180, 70, 90, 38],
        [590, 95, 110, 42],
        [1060, 65, 95, 38]
    ], color(255));
    addSprites(mountains, [
        [300, 290, 180, 90],
        [760, 285, 220, 100],
        [1240, 290, 190, 90]
    ], color(86, 190, 91));

    for (var i = 0; i < 5; i++) {
        var coin = createSprite(680 + i * 145, 145 + (i % 2) * 35, 18, 18);
        coin.shapeColor = color(255, 215, 0);
        coin.get = false;
        coins.add(coin);

        var enemy = createSprite(900 + i * 250, 260, 34, 30);
        enemy.shapeColor = color(190, 58, 45);
        enemy.live = true;
        enemyMushrooms.add(enemy);
    }
}

function addSprites(group, positions, spriteColor) {
    positions.forEach(function(position) {
        var sprite = createSprite(position[0], position[1], position[2], position[3]);
        sprite.shapeColor = spriteColor;
        group.add(sprite);
    });
}

function MarioAnimation() {
    mario.addAnimation('stand', marioFrame(color(220, 35, 35), false));
    mario.addAnimation('move', marioFrame(color(220, 35, 35), true));
    mario.addAnimation('jump', marioFrame(color(235, 55, 35), true));
    mario.addAnimation('dead', marioFrame(color(120), false));
    mario.changeAnimation('stand');
}

function marioFrame(shirtColor, moving) {
    var frame = createGraphics(40, 56);
    frame.noStroke();
    frame.fill(190, 35, 35);
    frame.rect(9, 2, 22, 8);
    frame.rect(5, 10, 30, 7);
    frame.fill(245, 190, 135);
    frame.rect(11, 17, 20, 15);
    frame.fill(30);
    frame.rect(25, 21, 3, 3);
    frame.fill(shirtColor);
    frame.rect(8, 32, 24, 13);
    frame.fill(55, 75, 190);
    frame.rect(10, 43, 20, 8);
    frame.fill(90, 45, 20);
    frame.rect(moving ? 4 : 7, 51, 14, 5);
    frame.rect(moving ? 23 : 19, 51, 14, 5);
    return frame.get();
}
