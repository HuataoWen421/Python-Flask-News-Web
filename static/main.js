function topNews() {
    // Change class
    document.getElementById("searchNews").classList.remove("active");
    document.getElementById("topNews").classList.add("active");

    // Get top news
    document.getElementById("demo").innerHTML = "top news";
}

function searchNews() {
    // Change class
    document.getElementById("topNews").classList.remove("active");
    document.getElementById("searchNews").classList.add("active");

    // Get user search
    document.getElementById("demo").innerHTML = "search news";
}

