

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}


function getHumanChoice (){
    
    // let choice  = prompt('what is your choice').toLowerCase()

    // if (choices.includes(choice)){
    //     return choice;
    // } else {
    //     // choice = prompt('Enter valid choice;')
    // }
    let choice = prompt('Enter a valid choice').toLowerCase();

    while (!choices.includes(choice)){
        choice = prompt('Please enter a valid choice').toLowerCase();
    }

    return choice
   
};




function playRound(computerSelection, humanSelection){
    if (computerSelection === humanSelection){
        return 'draw'
    }
    else if (computerSelection === 'paper' && humanSelection === 'rock' ||
        computerSelection === 'scissors' && humanSelection === 'paper' ||
        computerSelection === 'rock' && humanSelection === 'scissors'
     ) {
        return 'computer'
     } else {
        return 'human'
     } 
}



function playGame() {
    

    let humanScore = 0;
    let computerScore = 0;
    const totalRounds = 5;
    for (let i = 0; i < totalRounds; i++){
        const hChoice = getHumanChoice();
        const botChoice = getComputerChoice();
        const winner = playRound(botChoice,hChoice)
        
        if (winner === 'human'){
            humanScore++;
        } else if (winner === 'computer'){
            computerScore++;
        }

        console.log(`
            Round ${i + 1}. 
            Human : ${hChoice}
            Computer : ${botChoice}
            Winner : ${winner.toUpperCase()}
            `)
    }

    return `
            Final Score after ${totalRounds} rounds:
            Computer Score: ${computerScore}
            Human Score : ${humanScore}`

}

console.log(playGame())




