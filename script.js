document.querySelectorAll(".accordion").forEach((button) => {
    button.addEventListener("click", () => {
        const panel = button.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
            button.classList.remove("expanded");
        } else {
            document.querySelectorAll(".panel").forEach((p) => (p.style.display = "none"));
            document.querySelectorAll(".accordion").forEach((b) => b.classList.remove("expanded"));
            panel.style.display = "block";
            button.classList.add("expanded");
        }
    });
});
