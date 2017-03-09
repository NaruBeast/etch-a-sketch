var i;
var res = 48;
var gridElement = $('.grid');
var gridDiv = $('.grid > div');
$(document).ready(function(){
	drawGrid();
});

function drawGrid() {

	for(i=0; i<Math.pow(res,2); i++) {
		$(gridElement).append("<div class='lolk'></div>");
	}
	$('.grid > div').width($('.grid').width()/res);
	$('.grid > div').height($('.grid>div').width());
	plot();
}

function plot() {
	$('.grid > div').mouseenter(function(e){
		console.log("cjksadnckjsdc");
		$(e.currentTarget).addClass('a');
	});
}

function clearGrid() {
	$('.grid > div').removeClass('a');
}

function pixelDraw() {
	res = prompt("Enter resolution eg. 64 for 64x64 (max. 128)");
	//clearGrid();
	$('.grid').empty(); //removes all child elements of '.grid'
	drawGrid();
}
