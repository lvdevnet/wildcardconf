$(function() {

  $('#carousel').carousel({
    interval: 10000
  });
  $('.location .carousel').each(function(i) {
    var el = $(this);
    setTimeout(function() {
      el.carousel({
        interval: 5000
      });
    }, i * 1000);
  });

  var menu = $('#main-menu');
  $(window).scroll(function() {
    menu.toggleClass('narrow', $(window).scrollTop() > 10);
  });

});
