$(document).ready(function(){

  $.getJSON('/api/v1/ideas').then(function(ideas){
    ideas.sort(function(x,y){
      return (y.created_at < x.created_at) ? -1 : ((y.created_at > x.created_at) ? 1 : 0);
    })

    $(ideas).each(function(index, object){

      $('.list-group').append("<div class='list-group-item' id='idea-" + index + "'> \
      <h4 class='list-group-item-heading'>" + object.title + "</h4> \
        <p class='list-group-item-text'>" + object.body + "</p> \
          <p class='list-group-item-text muted'>Quality: " + object.quality + "</p></div>")
      })
  });

});
