let burgerclick=0;
function showmenu(){
    burgerclick++;
    var navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(function(navItem) {
        if (navItem && navItem.classList) {
             navItem.classList.toggle('active');
         }
    });
    if(burgerclick%2==1){
        document.getElementById('bg4navul').setAttribute("style","display:block");
        document.getElementById('burgermenu').style.border="2px solid #7441e2";
    }
    else{
        document.getElementById('bg4navul').setAttribute("style","display:none");
        document.getElementById('burgermenu').style.border="";
    }
}

// Smooth scrolling function for navigation links with offset
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        let elementPosition;
        let offsetPosition;
        
        // Special handling for contact section since it's nested differently
        if (targetId === '#Contectpage') {
            // For contact section, find the parent section element
            const parentSection = targetElement.closest('section');
            elementPosition = parentSection ? parentSection.offsetTop : targetElement.offsetTop;
            offsetPosition = elementPosition - 50;
        } else {
            // For other sections (About, Project)
            elementPosition = targetElement.offsetTop;
            offsetPosition = elementPosition - 50;
        }
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to navigation links when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that point to sections
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href');
            
            // Only apply smooth scroll to actual section links, not home link
            if (targetId !== '#') {
                smoothScrollTo(targetId);
            } else {
                // For home link, scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});

