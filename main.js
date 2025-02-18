document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");
    const closeButtons = document.querySelectorAll(".close-tab");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetTab = document.querySelector(`#${button.dataset.tab}`);
            tabs.forEach(tab => tab.style.display = "none");
            if(targetTab) targetTab.style.display = "block";
        });
    });
    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            btn.style.transform = "rotate(90deg)";
            setTimeout(() => {
                btn.closest(".tab").style.display = "none";
                btn.style.transform = "rotate(0deg)";
            }, 300);
        });
    });
});