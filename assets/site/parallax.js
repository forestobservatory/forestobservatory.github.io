$(function() {
    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio > .7)
            document.getElementById("site-header").classList.remove("minimized");
        else
            document.getElementById("site-header").classList.add("minimized");
    }, {
        threshold: [.6, .7, .8]
    });

    observer.observe(document.querySelector("body > div > header"));
});
