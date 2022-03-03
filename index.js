let computerSelections=['rock', 'paper', 'scissor'];
let computerSelection=computerSelections[(Math.floor(Math.random()*computerSelections.length))];
//use of *computerOption.length after the Math.random bounds the range of randomness of computerOptions.
//and math.floor command gives the absolute value of math.random
//.random generates a number between 0 and 1 , that isn't a whole number , and also isn't 1.To get a number , for 
//example between 0 and 10 , multiply your answer by 10:math.random()*10.To get it to be a whole number i.e an 
//ineger apply math.floor which rounds doen to nearest whole number.
function computerPlay(){return computerSelection;
    
}
console.log(computerSelection);


