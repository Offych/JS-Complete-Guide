const startGameBtn = document.getElementById('start-game-btn');

const start = function () {
    console.log("Game is starting...");
};


/* 
const person = {
    name: 'Alex',
    greet: function greet() {
        console.log('Hello there... ' + this.name)
    }
}
person.greet(); */
//console.dir(startGame)

startGameBtn.addEventListener('click', start);

