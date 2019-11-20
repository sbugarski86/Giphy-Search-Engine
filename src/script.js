$(function () {
  $("button")
    .first()
    .click(function (e) {
      e.preventDefault()
      var $key = "&api_key=gpGF7pIGGMBYiHBnsurbMCEPJ3coTrxL";
      var $url = "https://api.giphy.com/v1/gifs/search?&";
      var $value = "q=" + $("#value").val();
      var $numValue = "&limit=" + $("#number-value").val();
      var giphySearch = $url + $value + $numValue + $key;
      $.getJSON(giphySearch)
        .done(function (result) {
          for (var i = 0; i < result.data.length; i++) {
            $("<img class='section-giphy__img'>")
              .attr("src", result.data[i].images.downsized.url)
              .appendTo("#giphy");
          }
        })
        .fail(function
          () {
          // failure
          alert("Ajax call failed.");
        });
    });
  $("button")
    .last()
    .click(function () {
      $("#giphy").empty();
    });
  $(".fa-arrow-up").hide();
  $(".fa-arrow-up").click(function () {
    $(".section-toggle__links").fadeOut(500);
    $(this).hide();
    $(".fa-bars").show(500);
  });
  $(".fa-bars").click(function () {
    $(".section-toggle__links").fadeTo(500, 1);
    $(this).hide(500);
    $(".fa-arrow-up").show(500);
  });
});
