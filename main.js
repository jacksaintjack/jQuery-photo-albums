$(document).ready(function() {

  $('#landingPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });

  $('#fishPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });

  $('#japanPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });

  $('#ziltoidPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });

  $('#birdPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });

  $('#oldPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });

  $('#wierdPage').on('click', 'a', function (event) {
    event.preventDefault();
    console.log("this element ",$(this).attr('rel'));
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });




});
