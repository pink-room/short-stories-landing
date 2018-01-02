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

function hide() {
  $('#mce-error-response').css("display", "none");
  $('#mce-success-response').css("display", "none");
  $('#mce-error-response').html("");
  $('#mce-success-response').html("");
}
function show() {
  $('#mce-error-response').css("display", "block");
  $('#mce-success-response').css("display", "block");
}
