const player = document.getElementById('player');
const maze = document.getElementById('maze');
const exit = document.getElementById('exit');
const message = document.getElementById('message');
const walls = document.querySelectorAll('.wall');

let playerX = 10, playerY = 10;
const step = 5;

function movePlayer(x, y) {
    const newX = playerX + x;
    const newY = playerY + y;

    if (checkCollision(newX, newY)) {
        playerX = newX;
        playerY = newY;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';

        if (checkWin()) {
            message.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'congratulations.html'; // Change this to your next page
            }, 5000);
        }
    }
}

function checkCollision(newX, newY) {
    player.style.left = newX + 'px';
    player.style.top = newY + 'px';

    for (let wall of walls) {
        if (isCollision(player, wall)) {
            player.style.left = playerX + 'px';
            player.style.top = playerY + 'px';
            return false;
        }
    }

    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
    return true;
}

function isCollision(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(aRect.right < bRect.left || 
             aRect.left > bRect.right || 
             aRect.bottom < bRect.top || 
             aRect.top > bRect.bottom);
}

function checkWin() {
    return isCollision(player, exit);
}

document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            movePlayer(0, -step);
            break;
        case 'ArrowDown':
            movePlayer(0, step);
            break;
        case 'ArrowLeft':
            movePlayer(-step, 0);
            break;
        case 'ArrowRight':
            movePlayer(step, 0);
            break;
    }
});

maze.addEventListener('touchstart', handleTouchStart, false);
maze.addEventListener('touchmove', handleTouchMove, false);
maze.addEventListener('touchend', handleTouchEnd, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            movePlayer(-step, 0); // left
        } else {
            movePlayer(step, 0); // right
        }
    } else {
        if (yDiff > 0) {
            movePlayer(0, -step); // up
        } else {
            movePlayer(0, step); // down
        }
    }

    xDown = null;
    yDown = null;
}

function handleTouchEnd(evt) {
    xDown = null;
    yDown = null;
}
