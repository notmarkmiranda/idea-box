function searchBox(){
  $('.search-box').on('keyup', function(){
    dataSearchTerms();
    var searchTerm = $(this).val().toLowerCase();
    $('.list-group div').each(function(){
      if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1){
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  })
}


function dataSearchTerms(){
  $('.list-group div h4').each(function(){
    $(this).parent().attr('data-search-term', $(this).text().toLowerCase());
  })

  $('.list-group div p.body').each(function(){
    $(this).parent().attr('data-search-term', $(this).parent().attr('data-search-term') + " " + $(this).text().toLowerCase());
  })
}
