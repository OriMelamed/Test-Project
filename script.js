// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // CTA Button animation
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function() {
        // Add click feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px) scale(1)';
        }, 150);
        
        // You can add your Figma integration logic here
        console.log('Ready to integrate with Figma designs!');
        alert('Ready to integrate your Figma design! 🎨');
    });

    // Feature cards hover effect enhancement
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Placeholder for Figma integration
    const placeholderImage = document.querySelector('.placeholder-image');
    
    placeholderImage.addEventListener('click', function() {
        // This is where you would integrate with Figma
        console.log('Clicked to import Figma design');
        alert('Click here to import your Figma design! 🖼️\n\nYou can replace this placeholder with your actual Figma components.');
    });

    // Add loading animation
    function addLoadingAnimation() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    addLoadingAnimation();

    // Console message for developers
    console.log('🎨 Ready to integrate Figma designs!');
    console.log('💡 Replace the placeholder content with your Figma components');
    console.log('🚀 This template is ready for your creative touch!');
});

// Utility function to integrate Figma designs (placeholder)
function integrateFigmaDesign(figmaUrl) {
    console.log(`Integrating design from: ${figmaUrl}`);
    // This would contain the actual Figma integration logic
    // For now, it's a placeholder function
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Design integrated successfully!');
        }, 1000);
    });
}

// Export for potential use with modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { integrateFigmaDesign };
}
