// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    

    // Feature Button - Background Color Change

    const featureButton = document.querySelector('.feature-button');
    const featureSection = document.querySelector('.feature-section');
    
    const colors = ['bg-blue', 'bg-green', 'bg-purple', 'bg-pink', 'bg-orange'];
    let currentIndex = 0;

    featureButton.addEventListener('click', function() {
        // Remove all color classes
        colors.forEach(color => featureSection.classList.remove(color));
        
        // Add next color class
        featureSection.classList.add(colors[currentIndex]);
        
        // Cycle to next color
        currentIndex = (currentIndex + 1) % colors.length;
    });


    // Navbar - Click to Select/Highlight

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

});