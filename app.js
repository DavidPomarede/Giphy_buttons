$("#submit").on("click", function() {
    var newButton = $("<button>");
    newButton.attr("id", "buttonType");
    console.log(userInput.val());
    // newButton.attr("data-animal", userInput.val());
    // newButton.text(userInput.val());
    $("#buttonSpace").append(newButton);
})



$("#buttonType").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=rEoeTyn8Nv7uM7X0Yim5lOnAHYFWYePT&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {  
      console.log(response);
      var results = response.data;
      console.log(results);
        for (var i = 0; i < results.length; i++) {
        var animalDiv = $('<div>');
        var p = $('<p>');
        p.text(results[i].rating);
        var animalImage = $('<img>');
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#gifs-appear-here").prepend(animalDiv);

      }
    });
  });