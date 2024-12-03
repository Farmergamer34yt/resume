const projects = [
    {
        name: "Placeholder",
        description: "Placeholder",
        date: "Placeholder"
    },
    {
        name: "Placeholder",
        description: "Placeholder",
        date: "Placeholder"
    },
    {
        name: "Placeholder",
        description: "Placeholder",
        date: "Placeholder"
    }
    // Add more projects as needed
];

document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector(".project-list");

    // Sort projects by date (newest first)
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate HTML for each project
    projects.forEach((project) => {
        const listItem = document.createElement("li");

        const button = document.createElement("button");
        button.classList.add("accordion");
        button.textContent = `${project.name} (${project.date})`;

        const panel = document.createElement("div");
        panel.classList.add("panel");

        const description = document.createElement("p");
        description.textContent = project.description;

        panel.appendChild(description);
        listItem.appendChild(button);
        listItem.appendChild(panel);
        projectList.appendChild(listItem);

        // Accordion toggle behavior
        button.addEventListener("click", () => {
            const currentlyOpen = document.querySelector(".panel[style='display: block;']");
            if (currentlyOpen && currentlyOpen !== panel) {
                currentlyOpen.style.display = "none";
                currentlyOpen.previousElementSibling.classList.remove("expanded");
            }

            panel.style.display = panel.style.display === "block" ? "none" : "block";
            button.classList.toggle("expanded");
        });
    });
});
