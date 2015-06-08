$(document).ready(function() {

  var pageHandler = function(event){
    console.log("this element ",$(this).attr('rel'));
    event.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  };

  $('#landingPage').on('click', 'a', pageHandler);
  $('#fishPage').on('click', 'a', pageHandler);
  $('#japanPage').on('click', 'a', pageHandler);
  $('#ziltoidPage').on('click', 'a', pageHandler);
  $('#birdPage').on('click', 'a', pageHandler);
  $('#oldPage').on('click', 'a', pageHandler);
  $('#wierdPage').on('click', 'a', pageHandler);

  //For boat Selection//
  $('#shipsPage').on('click', 'a', pageHandler);
  $('#shipsPageTwo').on('click', 'a', pageHandler)

  //For the Fish Selection//
  $('#pictureOne').on('click', 'a', pageHandler);
  $('#pictureTwo').on('click', 'a', pageHandler);
  $('#pictureThree').on('click', 'a', pageHandler);
  $('#pictureFour').on('click', 'a', pageHandler);
  $('#pictureFive').on('click', 'a', pageHandler);
  $('#pictureSix').on('click', 'a', pageHandler);

  //For the Japan Selection//
  $('#pictureOneJapan').on('click', 'a', pageHandler);
  $('#pictureTwoJapan').on('click', 'a', pageHandler);
  $('#pictureThreeJapan').on('click', 'a', pageHandler);
  $('#pictureFourJapan').on('click', 'a', pageHandler);
  $('#pictureFiveJapan').on('click', 'a', pageHandler);
  $('#pictureSixJapan').on('click', 'a', pageHandler);

  //Ziltoid Selection//
  $('#pictureOneZiltoid').on('click', 'a', pageHandler);
  $('#pictureTwoZiltoid').on('click', 'a', pageHandler);
  $('#pictureThreeZiltoid').on('click', 'a', pageHandler);
  $('#pictureFourZiltoid').on('click', 'a', pageHandler);
  $('#pictureFiveZiltoid').on('click', 'a', pageHandler);
  $('#pictureSixZiltoid').on('click', 'a', pageHandler);

  //Bird Selection//
  $('#pictureOneBird').on('click', 'a', pageHandler);
  $('#pictureTwoBird').on('click', 'a', pageHandler);
  $('#pictureThreeBird').on('click', 'a', pageHandler);
  $('#pictureFourBird').on('click', 'a', pageHandler);
  $('#pictureFiveBird').on('click', 'a', pageHandler);
  $('#pictureSixBird').on('click', 'a', pageHandler);

  //Section for in largment of Old Pictures//
  $('#pictureOneOld').on('click', 'a', pageHandler);
  $('#pictureTwoOld').on('click', 'a', pageHandler);
  $('#pictureThreeOld').on('click', 'a', pageHandler);
  $('#pictureFourOld').on('click', 'a', pageHandler);
  $('#pictureFiveOld').on('click', 'a', pageHandler);
  $('#pictureSixOld').on('click', 'a', pageHandler);
//Section for Wierd Inlargement//
  $('#pictureOneWierd').on('click', 'a', pageHandler);
  $('#pictureTwoWierd').on('click', 'a', pageHandler);
  $('#pictureThreeWierd').on('click', 'a', pageHandler);
  $('#pictureFourWierd').on('click', 'a', pageHandler);
  $('#pictureFiveWierd').on('click', 'a', pageHandler);
  $('#pictureSixWierd').on('click', 'a', pageHandler);

});
