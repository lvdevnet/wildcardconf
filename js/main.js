$(function() {

  $('#carousel').carousel({
    interval: 10000
  });
  $('.location .carousel').carousel({
    interval: 5000
  });

  var menu = $('#main-menu');
  $(window).scroll(function() {
    menu.toggleClass('narrow', $(window).scrollTop() > 10);
  });

});
