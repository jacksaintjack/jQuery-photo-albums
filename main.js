$(document).ready(function() {

  $('#landingPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });
  



});
