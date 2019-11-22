$(function() {
  $('.js--button').click(function(e) {
    e.preventDefault();
    var key = '&api_key=gpGF7pIGGMBYiHBnsurbMCEPJ3coTrxL';
    var url = 'https://api.giphy.com/v1/gifs/search?&';
    var value = encodeURIComponent($('#value').val());
    var numValue = encodeURIComponent(parseInt($('#number-value').val()));
    var a = '';

    if (value) {
      $('.js--alert1').hide(500);

      if (isNaN($numValue) || numValue < 1) {
        $('.js--alert2')
          .delay(500)
          .show(500);
      } else {
        var giphySearch = url + 'q=' + value + '&limit=' + numValue + key;
        $.getJSON(giphySearch)
          .done(function(result) {
            for (var i = 0; i < result.data.length; i++) {
              $("<img class='section-giphy__img' alt='giphy image'>")
                .attr('src', result.data[i].images.downsized.url)
                .appendTo('#giphy');
            }
          })
          .fail(function() {
            // failure
            alert('Ajax call failed.');
          });
        $('.js--alert2').hide(500);
      }
    } else {
      $('.js--alert1').show(500);
    }
  });

  $('.fa-arrow-up').hide();
  $('.fa-arrow-up').click(function() {
    $('.section-toggle__links').fadeOut(500);
    $(this).hide();
    $('.fa-bars').show(500);
  });
  $('.fa-bars').click(function() {
    $('.section-toggle__links').fadeTo(500, 1);
    $(this).hide(500);
    $('.fa-arrow-up').show(500);
  });
});
