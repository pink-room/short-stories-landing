var scroll = $('#phone-trigger').offset().top;
var about = $('#about').offset().top;
//console.log(scroll);

$( window ).scroll(function() {
  var view = $(window).scrollTop() + $(window).height();
  //console.log(view);

  if(view > scroll) {
    $(".section-left-overlay").addClass("active");
    $(".section-right").addClass("active");
  }
  if(view > about) {
    $("#about").addClass("active");
  }
});



window.onload = function () {

	var parallaxBox = document.getElementById ( 'box' );
	var c1left = document.getElementById ( 'l1' ).offsetLeft,
	c1top = document.getElementById ( 'l1' ).offsetTop,
	c2left = document.getElementById ( 'l2' ).offsetLeft,
	c2top = document.getElementById ( 'l2' ).offsetTop,
	c3left = document.getElementById ( 'l3' ).offsetLeft,
	c3top = document.getElementById ( 'l3' ).offsetTop,
	c4left = document.getElementById ( 'l4' ).offsetLeft,
	c4top = document.getElementById ( 'l4' ).offsetTop;

	window.onmousemove = function ( event ) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft;
		var y = event.clientY - parallaxBox.offsetTop;

		mouseParallax ( 'l1', c1left, c1top, x, y, 10 );
		mouseParallax ( 'l2', c2left, c2top, x, y, 30 );
		mouseParallax ( 'l3', c3left, c3top, x, y, 50 );
		mouseParallax ( 'l4', c4left, c4top, x, y, 70 );
	}

}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}

var offsetW = $('#box').width() + $(window).width()/8;
var minW = - $('#box').width()/8;
var offsetH = $('#box').height() + $(window).height()/4;
var minH = - $('#box').height()/2;

for(var i=1; i<5; i++) {
  for(var j=1; j<5; j++) {
    var phoneClass = "#l" + i + " ._" + j;
    //console.log(phoneClass);
    var randomX = Math.floor(Math.random() * (offsetW - minW + 1)) + minW;
    var randomY = Math.floor(Math.random() * (offsetH - minW + 1)) + minH;
    //console.log(randomX);
    $(phoneClass).css({
     transform: 'translateX(' + randomX + 'px) translateY(' + randomY + 'px)'
    })
  }
}
