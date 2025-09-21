// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Interactive functions
function handleLogin() {
    alert('🔐 Login portal would open here. Features:\n• Secure farmer authentication\n• Multi-farm management\n• Role-based access control');
}

function startDemo() {
    alert('🚀 Free trial signup would begin here. Includes:\n• 30-day full access\n• Sample data setup\n• Onboarding support\n• No credit card required');
}

function watchDemo() {
    alert('🎥 Demo video would play here, showcasing:\n• Dashboard walkthrough\n• Mobile app features\n• Compliance tracking\n• Real farmer testimonials');
}

function recordTreatment() {
    alert('📝 Treatment recording form would open:\n• Animal/crop selection\n• Product details\n• Dosage tracking\n• Automatic withdrawal calculation');
}

function checkWithdrawal() {
    alert('⏰ Withdrawal checker would display:\n• Current withdrawal status\n• Safe harvest/slaughter dates\n• Compliance verification\n• Export clearance status');
}

function scanProduct() {
    alert('📷 Barcode scanner would activate:\n• Product identification\n• MRL information\n• Usage instructions\n• Batch tracking');
}

function generateReport() {
    alert('📈 Report generator would open:\n• Compliance summaries\n• Usage analytics\n• Audit-ready documentation\n• Export options (PDF, Excel)');
}

// Language toggle functionality
let isHindi = false;

function toggleLanguage() {
    const langBtn = document.getElementById('langBtn');
    
    if (!isHindi) {
        // Switch to English
        langBtn.textContent = '🌐 English';
        isHindi = true;
        
        // You can add more language switching logic here
        // For example, changing text content of various elements
        console.log('Switched to Hindi interface');
    } else {
        // Switch to Hindi
        langBtn.textContent = '🌐 हिंदी';
        isHindi = false;
        
        console.log('Switched to English interface');
    }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

// Observe feature cards for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});

// Add floating animation to hero elements
function addFloatingAnimation() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 5}px)`;
    }
}

// Start floating animation
setInterval(addFloatingAnimation, 50);

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add click effect to action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add loading animation for better UX
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some console welcome message for developers
console.log(`
🌱 Welcome to FarmSafe Portal Developer Console!
====================================================
This agricultural management system helps farmers:
• Track Maximum Residue Levels (MRL)
• Manage Antimicrobial Use (AMU)  
• Ensure regulatory compliance
• Optimize farm operations

Built with modern web technologies for reliability and performance.
`);

// Simple form validation helper (for future forms)
function validateForm(formData) {
    const errors = [];
    
    // Example validation logic
    if (!formData.email || !formData.email.includes('@')) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.farmName || formData.farmName.length < 2) {
        errors.push('Farm name must be at least 2 characters long');
    }
    
    return errors;
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleLogin,
        startDemo,
        watchDemo,
        recordTreatment,
        checkWithdrawal,
        scanProduct,
        generateReport,
        toggleLanguage,
        validateForm
    };
}