function createIdea(){
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
}
