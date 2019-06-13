document.body.style.backgroundImage = "url('https://www.toptal.com/designers/subtlepatterns/patterns/geometry.png')";

var gifList = ["cats", "dogs", "zebras", "lions"];

function displayGifs() {
    var thisGif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + thisGif + "&api_key=rEoeTyn8Nv7uM7X0Yim5lOnAHYFWYePT&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        $(".animalBox").remove();

        for (var i = 0; i < results.length; i++) {
            var animalBox = $("<div>")
            .addClass("animalBox");

            var rating = $("<label>")
            .text("Rating: " + response.data[i].rating);

            var animalImage = $("<img>")
            .addClass("img-animal")
            .attr("src", results[i].images.fixed_height_still.url)
            .attr("data-state", "still")
            .attr("data-still", results[i].images.fixed_height_still.url)
            .attr("data-animate", results[i].images.fixed_height.url);

            $("#gifs-appear-here").append(animalBox.append(rating).append("<br>").append(animalImage));
        };

        $(".img-animal").click(function() {
            var state = $(this).attr("data-state");
            if (state !== "still") {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            } else {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
        }); 
    });
}

function renderButtons() {
$("#buttonSpace").empty();
    for (var i = 0; i < gifList.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn btn btn-primary");
        a.attr("data-name", gifList[i]);
        a.text(gifList[i]);
        $("#buttonSpace").append(a);
    }
};

$("#submit").on("click", function(event) {
    event.preventDefault();
    var thisGif = $("#userInput").val().trim();
    gifList.push(thisGif);
    renderButtons();
});

$(document).on("click", ".gif-btn", displayGifs);
renderButtons();