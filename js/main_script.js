// change header image after 2 seconds
var images = ['titleWhite.jpg','titleOrange.jpg'],
    index = 0, // starting index
    maxImages = images.length - 1;
var timer = setInterval(function() {
    var currentImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    $('.nile-slider img').attr('src','assets/img/title/'+currentImage).fadeIn('slow');
}, 7500);


