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
      // console.log(sources[6]);
      var html = "<select class='form-control' id='sourceOption'>";
      $.each(sources, function(index, source){
          html += "<option value='" + source.id + "'>" + source.name +  "</option>"
      })
      html += "</select>";
      // console.log(html)
      $(".form-group").html(html);
    }
  })
     $("#source").submit(function(event){
       event.preventDefault();
      var id = $("#sourceOption").val();
      var url = "https://newsapi.org/v1/articles";
      var data = {apikey: "f7cdf7201b8e4248b1ad030f06d87899", source: id}
      $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response){
          var articles = response.articles;
          var html = "<ul class='listgroup'>";
          // console.log(response);
          $.each(articles, function(index, article){
            html += "<li class='list-Item'>" + article.title + "</li>"
          })
          html += "</ul>",
          $("#articles").html(html);
        }
        
     })
  })
})
