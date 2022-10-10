const user = prompt("What is your username: ");

let userpoint = 0;

let trials = 5

function guessNumber(a,b) {

    // generating a random integer from 1 to 10
    min = Math.ceil(a);
    max = Math.floor(b);
     while(trials > 1){    
    const random = Math.floor(Math.random() * (max - min) + min)
    // take input from the user
    let number = parseInt(prompt(`Guess a number from ${min} to ${max} : `));
    // take the input until the guess is correct
    while(number !== random) {
        trials -= 1;
        number = parseInt(prompt(`Guess a number from ${min} to ${max} : `));
    }
    // check if the guess is correct
    if(number == random) { 
         document.getElementById('output').innerHTML = `Hi ${user} Your guessed the correct number.`
        userpoint++;
        max++;
        number = parseInt(prompt(`${user},you won and have been awarded one point you have a total of ${userpoint},Guess a number from ${min} to ${max} to continue Playing: `));
        console.log('You guessed the correct number.');
      
    }
     }

     document.getElementById('output').innerHTML = `Hi ${user} You have ran out of guesses, total score is ${userpoint}.`
  }

// call the function
guessNumber(1,2);