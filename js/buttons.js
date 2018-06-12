var navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", function() {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (navbar.className === "navbar") {
	navbar.className += " active";
    } else {
	navbar.className = "navbar";
    }
});
