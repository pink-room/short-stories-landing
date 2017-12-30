var scroll = $('#phone-trigger').offset().top;
var about = $('#about').offset().top;
//console.log(scroll);

$( window ).scroll(function() {
  var view = $(window).scrollTop() + $(window).height();
  console.log(view);

  if(view > scroll) {
    $(".section-left-overlay").addClass("active");
    $(".section-right").addClass("active");
  }
  if(view > about) {
    $("#about").addClass("active");
  }
});
