'use strict';

function computerPlay() {
    let computer = Math.random();
    if (computer < .34) {
        computer = 'Rock';
    } else if (computer >= .34 && computer <= .57) {
        computer = 'Paper';
    } else {
        computer = 'Scissors';
    }
    return computer.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Please enter Rock, Paper or Scissors').toLowerCase();
    computerSelection = computerPlay();
    computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! ${playerSelection} crushes ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! ${playerSelection} covers ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} cuts ${computerSelection}`;
    } else if(playerSelection === computerSelection) {
        return `Its a tie! ${playerSelection} = ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}


game();