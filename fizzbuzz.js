'use strict';

function fizzBuzz(number){
  if (number % 15 === 0) {
    return 'fizzbuzz';
  }
  else if (number % 5 === 0) {
    return 'buzz';
  }
  else if (number % 3 === 0) {
    return 'fizz'; 
  }
  else return number; 
}

function makeArray(number){
  let newArray = [];
  for(let i = 0; i <= number; i++) { 
    newArray.push(fizzBuzz(i)); } 
  return newArray;
}


function resultsToHtml(fizzResults) {
  return fizzResults.map(result => {
    let fizzBuzzClass;
    if (typeof result === 'string'){
      fizzBuzzClass = result; 
    }
    return `<div class="fizz-buzz-item ${fizzBuzzClass}">
        <span>${result}</span>
      </div>
      `;
  }); 
}

function main() {
  $('form').on('submit', function(event){
    event.preventDefault();
    const number = $('#number-choice').val();
    const fizzResults = makeArray(number);
    // should make [1, 2, 'fizz' e.g.]
    const html = resultsToHtml(fizzResults);
    $('.js-results').html(html);
    $('#number-choice').val('');
  }); 
}

$(main);
