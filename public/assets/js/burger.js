$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name = $("#newburger").val().trim(), devoured:0
        }

        $.post("/api/burgers", function(){
            console.log("New Burger Added");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devour = {
            devoured: 1
        };

        $.put("/api/burgers" + id, function() {
            console.log("Burger Devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id= $(this).data("id")

        $.delete("/api/burgers" + id, function(){
            console.log("Burger Disposed Of")
            location.reload();
        });
    });
})