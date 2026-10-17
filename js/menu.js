$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.menu').addClass('active');
        } else {
            $('.menu').removeClass('active');
        } 
      
    });
});
//メニュー内を閉じておく
$(function() {
    $('.menu a[href]').click(function() {
        $('.menu').removeClass('active');
       $('.hamburger').removeClass('active');

    });
  });