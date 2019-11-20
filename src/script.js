
$(function () {
  $('button')
    .first()
    .click(function () {
      var $key = '&api_key=gpGF7pIGGMBYiHBnsurbMCEPJ3coTrxL';
      var $url = 'https://api.giphy.com/v1/gifs/search?&';
      var $value = $('#value').val();
      var $numValue = parseInt($('#number-value').val());

      if ($value !== '') {
        console.log('Stevan');
        if (isNaN($numValue) || $numValue < 1) {
          alert('Please enter a number larger then 0');
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
        }
      } else {
        alert('please enter something');
      }
    });
  $('button')
    .last()
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