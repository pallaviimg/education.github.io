$(function(){
    $("#header").load("header.html"); 
    // $("#footer").load("footer.html"); 
});

$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut('active');
    }, 1200);
});