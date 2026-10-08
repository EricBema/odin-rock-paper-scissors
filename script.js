

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}


function getHumanChoice (){
    
    let choice  = prompt('what is your choice')

    return choice
   
};



function playRound(computerSelection, humanSelection){
    if (computerSelection === 'paper' && humanSelection === 'rock' ||
        computerSelection === 'scissors' && humanSelection === 'paper' ||
        computerSelection === 'rock' && humanSelection === 'scissors'
     ) {
        return 'Computer has won this round'
     } else if (humanSelection === 'paper' && computerSelection === 'rock' ||
        humanSelection === 'scissors' && computerSelection === 'paper' ||
        humanSelection === 'rock' && computerSelection === 'scissors') {
        return 'The human has won this round'
     } else if (computerSelection === humanSelection){
        return 'Draw, try again'
     }
}



function playGame() {
    

    let humanScore = 0;
    let computerScore = 0;
    const totalRounds = 5;
    for (let i = 0; i < totalRounds; i++){
        let winner = playRound(getComputerChoice(),getHumanChoice())
        if (winner.includes('human')){
            humanScore++;
        } else if (winner.includes('Computer')){
            computerScore++;
        }
    }

    return `Round Score:
            Computer Score: ${computerScore}
            Human Score : ${humanScore}`

}

console.log(playGame())




