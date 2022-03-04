var monster = $('#monster')
console.log(monster)

function show() {
    monster.fadeIn(2000)
}

function hide() {
    monster.fadeOut(2000)
}

function moveRight() {
    monster.animate({left: 300},300)
}

function moveLeft() {
    monster.animate({left: 0},300)
}

function moveUp() {
    monster.animate({top: 50},300)
}

function moveDown() {
    monster.animate({top: 300},300)
}

function moveSequence() {
    const duration = 300

    monster
    .fadeOut(300)
    .animate({top: 300},300)
    .fadeIn(300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .animate({left: 300},300)
    .animate({left: 0},300)
    .fadeOut(300)
    .animate({top: 50},300)
    .fadeIn(300)
}