document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tab = document.querySelector("#tab");
    const closeTab = document.querySelector(".close-tab");
    tabButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            tab.style.display = "block";
        });
    });
    closeTab.addEventListener("click", function () {
        tab.style.display = "none";
    });
});
