
let resultSpace = document.getElementsByTagName("h1")[0];
let gameButtons = document.querySelectorAll("#gameButton");
let winCounter=0;
let loseCounter=0;
let finalResult = document.createElement("div")


Array.from(gameButtons).forEach(button=>{
  button.addEventListener('click', () => {

  let randomNumber= Math.random();

  if (randomNumber<=0.3){
    if (button.innerHTML === "rock") {
      resultSpace.innerHTML=`I choosed rock, its a draw, you:${winCounter} Com:${loseCounter}`;
    } 
    if (button.innerHTML === "paper") {
      resultSpace.innerHTML=`I choosed rock, you:${winCounter+=1} Com:${loseCounter}`;
    }
    if (button.innerHTML === "scissors") {
      resultSpace.innerHTML=`I choosed rock, you:${winCounter} Com:${loseCounter+=1}`;
    }
    }

    if (randomNumber>=0.6){
    if (button.innerHTML === "rock") {
      resultSpace.innerHTML=`I choosed paper, you:${winCounter} Com:${loseCounter+=1}`;
    } 
    if (button.innerHTML === "paper") {
      resultSpace.innerHTML=`I choosed paper, its a draw, you:${winCounter} Com:${loseCounter}`;
    }
    if (button.innerHTML === "scissors") {
      resultSpace.innerHTML=`I choosed paper, you:${winCounter+=1} Com:${loseCounter}`;
    }
    }

    if (randomNumber<0.6 && randomNumber>0.3){

    if (button.innerHTML === "rock") {
      resultSpace.innerHTML=`I choosed scissors, you:${winCounter+=1} Com:${loseCounter}`;
    } 
    if (button.innerHTML === "paper") {
      resultSpace.innerHTML=`I choosed scissors, you:${winCounter} Com:${loseCounter+=1}`;
    }
    if (button.innerHTML === "scissors") {
      resultSpace.innerHTML=`I choosed scissors so do you, its a draw, you:${winCounter} Com:${loseCounter}`;
    }
    
  }

  //checking who ever got 5 points first, and announcing whether the player won or lost
    if (winCounter===5) {
      finalResult.innerHTML="You won!";
      resultSpace.appendChild(finalResult);
      winCounter=0;
      loseCounter=0;
    }
    if (loseCounter===5) {
      finalResult.innerHTML="You lost!";
      resultSpace.appendChild(finalResult);
      winCounter=0;
      loseCounter=0;
    }

  // reset
  randomNumber=0;
  })


});

