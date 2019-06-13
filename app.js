
$(document).ready(function () {
//     $(".img-animal").click(function() {
//         console.log("test");
//         var state = $(this).attr("data-state");
//         if (state) {
//             $(this).attr("src") = $(this).attr("data-animate");
//             state = false;
//         } else {
//             $(this).attr('src') = $(this).attr("data-still");
//             state = true;
//         }
//     });



var gifList = ["cats", "dogs", "zebras", "lions"];

function displayGifs() {
    var thisGif = $(this).attr("data-name");
    console.log(thisGif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + thisGif + "&api_key=rEoeTyn8Nv7uM7X0Yim5lOnAHYFWYePT&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;
        $(".animalBox").remove();
        for (var i = 0; i < results.length; i++) {
            // // var animalDiv = $('<span>');
            // var p = $('<div>');
            // var p2 = $('<p>');
            // p.text("Rating: " + results[i].rating);
            // var animalImage = $('<img>');
            // animalImage.attr("src", results[i].images.fixed_height.url);
            // // animalDiv.append(p);
            // p.append(p2);
            // animalImage.prepend(p);
            // $("#gifs-appear-here").append(animalImage);

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
            // .attr("onclick");

            $("#gifs-appear-here").append(animalBox.append(rating).append("<br>").append(animalImage));
            $(".img-animal").click(function() {
                console.log("test");
                var state = $(this).attr("data-state");
                // var animalBox = $(this);
                // if (state) {
                //     animalBox.attr("src") = animalBox.attr("src", "data-animate");
                //     state = false;
                // } else {
                //     animalBox.attr('src') = animalBox.attr("src", "data-still");
                //     state = true;
                // }
                if (state !== "still") {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");

                } else {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }
            }); 

        };
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

// var animate = function(event) {
//     console.log("test");
//     var state = $(this).attr("data-state");
//     if (state) {
//         $(this).attr("src") = $(this).attr("data-animate");
//         state = false;
//     } else {
//         $(this).attr('src') = $(this).attr("data-still");
//         state = true;
//     }
// };

$(document).on("click", ".gif-btn", displayGifs);
// $(document).on("click", ".img-animal", animate);
renderButtons();


});
