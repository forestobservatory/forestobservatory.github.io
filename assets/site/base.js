$(function() {
    document.getElementById("header-links").addEventListener("animationend", function(e) {
        if (e.target.id == "header-links")
            $(e.target).removeClass("animated");
    })
    $(".hamburger").click(function(e) {
        $("#header-links").addClass("animated");
        $(e.currentTarget).toggleClass("is-active");
    });
});
