$(document).ready(function() {
    var slider = $('.images');
    var imgWidth = $('.grayscale').width();
    setInterval(function() {
        slider.children(':first').hide(800, function(){ slider.append($(this).show())})
    }, 1000);
});