function editListener(){
  $('body').on('click', '.list-group-item-heading', function(){
    this.setAttribute('contentEditable', 'true')
    var dataId = $(this).data('id')
    var id = $(this).attr('id')
    $('#' + id).on('blur keydown', function(event){
      if (event.type === 'blur' || event.keyCode === 13) {
        this.setAttribute('contentEditable', 'false')
        editIdea(dataId, this, { title: $(this).text()})
      }
    });
  });

  $('body').on('click', '.list-group-item-text', function(){
    this.setAttribute('contentEditable', 'true')
    var dataId = $(this).data('id')
    var id = $(this).attr('id')
    $('#' + id).on('blur keydown', function(event){
      if (event.type === 'blur' || event.keyCode === 13) {
        this.setAttribute('contentEditable', 'false')
        editIdea(dataId, this, { body: $(this).text()})
      }
    });
  })
}

function editIdea(id, div, updatedContent){
  $.ajax({
    method: 'PATCH',
    url: '/api/v1/ideas/' + id,
    dataType: 'JSON',
    data: updatedContent,
  })
}
