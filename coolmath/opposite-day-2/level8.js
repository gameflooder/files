levels[7] = {
    objects: [
        { type: "block", color: "white", x: 498, y: -4502, w: 1004, h: 1004, room5: true, noCollide: true, collide: false, id: "pacman white background" },
        { type: "text", content: "This level is", x: 2000, y: -230, font: "50px rubik", spawnAnimation: 90, spawnAnimationDuration: 50, room0: true },
        { type: "text", content: "short and simple.", x: 2000, y: -160, font: "50px rubik", spawnAnimation: 90, spawnAnimationDuration: 50, room0: true },
        { type: "block", x: 1500, y: 200, w: 1000, h: 1000, room0: true },
        { type: "block", x: 2501, y: -1000, w: 500, h: 2000, slippery: true, room0: true },
        { type: "unstable", x: 2500, y: -1000, w: 500, h: 2000, room0: true, decayValue: 0.017, id: "shortcut wall" },
        { type: "unstable", x: 1970, y: -100, w: 50, h: 50, room0: true, alpha: 0, noAlpha: true, id: "shortcut block" },
        { type: "clue", x: 1550, y: -150, proximity: 1, radius: 0, id: "shortcut clue", air: true, down: true, color: { r: 0, g: 230, b: 0 }, room0: true },
        { type: "clue", x: 2300, y: -230, proximity: 1, radius: 0, id: "ultra shortcut clue", air: true, ultra: true, room0: true, alpha: 0, noAlpha: true },
        { type: "text", content: "Fast and", x: 1530, y: -245, font: "35px rubik", alpha: 0, noAlpha: true, room0: true, id: "shortcut text", textAlign: "left" },
        { type: "text", content: "furious.", x: 1530, y: -200, font: "35px rubik", alpha: 0, noAlpha: true, room0: true, id: "shortcut text", textAlign: "left" },
        { type: "block", x: 1000, y: -600, w: 500, h: 600, slippery: true, room0: true },
        { type: "block", x: 1500, y: -600, w: 1000, h: 100, slippery: true, room0: true },
        { type: "image", image: "coinDashBackground", x: 500, y: -500, w: 1000, h: 1000, room1: true, noCollide: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 500, y: 200, w: 1000, h: 1000, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 800, y: -1500, w: 1000, h: 1050, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 750, y: -50, w: 750, h: 50, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 500, y: -270, w: 750, h: 50, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 1450, y: -600, w: 200, h: 600, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 350, y: -600, w: 200, h: 1100, room1: true, alpha: 0 },
        { type: "coin dash coin", x: 650, y: 100, room1: true },
        { type: "coin dash coin", x: 750, y: 100, room1: true },
        { type: "coin dash coin", x: 850, y: 100, room1: true },
        { type: "coin dash coin", x: 950, y: 100, room1: true },
        { type: "coin dash coin", x: 1050, y: 100, room1: true },
        { type: "coin dash coin", x: 1150, y: 100, room1: true },
        { type: "coin dash coin", x: 1250, y: 100, room1: true },
        { type: "coin dash coin", x: 1350, y: 100, room1: true },
        { type: "coin dash coin", x: 650, y: -15, room1: true },
        { type: "coin dash coin", x: 650, y: -130, room1: true },
        { type: "coin dash coin", x: 750, y: -130, room1: true },
        { type: "coin dash coin", x: 850, y: -130, room1: true },
        { type: "coin dash coin", x: 950, y: -130, room1: true },
        { type: "coin dash coin", x: 1050, y: -130, room1: true },
        { type: "coin dash coin", x: 1150, y: -130, room1: true },
        { type: "coin dash coin", x: 1250, y: -130, room1: true },
        { type: "coin dash coin", x: 1350, y: -130, room1: true },
        { type: "coin dash coin", x: 1350, y: -245, room1: true },
        { type: "coin dash coin", x: 750, y: -360, room1: true },
        { type: "coin dash coin", x: 850, y: -360, room1: true },
        { type: "coin dash coin", x: 950, y: -360, room1: true },
        { type: "coin dash coin", x: 1050, y: -360, room1: true },
        { type: "coin dash coin", x: 1150, y: -360, room1: true },
        { type: "coin dash coin", x: 1250, y: -360, room1: true },
        { type: "coin dash coin", x: 1350, y: -360, room1: true },
        { type: "block", x: 500, y: -1500, w: 1000, h: 1000, room2: true, color: "rgb(200,255,255)", noCollide: true },
        { type: "block", x: -450, y: -525, w: 1000, h: 200, room2: true },
        { type: "platform", x: 550, y: -525, w: 250, h: 10, room2: true },
        { type: "block", x: 800, y: -525, w: 2000, h: 200, room2: true, alpha: 0 },
        { type: "platform", x: 500, y: -650, w: 200, h: 10, room2: true },
        { type: "platform", x: 700, y: -800, w: 150, h: 10, room2: true },
        { type: "platform", x: 1310, y: -800, w: 190, h: 10, room2: true },
        { type: "jump enemy", x: 1310, y: -840, w: 40, h: 40, room2: true, noCollide: true, xmove: 1 },
        { type: "platform", x: 900, y: -950, w: 200, h: 10, room2: true },
        { type: "platform", x: 750, y: -1100, w: 150, h: 10, room2: true },
        { type: "platform", x: 1200, y: -1100, w: 250, h: 10, room2: true },
        { type: "platform", x: 920, y: -1250, w: 220, h: 10, room2: true },
        { type: "platform", x: 600, y: -1400, w: 250, h: 10, room2: true },
        { type: "image", image: "sokobanBackground", x: 500, y: -2500, w: 1000, h: 1000, room3: true, noCollide: true, collide: false },
        { type: "block", x: 500, y: -2540, w: 1000, h: 40, room3: true, sokobanBoxCollide: true, collide: false },
        { type: "block", x: 500, y: -1500, w: 1000, h: 40, room3: true, sokobanBoxCollide: true, collide: false },
        { type: "block", x: 500, y: -2500, w: 40, h: 1000, room3: true, sokobanCollide: true },
        { type: "block", x: 1460, y: -2500, w: 40, h: 280, room3: true, sokobanCollide: true },
        { type: "block", x: 1460, y: -2220, w: 40, h: 40, room3: true, sokobanBoxCollide: true },
        { type: "clue", x: 1475, y: -2200, down: true, angle: 270, room3: true, proximity: 80, radius: 50 },
        { type: "block", x: 1460, y: -2180, w: 40, h: 680, room3: true, sokobanCollide: true },
        { type: "block", x: 1060, y: -1900, w: 200, h: 200, room3: true, sokobanCollide: true },
        { type: "block", x: 660, y: -1980, w: 200, h: 200, room3: true, sokobanCollide: true },
        { type: "block", x: 820, y: -2380, w: 280, h: 280, room3: true, sokobanCollide: true },
        { type: "block", x: 1220, y: -2260, w: 120, h: 120, room3: true, sokobanCollide: true },
        { type: "sokoban box", x: 1020, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1020, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 940, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 980, y: -1900, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 860, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 900, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 580, y: -1900, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 540, y: -1900, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 540, y: -1940, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 620, y: -1940, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1260, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1300, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1340, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1380, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1420, y: -1860, w: 40, h: 40, room3: true },
        { type: "image", image: "sokobanCubeBackground", x: 1500, y: -2500, w: 1000, h: 1000, cubeRoom: true, noCollide: true, collide: false },
        { type: "block", x: 1500, y: -2500, w: 40, h: 280, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2180, w: 40, h: 680, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 2460, y: -2500, w: 40, h: 1000, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2500, w: 1000, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -1540, w: 1000, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2500, w: 120, h: 120, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2340, w: 80, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1700, y: -2340, w: 80, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1660, y: -2420, w: 120, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1740, y: -2420, w: 40, h: 280, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2140, w: 280, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "clue", x: 2200, y: -2040, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2040, y: -2040, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 1960, y: -1960, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 1960, y: -1800, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2200, y: -1720, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2040, y: -1720, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2280, y: -1960, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2280, y: -1800, air: true, cubeRoom: true, white: true },
        { type: "sokoban box", x: 1580, y: -2340, w: 40, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1620, y: -2340, w: 40, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1660, y: -2340, w: 40, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2060, y: -2340, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2380, y: -2420, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2140, y: -1860, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2020, y: -1940, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1900, y: -1660, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1620, y: -1980, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1860, y: -2220, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2300, y: -2140, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "cube", x: 2120, y: -1880, collected: false, cubeRoom: true },
        { type: "image", image: "snakeBackground", x: 500, y: -3500, w: 1000, h: 1000, room4: true, noCollide: true, collide: false },
        { type: "block", x: 500, y: -2900, w: 800, h: 120, room4: true, snakeCollide: true },
        { type: "block", x: 700, y: -3300, w: 800, h: 120, room4: true, snakeCollide: true },
        { type: "block", x: 460, y: -3540, w: 80, h: 1080, room4: true, snakeCollide: true },
        { type: "block", x: 1460, y: -3540, w: 80, h: 1080, room4: true, snakeCollide: true },
        { type: "apple", x: 660, y: -2700, w: 40, h: 40, room4: true },
        { type: "block", x: 450, y: -4550, w: 1100, h: 50, room5: true, noCollide: true, collide: false },
        { type: "block", x: 450, y: -3500, w: 1100, h: 50, room5: true, noCollide: true, collide: false },
        { type: "block", x: 450, y: -4550, w: 50, h: 1100, room5: true, noCollide: true, collide: false },
        { type: "block", x: 1500, y: -4550, w: 50, h: 1100, room5: true, noCollide: true, collide: false },
        { type: "image", image: "pacmanBackground", x: 498, y: -4502, w: 1004, h: 1004, room5: true, noCollide: true, collide: false, id: "pacman background" },
        { type: "block", hidden: true, x: 500, y: -4500, w: 40, h: 440, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -3940, w: 40, h: 440, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -4500, w: 1000, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1460, y: -4500, w: 40, h: 1000, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -3540, w: 440, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -3540, w: 440, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -4420, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -4180, w: 40, h: 360, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -3780, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -4420, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -4420, w: 360, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4420, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1380, y: -4420, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1380, y: -4180, w: 40, h: 360, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1380, y: -3780, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -3620, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -3620, w: 360, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -3620, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -4340, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -4260, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -3980, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -3700, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -4340, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -4260, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -3980, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -3700, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4340, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -4340, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -3700, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -3700, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4340, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4340, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -3780, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -3780, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -4260, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4260, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -3780, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -3780, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -4260, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -4260, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -3860, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -3860, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4180, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -4180, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -3860, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -3860, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4260, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4180, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3860, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3780, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4100, w: 200, h: 200, room5: true, collide: false, pacmanCollide: true, id: "ghost den" },
        { type: "block", hidden: true, x: 900, y: -3500, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -3500, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        //{ type: "block", hidden: true, x: 460, y: -4180, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        //{ type: "block", hidden: true, x: 460, y: -3960, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -4060, w: 40, h: 120, room5: true, collide: false, id: "pacman red cube door" },
        { type: "block", hidden: true, x: 940, y: -3540, w: 120, h: 40, room5: true, collide: false, id: "pacman red cube door" },
        { type: "block", hidden: true, x: 900, y: -4100, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4100, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -4100, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -4100, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3940, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3980, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -3940, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -3980, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "cube", x: 1000, y: -4000, room5: true, red: "true", hidden: true },
        { type: "image", image: "pingPongBackground", x: -500, y: -4500, w: 1000, h: 1000, room6: true },
        { type: "block", x: -450, y: -4100, w: 20, h: 200, room6: true, id: "opponent paddle" },
        { type: "block", x: 430, y: -4100, w: 20, h: 200, room6: true, id: "player paddle" },
        { type: "text", x: 50, y: -4450, font: "50px rubikbold", content: "0", room6: true, id: "player score", textAlign: "left" },
        { type: "text", x: -50, y: -4450, font: "50px rubikbold", content: "0", room6: true, id: "opponent score", textAlign: "right" },
        { type: "image", image: "circlesBackground", x: -1500, y: -4500, w: 1000, h: 1000, room7: true },
        { type: "image", image: "circlesBackground", x: -1500, y: -5500, w: 1000, h: 1000, secretCirclesRoom: true },
        { type: "circle", x: -800, y: -4600, r: 200, color: "hsla(40,100%,50%,0.2)", room7: true, circlesCollide: false, alpha: 0, noAlpha: true, id: "secret circles room shortcut block" },
        { type: "circle", x: -530, y: -4100, r: 150, color: "hsl(0,100%,50%)", room7: true },
        { type: "circle", x: -830, y: -4050, r: 200, color: "hsl(100,100%,50%)", room7: true },
        { type: "circle", x: -1100, y: -4070, r: 100, color: "hsl(50,100%,50%)", room7: true },
        { type: "circle", x: -1400, y: -4500, r: 200, color: "hsla(150,100%,50%,0.2)", room7: true, secretCirclesRoom: true },
        { type: "circle", x: -1070, y: -4700, r: 300, color: "hsl(30,100%,50%)", room7: true, secretCirclesRoom: true },
        { type: "circle", x: -1370, y: -5100, r: 280, color: "hsl(100,100%,50%)", secretCirclesRoom: true },
        { type: "circle", x: -350, y: -5550, r: 400, color: "hsla(0,100%,50%,0.2)", secretCirclesRoom: true },
        { type: "circle", x: -1100, y: -5650, r: 400, color: "hsl(262,100%,50%)", secretCirclesRoom: true },
        { type: "circle", x: -850, y: -5100, r: 70, color: "hsla(100,100%,50%,0.2)", secretCirclesRoom: true },
        { type: "circles collectable", x: -780, y: -5230, secretCirclesRoom: true },
        { type: "circle", x: -1700, y: -4200, r: 300, color: "hsl(160,100%,50%)", room7: true },
        { type: "circle", x: -600, y: -4500, r: 130, color: "hsl(140,100%,50%)", room7: true, secretCirclesRoom: true },
        { type: "circle", x: -1500, y: -3900, r: 140, color: "hsl(200,100%,50%)", room7: true },
        { type: "circle", x: -1330, y: -3600, r: 250, color: "hsl(50,100%,50%)", room7: true },
        { type: "circle", x: -1050, y: -3400, r: 250, color: "hsl(230,100%,50%)", room7: true },
        { type: "circle", x: -340, y: -3500, r: 250, color: "hsl(300,100%,50%)", room7: true },
        { type: "circle", x: -330, y: -3780, r: 250, color: "hsl(320,100%,50%)", room7: true },
        { type: "circle", x: -800, y: -3500, r: 80, color: "hsl(10,100%,50%)", room7: true },
        { type: "circle", x: -550, y: -4700, r: 120, color: "hsl(210,100%,50%)", secretCirclesRoom: true },
        { type: "circle", x: -500, y: -5000, r: 200, color: "hsl(250,100%,50%)", secretCirclesRoom: true },
        { x: -1500 + 400, y: -3500 + 120, type: "text", content: "No tricks here ;)", font: "50px Arial", room8: true },
        { x: -1500 + 790, y: -3500 + 0, w: 10, h: 800, type: "block", room8: true },
        { x: -1500 + 900, y: -3500 - 100, w: 200, h: 1000, type: "block", room8: true },
        { x: -1500 - 100, y: -3500 + 900, w: 1200, h: 200, type: "block", room8: true },
        { x: -1500 - 100, y: -3500 + 300, w: 200, h: 600, type: "lava", drawType: "block", color: "red", room8: true },
        { x: -1500 + 700, y: -3500 + 800, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 500, y: -3500 + 700, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 100, y: -3500 + 650, w: 200, h: 10, type: "block", room8: true },
        { x: -1500 + 450, y: -3500 + 550, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 700, y: -3500 + 500, w: 51, h: 10, type: "block", room8: true },
        { x: -1500 + 500, y: -3500 + 400, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 200, y: -3500 + 300, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 200, y: -3500 + 300, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 0, y: -3500 - 100, w: 800, h: 100, type: "block", room8: true },
        { type: "pacman ghost", color: "cyan", x: 1020, y: -3980, w: 40, h: 40, direction: 270, room5: true },
        { type: "pacman ghost", color: "orange", x: 940, y: -4020, w: 40, h: 40, direction: 180, room5: true },
        { type: "pacman ghost", color: "red", x: 980, y: -4060, w: 40, h: 40, direction: 180, room5: true },
        { type: "pacman ghost", color: "pink", x: 1020, y: -4060, w: 40, h: 40, direction: 180, room5: true }
    ],
    triggers: [
        {
            name: "room 0",
            check: function () {
                //return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > 1480 && player.y > -480;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room0 && o.id != "shortcut wall") {
                        if (!o.noAlpha) o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = Math.min(player.y, 160);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < 1480;
            },
            passive: function () {
                game.cam.x = 2000;
                game.backgroundOpacity = 1;
            }
        },
        {
            name: "room 1",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y < -480) return false;
                if (player.x < 1480) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room1) {
                        if (!o.collected) o.alpha = 1;
                        if (!o.noCollide) o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = Math.min(player.y, 160);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y < -480) return true;
                if (player.x > 1480) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "room 2",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.x < 480) return false;
                if (player.y < -1480) return false;
                if (player.y < -480) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room2) {
                        o.alpha = 1;
                        if (!o.noCollide) o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > -565) player.y = -565;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y > -480) return true;
                if (player.y < -1480) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -1000;
                game.backgroundOpacity = 0;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.x < 480) {
                    player.x = 1480;
                    player.positionHistory = [];
                }
                if (player.x > 1480) {
                    player.x = 480;
                    player.positionHistory = [];
                }
            },
        },
        {
            name: "room 3",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player && player.y < -1480) return true;
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (player && player.y < -2500) return false;
                if (player && player.x <= 1460) return true;
                var player = game.objects.objects.find(e => e.type == "snake player");
                if (player && player.y > -2500) return true;
                if (player && player.y > -2540 && player.move.direction.x != 0) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "sokoban player") continue;
                    if (o.room3) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                if (!game.objects.objects.find(e => e.type == "sokoban player")) {
                    var player = game.objects.objects.find(e => e.type == "player");
                    if (player) {
                        player.delete = true;
                        player.noDeathEffect = true;
                    } else {
                        player = game.objects.objects.find(e => e.type == "snake player");
                        o.delete = true;
                        for (var o of game.objects.objects) {
                            if (o.type == "snake body") o.delete = true;
                        }
                    }
                    var x = Math.floor((player.x - 20) / 40) * 40 + 20;
                    if (x <= 540) x = 580;
                    if (x >= 1460) x = 1420;
                    var sokobanPlayer = {
                        type: "sokoban player",
                        x: x,
                        y: -1540,
                        w: 40,
                        h: 40
                    }
                    if (player.type == "snake player") sokobanPlayer.y = -2500;
                    game.objects.objects.push(sokobanPlayer);
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (!player) return false;
                if (player.y >= -1500) {
                    player.delete = true;
                    game.objects.objects.push(game.level.createPlayer(player.x, player.y + 50));
                    return true;
                }
                if (player.x > 1460) return true;
                if (player.y < -2500) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -2000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "cube room",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (!player) return;
                if (player.x > 1460) return true;
            },
            trip: function () {
                game.level.discoverBlueCube();
                for (var o of game.objects.objects) {
                    if (o.type == "sokoban player") continue;
                    if (o.cubeRoom && o.type != "cube") {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                for (var o of game.objects.objects.filter(e => e.type == "sokoban box" && e.cubeRoom)) {
                    o.originalX = o.x;
                    o.originalY = o.y;
                }
                game.background.effect.start("blue");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (!player) return;
                if (player.x <= 1460) return true;
            },
            untrip: function () {
                game.background.effect.end("blue");
                for (var o of game.objects.objects.filter(e => e.type == "sokoban box" && e.cubeRoom)) {
                    o.x = o.originalX;
                    o.y = o.originalY;
                }
            },
            passive: function () {
                game.cam.x = 2000;
                game.cam.y = -2000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "cube",
            check: function () {
                if (!game.level.triggers.tripped("cube room")) return false;
                if (game.objects.objects.some(e => e.type == "sokoban box" && e.blue && !e.lit)) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "cube" && e.cubeRoom);
                o.alpha = 0;
                o.decay = -0.05;
                o.collide = true;
            },
            stop: function () {
                if (!game.level.triggers.tripped("cube room")) return true;
                if (game.objects.objects.some(e => e.type == "sokoban box" && e.blue && !e.lit)) return true;
                return false;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.type == "cube" && e.cubeRoom);
                o.alpha = 1;
                o.decay = 0.05;
                o.collide = false;
            }
        },
        {
            name: "room 4",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (player && player.y < -2500) return true;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (player && player.y >= -3500) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room4) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var o = game.objects.objects.find(e => e.type == "sokoban player");
                if (!o) {
                    var o = game.objects.objects.find(e => e.type == "pacman player");
                }
                o.delete = true;
                var x = o.x;
                if (x == 500) x += 40;
                if (x == 1460) x -= 40;
                var snakePlayer = {
                    type: "snake player",
                    length: 10,
                    x: x,
                    y: -2500,
                    w: 40,
                    h: 40,
                    move: {
                        origin: {
                            x: x,
                            y: -2500
                        },
                        direction: {
                            x: 0,
                            y: -40
                        },
                        lastDirection: {
                            x: 0,
                            y: -40
                        },
                        directionQueue: [],
                        time: 0
                    }
                }
                if (o.type == "pacman player") {
                    snakePlayer.x = Math.round(snakePlayer.x / 40) * 40 - 20;
                    snakePlayer.move.origin.x = snakePlayer.x;
                    snakePlayer.y = -3500;
                    snakePlayer.move.origin.y = -3500;
                    snakePlayer.move.lastDirection = {
                        x: 0,
                        y: 40
                    }
                    snakePlayer.move.direction = {
                        x: 0,
                        y: 40
                    }
                }
                game.objects.objects.push(snakePlayer);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "snake player");
                if (!player) return false;
                if (player.y > -2500) return true;
                if (player.y < -3500) return true;
                if (player.y > -2540 && player.move.direction.x != 0) return true;
                return false;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -3000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "new apple",
            check: function () {
                if (!game.level.triggers.tripped("room 4")) return false;
                if (!game.objects.objects.find(e => e.type == "apple")) return true;
                return false;
            },
            trip: function () {
                var possibleCoordinates = [];
                for (var x = 540; x <= 1460; x += 40) {
                    for (var y = -3500; y <= -2540; y += 40) {
                        var rect = { x: x, y: y, w: 40, h: 40 };
                        var collide = false;
                        for (var o of game.objects.objects) {
                            if (!o.snakeCollide) continue;
                            if (!blocksColliding(o, rect)) continue;
                            collide = true;
                            break;
                        }
                        if (collide) continue;
                        possibleCoordinates.push(rect);
                    }
                }
                var snake = game.objects.objects.find(e => e.type == "snake player");
                var snakeEnd = game.objects.objects.filter(e => e.type == "snake body").sort((a, b) => a.time - b.time)[0];
                var snakeX = Math.floor(snakeEnd.x / 40) * 40;
                var snakeY = Math.floor(snakeEnd.y / 40) * 40;
                var psuedoRandom = Math.abs(snake.length * 0.1283479 + snakeX * 0.8127634 + snakeY * 0.113489975) % 1;
                var coor = possibleCoordinates[Math.floor(psuedoRandom * possibleCoordinates.length)];
                var apple = {
                    type: "apple",
                    room4: true,
                    x: coor.x,
                    y: coor.y,
                    w: 40,
                    h: 40
                };
                game.objects.objects.splice(game.objects.objects.length - 1, 0, apple);
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "room 5",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "snake player");
                if (player && player.y < -3500) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room5) {
                        if (o.hidden) {
                            o.alpha = 0;
                        } else {
                            o.alpha = 1;
                        }
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var o = game.objects.objects.find(e => e.type == "snake player");
                o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.type != "snake body") continue;
                    o.delete = true;
                }

                /*var o = game.objects.objects.find(e => e.type == "player");
                o.delete = true;
                o.noDeathEffect = true;*/

                var pacmanPlayer = {
                    type: "pacman player",
                    x: 980,
                    y: -3520,
                    w: 40,
                    h: 40,
                    angle: 0,
                    nextDirection: false,
                    animation: 0
                };
                game.objects.objects.push(pacmanPlayer);

                if (game.level.triggers.tripped("init room 5")) {
                    for (var o of game.objects.objects.filter(e => e.type == "pacman dot")) {
                        if (o.collected) continue;
                        o.alpha = 1;
                    }
                    return;
                }
                for (var o of game.objects.objects) {
                    if (o.type == "pacman dot") o.delete = true;
                }
                var dots = [];
                for (var x = 540; x < 1460; x += 40) {
                    for (var y = -4460; y < -3540; y += 40) {
                        var dot = {
                            type: "pacman dot",
                            x: x + 15,
                            y: y + 15,
                            w: 10,
                            h: 10,
                            collected: false
                        }
                        if ((x == 540 || x == 1420) && (y == -4460 || y == -3580)) {
                            dot.w = 20;
                            dot.h = 20;
                            dot.x -= 5;
                            dot.y -= 5;
                            dot.booster = true;
                        }
                        if (x == 1420 && y == -4460) {
                            dot.clue = true;
                        }
                        var collide = game.objects.objects.some(e => e.pacmanCollide && blocksColliding(e, dot));
                        if (collide) continue;
                        game.objects.objects.splice(1, 0, dot);
                        dots.push(dot);
                    }
                }
                for (var n = 0; n < dots.length; n++) {
                    var o = dots[n];
                    for (var n2 = 0; n2 < dots.length; n2++) {
                        var o2 = dots[n2];
                        if (Math.abs(o.x - o2.x) > 40) continue;
                        if (Math.abs(o.y - o2.y) > 40) continue;
                        if (o2.x == o.x - 40 && o.y == o2.y) {
                            o.left = true;
                            o2.right = true;
                        }
                        if (o.x == o2.x - 40 && o.y == o2.y) {
                            o2.left = true;
                            o.right = true;
                        }
                        if (o2.y == o.y - 40 && o.x == o2.x) {
                            o.top = true;
                            o2.bottom = true;
                        }
                        if (o.y == o2.y - 40 && o.x == o2.x) {
                            o2.top = true;
                            o.bottom = true;
                        }
                    }
                }
                game.objects.ghostNodes = [];
                for (var o of dots) {
                    var yAxis = o.top || o.bottom;
                    var xAxis = o.left || o.right;
                    if (xAxis && yAxis) {
                        var ghostNode = {};
                        ghostNode.type = "ghost node";
                        ghostNode.x = o.x - 15;
                        ghostNode.y = o.y - 15;
                        ghostNode.w = 40;
                        ghostNode.h = 40;
                        game.objects.ghostNodes.push(ghostNode);
                        game.objects.objects.push(ghostNode);
                    }
                }
                var extraCoordinates = [
                    { x: 540, y: -4460 },
                    { x: 1420, y: -4460 },
                    { x: 540, y: -3580 },
                    { x: 1420, y: -3580 },
                    { x: 980, y: -4140 },
                    { x: 980, y: -4060 },
                    { x: 980, y: -3980 },
                    { x: 980, y: -3900 },
                    { x: 860, y: -4020 },
                    { x: 940, y: -4020 },
                    { x: 1020, y: -4020 },
                    { x: 1100, y: -4020 },
                ];
                for (var o of extraCoordinates) {
                    var ghostNode = {};
                    ghostNode.type = "ghost node";
                    ghostNode.x = o.x;
                    ghostNode.y = o.y;
                    ghostNode.w = 40;
                    ghostNode.h = 40;
                    game.objects.ghostNodes.push(ghostNode);
                    game.objects.objects.push(ghostNode);
                }
                for (var n = 0; n < game.objects.ghostNodes.length; n++) {
                    var o = game.objects.ghostNodes[n];
                    for (var n2 = n + 1; n2 < game.objects.ghostNodes.length; n2++) {
                        var o2 = game.objects.ghostNodes[n2];
                        if (o.x != o2.x && o.y != o2.y) continue;
                        if (o.x == o2.x) {
                            var dist = Math.abs(o.y - o2.y);
                            if (o.y < o2.y) {
                                if (!o.bottom || o.bottom.dist > dist) {
                                    var box = { x: o.x, y: o.y, w: o.w, h: o2.y - o.y + o2.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.bottom = { dist: dist, id: n2 };
                                        o2.top = { dist: dist, id: n };
                                    }
                                }
                            } else {
                                if (!o.top || o.top.dist > dist) {
                                    var box = { x: o2.x, y: o2.y, w: o2.w, h: o.y - o2.y + o.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.top = { dist: dist, id: n2 };
                                        o2.bottom = { dist: dist, id: n };
                                    }
                                }
                            }
                        } else {
                            var dist = Math.abs(o.x - o2.x);
                            if (o.x < o2.x) {
                                if (!o.right || o.right.dist > dist) {
                                    var box = { x: o.x, y: o.y, w: o2.x - o.x + o2.w, h: o.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.right = { dist: dist, id: n2 };
                                        o2.left = { dist: dist, id: n };
                                    }
                                }
                            } else {
                                if (!o.left || o.left.dist > dist) {
                                    var box = { x: o2.x, y: o2.y, w: o.x - o2.x + o.w, h: o2.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.left = { dist: dist, id: n2 };
                                        o2.right = { dist: dist, id: n };
                                    }
                                }
                            }
                        }
                    }
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (!player) return false;
                if (player.y >= -3500) return true;
                if (player.x < 500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -4000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "init room 5",
            check: function () {
                return game.level.triggers.tripped("room 5");
            }
        },
        {
            name: "won red cube",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                for (var o of game.objects.objects) {
                    if (o.type != "pacman dot") continue;
                    if (!o.collected) return false;
                }
                return true;
            },
            trip: function () {
                game.objects.objects = game.objects.objects.filter(e => e.type != "pacman ghost");
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "pacman background");
                o.image = "pacmanRedCubeWonBackground";
                var o = game.objects.objects.find(e => e.id == "ghost den");
                o.pacmanCollide = false;
                for (var o of game.objects.objects.filter(e => e.id == "pacman red cube door")) {
                    o.pacmanCollide = false;
                }
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (!player || player.dead) return false;
                if (!game.level.triggers.tripped("room 5")) return false;
                if (!game.objects.objects.find(e => e.type == "pacman dot" && e.clue && !e.collected)) return true;
                return false;
            },
            trip: function () {
                game.soundEffects.redCubeClue();
                game.level.discoverRedCube();
                var o = game.objects.objects.find(e => e.id == "pacman background");
                o.image = "pacmanRedCubeBackground";
                var origin = game.objects.objects.find(e => e.type == "pacman dot" && e.clue);
                for (var o of game.objects.objects) {
                    if (o.type != "pacman dot") continue;
                    o.originalX = o.x;
                    o.originalY = o.y;
                    o.originalW = o.w;
                    o.originalH = o.h;
                    if (o.clue) continue;
                    var dist = distTo(o.x, o.y, origin.x, origin.y);
                    o.redTime = Math.round(dist / 40) + 2;
                }
                for (var o of game.objects.objects.filter(e => e.id == "pacman red cube door")) {
                    o.pacmanCollide = true;
                }
                for (var o of game.objects.objects.filter(e => e.type == "pacman ghost")) {
                    o.animation = 0;
                    o.targetAngle = 0;
                    o.targetDistTime = 0;
                    o.targetDist = 0;
                    o.targetNode = false;
                    o.targetX = 0;
                    o.targetY = 0;
                }
                var cyanGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "cyan");
                cyanGhost.direction = 270;
                cyanGhost.x = 1020;
                cyanGhost.y = -3980;
                var orangeGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "orange");
                orangeGhost.direction = 180;
                orangeGhost.x = 940;
                orangeGhost.y = -4020;
                var redGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "red");
                redGhost.direction = 180;
                redGhost.x = 980;
                redGhost.y = -4060;
                var pinkGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "pink");
                pinkGhost.direction = 180;
                pinkGhost.x = 1020;
                pinkGhost.y = -4060;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (!player) return false;
                if (player.deathAnimation > 199) return true;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "pacman background");
                o.image = "pacmanBackground";
                for (var o of game.objects.objects) {
                    if (o.type != "pacman dot") continue;
                    o.redTime = undefined;
                    o.red = false;
                    o.x = o.originalX;
                    o.y = o.originalY;
                    o.w = o.originalW;
                    o.h = o.originalH;
                    o.collected = false;
                    o.alpha = 1;
                }
                var cyanGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "cyan");
                cyanGhost.direction = 270;
                cyanGhost.x = 1020;
                cyanGhost.y = -3980;
                var orangeGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "orange");
                orangeGhost.direction = 180;
                orangeGhost.x = 940;
                orangeGhost.y = -4020;
                var redGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "red");
                redGhost.direction = 180;
                redGhost.x = 980;
                redGhost.y = -4060;
                var pinkGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "pink");
                pinkGhost.direction = 180;
                pinkGhost.x = 1020;
                pinkGhost.y = -4060;
                for (var o of game.objects.objects.filter(e => e.type == "pacman ghost")) {
                    o.animation = 0;
                    o.targetAngle = 0;
                    o.targetDistTime = 0;
                    o.targetDist = 0;
                    o.targetNode = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "pacman red cube door")) {
                    o.pacmanCollide = false;
                }
            },
            passive: function () {
                if (!game.level.triggers.tripped("room 5")) return;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                for (var n = 0; n < game.objects.ghostNodes.length; n++) {
                    var o = game.objects.ghostNodes[n];
                    if (o.distToPlayer === undefined) o.distToPlayer = 10000000;
                    if (blocksColliding(o, player)) {
                        o.distToPlayer = 0;
                        o.precedentId = n;
                        for (var n2 = 0; n2 < game.objects.ghostNodes.length; n2++) {
                            if (n == n2) continue;
                            var o2 = game.objects.ghostNodes[n2];
                            if (o2.precedentId !== n) o2.precedentId = false;
                        }
                        if (o.left) {
                            var o2 = game.objects.ghostNodes[o.left.id];
                            var box = { x: o2.x + o2.w, y: o2.y, w: o.x - o2.x - o2.w, h: o2.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                        if (o.right) {
                            var o2 = game.objects.ghostNodes[o.right.id];
                            var box = { x: o.x + o.w, y: o.y, w: o2.x - o.x - o.w, h: o.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                        if (o.top) {
                            var o2 = game.objects.ghostNodes[o.top.id];
                            var box = { x: o2.x, y: o2.y + o2.h, w: o2.w, h: o.y - o2.y - o2.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                        if (o.bottom) {
                            var o2 = game.objects.ghostNodes[o.bottom.id];
                            var box = { x: o.x, y: o.y + o.h, w: o.w, h: o2.y - o.y - o.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                    } else {
                        var neighbors = [];
                        if (o.left) neighbors.push(game.objects.ghostNodes[o.left.id]);
                        if (o.right) neighbors.push(game.objects.ghostNodes[o.right.id]);
                        if (o.top) neighbors.push(game.objects.ghostNodes[o.top.id]);
                        if (o.bottom) neighbors.push(game.objects.ghostNodes[o.bottom.id]);
                        for (var o2 of neighbors) {
                            if (o2.precedentId === false || o2.precedentId === undefined) continue;
                            if (o.precedentId === false || o2.precedentId === false) o.distToPlayer = distTo(o.x, o.y, o2.x, o2.y) + o2.distToPlayer;
                            o.precedentId = o2.precedentId;
                            o.distToPlayer = Math.min(o.distToPlayer, distTo(o.x, o.y, o2.x, o2.y) + o2.distToPlayer);
                        }
                    }
                }
            }
        },
        {
            name: "room 6",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (player && player.x < 500) return true;
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.x > -500) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "pacman dot") o.delete = true;
                    if (o.type == "pacman ghost") o.delete = true;
                }
                var o = game.objects.objects.find(e => e.type == "pacman player");
                if (!o) o = game.objects.objects.find(e => e.type == "circles player");
                //o = game.objects.objects.find(e => e.type == "player");
                //o.noDeathEffect = true;
                o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.room6) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var pingPongPlayer = {
                    type: "ping pong player",
                    x: 470,
                    y: o.y,
                    w: 30,
                    h: 30,
                    xmove: -2.9,
                    ymove: -4
                }
                if (game.level.triggers.tripped("shortcut")) {
                    pingPongPlayer.xmove *= 4;
                    pingPongPlayer.ymove *= 4;
                }
                if (o.type == "circles player") {
                    pingPongPlayer.x = -500;
                    pingPongPlayer.xmove = 2.9;
                }
                game.objects.objects.push(pingPongPlayer);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player && player.x < -500) return true;
                return false;
            },
            passive: function () {
                var level8SpeedMultiplier = game.level.triggers.tripped("shortcut") ? 4 : 1;
                var level8OpponentSpeedMultiplier = game.level.triggers.tripped("shortcut") ? 4 : 1;
                if(game.level.triggers.tripped("ultra shortcut")) level8OpponentSpeedMultiplier *= 4;

                game.cam.x = 0;
                game.cam.y = -4000;
                game.backgroundOpacity = 0;

                var o = game.objects.objects.find(e => e.id == "player paddle");
                if (game.input.down) {
                    o.y += 4 * level8SpeedMultiplier;
                }
                if (game.input.up) {
                    o.y -= 4 * level8SpeedMultiplier;
                }
                if (o.y < -4500) o.y = -4500;
                if (o.y > -3500 - o.h) o.y = -3500 - o.h;

                var o = game.objects.objects.find(e => e.id == "opponent paddle");
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player) {
                    if (player.y > o.y + o.h / 2) {
                        o.y += 2 * level8OpponentSpeedMultiplier;
                    }
                    if (player.y < o.y + o.h / 2) {
                        o.y -= 2 * level8OpponentSpeedMultiplier;
                    }
                }
                if (o.y < -4500) o.y = -4500;
                if (o.y > -3500 - o.h) o.y = -3500 - o.h;
            }
        },
        {
            name: "room 7",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player && player.x < -500) return true;
                player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y > -4500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "ping pong player");
                //o = game.objects.objects.find(e => e.type == "player");
                //o.noDeathEffect = true;
                if (o) o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.type == "circles player") continue;
                    if (o.room7) {
                        if (!o.noAlpha) o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                if (game.objects.objects.find(e => e.type == "circles player")) return;
                var circlesPlayer = {
                    type: "circles player",
                    x: -500,
                    y: -4300,
                    r: 20,
                    angle: 0,
                    xmove: -6,
                    ymove: 0,
                    turn: 0
                }
                game.objects.objects.push(circlesPlayer);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.x > -500) return true;
                if (player && player.y > -3500) return true;
                if (player && player.y < -4500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = -1000;
                game.cam.y = -4000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "secret circles room",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y < -4500) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "circles player") continue;
                    if (o.secretCirclesRoom) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y > -4500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = -1000;
                game.cam.y = -5000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "room 8",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y > -3500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "circles player");
                o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.room8) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var oldPlayer = {
                    type: "old player",
                    x: -670,
                    y: -3540,
                    w: 40,
                    h: 40,
                    xmove: 0,
                    ymove: 4
                }
                game.objects.objects.push(oldPlayer);
                game.backgroundOpacity = 0;
            },
            passive: function () {
                game.cam.x = -1000;
                game.cam.y = -3000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "pre shortcut",
            check: function () {
                if (!game.level.triggers.tripped("room 0")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -100;
            },
            stop: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y == 160;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut block");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "reload shortcut",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y == 160;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut block");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                o.touched = false;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "shortcut wall");
                o.alpha = 0;
                o.decay = 0;
                o.touched = false;
                o.collide = true;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (!game.level.triggers.tripped("room 0")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (!game.input.down || game.input.downStart > 10) return false;
                return true;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.id == "shortcut text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                    o.noAlpha = false;
                }
                var o = game.objects.objects.find(e => e.id == "secret circles room shortcut block");
                o.noAlpha = false;
                o.circlesCollide = true;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                if (!o.peeked) {
                    //o.alpha = 1;
                    o.decay = 0.05;
                    o.peeked = true;
                }
            }
        },
        {
            name: "ultra shortcut",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("room 0")) return false;
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (!game.input.downStart) return false;
                return true;
            },
            trip: function () {
                game.level.discoverUltraShortcut();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue");
                o.activated = true;
                o.alpha = 1;
                o.decay = 0;
                o.noAlpha = false;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    game.objects.updatePlayer(player);
                }
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (player && !game.level.triggers.tripped("cube room")) {
                    game.objects.updateSokobanPlayer(player);
                }
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (player && !game.level.triggers.tripped("red cube")) {
                    game.objects.updatePacmanPlayer(player);
                }
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player && !player.delete) {
                    game.objects.updatePingPongPlayer(player);
                }
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player) {
                    game.objects.updateCirclesPlayer(player);
                }
                var player = game.objects.objects.find(e => e.type == "old player");
                if (player && !player.delete) {
                    game.objects.updateOldPlayer(player);
                }
            }
        }
    ],
    viewportBoundary: { x: 0, y: 0, w: 0, h: 0 },
    camFunction: function () {
    },
    levelComplete: function () {
        if (!game.level.triggers.tripped("room 8")) return false;
        var player = game.objects.objects.find(e => e.type == "old player");
        if (!player) return false;
        if (player.x < -1540) return true;
        return false;
    },
    camOffset: {
        x: 0,
        y: 0
    },
    camStartingPosition: {
        x: 2000,
        y: 0
    },
    spawnPoint: {
        x: 2300,
        y: 100
    },
    manualRespawn: function () {
        if (game.level.triggers.tripped("room 2")) {
            var o = game.level.createPlayer(980, -700);
            o.spawnTime = 150;
            o.spawnAnimation = 20;
            game.objects.objects.push(o);
        }
        if (game.level.triggers.tripped("room 4")) {
            for (var o of game.objects.objects) {
                if (o.type == "snake player") o.delete = true;
                if (o.type == "snake body") o.delete = true;
            }
            var snakePlayer = {
                type: "snake player",
                length: 10,
                x: 1020,
                y: -2500,
                w: 40,
                h: 40,
                move: {
                    origin: {
                        x: 1020,
                        y: -2500
                    },
                    direction: {
                        x: 0,
                        y: -40
                    },
                    lastDirection: {
                        x: 0,
                        y: -40
                    },
                    directionQueue: [],
                    time: 0
                }
            }
            game.objects.objects.push(snakePlayer);
            var o = game.objects.objects.find(e => e.type == "apple");
            o.x = 660;
            o.y = -2700;
        }
        if (game.level.triggers.tripped("room 5")) {
            var player = game.objects.objects.find(e => e.type == "pacman player");
            player.dead = false;
            player.deathAnimation = 0;
            player.x = 980;
            player.y = -3500;
            player.angle = 0;
            player.nextDirection = false;
            player.animation = 0;
        }
        if (game.level.triggers.tripped("room 6")) {
            var pingPongPlayer = {
                type: "ping pong player",
                x: 470,
                y: -4000,
                w: 30,
                h: 30,
                xmove: -2.9,
                ymove: -4
            }
            if (game.level.triggers.tripped("shortcut")) {
                pingPongPlayer.xmove *= 4;
                pingPongPlayer.ymove *= 4;
            }
            game.objects.objects.push(pingPongPlayer);
        }
        if (game.level.triggers.tripped("room 8")) {
            var oldPlayer = {
                type: "old player",
                x: -670,
                y: -3540,
                w: 40,
                h: 40,
                xmove: 0,
                ymove: 4
            }
            game.objects.objects.push(oldPlayer);
        }
    },
    playerDeadFunction: function () {
        if (game.level.triggers.tripped("room 2") && !game.objects.objects.find(e => e.type == "player")) return true;
        if (game.level.triggers.tripped("room 4")) {
            var player = game.objects.objects.find(e => e.type == "snake player");
            if (player && player.deathAnimation) return true;
        }
        if (game.level.triggers.tripped("room 5")) {
            var player = game.objects.objects.find(e => e.type == "pacman player");
            if (player.dead) return true;
        }
        if (game.level.triggers.tripped("room 6")) {
            var player = game.objects.objects.find(e => e.type == "ping pong player");
            if (!player) return true;
        }
        if (game.level.triggers.tripped("room 8")) {
            var player = game.objects.objects.find(e => e.type == "old player");
            if (!player) return true;
        }
        return false;
    },
    respawnTimeFunction: function () {
        if (game.level.triggers.tripped("room 2")) {
            game.level.playerRespawnTime -= 3;
        }
        if (game.level.triggers.tripped("room 4")) {
            var snakeHead = game.objects.objects.find(e => e.type == "snake player");
            var snakeLength = 10;
            if (snakeHead) {
                snakeLength = snakeHead.length;
            }
            var decayAmount = snakeLength / 8 + 3.75;
            if (game.level.playerRespawnTime < 100) {
                for (var o of game.objects.objects) {
                    if (o.type != "snake body") continue;
                    o.time -= decayAmount;
                    if (o.time <= 0) o.delete = true;
                }
                if (!game.objects.objects.find(e => e.type == "snake body")) game.level.playerRespawnTime -= decayAmount * 4;
            } else {
                game.level.playerRespawnTime--;
                if (game.level.triggers.tripped("ultra shortcut")) {
                    game.level.playerRespawnTime -= 9;
                }
            }
        }
        if (game.level.triggers.tripped("room 5")) {
            game.level.playerRespawnTime--;
        }
        if (game.level.triggers.tripped("room 6")) {
            game.level.playerRespawnTime--;
            if (game.level.triggers.tripped("ultra shortcut")) {
                game.level.playerRespawnTime -= 4;
            }
        }
        if (game.level.triggers.tripped("room 8")) {
            game.level.playerRespawnTime -= 2;
        }
    }
}