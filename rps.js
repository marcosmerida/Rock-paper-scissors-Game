let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('.result p');
const finalresult_div = document.querySelector('.finalresult p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const playAgain = document.getElementById('playagain').style.display = "none";

function reset(){//this is the function for the "play again" button
    location.reload();
}

function computerSelection(){//This is the function that is going to provide us the computer selection, it's just a random number.
    const options = ['rock','paper','scissors'];//this is an array with the 3 options that we should have, each option has the value 0,1 and 2 by default.
    const random = Math.floor(Math.random() * 3);//this is the command where the option is gonna be selected by a random number between 0 and 3.
    const selection = options[random];//Now the number provided by the previous command is one of our previous options (rock, paper, scissors).
    return selection;//this is just because we're gonna need this data.
}

function win(userOption,pcOption){//this is the function that is going to be executed whenever the user wins against the computer.
    userScore++;//++ means increment by 1 each time the user wins.
    userScore_span.innerHTML = userScore;//here is where the userScore is gonna be showed in the interface.
    winorloose();//we're calling another function.
}
function loose(userOption,pcOption){//this is the function that is going to be executed whenever the user looses against the computer.
    compScore++;//the computer score increments by 1.
    compScore_span.innerHTML= compScore;//here is where the computer score is gonna be showed in the interface.
    winorloose();
    }
function draw(userOption,pcOption){//this function is for a draw.
        }

function winorloose(){//this function evaluates whenever the user or the opponent reaches 5 points first.
    if(userScore == 5){//if the user reaches 5 points first
        finalresult_div.innerHTML = "Congratulations! you got 5 points first, you win. 🤣";//here is where this message is gonna be showed in the interface.
        rock_div.style.pointerEvents = "none"; //these 3 lines are just like a padlock for the buttons, so the user can't play when the game is over.
        paper_div.style.pointerEvents = "none";
        scissors_div.style.pointerEvents = "none";
        document.getElementById('playagain').style.display = "block"; //and this is the line that allows the user to see and click the "play again" button.
    }else if (compScore == 5){//this is the opposite.
        finalresult_div.innerHTML = "huh? the computer got 5 points first, you loose. ☠️"; 
        rock_div.style.pointerEvents = "none";
        paper_div.style.pointerEvents = "none";
        scissors_div.style.pointerEvents = "none";
        document.getElementById('playagain').style.display = "block";
    }
}



function game(option){//this is the function that is gonna make the game works basically.
    const computerSel = computerSelection();//this constant is executing the function computerselection to receive the data.
    const userSelection = option;//this constant is where we receive the data from another function with our selection.

    if((userSelection == 'rock' && computerSel == 'scissors') //this concatenation is whenever the user wins.
    || (userSelection == 'paper' && computerSel == 'rock')
    || (userSelection == 'scissors' && computerSel == 'paper')){
        win(userSelection,computerSel);//here is where we call our win() function.
        result_div.innerHTML = "You win!&nbsp;" + userSelection + "&nbsp;beats " + computerSel + ".&nbsp😎"; //this is the message showed whenever the user wins.
    }else if((userSelection == 'scissors' && computerSel == 'rock') //this concatenation is whenever the computer wins.
          || (userSelection == 'rock' && computerSel == 'paper')
          || (userSelection == 'paper' && computerSel == 'scissors')){
        loose(userSelection,computerSel);//here is where we call our loose() function.
        result_div.innerHTML = "You loose&nbsp;" + computerSel + "&nbsp;beats " + userSelection + ".&nbsp😭";//this is the message showed thenever the user looses. 
    }else if((userSelection == 'scissors' && computerSel == 'scissors') //this concatenation is whenever is a draw.
          || (userSelection == 'rock' && computerSel == 'rock')
          || (userSelection == 'paper' && computerSel == 'paper')){
        draw(userSelection,computerSel);//here is where we call our draw() function.
        result_div.innerHTML = "Draw! both chose&nbsp;" + userSelection + ".&nbsp😱";//this is message showed in a draw.
}
}


function userSelection(){//this is the function where the selection from the user is received and used for the main function(the one above).
    rock_div.addEventListener('click', () => game("rock"));//we add an event whenever we click the div that is going to call a the function game and change the parameter to "rock".
    paper_div.addEventListener('click', () => game("paper"));//we add an event whenever we click the div that is going to call a the function game and change the parameter to "paper".
    scissors_div.addEventListener('click', () => game("scissors"));//we add an event whenever we click the div that is going to call a the function game and change the parameter to "scissors".
}
userSelection();//and we put this here just to make the program to be aware of the user selection all the time.

