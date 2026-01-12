const inputElement = document.getElementById('userInput');
const resultSection = document.getElementById('result');

let player = inputElement.value;

function whoWins() {
  let computer = Math.floor(Math.random() * 3);
  console.log("hello")

  if (player == "rock"){
    if (computer == 0){
      resultSection.innerHTML = 
      `
      <div>
       <p> Played picked: Rock </p>
        <p> Computer picked Rock </p>
        <p> The result: Tie! </p>
      </div>
      `
    } else if (computer == 1){
      resultSection.innerHTML = 
      `
      <div>
        <p> Played picked: Rock </p>
        <p> Computer picked Paper </p>
        <p> The result: Computer won! </p>
      </div>
      `
    } else if (computer == 2){
      resultSection.innerHTML = 
      `
      <div>
        <p> Played picked: Rock </p>
        <p> Computer picked Scissors </p>
        <p> The result: Player won! </p>
      </div>
      `
    }
  } else if (player == "paper"){
    if (computer == 0){
      resultSection.innerHTML = 
      `
      <p> Played picked: Paper </p>
      <p> Computer picked Rock </p>
      <p> The result: Player won! </p>
      `
    } else if (computer == 1){
      resultSection.innerHTML = 
      `
      <p> Played picked: Paper </p>
      <p> Computer picked Paper </p>
      <p> The result: Tie! </p>
      `
    } else if (computer == 2){
      resultSection.innerHTML = 
      `
      <p> Played picked: Paper </p>
      <p> Computer picked Scissors </p>
      <p> The result: Compute won! </p>
      `
    }
  } else if (player == "scissors") {
    if (computer == 0){
      resultSection.innerHTML = 
      `
      <p> Played picked: Scissors </p>
      <p> Computer picked Rock </p>
      <p> The result: Computer won! </p>
      `
    } else if (computer == 1){
      resultSection.innerHTML = 
      `
      <p> Played picked: Scissors </p>
      <p> Computer picked Paper </p>
      <p> The result: Player won! </p>
      `
    } else if (computer == 2){
      resultSection.innerHTML = 
      `
      <p> Played picked: Scissors </p>
      <p> Computer picked Scissors </p>
      <p> The result: Tie! </p>
      `
    }
  } else{
    resultSection.innerHTML = 
      `
      <p> Not valid input. Please choose one of rock, paper, scissor. </p>
      `
  } 
}