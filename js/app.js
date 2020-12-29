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

/*[] Stretch Goals
    [] but the question and answers and loop through them
    [] generate a random numbers as your correct answer
*/

// Welcome Message
alert('Welcome to About Me page, lets take quiz to see if you can guess who am I');

// First Question
function firstQuestion(){
  var gender = prompt('Am I a Male or Female? (y/n or yes/no)');
  // Make sure the answer is lower case
  gender = gender.toLowerCase();
  if (gender === 'yes' || gender === 'y'){
    //console.log('yes you are correct');
    alert('yes you are correct');
  }else if (gender === 'no' || gender === 'n'){
    //console.log('NO, I\'m a Male actually');
    alert('NO, I\'m a Male actually');
  }else {
    //console.log('Please answer with y/n or yes/no');
    alert('Please answer with y/n or yes/no');
    firstQuestion();
  }
}
firstQuestion();


// Second Question
function secondQuestion(){
  var countryRegion = prompt('Am I from South of Jordan? (y/n or yes/no)');
  // Make sure the answer is lower case
  countryRegion = countryRegion.toLowerCase();
  if (countryRegion === 'yes' || countryRegion === 'y'){
    // console.log('Yes, I\'m from south of Jordan');
    alert('Yes, I\'m from south of Jordan');
  }else if (countryRegion === 'no' || countryRegion === 'n'){
    //console.log('NO, I\'m from the South actully');
    alert('NO, I\'m from the South actully');
  }else {
    //console.log('Please answer with y/n or yes/no');
    alert('Please answer with y/n or yes/no');
    secondQuestion();
  }
}
secondQuestion();

// Third Question
function thirdQuestion(){
  var city = prompt('Am I from Al-Karak city? (y/n or yes/no)');
  // Make sure the answer is lower case
  city = city.toLowerCase();
  if (city === 'yes' || city === 'y'){
    // console.log('Yes, I\'m from Al-Karak city');
    alert('Yes, I\'m from Al-Karak city');
  }else if (city === 'no' || city === 'n'){
    // console.log('NO, I\'m from Al-Karak actully');
    alert('NO, I\'m from Al-Karak actully');
  }else {
    // console.log('Please answer with y/n or yes/no');
    alert('Please answer with y/n or yes/no');
    thirdQuestion();
  }
}
thirdQuestion();

// Fourth Question
function fourthQuestion(){
  var bachelorDegree = prompt('Do I have a Bachelor Degree in Chemistry? (y/n or yes/no)');
  // Make sure the answer is lower case
  bachelorDegree = bachelorDegree.toLowerCase();
  if (bachelorDegree === 'yes' || bachelorDegree === 'y'){
    // console.log('Yes, Great');
    alert('yes, Great');
  }else if (bachelorDegree === 'no' || bachelorDegree === 'n'){
    // console.log('Actually I have a bachelor Degree in Chemistry');
    alert('Actually I have a bachelor Degree in Chemistry');
  }else {
    // console.log('Please answer with y/n or yes/no');
    alert('Please answer with y/n or yes/no');
    fourthQuestion();
  }
}
fourthQuestion();


// Fifth Question
function fifthQuestion(){
  var myName = prompt('Do you think my name is Omar Tarawneh? (y/n or yes/no)');
  myName = myName.toLowerCase();

  if (myName === 'yes' || myName === 'y'){
    // console.log('Yes, you guess it right my Name is Omar');
    alert('Yes, you guess it right my Name is Omar');
  }else if (myName === 'no' || myName === 'n'){
    // console.log('Actually My Name is Omar Tarawneh');
    alert('Actually My Name is Omar Tarawneh');
  }else {
    // console.log('Please answer with y/n or yes/no');
    alert('Please answer with y/n or yes/no');
    fifthQuestion();
  }
}
fifthQuestion();

// user welcoming by their name
var userName = prompt('So can you tell me your name please?');
alert('Hello and welcome ' + userName + ' to my web page here is some stuff about me');




function questionNumSix(){
  var correctAns = 7;
  var userScore = 0;
  for(let i = 0; i < 4; i++){
    var userGuess = parseInt(prompt('Try to guess a number from 1 to 20: you have 4 attempts '));
    if (userGuess > correctAns){
      // console.log('Too High');
      alert('Too High');
    }else if (userGuess < correctAns){
      // console.log('Too Low');
      alert('Too low');
    }else if ( userGuess === correctAns){
      // console.log('That\'s Correct');
      alert('That\'s Correct');
      userScore += 1;
    }
  }
  // console.log(correctAns);
  alert('The correct answer is: ' + correctAns);
  return userScore;
}
//alert(questionNumSix());
// console.log(questionNumSix());

function questionNumSeven(){
  var userScore = 0;
  var correctAns = [20, 24, 44, 7, 10, 11, 99, 83, 27, 51];
  for (let i = 0; i < 6; i++){
    var userGuess = parseInt(prompt('Try to guess a number from 0 to 100: you have 6 attempt'));
    // loob through the array to check the answer
    for (let j = 0; j < correctAns.length; j++){
      if (userGuess === correctAns[j]){
        // console.log('That is Correct');
        alert('That is Correct');
        userScore += 1;
      }
    }
  }
  // console.log(correctAns);
  alert('The correct answers are: ' + correctAns);
  return userScore;
}
// console.log(questionNumSix() + questionNumSeven());
alert('you final score is: ' + (questionNumSix() + questionNumSeven()));























