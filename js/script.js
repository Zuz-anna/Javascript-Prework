'use strict';

let counterPlayerWin = 0;
let counterComputerWin = 0; 
const buttonRock = document.getElementById ('button-rock');
const buttonPaper = document.getElementById ('button-paper'); 
const buttonScissors = document.getElementById ('button-scissors');


function buttonClicked (playerMove) {

  clearMessages();
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName (randomNumber);

  displayResult(playerMove, computerMove);
}


function getMoveName(argMoveId) {

  if (1 === argMoveId) {
    return 'kamień';

  } else if (2 === argMoveId) {
    return 'papier';

  } else if (3 === argMoveId) {
    return 'nożyce';

  } printMessage ('Nie znam ruchu: ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
}



function displayResult (argPlayerMove, argComputerMove) {

  if (argPlayerMove === 'papier' && argComputerMove === 'kamień') {
    printMessage ('Wygrywasz!');
    counterPlayerWin += 1;

  } else if (argPlayerMove === 'nożyce' && argComputerMove === 'papier') {
    printMessage ('Wygrywasz!');
    counterPlayerWin += 1;

  } else if (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') {
    printMessage ('Wygrywasz!');
    counterPlayerWin += 1;

  } else if (argPlayerMove === argComputerMove) {
    printMessage ('Wygląda na to, że mamy REMIS!');

  } else {
    printMessage ('Przegrywasz :(');
    counterComputerWin += 1;
  }
  printMessage ('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printResult ('Twój wynik to: ' + counterPlayerWin + ', wynik komputera to: ' + counterComputerWin);
}

buttonRock.addEventListener ('click', function() {
  buttonClicked ('kamień');
});

buttonPaper.addEventListener ('click', function() {
  buttonClicked ('papier');
});

buttonScissors.addEventListener ('click', function() {
  buttonClicked ('nożyce');
});

