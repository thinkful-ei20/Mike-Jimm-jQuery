'use strict';

function fizzbuzz(n){
  if(n % 15 === 0) return 'FizzBuzz';
  if(n % 5 ===0) return 'Buzz';
  if(n % 3 ===0) return 'Fizz';
  return n;
}

function fizzbuzzer(num){
  let arr = [];
  for(let i = 1; i <= num; i++){
    arr.push(fizzbuzz(i));
  }
  return arr;
}

function fizzToHTML(fizzArray){

  return fizzArray.map(function(element){
    let fizzBuzzClass = '';
    if(typeof element === 'string') fizzBuzzClass = element;
    return `
      <div class = "fizz-buzz-item ${fizzBuzzClass}">
        <span>${element}</span>
      </div>`;
  });

}


function main(){
  $('form').on('submit', function(event){
    event.preventDefault();
    
    const numIn = $('#number-choice').val();
    
    const fizzbuzzed = fizzbuzzer(numIn); // placeHolder => [1,2,Fizz,4,Buzz,...]
    
    const htmlResult = fizzToHTML(fizzbuzzed);

    $('.js-results').html(htmlResult);

    $('#number-choice').val('');

  });


}

$(main);