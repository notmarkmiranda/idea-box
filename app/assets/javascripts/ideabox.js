$(document).ready(function(){
  loadIdeas();

  $('#create-idea').on('click', function(){
    var ideaTitle = $('#idea-title').val();
    var ideaBody = $('#idea-body').val();
    var ideaData = { title: ideaTitle, body: ideaBody }
    $.ajax({
      method: 'POST',
      url: '/api/v1/ideas',
      dataType: "JSON",
      data: ideaData,
      success: function(idea) {
        resetForm();
        prependIdea(idea);
      }
    })
  })

  $('body').on('click', '.idea-delete', function(){
    var idNum = $(this).data('id')
    $.ajax({
      method: 'DELETE',
      url: '/api/v1/ideas/' + idNum,
      dataType: "JSON",
      success: removeIdea(idNum)
    })
  })
});

function resetForm(){
  $('#idea-title').val('')
  $('#idea-body').val('');
}

function removeIdea(idNum){
  $('#idea-' + idNum).remove();
}

function prependIdea(idea){
  $('.list-group').prepend(returnIdeas(idea))
}
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

function returnIdeas(idea){
  return "<div class='list-group-item' id='idea-" + idea.id + "'> \
            <h4 class='list-group-item-heading'>" + idea.title + "</h4> \
            <p class='list-group-item-text'>" + idea.body + "</p> \
            <p class='list-group-item-text muted'>Quality: " + idea.quality + "</p> \
            <i class='fa fa-thumbs-up' aria-hidden='true'></i> \
            <span class='idea-delete' data-id=" + idea.id + ">&times;</span> \
          </div>"
}
