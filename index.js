

//function needs to toggle the active class on the collapsible header, so the color changes when it is clicked. It also needs to change the display for the collapsible body div (if on, turn off, vice versa)

function collapseProjects() {
    console.log(`collapseProjects ran.`);
    let projects = document.getElementsByClassName("collapsible-header");
    for(let i = 0; i < projects.length; i++) {
        projects[i].addEventListener("click", function() {
            console.log(`project clicked.`);
            this.classList.toggle("active");
            let projectBody = this.nextElementSibling;
            if (projectBody.style.display === "block") {
                projectBody.style.display = "none";
            } else {
                projectBody.style.display = "block";
            };
        });
    };
};

$(collapseProjects);