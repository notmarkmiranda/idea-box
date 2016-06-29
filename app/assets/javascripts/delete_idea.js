function deleteIdea(){
  $('body').on('click', '.idea-delete', function(){
    var idNum = $(this).data('id')
    $.ajax({
      method: 'DELETE',
      url: '/api/v1/ideas/' + idNum,
      dataType: "JSON",
      success: removeIdea(idNum)
    })
  })
}
