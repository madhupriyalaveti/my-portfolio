
// NAVIGATION MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close menu after clicking a navigation link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// SKILL CARDS - MOBILE TAP INTERACTION
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("click", () => {

        // Only use tap-to-flip on touch devices
        if (window.matchMedia("(hover: none)").matches) {

            const isAlreadyFlipped = card.classList.contains("flipped");

            // Close all cards first
            skillCards.forEach(skill => {
                skill.classList.remove("flipped");
            });

            // Open the selected card
            if (!isAlreadyFlipped) {
                card.classList.add("flipped");
            }
        }

    });

});
