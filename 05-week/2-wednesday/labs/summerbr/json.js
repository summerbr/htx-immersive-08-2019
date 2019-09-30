$.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?i=tt0093779&apikey=a9e9323c",
    dataType: "JSON", 
    success: function(response) {
      console.log(response);
      showMovieDetails(response.Title, response.Plot);
    },
    error: function(error) {
      console.log("Error: " + error);
    }
  });
  
  function showMovieDetails(title, plot) {
    var heading = $("<h1/>").text(title);
    $("body").append(heading);
    var released = $("<h2/>").text(plot);
    $("body").append(plot);
  }
