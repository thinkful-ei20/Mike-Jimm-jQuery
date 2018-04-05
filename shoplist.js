'use strict';

function main(){

  // checking / unchecking items
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    
    console.log('(un)checking');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

  });

  //removing items
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){

    console.log('deleting');
    $(this).closest('li').remove();

  });

  $('#js-shopping-list-form').submit(function(event){
    
    event.preventDefault();
    console.log('adding');

    const item = $('.js-shopping-list-entry').val();

    $('ul').append(`
    <li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`);

    $('.js-shopping-list-entry').val('');
  });


}

$(main);