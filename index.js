let computerOptions=['rock', 'paper', 'scissor'];
let computerOption=computerOptions[(Math.floor(Math.random()*computerOptions.length))];
//use of *computerOption.length after the Math.random bounds the range of randomness of computerOptions.
//and math.floor command gives the absolute value of math.random
//.random generates a number between 0 and 1 , that isn't a whole number , and also isn't 1.To get a number , for 
//example between 0 and 10 , multiply your answer by 10:math.random()*10.To get it to be a whole number i.e an 
//ineger apply math.floor which rounds doen to nearest whole number.
function computerPlay(){return computerOption;
    
}


function roundPlay(playerSelection, computerOption){
    if(playerSelection=='rock'&& computerOption=='scissor'){console.log("You win! rock beats scissor");
}else if(playerSelection=='paper' && computerOption=='scissor'){console.log("you lose! scissor beat the paper");
}else if(playerSelection=='paper'&& computerOption=="rock"){console.log("you win! pape beats the rock");
}else if(playerSelection=='scissor'&& computerOption=='rock'){console.log("you lose! rock beats the scissor");
}else if(playerSelection=='rock'&& computerOption=='paper'){console.log("you lose!paper beats the rock");
}else if(playerSelection=='scissor' && computerOption=='paper'){console.log("you win! scissor beats the paper");
}else {console.log( "match tie! try again");
}
}
let playerSelection="rock";
let computerSelection=computerPlay();
console.log(roundPlay(playerSelection, computerSelection));