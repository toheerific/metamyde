/**
 * GlowSkin Template - JavaScript Interactions
 * Includes mobile menu toggle, FAQ accordion, and smooth scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // FAQ Accordion
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle active class on the button
            this.classList.toggle('active');
            
            // Get the associated content
            const content = this.nextElementSibling;
            
            // Toggle the content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.add('hidden');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.remove('hidden');
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a class to the navbar when scrolling
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.add('bg-white/90');
                navbar.classList.add('backdrop-blur-sm');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.remove('bg-white/90');
                navbar.classList.remove('backdrop-blur-sm');
            }
        });
    }
});