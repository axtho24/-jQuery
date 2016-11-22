$(function () {
    $('.subtitles ul').hide();

    $('.menu').click (function () {
      $('.items').slideUp(1000);
      $(this).find('ul').show()
  });

});
