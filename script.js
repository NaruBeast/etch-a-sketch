var res = 16;

$(document).ready(function(){
  makeGrid();
});

function makeGrid() {
  for(i=0; i<256; i++) {
    $('#grid').append("<div class='lolk'></div>");
  }
  plot();
};

function plot(){
  $('div').mouseenter(function(){
    $(this).addClass('a');
  });
}
