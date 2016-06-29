function loadIdeas(){
  $.getJSON('/api/v1/ideas').then(function(ideas){

    ideas.sort(function(x,y){
      return (y.created_at < x.created_at) ? -1 : ((y.created_at > x.created_at) ? 1 : 0);
    });

    $(ideas).each(function(index, idea){
      $('.list-group').append(returnIdeas(idea))
      });
  });
}

function truncateBody(body){
  if (body.length <= 100){
    return body
  } else if (body.charAt(100) === ' '){
    return body.substring(0, [100]) + '...'
  } else {
    var short = body.substring(0, [100]);
		var arr = short.split(" ");
		arr.pop();
		return arr.join(" ") + "..."
  }
}

function returnIdeas(idea){

  var shortBody = truncateBody(idea.body)
  return "<div class='list-group-item' id='idea-" + idea.id + "'> \
            <h4 class='list-group-item-heading' id='title-" + idea.id + "' data-id='" + idea.id + "'>" + idea.title + "</h4> \
            <p class='list-group-item-text body' id='body-" + idea.id + "' data-id='" + idea.id + "'>" + shortBody + "</p> \
            <p class='list-group-item-text tags' id='tag-" +  + "'></p> \
            <p id='idea-quality-" + idea.id + "' class='list-group-item-text muted'>Quality: <span>" + idea.quality + "</span></p> \
            <i class='fa fa-thumbs-up' aria-hidden='true' data-id=" + idea.id + "></i> \
            <i class='fa fa-thumbs-down' aria-hidden='true' data-id=" + idea.id + "></i> \
            <span class='idea-delete' data-id=" + idea.id + ">&times;</span> \
          </div>"
}
