'use strict';

function handler(){
  $('img').click(function(event) {
    let imgSrc = $(this).attr('src');
    let imgDescrip = $(this).attr('alt');
    $('.top').attr('src', imgSrc);
    console.log(imgDescrip);
  });
}

$(handler);