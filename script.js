
let resultSpace = document.getElementsByTagName("h1")[0];
let gameButtons = document.querySelectorAll("#gameButton");
let winCounter=0;

Array.from(gameButtons).forEach(button=>{
  button.addEventListener('click', () => {

  let randomNumber= Math.random();

  if (randomNumber<=0.3){
    if (button.innerHTML === "rock") {
      resultSpace.innerHTML="I choosed rock so do you, its a draw";
    } 
    if (button.innerHTML === "paper") {
      winCounter+=1
      resultSpace.innerHTML="I choosed rock, you won  "+`${winCounter}`;
    }
    if (button.innerHTML === "cisors") {
      resultSpace.innerHTML="I choosed rock, you lost";
    }
    }


    if (randomNumber>=0.6){
    if (button.innerHTML === "rock") {
      resultSpace.innerHTML="I choosed paper, you lost";
    } 
    if (button.innerHTML === "paper") {
      resultSpace.innerHTML="I choosed paper so do you, its a draw";
    }
    if (button.innerHTML === "cisors") {
      winCounter+=1
      resultSpace.innerHTML="I choosed paper, you won  "+`${winCounter}`;
    }
    }


    if (randomNumber<0.6 && randomNumber>0.3){

    if (button.innerHTML === "rock") {
      winCounter+=1
      resultSpace.innerHTML="I choosed cisors, you won  "+`${winCounter}`;
    } 
    if (button.innerHTML === "paper") {
      resultSpace.innerHTML="I choosed cisors, you lost";
    }
    if (button.innerHTML === "cisors") {
      resultSpace.innerHTML="I choosed cisors so do you, its a draw";
    }
    
  }

// reset
  randomNumber=0;

  })
});
