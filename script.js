$(document).ready(function(){
  var url = 'https://newsapi.org/v1/sources';
  var data = {language:"en", country:"us"};
  $.ajax({
    url: url,
    data: data,
    type: "GET",
    success: function(response){
    //   console.log(response);
    //   console.log(response.sources[6]);
      var sources = response.sources;
    //   console.log(sources[6]);
    var html = "<select class='form-control' id='source'>";
      $.each(sources, function(index, source){
          console.log(source);
          html += "<option>" + source.name + "</option>"
      })
      html += "</select>";
      $(".form-group").html(html);
    }
  })
})
