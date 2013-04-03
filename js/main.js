$(function() {

  $('#carousel').carousel({
    interval: 10000
  });

  var menu = $('#main-menu');
  $(window).scroll(function() {
    menu.toggleClass('narrow', $(window).scrollTop() > 10);
  });

});
