// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// WhatsApp Contact Form Handler
function sendWhatsAppMessage(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Validate required fields
if (!name || !phone || !service || !message) {
        alert('⚠️ Please fill in all required fields.');
        return;
    }
    
    // Create WhatsApp message
    let whatsappMessage = `HELLO I am %0A%0A`;
    whatsappMessage += `${encodeURIComponent(name)}%0A`;
    whatsappMessage += `i need to ask about ${encodeURIComponent(service)} Service %0A`;
    whatsappMessage += ` MY Question is about${encodeURIComponent(message)}%0A%0A`;
    whatsappMessage += ` Date: ${new Date().toLocaleString()}%0A`;
    
    // WhatsApp number (without +)
    const whatsappNumber = '96179110894';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation and reset form
    alert(`✅ Thank you ${name}! You will be redirected to WhatsApp to send your message.`);
    
    // Optional: Reset form after 2 seconds
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 2000);
}

// Contact Form Submit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('⚡ Thank you for your message! I will get back to you within 24 hours. ⚡');
        this.reset();
    });
}

// Navbar Background Change on Scroll with glow effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#0A0C1A';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 240, 255, 0.2)';
    } else {
        navbar.style.background = '#121417';
        navbar.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.1)';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .product-card, .testimonial-card, .pos-content, .web-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

console.log('⚡ GAWADZILLA - Cyber-Retrowave Edition | Where Business Meets Technology ⚡');