function voteListener(){
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
