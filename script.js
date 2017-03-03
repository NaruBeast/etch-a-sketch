var res = 16;

$(document).ready(function(){
  makeGrid();
});

function makeGrid() {
  res = prompt("Enter pixels. eg enter 64 for  64x64");

  for(i=0; i<Math.pow(res,2); i++) {
    $('#grid').append("<div class='lolk'></div>");
  }
  $('.lolk').height(688/res);
  $('.lolk').width(1336/res);
  plot();
};

function plot(){
  $('div').mouseenter(function(){
    $(this).addClass('a');
  });
}
