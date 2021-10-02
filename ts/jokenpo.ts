const choices = ['Rock', 'Paper', 'Scissors'];
const results = ['We have ourselves a tie.', 'The CPU Wins.', 'The Player wins.'];

function enemy() {
    let randomNumber = Math.random();
    if (randomNumber < 0.3) return choices[0];
    if (randomNumber > .3 && randomNumber < .6) return choices[1];
    if (randomNumber > .6) return choices[2];
    else { return 'Wrong. Try again.'; }
}

function compareChoices(userChoice: string, cpuChoice: string) {
    let user = choices.indexOf(userChoice), enemy = choices.indexOf(cpuChoice);
    if (user === enemy) return results[0];
    if (user - 1 === enemy ) return results[2];
    if (user + 1 === enemy) return results[2];
    else { return 'What?'}
}

function jokenpo(userChoice: string) {
  let cpuChoice = enemy();
  
}


  console.log(userChoice + ' and ' + cpuChoice);
  let score = compareChoices(userChoice,cpuChoice);
  console.log(score);
}

jokenpo('Rock');
