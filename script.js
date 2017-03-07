var res = 16;
var clickCheck = 0;

$(document).ready(function(){
  makeGrid();
  $('div').click(function(){
    stopGrid();
  });
});

function makeGrid() {

  for(i=0; i<Math.pow(res,2); i++) {
    $('.grid').append("<div class='lolk'></div>");
  }
  $('.lolk').height(500/res);
  $('.lolk').width(800/res);
  plot();
};

function plot(){
  if(clickCheck === 0) {
    return;
  }
  else {
  $('div').mouseenter(function(){
    $(this).addClass('a');
  });
}
}

function pixelCount() {
  res = prompt("Enter pixels. eg enter 64 for 64x64");
  makeGrid();
}


  $('.grid').click(function(){
    if(clickCheck===0){
      clickCheck = 1;
      plot();
    }
    else {
      clickCheck = 0;
    }
  });


/*$('.lolk').width($('.grid').width()/res);
$('.lolk').height($('.grid > div').width()/res);*/
