$(document).ready(function(){
  loadIdeas();
  createIdea();
  deleteIdea();
  dataSearchTerms();


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

  $('body').on('click', '.fa-thumbs-up',function(){
    var idNum = $(this).data('id')
    $.ajax({
      method: 'PATCH',
      url: '/api/v1/ideas/' + idNum,
      dataType: "JSON",
      data: {qualityUpdate: "1"},
      success: upVote(idNum)
    })
  });

  $('body').on('click', '.fa-thumbs-down',function(){
    var idNum = $(this).data('id')
    $.ajax({
      method: 'PATCH',
      url: '/api/v1/ideas/' + idNum,
      dataType: "JSON",
      data: {qualityUpdate: "-1"},
      success: downVote(idNum)
    })
  });

});


function editIdea(id, div, updatedContent){
  $.ajax({
    method: 'PATCH',
    url: '/api/v1/ideas/' + id,
    dataType: 'JSON',
    data: updatedContent,
  })
}

function upVote(id){
  var divId = $('#idea-quality-' + id)
  var og = divId.children('span').text()
  var newHash = {"swill": "plausible",
                 "plausible": "genius",
                 "genius": "genius"}
  var replacement = newHash[og]
  divId.children('span').text(replacement)
}

function downVote(id){
  var divId = $('#idea-quality-' + id)
  var og = divId.children('span').text()
  var newHash = {"swill": "swill",
                 "plausible": "swill",
                 "genius": "plausible"}
  var replacement = newHash[og]
  divId.children('span').text(replacement)
}

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
            <h4 class='list-group-item-heading' id='title-" + idea.id + "' data-id='" + idea.id + "'>" + idea.title + "</h4> \
            <p class='list-group-item-text body' id='body-" + idea.id + "' data-id='" + idea.id + "'>" + idea.body + "</p> \
            <p id='idea-quality-" + idea.id + "' class='list-group-item-text muted'>Quality: <span>" + idea.quality + "</span></p> \
            <i class='fa fa-thumbs-up' aria-hidden='true' data-id=" + idea.id + "></i> \
            <i class='fa fa-thumbs-down' aria-hidden='true' data-id=" + idea.id + "></i> \
            <span class='idea-delete' data-id=" + idea.id + ">&times;</span> \
          </div>"
}

function dataSearchTerms(){
  $('.list-group div h4').each(function(){
    $(this).parent().attr('data-search-term', $(this).text().toLowerCase());
  })

  $('.list-group div p.body').each(function(){
    $(this).parent().attr('data-search-term', $(this).parent().attr('data-search-term') + " " + $(this).text().toLowerCase());
  })
}
