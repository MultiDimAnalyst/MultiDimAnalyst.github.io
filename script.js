
//=======SHOW/HIDE Menu===========
const ham = document.getElementById("ham");
const nav = document.getElementById("nav");

ham.addEventListener('click', function() {
    // Check if the nav is currently visible
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";  // Show the nav
    } else {
        nav.style.display = "none";  // Hide the nav
    }
});