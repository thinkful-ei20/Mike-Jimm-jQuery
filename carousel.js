'use strict';

function handler(){
  $('img').click(function(event) {
    let imgSrc = $(this).attr('src');
    let imgDescrip = $(this).attr('alt');
    $('.hero').find('img').attr('src', imgSrc);
    console.log(imgDescrip);
  });
}

$(handler);