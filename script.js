let score = JSON.parse(localStorage.getItem('score'))

if(score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

function computer_random_move(){
    const random_number = Math.random()
    let computer_move = ''

    if(random_number >= 0 && random_number < 1/3){
        computer_move = 'rock'
    }

    else if(random_number >= 1/3 && random_number < 2/3){
        computer_move = 'paper'
    }

    else if(random_number >= 2/3 && random_number < 1){
        computer_move ='scissors'
    }

    return computer_move
}



function game(player_move){
    const computer_move = computer_random_move()
    let result = ''

    if(computer_move == 'rock' && player_move == 'rock' || computer_move == 'paper' && player_move == 'paper' || computer_move == 'scissors' && player_move == 'scissors'){
        result = 'Tie'
        score.ties +=1
    }

    else if(computer_move == 'rock' && player_move == 'paper' || computer_move == 'paper' && player_move =='scissors' || computer_move =='scissors' && player_move == 'rock'){
        result = 'You Win'
        score.wins +=1
    }

    else if(computer_move == 'rock' && player_move =='scissors' || computer_move =='scissors' && player_move == 'paper' || computer_move == 'paper' && player_move == 'rock'){
        result = 'You Lose'
        score.losses +=1
    }

    localStorage.setItem('score', JSON.stringify(score))
    
    document.querySelector('.js-result').innerHTML = `The result is : ${result}.` 

    document.querySelector('.js-moves').innerHTML = `You picked ${player_move}, Computer picked ${computer_move}` 

    updateScore()
}

function reset(){
    score.wins = 0
    score.losses = 0
    score.ties = 0

    localStorage.removeItem('score')

    updateScore()
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `You have ${score.wins} Wins, ${score.losses} Losses and ${score.ties} Ties`
}

updateScore()