 function jokenpo(userChoice) {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const possibility = ['We have ourselves a tie.', 'The CPU Wins.', 'The Player wins.'];
  function enemy() {
      let randomNumber = Math.random();
      if (randomNumber < 0.3) return choice[0];
      if (randomNumber > .3 && randomNumber < .6) return choice[1];
      if (randomNumber > .6) return choice[2];
      return 'Wrong. Try again.';
  }
  let cpuChoice = enemy();
  function compareChoices(userChoice, cpuChoice) {
      if (userChoice === cpuChoice) return possibility[0];
      if (userChoice === 'Rock' && cpuChoice === 'Paper') return possibility [1];
      if (userChoice === 'Paper' && cpuChoice === 'Scissors') return possibility [1];
      if (userChoice === 'Scissors' && cpuChoice === 'Rock') return possibility [1];
      if (userChoice === 'Rock' && cpuChoice === 'Scissors') return possibility [2];
      if (userChoice === 'Scissors' && cpuChoice === 'Paper')  return possibility [2];
      if (userChoice === 'Paper' && cpuChoice === 'Rock')  return possibility [2];
    }
  console.log(userChoice + cpuChoice);
  document.getElementById('results').innerHTML = compareChoices(userChoice,cpuChoice);
}
