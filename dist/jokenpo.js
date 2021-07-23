function jokenpo(userChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const results = ['We have ourselves a tie.', 'The CPU Wins.', 'The Player wins.'];
    function enemy() {
        let randomNumber = Math.random();
        if (randomNumber < 0.3)
            return choices[0];
        if (randomNumber > .3 && randomNumber < .6)
            return choices[1];
        if (randomNumber > .6)
            return choices[2];
        else {
            return 'Wrong. Try again.';
        }
    }
    let cpuChoice = enemy();
    function compareChoices(userChoice, cpuChoice) {
        if (userChoice === cpuChoice)
            return results[0];
        if (userChoice === 'Rock' && cpuChoice === 'Paper')
            return results[1];
        if (userChoice === 'Paper' && cpuChoice === 'Scissors')
            return results[1];
        if (userChoice === 'Scissors' && cpuChoice === 'Rock')
            return results[1];
        if (userChoice === 'Rock' && cpuChoice === 'Scissors')
            return results[2];
        if (userChoice === 'Scissors' && cpuChoice === 'Paper')
            return results[2];
        if (userChoice === 'Paper' && cpuChoice === 'Rock')
            return results[2];
    }
    console.log(userChoice + ' and ' + cpuChoice);
    let score = compareChoices(userChoice, cpuChoice);
    console.log(score);
}
jokenpo('Rock');
