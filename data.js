
var albumOne = [   //This one goes into the album
  {
    name: "UnderConstruction",
    title: "Do You like Exploding Ships?",
    image: "Pictures/Background.jpg",
  }
];

var newOneArray=  [        //This will go into for the gallery
  {
  title: "Steamy Ships",
  image: "Pictures/steamy.jpg"
  }
];

var selectedAlbum;

var albumsPics = {
  newOne: newOneArray
}

$('.albumGallery').on('click', '.imgDiv', function(event){
  event.preventDefault;
  selectedAlbum = albumPics[$(this).attr('data-name')]
  var imgString = "";
  selectedAlbum.forEach(function(el){
    imgString += compiledTmpl(el);
  });
  $('.imageGallery').append(imgString);
});
var mytempl = [
"<div class ='col-xs-12 col-md-12 col-lg-12' data-name='<% name %>'>",
"<img class = 'imageCover' src='<%= image%>'>",
"<h3 class ='caption'><%= title %></h3>",
"</div>"


].join("");

var compiledTmp = _.template(mytempl);

var albString="";

albumOne.forEach(function(el){
  albString += compiledTmp(el);
});

$('.albumGallery').append(albString);
