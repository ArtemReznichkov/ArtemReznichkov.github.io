$(document).ready(function() {
    var quotes = $('.quotes-carousel');
    $('.quotes-wraper').eq(0).css('display','block');
    for (var i = 0; i < quotes.children().length; i++) {
        $('.quotes-autor').append('<li><a data-number = "' + i + '">' +
        '<i class="fa fa-square"></i></a></li>');
        $('.quotes-autor a').eq(0).addClass('active');
    }
    $('.quotes-autor a').click(function() {
        var index = $(this).attr('data-number');
        $('.quotes-autor a').removeClass('active');
        $(this).addClass('active');
        $('.quotes-wraper').hide();
        $('.quotes-wraper').eq(index).show('slow');
        
    })
})