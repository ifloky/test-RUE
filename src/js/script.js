document.getElementById("search-btn").addEventListener("click", function () {
    let searchInput = document.getElementById("search-input");
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) {
        searchInput.focus();
    }
});

