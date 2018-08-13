//modified from CatsApp
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
 
    $('.modal').modal();

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger-create").val().trim(),
        };
        console.log("clicked Submit")
        // Send the POST request.

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
                console.log("ordered new burger");
            }
        );
    });

    $(".burger-devour").on("click", function (event) {
        console.log("clicked Consume", $(this).data("id"));
        let id = $(this).data("id");
        let devouredBurger = {
            id: id,
            devoured: true,
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function (query) {
                console.log("ate burger ", id);
                // Reload the page to get the updated list

               
                addGifs(query);
                $('#giphy-modal').modal('open');
               
            }
        );
    });

    function addGifs(query) {
        random_number = Math.floor(Math.random()*(24 - 0) + 0)
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                $("#burger-giphy").append("<img class='gif' ' src='" + response.data[random_number].images.downsized_medium.url+"'>")
            });
            
    };

    $(".modal-close").on("click", function(event){
        location.reload();
    })
});


