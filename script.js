var i;
var res = 48;
var gridElement = $('.grid');
var gridDiv = $('.grid > div');
var clickFlag = 0;
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
		if(clickFlag===0) {
			return;
		}
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

$('.grid').click(function() {
	if(clickFlag===0) {
		clickFlag = 1;
	}
	else {
		clickFlag = 0;
	}
});
