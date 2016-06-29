function createIdea(){
  $('#create-idea').on('click', function(){
    var ideaTitle = $('#idea-title').val();
    var ideaBody = $('#idea-body').val();
    var ideaTags = $('#idea-tags').val();
    var ideaData = { title: ideaTitle, body: ideaBody, tags: ideaTags }
    debugger
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
}

function resetForm(){
  $('#idea-title').val('')
  $('#idea-body').val('');
  $('#idea-tags').val('');
}

function prependIdea(idea){
  $('.list-group').prepend(returnIdeas(idea))
}
