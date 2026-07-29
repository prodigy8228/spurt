// ==========================================================================
// Weathercraft Trust Structural Interaction Script
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section, header");

    // 1. Dynamic Navbar Compression on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.75rem 0";
            navbar.style.backgroundColor = "rgba(10, 11, 14, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.padding = "1.25rem 0";
            navbar.style.backgroundColor = "rgba(13, 15, 18, 0.85)";
            navbar.style.boxShadow = "none";
        }

        // 2. High-Precision Scrollspy Tracking Logic
        let currentSectionId = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Adjust threshold offset value to capture standard header dimensions
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Toggle active menu indicators dynamically
        navLinks.forEach((link) => {
            link.classList.remove("active");
            const hrefAttribute = link.getAttribute("href").substring(1);
            
            if (hrefAttribute === currentSectionId || (currentSectionId === null && hrefAttribute === "")) {
                link.classList.add("active");
            }
        });
    });

    // 3. Smooth Auto-Collapse for Mobile Navigation Drawer
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });
});
