'use strict';

// LAB-03 instruction Check list
// [x] Modify README
// [x] Top Ten <ol>
// [x] exp. edu. <ul>
/* 6th Question
    [x] numeric input to guess a number
    [x] alert too high or too low
    [x] 4 attempt allowed
    [x] alert the courrect answer
*/
/* 7th Question
    [x] array of correct answers
    [x] 6 attempt to guess
    [x] alert the array
 */
// [x] alert a final score of correct answer
// [x] add some style
// [x] use console.log to keep track of questions
/* Stretch Goals

    [x] but the question and answers and loop through them
    [] generate a random numbers as your correct answer
*/


function aboutMeQuiz() {
  var userScore = 0;
  var questionArray = ['Am I a Male? (y/n or yes/no)',
    'Am I from North of Jordan? (y/n or yes/no)',
    'Am I from Al-Karak city? (y/n or yes/no)',
    'Do I have a Bachelor Degree in Chemistry? (y/n or yes/no)',
    'Do you think my name is Omar Tarawneh? (y/n or yes/no)'
  ];
  var questionAns1 = ['yes', 'no', 'yes', 'yes', 'yes'];
  var questionAns2 = ['y', 'n', 'y', 'y', 'y'];
  // loob through the question and the answers
  for (let i = 0; i < questionArray.length; i++) {
    var userAns = prompt(questionArray[i]).toLowerCase();
    while(userAns !== 'yes' && userAns !== 'no' && userAns !== 'y' && userAns !== 'n'){
      userAns = prompt(questionArray[i]).toLowerCase();
    }
      if (userAns === questionAns1[i] || userAns === questionAns2[i]) {
        // console.log('Correct');
        alert('Correct');
        userScore += 1;
      }
       else {
        // console.log('No, you are not Correct.');
        alert('No, you are not Correct.');
      }
  }
  return userScore;
}
// nested array


function questionNumSix() {
  var correctAns = 7;
  var userScore = 0;
  for (let i = 0; i < 4; i++) {
    var userGuess = parseInt(prompt('Try to guess a number from 1 to 20: you have 4 attempts '));
    if (userGuess > correctAns) {
      // console.log('Too High');
      alert('Too High');
    } else if (userGuess < correctAns) {
      // console.log('Too Low');
      alert('Too low');
    } else if (userGuess === correctAns) {
      // console.log('That\'s Correct');
      alert('That\'s Correct');
      userScore += 1;
      break;
    }
  }
  // console.log(correctAns);
  alert('The correct answer is: ' + correctAns);
  return userScore;
}
//alert(questionNumSix());
// console.log(questionNumSix());

function questionNumSeven() {
  var userScore = 0;
  var correctAns = [20, 24, 44, 7, 10, 11, 99, 83, 27, 51];
  for (let i = 0; i < 6; i++) {
    var userGuess = parseInt(prompt('Try to guess a number from 0 to 100: you have 6 attempt'));
    // loob through the array to check the answer
    for (let j = 0; j < correctAns.length; j++) {
      if (userGuess === correctAns[j]) {
        // console.log('That is Correct');
        alert('That is Correct');
        userScore += 1;
        break;
        // i = 6;
      }
    }
    // To break the outer loob
    if (userScore >= 1) {
      break;
    }
  }
  // console.log(correctAns);
  alert('The correct answers are: ' + correctAns);
  return userScore;
}


var userName = prompt('So can you tell me your name please?');
alert('Hello and welcome ' + userName + ' to my web page here is some stuff about me');
// console.log(questionNumSix() + questionNumSeven());
alert('you final score is: ' + (aboutMeQuiz() + questionNumSix() + questionNumSeven()) + ' out of 7');
