'use strict';

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
  var countryRegion = prompt('Am I from North or South of Jordan? (y/n or yes/no)');
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
