



// $(".buttonType").on("click", function() {
//     console.log('test');
//     var animal = $(this).attr("data-animal");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       animal + "&api_key=rEoeTyn8Nv7uM7X0Yim5lOnAHYFWYePT&limit=10";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {  
//       console.log(response);
//       var results = response.data;
//       console.log(results);
//         for (var i = 0; i < results.length; i++) {
//         var animalDiv = $('<div>');
//         var p = $('<p>');
//         p.text(results[i].rating);
//         var animalImage = $('<img>');
//         animalImage.attr("src", results[i].images.fixed_height.url);
//         animalDiv.append(p);
//         animalDiv.append(animalImage);
//         $("#gifs-appear-here").prepend(animalDiv);

//       }
//     });
//   });



//   $("#submit").on("click", function() {
//     var newButton = $("<button>");
//     newButton.attr("class", "buttonType");
//     newButton.attr("data-animal", $(userInput).val());
//     newButton.text($(userInput).val());
//     $("#buttonSpace").append(newButton);
// });



var gifList = ["cats", "dogs", "zebras", "lions"];

function displayGifs() {
    var thisGif = $(this).attr("data-name");
    console.log(thisGif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + thisGif + "&api_key=rEoeTyn8Nv7uM7X0Yim5lOnAHYFWYePT&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var animalDiv = $('<div>');
            var p = $('<p>');
            p.text(results[i].rating);
            var animalImage = $('<img>');
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#gifs-appear-here").prepend(animalDiv);
        };
    });
}

function renderButtons() {
$("#buttonSpace").empty();
for (var i = 0; i < gifList.length; i++) {
    var a = $("<button>");
    a.addClass("gif-btn");
    a.attr("data-name", gifList[i]);
    a.text(gifList[i]);
    $("#buttonSpace").append(a);
}
}

$("#submit").on("click", function(event) {
event.preventDefault();
var thisGif = $("#userInput").val().trim();
gifList.push(thisGif);
renderButtons();
});

$(document).on("click", ".gif-btn", displayGifs);
renderButtons();