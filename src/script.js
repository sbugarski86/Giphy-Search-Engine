$(function () {
  $('button')
    .first()
    .click(function () {
      var $key = '&api_key=gpGF7pIGGMBYiHBnsurbMCEPJ3coTrxL';
      var $url = 'https://api.giphy.com/v1/gifs/search?&';
      var $value = $('#value').val();
      var $numValue = parseInt($('#number-value').val());

      if ($value !== '') {
        $('.section-search__alert1').hide(500);
        
        if (isNaN($numValue) || $numValue < 1) {
          $('.section-search__alert2').delay(500).show(500)
        } else {
          var giphySearch = $url + 'q=' + $value + '&limit=' + $numValue + $key;
          $.getJSON(giphySearch)
            .done(function (result) {
              for (var i = 0; i < result.data.length; i++) {
                $("<img class='section-giphy__img'>")
                  .attr('src', result.data[i].images.downsized.url)
                  .appendTo('#giphy');
              }

            })
            .fail(function () {
              // failure
              alert('Ajax call failed.');
            });
            $('.section-search__alert2').hide(500);
        }
      } else {
        $('.section-search__alert1').show(500)
      }
    });
  $('button')
    .click(function () {
      $('#giphy').empty();
    });
  $('.fa-arrow-up').hide();
  $('.fa-arrow-up').click(function () {
    $('.section-toggle__links').fadeOut(500);
    $(this).hide();
    $('.fa-bars').show(500);
  });
  $('.fa-bars').click(function () {
    $('.section-toggle__links').fadeTo(500, 1);
    $(this).hide(500);
    $('.fa-arrow-up').show(500);
  });
});
