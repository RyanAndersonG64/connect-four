let space = null;
let spaceN = 'space0';
let clickedSpace = 'space0';
let spaces = [];
let spacesPlayed = 0;
let redWins = 0;
let yellowWins = 0;

let legal = true;
let redTurn = true;
let gameOver = false;

function emptyInput1() {
    if (document.getElementById('redName').value === "Enter red's name") {
    document.getElementById('redName').value = '';
    }
}

document.getElementById('redName').addEventListener('click', emptyInput1)

function emptyInput2() {
    if (document.getElementById('yellowName').value === "Enter yellow's name") {
    document.getElementById('yellowName').value = '';
    }
}

document.getElementById('yellowName').addEventListener('click', emptyInput2)

for (let i = 0; i < 42; i++) {
    spaceN = 'space' + i.toString();
    space = document.createElement('div');
    space.setAttribute('id', spaceN);
    space.setAttribute('class', 'space');
    board.appendChild(space);
    spaces[i] = spaceN;
    document.getElementById(spaceN).style.backgroundColor = 'white';
    // document.getElementById(spaces[i]).addEventListener('click', function(e) {
    //     clickedSpace = e.target.id;
    //     placeCheck()
    // })
    }

for (let i = 0; i < 7; i++) {
    document.getElementById(spaces[i]).addEventListener('click', function(e) {
        clickedSpace = spaces[i];
        console.log('id = ' + clickedSpace)
        placeCheck()
    })
}

for (let i = 0; i < 7; i++) {
    document.getElementById(spaces[i]).addEventListener('mouseover', function(e) {
        clickedSpace = spaces[i];
        if (document.getElementById(clickedSpace).style.backgroundColor = 'white') {
        document.getElementById(clickedSpace).style.backgroundColor = 'purple'  // for some reason this makes top space unplayable
        }e
    })
}

for (let i = 0; i < 7; i++) {
    document.getElementById(spaces[i]).addEventListener('mouseleave', function(e) {
        clickedSpace = spaces[i];
        if (document.getElementById(clickedSpace).style.backgroundColor = 'purple') {
            document.getElementById(clickedSpace).style.backgroundColor = 'white'
            }
    })
}

document.getElementById('resetButton').addEventListener('click', reset)

function place() {
    // legalCheck();
    if (document.getElementById(clickedSpace).style.backgroundColor === 'white' || document.getElementById(clickedSpace).style.backgroundColor === 'purple' && gameOver === false) {
        if (redTurn === true) {
            document.getElementById(clickedSpace).style.backgroundColor = 'red';
        } else {
            document.getElementById(clickedSpace).style.backgroundColor = 'yellow';
        }
        switchTurn();
    }
    legal = true;
    victoryCheckHorizontal();
    victoryCheckVertical();
    victoryCheckUpRight();
    victoryCheckUpLeft();
    drawCheck();
}

function placeCheck() {
    console.log('clickedSpace = ' + clickedSpace)
    let spaceNumber = Number(clickedSpace.slice(5));
    console.log('spaceNumber = ' + spaceNumber)
    for (let i = (spaceNumber + 35) ; i >= spaceNumber; i -= 7) {
        console.log('i = ' + i)
        if (document.getElementById(spaces[i]).style.backgroundColor === 'white') {
            clickedSpace = spaces[i];
            console.log('clickedSpace = ' + clickedSpace)
            place()
            break
        }
    }
}

// function legalCheck() {
//     let spaceNumber = Number(clickedSpace.slice(5));
//     for (let i = spaceNumber + 7; i < 42; i += 7) {
//     if (document.getElementById(spaces[i]).style.backgroundColor === 'white') {
//         legal = false;
//         break
//     }
//     }
// }

function switchTurn(){
    redTurn = !redTurn
    if (redTurn === true){
        if (document.getElementById('redName').value === "Enter red's name" || document.getElementById('redName').value === "") {
            document.getElementById('gameText').textContent = "Red's turn"
        } else {
            document.getElementById('gameText').textContent = document.getElementById('redName').value + "'s turn"
        }
        document.getElementById('gameText').style.color = 'red'
    } else {
        if (document.getElementById('yellowName').value === "Enter yellow's name" || document.getElementById('yellowName').value === "") {
            document.getElementById('gameText').textContent = "Yellow's turn"
        } else {
            document.getElementById('gameText').textContent = document.getElementById('yellowName').value + "'s turn"
        }
        document.getElementById('gameText').style.color = 'yellow'
    }
}

function reset (){
    switchTurn()
    legal = true;
    gameOver = false;
    for (let i = 0; i < 42; i++)
    document.getElementById(spaces[i]).style.backgroundColor = 'white';
    document.getElementById('resetButton').textContent = 'Reset';
    spacesPlayed = 0;
}

function victoryCheckHorizontal() {
    for (let i = 0; i < 42; i++) {
        if (i % 7 < 4) {
            if (document.getElementById(spaces[i]).style.backgroundColor === 'red' && document.getElementById(spaces[i+1]).style.backgroundColor === 'red' && document.getElementById(spaces[i+2]).style.backgroundColor === 'red' && document.getElementById(spaces[i+3]).style.backgroundColor === 'red') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+1]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+2]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+3]).style.backgroundColor = 'green'
                if (document.getElementById('redName').value === "Enter red's name" || document.getElementById('redName').value === "") {
                    document.getElementById('gameText').textContent = "Red wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('redName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'red'
                document.getElementById('gameText').style.color = 'red'
                redWins += 1;
                document.getElementById('redWins').textContent = 'Wins: ' + redWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = true;
            } else if (document.getElementById(spaces[i]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i+1]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i+2]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i+3]).style.backgroundColor === 'yellow') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+1]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+2]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+3]).style.backgroundColor = 'green'
                if (document.getElementById('yellowName').value === "Enter yellow's name" || document.getElementById('yellowName').value === "") {
                    document.getElementById('gameText').textContent = "Yellow wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('yellowName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'yellow'
                document.getElementById('gameText').style.color = 'yellow'
                yellowWins += 1;
                document.getElementById('yellowWins').textContent = 'Wins: ' + yellowWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = false;
            }
        }
    }
}

function victoryCheckVertical() {
    for (let i = 0; i < 21; i++) {
            if (document.getElementById(spaces[i]).style.backgroundColor === 'red' && document.getElementById(spaces[i+7]).style.backgroundColor === 'red' && document.getElementById(spaces[i+14]).style.backgroundColor === 'red' && document.getElementById(spaces[i+21]).style.backgroundColor === 'red') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+7]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+14]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+21]).style.backgroundColor = 'green'
                if (document.getElementById('redName').value === "Enter red's name" || document.getElementById('redName').value === "") {
                    document.getElementById('gameText').textContent = "Red wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('redName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'red'
                document.getElementById('gameText').style.color = 'red'
                redWins += 1;
                document.getElementById('redWins').textContent = 'Wins: ' + redWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = true;
            } else if (document.getElementById(spaces[i]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i+7]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i+14]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i+21]).style.backgroundColor === 'yellow') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+7]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+14]).style.backgroundColor = 'green'
                document.getElementById(spaces[i+21]).style.backgroundColor = 'green'
                if (document.getElementById('yellowName').value === "Enter yellow's name" || document.getElementById('yellowName').value === "") {
                    document.getElementById('gameText').textContent = "Yellow wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('yellowName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'yellow'
                document.getElementById('gameText').style.color = 'yellow'
                yellowWins += 1;
                document.getElementById('yellowWins').textContent = 'Wins: ' + yellowWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = false;
            }
    }
}

function victoryCheckUpRight() {
    for (let i = 21; i < 42; i++) {
        if (i % 7 < 4) {
            if (document.getElementById(spaces[i]).style.backgroundColor === 'red' && document.getElementById(spaces[i-6]).style.backgroundColor === 'red' && document.getElementById(spaces[i-12]).style.backgroundColor === 'red' && document.getElementById(spaces[i-18]).style.backgroundColor === 'red') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-6]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-12]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-18]).style.backgroundColor = 'green'
                if (document.getElementById('redName').value === "Enter red's name" || document.getElementById('redName').value === "") {
                    document.getElementById('gameText').textContent = "Red wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('redName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'red'
                document.getElementById('gameText').style.color = 'red'
                redWins += 1;
                document.getElementById('redWins').textContent = 'Wins: ' + redWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = true;
            } else if (document.getElementById(spaces[i]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i-6]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i-12]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i-18]).style.backgroundColor === 'yellow') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-6]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-12]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-18]).style.backgroundColor = 'green'
                if (document.getElementById('yellowName').value === "Enter yellow's name" || document.getElementById('yellowName').value === "") {
                    document.getElementById('gameText').textContent = "Yellow wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('yellowName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'yellow'
                document.getElementById('gameText').style.color = 'yellow'
                yellowWins += 1;
                document.getElementById('yellowWins').textContent = 'Wins: ' + yellowWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = false;
            }
        }
    }
}

function victoryCheckUpLeft() {
    for (let i = 21; i < 42; i++) {
        if (i % 7 > 2) {
            if (document.getElementById(spaces[i]).style.backgroundColor === 'red' && document.getElementById(spaces[i-8]).style.backgroundColor === 'red' && document.getElementById(spaces[i-16]).style.backgroundColor === 'red' && document.getElementById(spaces[i-24]).style.backgroundColor === 'red') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-8]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-16]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-24]).style.backgroundColor = 'green'
                if (document.getElementById('redName').value === "Enter red's name" || document.getElementById('redName').value === "") {
                    document.getElementById('gameText').textContent = "Red wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('redName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'red'
                document.getElementById('gameText').style.color = 'red'
                redWins += 1;
                document.getElementById('redWins').textContent = 'Wins: ' + redWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = true;
            } else if (document.getElementById(spaces[i]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i-8]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i-16]).style.backgroundColor === 'yellow' && document.getElementById(spaces[i-24]).style.backgroundColor === 'yellow') {
                gameOver = true;
                document.getElementById(spaces[i]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-8]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-16]).style.backgroundColor = 'green'
                document.getElementById(spaces[i-24]).style.backgroundColor = 'green'
                if (document.getElementById('yellowName').value === "Enter yellow's name" || document.getElementById('yellowName').value === "") {
                    document.getElementById('gameText').textContent = "Yellow wins!"
                } else {
                    document.getElementById('gameText').textContent = document.getElementById('yellowName').value + " wins!"
                }
                document.getElementById('gameText').style.color = 'yellow'
                document.getElementById('gameText').style.color = 'yellow'
                yellowWins += 1;
                document.getElementById('yellowWins').textContent = 'Wins: ' + yellowWins.toString();
                document.getElementById('resetButton').textContent = 'Play again'
                redTurn = false;
            }
        }
    }
}

function drawCheck() {
    spacesPlayed = 0;
    for (let i = 0; i < 42; i++) {
        if (document.getElementById(spaces[i]).style.backgroundColor === 'red' || document.getElementById(spaces[i]).style.backgroundColor === 'yellow') {
            spacesPlayed++;
        }
    }
    if (spacesPlayed === 42) {
        gameOver = true;
        document.getElementById('gameText').textContent = 'Draw!'
        document.getElementById('gameText').style.color = 'white'
        document.getElementById('resetButton').textContent = 'Play again'
    }
}